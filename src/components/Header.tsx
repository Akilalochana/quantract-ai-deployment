"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <div className="header-logo-icon">
              <Image
                src="/images/logo.png"
                alt="QUANTRACT AI Logo"
                width={50}
                height={50}
                style={{ borderRadius: '0.5rem' }}
              />
            </div>
            <div className="header-logo-text">
              <h1>quantract</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="header-desktop-nav">
            <Link href="/" className={`header-nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            <Link href="/about" className={`header-nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link href="/services" className={`header-nav-link ${isActive("/services") ? "active" : ""}`}>
              Services
            </Link>
            <Link href="/career" className={`header-nav-link ${isActive("/career") ? "active" : ""}`}>
              Careers
            </Link>
            <Link href="/contact" className={`header-nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`header-mobile-button ${isMenuOpen ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header-mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="header-mobile-nav">
            <Link
              href="/"
              className={`header-nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`header-nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`header-nav-link ${isActive("/services") ? "active" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/career"
              className={`header-nav-link ${isActive("/career") ? "active" : ""}`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`header-nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
