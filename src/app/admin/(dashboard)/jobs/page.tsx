import { db } from "@/lib/db";
import AdminSidebar from "../components/Sidebar";
import JobsClient from "./JobsClient";

async function getJobs() {
  return db.jobPost.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { applications: true },
      },
    },
  });
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <>
      <AdminSidebar />
      <main className="admin-main">
        <header className="admin-header">
          <h1>Job Posts</h1>
        </header>

        <div className="admin-content">
          <JobsClient initialJobs={JSON.parse(JSON.stringify(jobs))} />
        </div>
      </main>
    </>
  );
}
