import Link from "next/link";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company-info">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Image
                  src="/images/logo.png"
                  alt="QUANTRACT AI Logo"
                  width={50}
                  height={50}
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
              <div className="footer-logo-text">
                <h3>quantract.ai</h3>
                <p>Empowering AI Innovation</p>
              </div>
            </div>
            <p className="footer-description">
              At the forefront of AI innovation, delivering intelligent 
              solutions that redefine industries and accelerate business
              transformation worldwide.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/quantract-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:quantractai@gmail.com"
                className="footer-social-link"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/quantractai"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-services">
              <li>AI Consulting</li>
              <li>Machine Learning</li>
              <li>Process Automation</li>
              <li>Data Analytics</li>
              <li>Custom AI Solutions</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 quantract.ai. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
