from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Literal, Optional
from datetime import date
from database import init_db, get_connection
from fastapi.middleware.cors import CORSMiddleware

class Application(BaseModel):
    company: str
    role: str
    status: Literal["Applied", "OA", "Interview", "Rejected", "Offer"]
    date_applied: date
    notes: Optional[str] = None
    

app = FastAPI()
init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  #vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

#POST /applications (add: company, role, status, notes)
@app.post("/applications/")
async def create_application(application: Application):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO applications (company, role, status, date_applied, notes)
        VALUES (?, ?, ?, ?, ?)
        """,
        (
            application.company,
            application.role,
            application.status,
            application.date_applied.isoformat(),
            application.notes,
        )
    )

    conn.commit()
    app_id = cursor.lastrowid
    conn.close()
    return {"id": app_id}

#GET /applications (list: status, company filters)
@app.get("/applications/")
async def get_applications():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM applications"
    )
    applications = cursor.fetchall()
    conn.commit()
    conn.close()
    return [
        {
            "id": row[0],
            "company":row[1],
            "role": row[2],
            "status": row[3],
            "date_applied": row[4],
            "notes": row[5]
        }
        for row in applications
    ]

#PATCH /applications/{id} (update)
@app.patch("/applications/{app_id}")
async def update_application(app_id: int, application: Application):
    conn = get_connection()
    cursor = conn.cursor()

    # Check if the application exists
    cursor.execute("SELECT id FROM applications WHERE id = ?", (app_id,))
    if not cursor.fetchone():
        conn.close()
        raise HTTPException(status_code=404, detail="Application not found")

    # Update row
    cursor.execute(
        """
        UPDATE applications
        SET company = ?, role = ?, status = ?, date_applied = ?, notes = ?
        WHERE id = ?
        """,
        (
            application.company,
            application.role,
            application.status,
            application.date_applied.isoformat(),
            application.notes,
            app_id,
        )
    )
    conn.commit()
    conn.close()
    return {"id": app_id}

#DELETE
from fastapi import HTTPException

@app.delete("/applications/{app_id}")
async def delete_application(app_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM applications WHERE id = ?", (app_id,))
    conn.commit()

    if cursor.rowcount == 0:
        conn.close()
        raise HTTPException(status_code=404, detail="Application not found")

    conn.close()
    return {"detail": f"Application {app_id} deleted successfully"}
