"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("LQnv-iAx15Q_d1SWQ");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    // EmailJS configuration replace them
    const serviceId = 'service_o706ifb';   // Your EmailJS service ID
    const templateId = 'template_loplpkr'; // Your EmailJS template ID 
    const publicKey = 'LQnv-iAx15Q_d1SWQ'; // Your EmailJS public key
    
    // Create template parameters object
    const templateParams = {
      // Only include the fields needed for the template variables
      // EmailJS will handle the sending email based on your service configuration
      email: formData.email,          // User's email for reply purposes
      name: formData.name,            // Name from form
      message: formData.message,      // Message content
      company: formData.company || '', // Company name
      reply_to: formData.email        // Reply-to address
    };
    
    console.log('Template parameters:', templateParams);
    
    // Use the send method with explicit parameters
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormData({ name: "", email: "", company: "", message: "" });
        setSubmitStatus({ 
          type: 'success', 
          message: "Thank you for your message! We'll get back to you soon."
        });
      })
      .catch((error) => {
        console.log('Failed to send email:', error);
        console.log('Form data:', formData);
        console.log('Error details:', error.text || error.toString());
        setSubmitStatus({ 
          type: 'error', 
          message: `Failed to send message: ${error.text || error.toString()}`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Map EmailJS field names to our state properties
    const fieldMap: {[key: string]: string} = {
      'name': 'name',
      'from_email': 'email',
      'company': 'company',
      'message': 'message'
    };
    
    setFormData({
      ...formData,
      [fieldMap[name] || name]: value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get in <span className="contact-hero-highlight">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Ready to transform your business with AI? Let&apos;s discuss your
              project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
        <div className="contact-hero-wave">
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#393939] mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you&apos;re looking to implement AI solutions, need
                  strategic guidance, or want to learn more about our services,
                  we&apos;re here to help. Reach out to us and let&apos;s discuss your AI
                  journey.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">Drop us a line anytime</p>
                    <a
                      href="mailto:quantractai@gmail.com"
                      className="text-[#f1c40f] hover:text-yellow-400 font-medium"
                    >
                      quantractai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#393939]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Connect on LinkedIn
                    </h3>
                    <p className="text-gray-600">Follow our latest updates</p>
                    <a
                      href="https://www.linkedin.com/company/quantract-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f1c40f] hover:text-yellow-400 font-medium"
                    >
                      https://www.linkedin.com/company/quantract-ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-600">We typically respond within</p>
                    <p className="text-[#f1c40f] font-medium">24 hours</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#393939] mb-4">
                  Ready for a Free Consultation?
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a 30-minute consultation to discuss your AI needs and
                  discover how we can help transform your business.
                </p>
                <Link
                  href="https://linkedin.com/company/quantract-ai"
                  className="bg-[#393939] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors inline-block"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-[#393939] mb-6">
                Send Us a Message
              </h3>
              {submitStatus.type && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#f1c40f] text-[#393939] py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-yellow-400 hover:scale-105'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our AI services and
              implementation process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does AI implementation take?",
                answer:
                  "Implementation timelines vary based on project complexity, typically ranging from 4-12 weeks for most solutions.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "We work across various industries including healthcare, finance, manufacturing, retail, education, and real estate.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive 24/7 support and maintenance to ensure optimal performance of your AI systems.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "A 30-minute session to assess your needs, discuss potential solutions, and provide strategic recommendations.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-[#393939] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}





//The email js auto reply mail template , 
// paste this into the template html editor in emailjs

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Thank You for Contacting Quantract AI</title>
//   <style>
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
//     body {
//       font-family: 'Poppins', Arial, sans-serif;
//       line-height: 1.6;
//       color: #4a4a4a;
//       margin: 0;
//       padding: 0;
//       background-color: #f7f7f7;
//     }
    
//     .email-container {
//       max-width: 600px;
//       margin: 0 auto;
//       background-color: #ffffff;
//       border-radius: 12px;
//       overflow: hidden;
//       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//     }
    
//     .email-header {
//       background: linear-gradient(135deg, #f1c40f 0%, #ffdb4d 100%);
//       padding: 30px 20px;
//       text-align: center;
//     }
    
//     .company-logo {
//       margin-bottom: 20px;
//       width: 80px;
//       height: auto;
//     }
    
//     .header-title {
//       color: #393939;
//       font-size: 28px;
//       font-weight: 700;
//       margin: 0;
//     }
    
//     .email-body {
//       padding: 30px 40px;
//       color: #4a4a4a;
//     }
    
//     .greeting {
//       font-size: 22px;
//       color: #393939;
//       font-weight: 600;
//       margin-top: 0;
//       margin-bottom: 20px;
//     }
    
//     .services-section {
//       margin: 30px 0;
//     }
    
//     .services-title {
//       font-size: 18px;
//       color: #393939;
//       font-weight: 600;
//       margin-bottom: 15px;
//       position: relative;
//       padding-bottom: 10px;
//     }
    
//     .services-title:after {
//       content: '';
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 50px;
//       height: 3px;
//       background-color: #f1c40f;
//     }
    
//     .services-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 15px;
//     }
    
//     .service-item {
//       display: flex;
//       align-items: center;
//     }
    
//     .service-bullet {
//       width: 8px;
//       height: 8px;
//       background-color: #f1c40f;
//       border-radius: 50%;
//       margin-right: 10px;
//       flex-shrink: 0;
//     }
    
//     .cta-button {
//       display: inline-block;
//       background-color: #393939;
//       color: #ffffff !important;
//       text-decoration: none;
//       padding: 12px 30px;
//       border-radius: 30px;
//       font-weight: 600;
//       margin: 15px 0;
//       text-align: center;
//       transition: background-color 0.3s ease;
//     }
    
//     .cta-button:hover {
//       background-color: #505050;
//     }
    
//     .email-footer {
//       background-color: #393939;
//       color: #ffffff;
//       padding: 25px 40px;
//       text-align: center;
//       font-size: 14px;
//     }
    
//     .tagline {
//       font-style: italic;
//       color: #f1c40f;
//       margin-bottom: 15px;
//       font-weight: 500;
//     }
    
//     .contact-info {
//       margin: 20px 0;
//     }
    
//     .contact-info a {
//       color: #f1c40f;
//       text-decoration: none;
//     }
    
//     .social-links {
//       margin: 15px 0;
//     }
    
//     .social-icon {
//       display: inline-block;
//       margin: 0 8px;
//       width: 32px;
//       height: 32px;
//       background-color: #f1c40f;
//       border-radius: 50%;
//       line-height: 32px;
//       text-align: center;
//     }
    
//     .divider {
//       height: 1px;
//       background-color: rgba(255,255,255,0.2);
//       margin: 20px 0;
//     }
    
//     .footnote {
//       font-size: 12px;
//       color: rgba(255,255,255,0.7);
//     }
    
//     @media screen and (max-width: 600px) {
//       .email-body {
//         padding: 25px;
//       }
      
//       .services-grid {
//         grid-template-columns: 1fr;
//       }
      
//       .greeting {
//         font-size: 20px;
//       }
//     }
//   </style>
// </head>
// <body>
//   <div class="email-container">
//     <div class="email-header">
//       <img src="https://i.postimg.cc/vmpLJyW3/logo.png" alt="Quantract AI Logo" class="company-logo">
//       <h1 class="header-title">Thank You for Reaching Out!</h1>
//     </div>
    
//     <div class="email-body">
//       <p class="greeting">Hello {{name}},</p>
      
      
//       <p>Thank you for contacting <strong>Quantract AI</strong>. We’ve received your message and appreciate your interest in our AI solutions. A member of our team will review your inquiry and get back to you within <strong>24 hours</strong>.</p>
      
//       <div class="services-section">
//         <h3 class="services-title">Our AI Solutions</h3>
//         <div class="services-grid">
//           <div class="service-item">
//             <div class="service-bullet"></div>
//             <span>Machine Learning Solutions</span>
//           </div>
//           <div class="service-item">
//             <div class="service-bullet"></div>
//             <span>Intelligent Automation</span>
//           </div>
//           <div class="service-item">
//             <div class="service-bullet"></div>
//             <span>AI Strategy Consulting</span>
//           </div>
//           <div class="service-item">
//             <div class="service-bullet"></div>
//             <span>Custom AI Development</span>
//           </div>
//         </div>
//       </div>
      
//       <p>While you wait, feel free to explore more about our services and expertise on our website.</p>
      
//       <a href="https://www.linkedin.com/company/quantract-ai/posts/?feedView=all" class="cta-button">Explore Our Services</a>
      
//       <p>We look forward to discussing how we can help transform your business with cutting-edge AI innovation.</p>
      
//       <p>Best Regards,<br><strong>The Quantract AI Team</strong></p>
//     </div>
    
//     <div class="email-footer">
//       <p class="tagline">Transforming Ideas into Intelligent Impact</p>
      
//       <div class="contact-info">
//         <p>Need immediate assistance? Contact us:</p>
//         <p>Email: <a href="mailto:quantractai@gmail.com">quantractai@gmail.com</a></p>
//         <p>Connect: <a href="https://www.linkedin.com/company/quantract-ai/posts/?feedView=all" target="_blank">LinkedIn</a></p>
//       </div>
     
//       <div class="divider"></div>
      
//       <p class="footnote">This is an automated response. Please do not reply to this email.</p>
//     </div>
//   </div>
// </body>
// </html>
