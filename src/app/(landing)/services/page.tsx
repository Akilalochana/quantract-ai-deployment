import Link from "next/link";
import "./services.css";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Our <span className="services-hero-highlight">AI Solutions</span>
            </h1>
            <p className="services-hero-description">
              Discover our comprehensive suite of AI services designed to
              automate processes, enhance decision-making, and accelerate your
              digital transformation journey.
            </p>
          </div>
        </div>
        <div className="services-hero-wave">
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

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Our Core AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to process automation, we offer end-to-end
              AI solutions tailored to your business needs and industry
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1 - Machine Learning */}
            <div className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:bg-yellow-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#f1c40f] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#393939]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#393939] mb-4">
                    Machine Learning Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Advanced predictive analytics and intelligent automation
                    powered by cutting-edge machine learning algorithms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Predictive Analytics & Forecasting
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Computer Vision & Image Recognition
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Natural Language Processing
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Recommendation Systems
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#393939] font-semibold hover:text-[#f1c40f] transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - Process Automation */}
            <div className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:bg-yellow-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#f1c40f] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#393939]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#393939] mb-4">
                    Intelligent Process Automation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Streamline operations and reduce manual workload with smart
                    automation solutions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Robotic Process Automation (RPA)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Workflow Optimization
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">Document Processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Quality Assurance Automation
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#393939] font-semibold hover:text-[#f1c40f] transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Data Analytics */}
            <div className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:bg-yellow-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#f1c40f] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#393939]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#393939] mb-4">
                    Advanced Data Analytics
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Transform raw data into actionable insights with powerful
                    analytics and visualization tools.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Business Intelligence Dashboards
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Real-time Data Processing
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Statistical Analysis & Modeling
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">Data Visualization</span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#393939] font-semibold hover:text-[#f1c40f] transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 - AI Consulting */}
            <div className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:bg-yellow-50">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#f1c40f] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#393939]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#393939] mb-4">
                    Strategic AI Consulting
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Expert guidance and strategic planning for successful AI
                    adoption and implementation.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        AI Readiness Assessment
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        Technology Roadmap Development
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">
                        ROI Analysis & Planning
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                      <span className="text-gray-600">Training & Support</span>
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="text-[#393939] font-semibold hover:text-[#f1c40f] transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the unique challenges and
              opportunities across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry Cards */}
            {[
              {
                name: "Healthcare",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                name: "Finance & Banking",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                name: "Manufacturing",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
              {
                name: "Retail & E-commerce",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
              },
              {
                name: "Education",
                icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
              },
              {
                name: "Real Estate",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-[#393939]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={industry.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#393939] mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Tailored AI solutions designed to address the specific needs
                  and challenges of the {industry.name.toLowerCase()} industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and
              delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                desc: "Analyze your current processes and identify AI opportunities.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                desc: "Develop a comprehensive AI roadmap tailored to your goals.",
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Build and rigorously test AI solutions in controlled environments.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Launch solutions with full support and continuous optimization.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#f1c40f] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-[#393939]">
                      {process.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#393939] mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#393939]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our AI solutions can drive growth, efficiency,
              and innovation in your organization. Schedule a free consultation
              to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#f1c40f] text-[#393939] px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#393939] transition-all duration-300"
              >
                Learn About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
