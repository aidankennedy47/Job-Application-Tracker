import React, { useState, useEffect } from "react";

const API_BASE = "http://127.0.0.1:8000";

function ApplicationForm({ app, onSubmit }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (app) {
      setCompany(app.company);
      setRole(app.role);
      setStatus(app.status);
      setDateApplied(app.date_applied);
      setNotes(app.notes || "");
    }
  }, [app]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = app ? "PATCH" : "POST";
    const url = app
      ? `${API_BASE}/applications/${app.id}`
      : `${API_BASE}/applications/`;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company,
        role,
        status,
        date_applied: dateApplied,
        notes,
      }),
    })
      .then(() => {
        setCompany("");
        setRole("");
        setStatus("Applied");
        setDateApplied("");
        setNotes("");
        onSubmit();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{app ? "Edit Application" : "Add Application"}</h2>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>OA</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>
      <input
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
        required
      />
      <input
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">{app ? "Update" : "Add"}</button>
    </form>
  );
}

export default ApplicationForm;
