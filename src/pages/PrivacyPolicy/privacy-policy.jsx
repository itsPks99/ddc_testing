"use client"

import { useEffect } from "react"
import "./privacy-policy.css"

const PrivacyPolicy = () => {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("privacy-animate-in")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".privacy-fade-up, .privacy-slide-in")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="privacy-container">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-hero-text privacy-fade-up">
            <h1 className="privacy-hero-title">
              Privacy <span className="privacy-highlight">Policy</span>
            </h1>
            <p className="privacy-hero-subtitle">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="privacy-last-updated">Last updated: January 2024</div>
          </div>
        </div>
        <div className="privacy-hero-decoration"></div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="privacy-content-wrapper">
          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">Information We Collect</h2>
            <div className="privacy-section-content">
              <div className="privacy-info-card">
                <h3>Personal Information</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, contact us, or
                  use our services. This may include:
                </p>
                <ul>
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Business information and requirements</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>
              <div className="privacy-info-card">
                <h3>Automatically Collected Information</h3>
                <p>We automatically collect certain information when you visit our website:</p>
                <ul>
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">How We Use Your Information</h2>
            <div className="privacy-section-content">
              <div className="privacy-usage-grid">
                <div className="privacy-usage-item">
                  <div className="privacy-usage-icon">🛡️</div>
                  <h3>Service Delivery</h3>
                  <p>To provide, maintain, and improve our services and respond to your requests.</p>
                </div>
                <div className="privacy-usage-item">
                  <div className="privacy-usage-icon">📧</div>
                  <h3>Communication</h3>
                  <p>To send you updates, newsletters, and important service-related communications.</p>
                </div>
                <div className="privacy-usage-item">
                  <div className="privacy-usage-icon">📊</div>
                  <h3>Analytics</h3>
                  <p>To analyze usage patterns and improve our website and services.</p>
                </div>
                <div className="privacy-usage-item">
                  <div className="privacy-usage-icon">🔒</div>
                  <h3>Security</h3>
                  <p>To protect against fraud, unauthorized access, and other security threats.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">Information Sharing</h2>
            <div className="privacy-section-content">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties except as
                described in this policy:
              </p>
              <div className="privacy-sharing-list">
                <div className="privacy-sharing-item">
                  <strong>Service Providers:</strong> We may share information with trusted third-party service
                  providers who assist us in operating our website and conducting our business.
                </div>
                <div className="privacy-sharing-item">
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect
                  our rights, property, or safety.
                </div>
                <div className="privacy-sharing-item">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred.
                </div>
              </div>
            </div>
          </div>

          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">Data Security</h2>
            <div className="privacy-section-content">
              <div className="privacy-security-card">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="privacy-security-features">
                  <div className="privacy-security-feature">
                    <span className="privacy-security-icon">🔐</span>
                    <span>SSL encryption for data transmission</span>
                  </div>
                  <div className="privacy-security-feature">
                    <span className="privacy-security-icon">🛡️</span>
                    <span>Secure server infrastructure</span>
                  </div>
                  <div className="privacy-security-feature">
                    <span className="privacy-security-icon">🔑</span>
                    <span>Access controls and authentication</span>
                  </div>
                  <div className="privacy-security-feature">
                    <span className="privacy-security-icon">📱</span>
                    <span>Regular security audits and updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">Your Rights</h2>
            <div className="privacy-section-content">
              <div className="privacy-rights-grid">
                <div className="privacy-right-item">
                  <h3>Access</h3>
                  <p>Request access to your personal information we hold</p>
                </div>
                <div className="privacy-right-item">
                  <h3>Correction</h3>
                  <p>Request correction of inaccurate personal information</p>
                </div>
                <div className="privacy-right-item">
                  <h3>Deletion</h3>
                  <p>Request deletion of your personal information</p>
                </div>
                <div className="privacy-right-item">
                  <h3>Portability</h3>
                  <p>Request transfer of your data to another service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="privacy-section privacy-slide-in">
            <h2 className="privacy-section-title">Contact Us</h2>
            <div className="privacy-section-content">
              <div className="privacy-contact-card">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="privacy-contact-info">
                  <div className="privacy-contact-item">
                    <strong>Email:</strong> hello@delhidigital.co
                  </div>
                  <div className="privacy-contact-item">
                    <strong>Phone:</strong> +91 92051 10208
                  </div>
                  <div className="privacy-contact-item">
                    <strong>Address:</strong> Delhi Digital Co. , Saket  New Delhi, India
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

export default PrivacyPolicy
