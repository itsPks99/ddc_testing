"use client"

import { Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="us-landing-page-footer">
      <div className="us-landing-page-container">
        <div className="us-landing-page-footer-grid">
          <div className="us-landing-page-footer-section">
            <h3>Let's Schedule Call.</h3>
            <p>You are one step away from making more revenue from the same ad spend.</p>
            <div className="us-landing-page-footer-buttons">
              <button className="us-landing-page-btn us-landing-page-btn-primary">Get In Touch</button>
              <button className="us-landing-page-btn us-landing-page-btn-outline">
                <Phone className="us-landing-page-comparison-icon" />
                Call Us Now
              </button>
            </div>
          </div>

          <div className="us-landing-page-footer-section">
            <h4>Quick Links</h4>
            <ul className="us-landing-page-footer-links">
              <li>
                <a href="#">Our Client</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Why Landing Pages?</a>
              </li>
              <li>
                <a href="#">Featured Case Study</a>
              </li>
              <li>
                <a href="#">Industries We Cater</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>

          <div className="us-landing-page-footer-section">
            <h4>Sales Office</h4>
            <p>F8, 1st Floor, Washington Plaza, Goregaon, Mumbai, Maharashtra - 062</p>
          </div>

          <div className="us-landing-page-footer-section">
            <h4>Operation Office</h4>
            <p>442-443 Laxmi Enclave - 2, Katargam Surat, Gujarat, India</p>
            <p>+91 9505564228</p>
          </div>
        </div>

        <div className="us-landing-page-footer-bottom">
          <p>© The landing page company, Inc. 2024</p>
          <p>
            Made with love ❤️ by <span className="us-landing-page-text-orange">Mark91 Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
