from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_application():
    response = client.post("/applications/", json={
        "company": "Google",
        "role": "SWE",
        "status": "Applied",
        "date_applied": "2026-02-04",
        "notes": "Referral"
    })
    assert response.status_code == 200
    assert "id" in response.json()

def test_get_applications():
    response = client.get("/applications/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
