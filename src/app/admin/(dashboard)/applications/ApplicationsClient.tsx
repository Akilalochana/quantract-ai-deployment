"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  resumeUrl: string | null;
  coverLetter: string | null;
  status: string;
  createdAt: string;
  jobPost: {
    id: string;
    title: string;
    category: string;
  };
}

const statusOptions = ["pending", "reviewed", "accepted", "rejected"];

export default function ApplicationsClient({ initialApplications }: { initialApplications: Application[] }) {
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admins/protected/applications/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (data.success) {
        setApplications(
          applications.map((app) =>
            app.id === id ? { ...app, status: newStatus } : app
          )
        );
        if (selectedApp?.id === id) {
          setSelectedApp({ ...selectedApp, status: newStatus });
        }
        router.refresh();
      }
    } catch {
      alert("Failed to update status");
    }
  };

  const filteredApplications = filter === "all"
    ? applications
    : applications.filter((app) => app.status === filter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="data-table-container">
        <div className="data-table-header">
          <h2>All Applications ({filteredApplications.length})</h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["all", ...statusOptions].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`btn btn-sm ${filter === status ? "btn-primary" : "btn-secondary"}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredApplications.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Email</th>
                <th>Position</th>
                <th>Applied On</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app.id}>
                  <td><strong>{app.name}</strong></td>
                  <td>{app.email}</td>
                  <td>{app.jobPost.title}</td>
                  <td>{formatDate(app.createdAt)}</td>
                  <td>
                    <select
                      value={app.status}
                      onChange={(e) => updateStatus(app.id, e.target.value)}
                      className={`badge ${app.status}`}
                      style={{ 
                        cursor: "pointer", 
                        border: "none",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "9999px",
                        fontSize: "0.8rem"
                      }}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="btn btn-secondary btn-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <h3>No Applications Yet</h3>
            <p>Applications will appear here when candidates apply for jobs</p>
          </div>
        )}
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Application Details</h2>
              <button onClick={() => setSelectedApp(null)} className="modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#f1c40f", marginBottom: "0.5rem" }}>{selectedApp.name}</h3>
                <p style={{ color: "#9ca3af" }}>Applied for: {selectedApp.jobPost.title}</p>
              </div>

              <div style={{ display: "grid", gap: "1rem" }}>
                <div>
                  <label style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Email</label>
                  <p style={{ color: "#e5e7eb" }}>{selectedApp.email}</p>
                </div>

                {selectedApp.phone && (
                  <div>
                    <label style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Phone</label>
                    <p style={{ color: "#e5e7eb" }}>{selectedApp.phone}</p>
                  </div>
                )}

                {selectedApp.resumeUrl && (
                  <div>
                    <label style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Resume</label>
                    <p>
                      <a 
                        href={selectedApp.resumeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#3b82f6" }}
                      >
                        View Resume →
                      </a>
                    </p>
                  </div>
                )}

                {selectedApp.coverLetter && (
                  <div>
                    <label style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Cover Letter</label>
                    <p style={{ color: "#e5e7eb", whiteSpace: "pre-wrap" }}>{selectedApp.coverLetter}</p>
                  </div>
                )}

                <div>
                  <label style={{ color: "#9ca3af", fontSize: "0.85rem" }}>Applied On</label>
                  <p style={{ color: "#e5e7eb" }}>{formatDate(selectedApp.createdAt)}</p>
                </div>

                <div>
                  <label style={{ color: "#9ca3af", fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>Status</label>
                  <select
                    value={selectedApp.status}
                    onChange={(e) => updateStatus(selectedApp.id, e.target.value)}
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "0.5rem",
                      padding: "0.5rem 1rem",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status} style={{ background: "#1a1a2e" }}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={`mailto:${selectedApp.email}`}
                className="btn btn-primary"
              >
                Send Email
              </a>
              <button onClick={() => setSelectedApp(null)} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
