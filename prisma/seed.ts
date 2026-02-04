import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Load environment variables
import "dotenv/config";

async function main() {
  const connectionString = process.env.DATABASE_URL!;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  
  const prisma = new PrismaClient({ adapter });

  console.log("🌱 Starting seed...\n");

  // Create admin user
  const adminEmail = "admin@quantract.ai";
  const adminPassword = "admin123"; // Change this in production!

  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log(`✅ Admin already exists: ${adminEmail}`);
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const admin = await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: "Quantract Admin",
      },
    });

    console.log(`✅ Admin created: ${admin.email}`);
    console.log(`   Password: ${adminPassword}`);
    console.log(`   (Please change this password in production!)\n`);
  }

  // Create sample job posts
  const admin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (admin) {
    const existingJobs = await prisma.jobPost.count();

    if (existingJobs === 0) {
      const sampleJobs = [
        {
          title: "Senior Full Stack Developer",
          category: "Engineering",
          location: "Remote / Colombo",
          type: "Full-time",
          experience: "3+ years",
          description:
            "Join our engineering team to build scalable web applications using modern technologies like React, Next.js, and Node.js. You'll work on exciting AI-powered products that make a real impact.",
          requirements: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years experience with React and Node.js",
            "Experience with TypeScript and Next.js",
            "Familiarity with PostgreSQL or similar databases",
            "Strong problem-solving and communication skills",
          ],
          isActive: true,
          adminId: admin.id,
        },
        {
          title: "AI/ML Engineer",
          category: "Engineering",
          location: "Remote / Colombo",
          type: "Full-time",
          experience: "2+ years",
          description:
            "Work on cutting-edge AI solutions, develop machine learning models, and integrate them into our products. You'll be at the forefront of AI innovation.",
          requirements: [
            "Master's degree in ML, AI, or related field",
            "2+ years experience with Python and ML frameworks",
            "Experience with TensorFlow or PyTorch",
            "Understanding of NLP and computer vision",
            "Strong mathematical and analytical skills",
          ],
          isActive: true,
          adminId: admin.id,
        },
        {
          title: "UI/UX Designer",
          category: "Design",
          location: "Remote / Colombo",
          type: "Full-time",
          experience: "2+ years",
          description:
            "Create beautiful, intuitive user interfaces and experiences for our web and mobile applications. You'll shape how users interact with our AI products.",
          requirements: [
            "2+ years experience in UI/UX design",
            "Proficiency in Figma or similar design tools",
            "Strong portfolio demonstrating web/mobile design",
            "Understanding of user-centered design principles",
            "Experience with design systems",
          ],
          isActive: true,
          adminId: admin.id,
        },
      ];

      for (const job of sampleJobs) {
        await prisma.jobPost.create({ data: job });
        console.log(`✅ Created job: ${job.title}`);
      }

      console.log(`\n✅ Created ${sampleJobs.length} sample job posts`);
    } else {
      console.log(`✅ ${existingJobs} job posts already exist`);
    }
  }

  console.log("\n🎉 Seed completed successfully!");

  await prisma.$disconnect();
  await pool.end();
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
