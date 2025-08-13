"use client"

import { useEffect } from "react"
import "./terms-of-service.css"

const TermsOfService = () => {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("terms-animate-in")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".terms-fade-up, .terms-slide-in")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="terms-container">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <div className="terms-hero-text terms-fade-up">
            <h1 className="terms-hero-title">
              Terms of <span className="terms-highlight">Service</span>
            </h1>
            <p className="terms-hero-subtitle">
              Please read these terms carefully before using our services. By accessing our website, you agree to be
              bound by these terms.
            </p>
            <div className="terms-effective-date">Effective Date: January 2024</div>
          </div>
        </div>
        <div className="terms-hero-decoration"></div>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="terms-content-wrapper">
          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Acceptance of Terms</h2>
            <div className="terms-section-content">
              <div className="terms-acceptance-card">
                <p>
                  By accessing and using Delhi Digital's website and services, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
                <div className="terms-key-points">
                  <div className="terms-point">
                    <span className="terms-point-icon">📋</span>
                    <span>These terms apply to all visitors and users of our services</span>
                  </div>
                  <div className="terms-point">
                    <span className="terms-point-icon">✅</span>
                    <span>Your continued use constitutes acceptance of these terms</span>
                  </div>
                  <div className="terms-point">
                    <span className="terms-point-icon">🔄</span>
                    <span>Terms may be updated periodically with notice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Services Description</h2>
            <div className="terms-section-content">
              <div className="terms-services-grid">
                <div className="terms-service-card">
                  <div className="terms-service-icon">🎯</div>
                  <h3>Digital Marketing</h3>
                  <p>Performance marketing, SEO, social media management, and digital advertising services.</p>
                </div>
                <div className="terms-service-card">
                  <div className="terms-service-icon">💻</div>
                  <h3>Web Development</h3>
                  <p>Custom website development, e-commerce solutions, and web application development.</p>
                </div>
                <div className="terms-service-card">
                  <div className="terms-service-icon">🎨</div>
                  <h3>Design Services</h3>
                  <p>Branding, graphic design, UI/UX design, and creative visual solutions.</p>
                </div>
                <div className="terms-service-card">
                  <div className="terms-service-icon">📱</div>
                  <h3>Mobile Development</h3>
                  <p>iOS and Android app development, React Native, and mobile app solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">User Responsibilities</h2>
            <div className="terms-section-content">
              <div className="terms-responsibilities-list">
                <div className="terms-responsibility-item">
                  <h3>Account Information</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account and password and for
                    restricting access to your computer.
                  </p>
                </div>
                <div className="terms-responsibility-item">
                  <h3>Accurate Information</h3>
                  <p>
                    You agree to provide accurate, current, and complete information during the registration process and
                    to update such information as necessary.
                  </p>
                </div>
                <div className="terms-responsibility-item">
                  <h3>Prohibited Activities</h3>
                  <p>
                    You may not use our services for any illegal or unauthorized purpose or engage in any activity that
                    interferes with or disrupts our services.
                  </p>
                </div>
                <div className="terms-responsibility-item">
                  <h3>Content Guidelines</h3>
                  <p>
                    Any content you provide must not violate intellectual property rights, contain malicious code, or be
                    offensive or inappropriate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Payment Terms</h2>
            <div className="terms-section-content">
              <div className="terms-payment-card">
                <div className="terms-payment-grid">
                  <div className="terms-payment-item">
                    <h3>💳 Payment Methods</h3>
                    <p>
                      We accept various payment methods including credit cards, bank transfers, and digital payment
                      platforms.
                    </p>
                  </div>
                  <div className="terms-payment-item">
                    <h3>📅 Payment Schedule</h3>
                    <p>
                      Payment terms vary by project. Typically 50% upfront and 50% upon completion, unless otherwise
                      agreed.
                    </p>
                  </div>
                  <div className="terms-payment-item">
                    <h3>⏰ Late Payments</h3>
                    <p>
                      Late payments may incur additional charges and may result in suspension of services until payment
                      is received.
                    </p>
                  </div>
                  <div className="terms-payment-item">
                    <h3>💰 Refund Policy</h3>
                    <p>
                      Refunds are considered on a case-by-case basis and depend on the nature and stage of the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Intellectual Property</h2>
            <div className="terms-section-content">
              <div className="terms-ip-sections">
                <div className="terms-ip-section">
                  <h3>Our Rights</h3>
                  <p>
                    All content, features, and functionality on our website are owned by Delhi Digital and are protected
                    by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div className="terms-ip-section">
                  <h3>Client Rights</h3>
                  <p>
                    Upon full payment, clients receive ownership rights to the final deliverables, excluding any
                    pre-existing intellectual property or third-party components.
                  </p>
                </div>
                <div className="terms-ip-section">
                  <h3>License to Use</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to use our services in accordance
                    with these terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Limitation of Liability</h2>
            <div className="terms-section-content">
              <div className="terms-liability-card">
                <div className="terms-liability-header">
                  <h3>Important Legal Notice</h3>
                  <p>Please read this section carefully as it limits our liability to you.</p>
                </div>
                <div className="terms-liability-points">
                  <div className="terms-liability-point">
                    <strong>Service Availability:</strong> We strive to maintain high service availability but cannot
                    guarantee uninterrupted service.
                  </div>
                  <div className="terms-liability-point">
                    <strong>Indirect Damages:</strong> We shall not be liable for any indirect, incidental, special, or
                    consequential damages.
                  </div>
                  <div className="terms-liability-point">
                    <strong>Maximum Liability:</strong> Our total liability shall not exceed the amount paid by you for
                    the specific service in question.
                  </div>
                  <div className="terms-liability-point">
                    <strong>Third-Party Services:</strong> We are not responsible for any third-party services, plugins,
                    or integrations used in your project.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Termination</h2>
            <div className="terms-section-content">
              <div className="terms-termination-grid">
                <div className="terms-termination-card">
                  <h3>By Client</h3>
                  <p>
                    You may terminate your account at any time by contacting us. You remain responsible for all charges
                    incurred prior to termination.
                  </p>
                </div>
                <div className="terms-termination-card">
                  <h3>By Delhi Digital</h3>
                  <p>
                    We may terminate or suspend your account immediately if you breach these terms or engage in
                    prohibited activities.
                  </p>
                </div>
                <div className="terms-termination-card">
                  <h3>Effect of Termination</h3>
                  <p>
                    Upon termination, your right to use our services ceases immediately, and we may delete your account
                    and data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Changes to Terms</h2>
            <div className="terms-section-content">
              <div className="terms-changes-card">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes
                  via email or website notice.
                </p>
                <div className="terms-changes-timeline">
                  <div className="terms-change-step">
                    <div className="terms-step-number">1</div>
                    <div className="terms-step-content">
                      <h4>Notification</h4>
                      <p>We'll notify you 30 days before changes take effect</p>
                    </div>
                  </div>
                  <div className="terms-change-step">
                    <div className="terms-step-number">2</div>
                    <div className="terms-step-content">
                      <h4>Review Period</h4>
                      <p>You have time to review and decide on continued use</p>
                    </div>
                  </div>
                  <div className="terms-change-step">
                    <div className="terms-step-number">3</div>
                    <div className="terms-step-content">
                      <h4>Acceptance</h4>
                      <p>Continued use after the effective date means acceptance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-section terms-slide-in">
            <h2 className="terms-section-title">Contact Information</h2>
            <div className="terms-section-content">
              <div className="terms-contact-card">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="terms-contact-grid">
                  <div className="terms-contact-method">
                    <div className="terms-contact-icon">📧</div>
                    <div>
                      <strong>Email</strong>
                      <p>hello@delhidigital.co</p>
                    </div>
                  </div>
                  <div className="terms-contact-method">
                    <div className="terms-contact-icon">📞</div>
                    <div>
                      <strong>Phone</strong>
                      <p>+91 92051 10208</p>
                    </div>
                  </div>
                  <div className="terms-contact-method">
                    <div className="terms-contact-icon">📍</div>
                    <div>
                      <strong>Address</strong>
                      <p>Delhi Digital Co. , Saket  New Delhi, India</p>
                    </div>
                  </div>
                  <div className="terms-contact-method">
                    <div className="terms-contact-icon">🌐</div>
                    <div>
                      <strong>Website</strong>
                      <p>www.delhidigital.co</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
