import React, { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm.jsx";

const API_BASE = "http://127.0.0.1:8000";

function App() {
  const [applications, setApplications] = useState([]);
  const [editingApp, setEditingApp] = useState(null);

  const fetchApplications = () => {
    fetch(`${API_BASE}/applications/`)
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_BASE}/applications/${id}`, { method: "DELETE" })
      .then(() => fetchApplications())
      .catch((err) => console.error(err));
  };

  const handleEdit = (app) => {
    setEditingApp(app);
  };

  const handleFormSubmit = () => {
    setEditingApp(null);
    fetchApplications();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Job Applications Tracker</h1>

      <ApplicationForm app={editingApp} onSubmit={handleFormSubmit} />

      <h2>Applications</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>{app.status}</td>
              <td>{app.date_applied}</td>
              <td>{app.notes}</td>
              <td>
                <button onClick={() => handleEdit(app)}>Edit</button>{" "}
                <button onClick={() => handleDelete(app.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
