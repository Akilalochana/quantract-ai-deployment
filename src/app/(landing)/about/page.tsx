import Link from "next/link";
import "./about.css";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="about-hero">
        {/* Background decorative elements */}
        <div className="about-hero-bg-element about-hero-bg-1"></div>
        <div className="about-hero-bg-element about-hero-bg-2"></div>
        <div className="about-hero-bg-element about-hero-bg-3"></div>
        
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              About <span className="about-hero-highlight">Quantract AI</span>
            </h1>
            <p className="about-hero-description">
              We are a cutting-edge AI company founded on the belief that
              artificial intelligence should empower businesses to achieve
              extraordinary results while maintaining human-centered values.
            </p>
          </div>
        </div>
        <div className="about-hero-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="wave-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mission-section">
              <div className="mission-badge">Our Mission</div>
              <h2 className="mission-vision-title">
                Democratizing AI for Every Business
              </h2>
              <p className="mission-vision-description">
                At Quantract AI, our mission is to make advanced artificial
                intelligence accessible and beneficial for businesses of all
                sizes. We believe that AI should not be a privilege of tech
                giants but a powerful tool available to every organization ready
                to innovate and grow.
              </p>
              <p className="mission-vision-text">
                We are committed to developing ethical, transparent, and
                effective AI solutions that enhance human capabilities rather
                than replace them, ensuring our technology serves as a bridge to
                a more intelligent and connected future.
              </p>
            </div>

            {/* Vision */}
            <div className="vision-section">
              <div className="vision-badge">Our Vision</div>
              <h2 className="mission-vision-title">
                A World Empowered by Intelligent Technology
              </h2>
              <p className="mission-vision-description">
                We envision a future where AI seamlessly integrates into every
                aspect of business operations, driving unprecedented levels of
                efficiency, innovation, and growth. Our goal is to be the
                leading force in this transformation.
              </p>
              <p className="mission-vision-text">
                By 2030, we aim to have transformed thousands of businesses
                worldwide, helping them harness the power of AI to solve complex
                challenges, make data-driven decisions, and create value that
                benefits both their organizations and society as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="founder-story">
        <div className="founder-story-container">
          <div className="founder-story-content">
            <div className="founder-story-header">
              <h2 className="founder-story-title">Our Founder&apos;s Journey</h2>
              <p className="founder-story-subtitle">
                From Computer Science Student to AI Entrepreneur
              </p>
            </div>

            <div className="founder-story-card">
              <div className="founder-story-grid">
                <div className="founder-story-main">
                  <h3 className="founder-story-heading">
                    The Beginning of Innovation
                  </h3>
                  <p className="founder-story-text">
                    As a passionate third-year computer science student, our
                    founder recognized the transformative potential of
                    artificial intelligence long before it became mainstream.
                    With a deep understanding of machine learning algorithms and
                    a vision for their practical applications, the idea for
                    Quantract AI was born from late-night coding sessions and a
                    relentless pursuit of innovation.
                  </p>
                  <p className="founder-story-text">
                    The name &ldquo;Quantract&rdquo; represents the fusion of &ldquo;Quantum&rdquo; -
                    symbolizing cutting-edge technology and infinite
                    possibilities, and &ldquo;Tract&rdquo; - meaning a clear path or course.
                    Together, it embodies our commitment to providing clear,
                    advanced technological paths for businesses entering the AI
                    era.
                  </p>
                  <div className="founder-quote">
                    <p className="founder-quote-text">
                      &ldquo;I founded Quantract AI with the belief that every
                      business, regardless of size or industry, deserves access
                      to intelligent solutions that can transform their
                      operations and accelerate their growth.&rdquo;
                    </p>
                    <div className="founder-quote-author">
                      - Founder & CEO, Quantract AI
                    </div>
                  </div>
                </div>

                <div className="founder-sidebar">
                  <div className="founder-logo-card">
                    <div className="founder-logo">
                      <span className="founder-logo-text">Q</span>
                    </div>
                    <h4 className="founder-year">Founded 2025</h4>
                    <p className="founder-year-text">Born from Innovation</p>
                  </div>

                  <div className="founder-points">
                    <div className="founder-point">
                      <div className="founder-point-dot"></div>
                      <span className="founder-point-text">
                        Computer Science Student
                      </span>
                    </div>
                    <div className="founder-point">
                      <div className="founder-point-dot"></div>
                      <span className="founder-point-text">
                        AI & ML Specialist
                      </span>
                    </div>
                    <div className="founder-point">
                      <div className="founder-point-dot"></div>
                      <span className="founder-point-text">
                        Innovation Driven
                      </span>
                    </div>
                    <div className="founder-point">
                      <div className="founder-point-dot"></div>
                      <span className="founder-point-text">Future Focused</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <h2 className="values-title">Our Core Values</h2>
            <p className="values-description">
              These fundamental principles guide everything we do and shape our
              approach to AI development and client relationships.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We strive for excellence in every solution we develop, ensuring
                the highest quality standards and outcomes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Continuous innovation drives our approach, keeping us at the
                forefront of AI technology and solutions.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                We believe in the power of collaboration, working closely with
                our clients to achieve shared success.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-description">
                Transparency and ethical practices form the foundation of all
                our business relationships and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Join Our AI Journey?</h2>
            <p className="about-cta-description">
              Whether you&apos;re looking to transform your business with AI or
              interested in becoming part of our growing team, we&apos;d love to
              connect and explore the possibilities together.
            </p>
            <div className="about-cta-buttons">
              <Link href="/contact" className="about-cta-btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="about-cta-btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
