import { db } from "@/lib/db";
import AdminSidebar from "../components/Sidebar";
import ApplicationsClient from "./ApplicationsClient";

async function getApplications() {
  return db.jobApplication.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      jobPost: {
        select: { id: true, title: true, category: true },
      },
    },
  });
}

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <>
      <AdminSidebar />
      <main className="admin-main">
        <header className="admin-header">
          <h1>Job Applications</h1>
        </header>

        <div className="admin-content">
          <ApplicationsClient initialApplications={JSON.parse(JSON.stringify(applications))} />
        </div>
      </main>
    </>
  );
}
