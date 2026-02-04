"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admins/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <img src="/images/logo.svg" alt="Quantract AI" />
          </div>
          <h1>Admin Login</h1>
          <p>Sign in to access the admin dashboard</p>
        </div>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@quantract.ai"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="admin-login-button" disabled={loading}>
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  );
}
