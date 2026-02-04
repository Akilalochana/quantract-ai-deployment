import { db } from "@/lib/db";
import AdminSidebar from "../components/Sidebar";

async function getStats() {
  const [totalJobs, activeJobs, totalApplications, pendingApplications] = await Promise.all([
    db.jobPost.count(),
    db.jobPost.count({ where: { isActive: true } }),
    db.jobApplication.count(),
    db.jobApplication.count({ where: { status: "pending" } }),
  ]);

  return { totalJobs, activeJobs, totalApplications, pendingApplications };
}

async function getRecentJobs() {
  return db.jobPost.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { applications: true },
      },
    },
  });
}

async function getRecentApplications() {
  return db.jobApplication.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      jobPost: {
        select: { title: true },
      },
    },
  });
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentJobs = await getRecentJobs();
  const recentApplications = await getRecentApplications();

  return (
    <>
      <AdminSidebar />
      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard</h1>
        </header>

        <div className="admin-content">
          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-icon yellow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <div className="stat-card-value">{stats.totalJobs}</div>
              <div className="stat-card-label">Total Job Posts</div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-icon green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <div className="stat-card-value">{stats.activeJobs}</div>
              <div className="stat-card-label">Active Jobs</div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-icon blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
              </div>
              <div className="stat-card-value">{stats.totalApplications}</div>
              <div className="stat-card-label">Total Applications</div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-icon purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
              <div className="stat-card-value">{stats.pendingApplications}</div>
              <div className="stat-card-label">Pending Review</div>
            </div>
          </div>

          {/* Recent Job Posts */}
          <div className="data-table-container" style={{ marginBottom: "2rem" }}>
            <div className="data-table-header">
              <h2>Recent Job Posts</h2>
              <a href="/admin/jobs" className="btn btn-secondary btn-sm">View All</a>
            </div>
            {recentJobs.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Applications</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map((job) => (
                    <tr key={job.id}>
                      <td>{job.title}</td>
                      <td>{job.category}</td>
                      <td>{job.type}</td>
                      <td>{job._count.applications}</td>
                      <td>
                        <span className={`badge ${job.isActive ? "active" : "inactive"}`}>
                          {job.isActive ? "Active" : "Inactive"}
                        </span>
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
                <p>Create your first job post to get started</p>
                <a href="/admin/jobs" className="btn btn-primary">Create Job Post</a>
              </div>
            )}
          </div>

          {/* Recent Applications */}
          <div className="data-table-container">
            <div className="data-table-header">
              <h2>Recent Applications</h2>
              <a href="/admin/applications" className="btn btn-secondary btn-sm">View All</a>
            </div>
            {recentApplications.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app) => (
                    <tr key={app.id}>
                      <td>{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.jobPost.title}</td>
                      <td>
                        <span className={`badge ${app.status}`}>{app.status}</span>
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
                <p>Applications will appear here when candidates apply</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
