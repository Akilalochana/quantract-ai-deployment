"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface JobPost {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  isActive: boolean;
  createdAt: string;
  _count?: {
    applications: number;
  };
}

interface JobFormData {
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string;
  isActive: boolean;
}

const initialFormData: JobFormData = {
  title: "",
  category: "Engineering",
  location: "",
  type: "Full-time",
  experience: "",
  description: "",
  requirements: "",
  isActive: true,
};

const categories = ["Engineering", "Design", "Marketing", "Sales", "Operations", "Other"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Remote", "Internship"];

export default function JobsClient({ initialJobs }: { initialJobs: JobPost[] }) {
  const router = useRouter();
  const [jobs, setJobs] = useState<JobPost[]>(initialJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openCreateModal = () => {
    setFormData(initialFormData);
    setIsEditing(false);
    setEditingId(null);
    setError("");
    setIsModalOpen(true);
  };

  const openEditModal = (job: JobPost) => {
    setFormData({
      title: job.title,
      category: job.category,
      location: job.location,
      type: job.type,
      experience: job.experience,
      description: job.description,
      requirements: job.requirements.join("\n"),
      isActive: job.isActive,
    });
    setIsEditing(true);
    setEditingId(job.id);
    setError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(initialFormData);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      ...formData,
      requirements: formData.requirements.split("\n").filter((r) => r.trim()),
    };

    try {
      const url = isEditing
        ? `/api/admins/protected/jobs/${editingId}`
        : "/api/admins/protected/jobs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        closeModal();
        router.refresh();
        // Refresh jobs list
        const jobsRes = await fetch("/api/admins/protected/jobs");
        const jobsData = await jobsRes.json();
        if (jobsData.success) {
          setJobs(jobsData.data);
        }
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch {
      setError("Failed to save job post");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job post?")) return;

    try {
      const res = await fetch(`/api/admins/protected/jobs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setJobs(jobs.filter((job) => job.id !== id));
        router.refresh();
      } else {
        alert(data.message || "Failed to delete");
      }
    } catch {
      alert("Failed to delete job post");
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admins/protected/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      const data = await res.json();

      if (data.success) {
        setJobs(
          jobs.map((job) =>
            job.id === id ? { ...job, isActive: !currentStatus } : job
          )
        );
      }
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <>
      <div className="data-table-container">
        <div className="data-table-header">
          <h2>All Job Posts</h2>
          <button onClick={openCreateModal} className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            New Job Post
          </button>
        </div>

        {jobs.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Type</th>
                <th>Applications</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td><strong>{job.title}</strong></td>
                  <td>{job.category}</td>
                  <td>{job.location}</td>
                  <td>{job.type}</td>
                  <td>{job._count?.applications || 0}</td>
                  <td>
                    <button
                      onClick={() => toggleStatus(job.id, job.isActive)}
                      className={`badge ${job.isActive ? "active" : "inactive"}`}
                      style={{ cursor: "pointer", border: "none" }}
                    >
                      {job.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => openEditModal(job)}
                        className="action-btn edit"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="action-btn delete"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <h3>No Job Posts Yet</h3>
            <p>Create your first job post to start receiving applications</p>
            <button onClick={openCreateModal} className="btn btn-primary">
              Create Job Post
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{isEditing ? "Edit Job Post" : "Create New Job Post"}</h2>
              <button onClick={closeModal} className="modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div style={{ 
                    background: "rgba(239, 68, 68, 0.15)", 
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#fca5a5",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem"
                  }}>
                    {error}
                  </div>
                )}

                <div className="form-group">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Senior Full Stack Developer"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Job Type *</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      required
                    >
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Location *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Remote / Colombo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Experience *</label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 2+ years"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the job role, responsibilities, and what you're looking for..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Requirements (one per line) *</label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Bachelor's degree in Computer Science&#10;3+ years experience with React&#10;Strong problem-solving skills"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      style={{ width: "auto" }}
                    />
                    Publish immediately (show on careers page)
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={closeModal} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Saving..." : isEditing ? "Update Job" : "Create Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
