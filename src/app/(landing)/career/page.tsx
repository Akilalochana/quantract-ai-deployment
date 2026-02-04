import "./apply/career.css";
import { db } from "@/lib/db";
import CareerClient from "./CareerClient";

async function getActiveJobs() {
  const jobs = await db.jobPost.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      category: true,
      location: true,
      type: true,
      experience: true,
      description: true,
      requirements: true,
    },
  });

  // Group jobs by category
  const grouped = jobs.reduce((acc, job) => {
    const category = job.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(job);
    return acc;
  }, {} as Record<string, typeof jobs>);

  return grouped;
}

export default async function CareerPage() {
  const groupedJobs = await getActiveJobs();
  const hasJobs = Object.keys(groupedJobs).length > 0;

  return (
    <main>
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-container">
          <div className="career-hero-content">
            <h1 className="career-hero-title">
              Join Our <span className="career-hero-highlight">Team</span>
            </h1>
            <p className="career-hero-description">
              Be part of a passionate team building innovative AI solutions.
              We&apos;re looking for talented individuals who want to make a
              difference.
            </p>
          </div>
        </div>
        <div className="career-hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,142.53,111.12,214.12,96.15,296.29,78.82,270.54,66.58,321.39,56.44Z"
              className="wave-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings">
        <div className="job-listings-container">
          {hasJobs ? (
            <CareerClient groupedJobs={JSON.parse(JSON.stringify(groupedJobs))} />
          ) : (
            <div className="no-jobs-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <h2>No Open Positions Right Now</h2>
              <p>
                We don&apos;t have any open positions at the moment, but we&apos;re always
                looking for talented people. Check back soon or follow us on social
                media for updates!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
