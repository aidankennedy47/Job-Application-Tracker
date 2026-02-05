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

### Tradeoffs & Decisions

### SQLite vs Postgres:
SQLite was chosen for quick local development. Postgres was recommended for production deployment, so will be using Postgres to prepare for deployment. Tradeoff: SQLite is simple but doesn’t scale well, lacks advanced features.

### React + FastAPI:
Separate frontend and backend makes the project more modular and future-proof. Tradeoff: requires managing CORS and two separate dev servers, which adds setup complexity.

### Manual form management:
Using controlled React forms makes the UI reactive but adds boilerplate code. Future improvements could include a form library (e.g., Formik or React Hook Form).

### No authentication:
This version is single-user, local. Adding user authentication and permissions would be necessary for a multi-user environment for when I fully deploy the application.

---

### What I Learned

- Building a full-stack app from scratch: React frontend + FastAPI backend.
- Handling RESTful API operations (POST, GET, PATCH, DELETE) and syncing UI with backend state.
- Working with relational databases and understanding tradeoffs between SQLite and Postgres.
- Using CORS middleware to enable frontend-backend communication across different origins.
- Writing a maintainable, modular project structure suitable for scaling or deployment.

---

### Challenges

### CORS Issues:
Initially, React could not communicate with FastAPI due to cross-origin restrictions. Learned to configure FastAPI’s CORSMiddleware correctly to allow specific origins.
  
### Database Integration:
Switching from SQLite to Postgres locally and planning for cloud deployment taught me about SQL dialects, connection management, and environment configuration.

### Frontend-Backend Sync:
Ensuring the React UI updated correctly after POST, PATCH, and DELETE operations highlighted the importance of state management and proper data fetching strategies.

### React Development Environment:
Initially, the React development server took a long time to start, and Node/npm were not recognized in the terminal. Learned to correctly configure system paths, manage Node versions, and troubleshoot environment issues on Windows/WSL. This experience improved my understanding of cross-platform development environments.

---

### Future Improvements/Ideas

- Deploy backend to Render/Railway and connect to Postgres for persistent storage.
- Deploy React frontend to Vercel/Netlify with production build.
- Add authentication (JWT or OAuth) to manage multiple users.
- Integrate automated email scraping (e.g., Gmail API) to update application statuses.
- Add filtering, search, and sorting options in the frontend table.
- Include notifications for upcoming deadlines or follow-ups.

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
