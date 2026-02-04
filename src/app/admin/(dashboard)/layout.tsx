import { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin Dashboard - Quantract AI",
  description: "Quantract AI Admin Dashboard",
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
