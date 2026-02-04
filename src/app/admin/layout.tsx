import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Quantract AI",
  description: "Quantract AI Admin Panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
