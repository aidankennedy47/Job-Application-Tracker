# Job Application Tracker

A full-stack web application to manage job applications, built with **FastAPI**, **React**, and **SQLite/Postgres**.  

This project allows users to **add, view, edit, and delete job applications** through a web interface, with a RESTful backend and persistent storage.

---

## Features

- Add new job applications with company, role, status, date applied, and notes.
- View all applications in a dynamic table.
- Edit existing applications inline.
- Delete applications easily.
- Fully responsive React frontend with FastAPI backend.
- Prepared for cloud deployment with Postgres and CORS support.

---

## Tech Stack

- **Frontend:** React, JavaScript, Vite
- **Backend:** FastAPI, Python, Pydantic
- **Database:** SQLite (local) / PostgreSQL (cloud)
- **Deployment:** Render / Railway (backend), Vercel / Netlify (frontend)
- **Others:** REST API, CORS, State Management with React Hooks

---

### Screenshots
<img width="534" height="406" alt="JAT" src="https://github.com/user-attachments/assets/b1635f6d-a61c-461b-bb7d-79a6ade81d1f" />


---

### Live demo link (for when deployed)

---

### What I Learned

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/job-application-tracker.git
cd job-application-tracker
```

### 2. Backend setup
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```
### 3. Frontend setup
```
cd job-tracker-frontend
npm install
npm run dev
```
Open browser at http://localhost:5173/

### Usage
- Fill the form to add a new job application
- View all applications in the table below
- Use edit to update an application
- Use delete to remove an application
