import Link from "next/link";
import "./page.css";
import ImageSlider from "@/components/ImageSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Side - Content */}
            <div className="hero-content">
              <div className="hero-text">
                {/* Brand Badge */}
                <div className="hero-badge">
                  <span>✦</span> quantract.ai
                </div>
                
                <h1 className="hero-title">
                  Empowering Future
                  <br />
                  <span className="highlight">AI Transformation</span> and
                  <br />
                  <span className="highlight">Innovation</span>
                </h1>
                <p className="hero-description">
                  quantract.ai is at the forefront of AI innovation, delivering
                  intelligent solutions that redefine industries and accelerate
                  business growth through cutting-edge technology.
                </p>
                
                {/* Location Badge */}
                <div className="hero-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Based in Sri Lanka. Operate worldwide.
                </div>
              </div>

              <div className="hero-buttons">
                <Link href="/contact" className="hero-btn-primary">
                  Start Your AI Journey
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/services" className="hero-btn-secondary">
                  Explore Services
                </Link>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">10+</div>
                  <div className="hero-stat-label">AI Solutions</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">5+</div>
                  <div className="hero-stat-label">Happy Clients</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Globe Visual */}
            <div className="hero-visual">
              <div className="globe-container">
                <div className="globe-orbit"></div>
                <div className="globe">
                  <ImageSlider />
                </div>
                <div className="globe-label">One Solution, Built for the world</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="hero-float-1"></div>
        <div className="hero-float-2"></div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose Quantract AI?</h2>
            <p className="features-description">
              We combine cutting-edge AI technology with deep industry expertise
              to deliver solutions that transform businesses and drive
              innovation.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Innovative Solutions</h3>
              <p className="feature-description">
                Cutting-edge AI algorithms and machine learning models tailored
                to solve your unique business challenges and drive growth.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Fast Implementation</h3>
              <p className="feature-description">
                Rapid deployment and integration of AI solutions with minimal
                disruption to your existing operations and workflows.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">
                Round-the-clock technical support and maintenance to ensure your
                AI systems operate at peak performance always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our AI Services</h2>
            <p className="services-description">
              Comprehensive AI solutions designed to automate processes, enhance
              decision-making, and accelerate your digital transformation.
            </p>
          </div>

          <div className="services-grid">
            {/* Service Cards */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="service-title">Machine Learning</h3>
              <p className="service-description">
                Advanced ML algorithms for predictive analytics and intelligent
                automation.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="service-title">Process Automation</h3>
              <p className="service-description">
                Streamline operations with intelligent automation and workflow
                optimization.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="service-title">Data Analytics</h3>
              <p className="service-description">
                Transform raw data into actionable insights with advanced
                analytics tools.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="service-title">AI Consulting</h3>
              <p className="service-description">
                Strategic guidance and roadmap development for AI adoption and
                implementation.
              </p>
            </div>
          </div>

          <div className="services-cta">
            <Link href="/services" className="services-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="cta-description">
              Join the AI revolution and unlock new possibilities for growth,
              efficiency, and innovation. Our team of experts is ready to guide
              you through your digital transformation journey.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/about" className="cta-btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="cta-float-1"></div>
        <div className="cta-float-2"></div>
      </section>
    </div>
      </main>
      <Footer />
    </>
  );
}
