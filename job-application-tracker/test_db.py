from database import get_connection

conn = get_connection()
cursor = conn.cursor()

cursor.execute("""
    INSERT INTO applications (company, role, status, date_applied, notes)
    VALUES (?, ?, ?, ?, ?)
""", ("Google", "Software Engineer", "applied", "2026-02-04", "Referral used"))

conn.commit()
conn.close()
