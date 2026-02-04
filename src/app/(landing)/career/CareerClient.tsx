"use client";

import { useState } from "react";

interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
}

const initialForm: ApplicationForm = {
  name: "",
  email: "",
  phone: "",
  coverLetter: "",
  resumeUrl: "",
};

export default function CareerClient({ groupedJobs }: { groupedJobs: Record<string, Job[]> }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const openApplyModal = (job: Job) => {
    setSelectedJob(job);
    setFormData(initialForm);
    setSelectedFileName("");
    setMessage(null);
    setShowApplyModal(true);
  };

  const closeModal = () => {
    setShowApplyModal(false);
    setSelectedJob(null);
    setSelectedFileName("");
    setMessage(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== "application/pdf") {
      setMessage({ type: "error", text: "Please upload a PDF file only." });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: "error", text: "File size must be less than 5MB." });
      return;
    }

    setUploadingFile(true);
    setMessage(null);

    try {
      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await fetch("/api/uploads", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ ...formData, resumeUrl: data.data.url });
        setSelectedFileName(file.name);
        setMessage({ type: "success", text: "CV uploaded successfully!" });
        setTimeout(() => setMessage(null), 2000);
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to upload CV. Please try again." });
    } finally {
      setUploadingFile(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          jobPostId: selectedJob.id,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage({ type: "success", text: data.message });
        setFormData(initialForm);
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {Object.entries(groupedJobs).map(([category, jobs]) => (
        <div key={category} className="job-category">
          <h2 className="category-title">{category}</h2>
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-meta">
                <span className="job-meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {job.location}
                </span>
                <span className="job-meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {job.type}
                </span>
                <span className="job-meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {job.experience}
                </span>
              </div>
              <p className="job-description">{job.description}</p>
              
              {job.requirements && job.requirements.length > 0 && (
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button onClick={() => openApplyModal(job)} className="apply-button">
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* Apply Modal */}
      {showApplyModal && selectedJob && (
        <div className="apply-modal-overlay" onClick={closeModal}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <div className="apply-modal-header">
              <div>
                <h2>Apply for Position</h2>
                <p>{selectedJob.title}</p>
              </div>
              <button onClick={closeModal} className="apply-modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="apply-modal-form">
              {message && (
                <div className={`apply-message ${message.type}`}>
                  {message.text}
                </div>
              )}

              <div className="apply-form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  disabled={loading}
                />
              </div>

              <div className="apply-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="apply-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+94 77 123 4567"
                  disabled={loading}
                />
              </div>

              <div className="apply-form-group">
                <label htmlFor="resume">Upload CV (PDF only, max 5MB)</label>
                <div className="file-upload-container">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    disabled={loading || uploadingFile}
                    className="file-input"
                  />
                  <label htmlFor="resume" className="file-upload-label">
                    {uploadingFile ? (
                      <>
                        <svg className="upload-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="2" x2="12" y2="6"></line>
                          <line x1="12" y1="18" x2="12" y2="22"></line>
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                          <line x1="2" y1="12" x2="6" y2="12"></line>
                          <line x1="18" y1="12" x2="22" y2="12"></line>
                          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                        Uploading...
                      </>
                    ) : selectedFileName ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        {selectedFileName}
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        Choose PDF file
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="apply-form-group">
                <label htmlFor="coverLetter">Why do you want to join us?</label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us about yourself and why you're interested in this position..."
                  rows={4}
                  disabled={loading}
                />
              </div>

              <div className="apply-modal-actions">
                <button type="button" onClick={closeModal} className="apply-btn-cancel" disabled={loading}>
                  Cancel
                </button>
                <button type="submit" className="apply-btn-submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
