"use client"

import { useCallback } from "react"
import { Phone } from "lucide-react"

export default function Footer() {
  // Adjust this if you have a sticky header
  const HEADER_OFFSET = 80

  const scrollToSelector = useCallback((selector) => {
    const el = document.querySelector(selector)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
    window.scrollTo({ top: y, behavior: "smooth" })
  }, [])

  // Map labels -> target CSS class (add these classes to your section wrappers)
  const links = [
    { label: "Our Client", selector: ".trustedClient_section" },
    // { label: "Case Studies", selector: ".us-landing-page-case-studies" }, // your brands slider
    // { label: "Why Landing Pages?", selector: ".us-landing-page-why-landing-pages" },
    { label: "Featured Case Study", selector: ".us-landing-page-case-studies" },
    { label: "World Class Brands Rely On Us", selector: ".us-landing-page-world-brands" },
    { label: "Reviews", selector: ".us-landing-page-testimonials" },
  ]

  const handleQuickLink = (e, selector) => {
    e.preventDefault()
    scrollToSelector(selector)
  }

  return (
    <footer className="us-landing-page-footer">
      <div className="us-landing-page-container">
        <div className="us-landing-page-footer-grid">
          <div className="us-landing-page-footer-section">
            <h3>Let's Schedule Call.</h3>
            <p>You are one step away from making more revenue from the same ad spend.</p>
            <div className="us-landing-page-footer-buttons">
              <button
                className="us-landing-page-btn us-landing-page-btn-primary"
                onClick={() => scrollToSelector(".us-landing-page-contact")}
              >
               <a href="https://wa.me/919205110208" style={{ color: "white", textDecoration: "none" }}>Get In Touch</a>
              </button>

              <button className="us-landing-page-btn us-landing-page-btn-outline">
                <Phone className="us-landing-page-comparison-icon" />
                <a
                  style={{ color: "#9ca3af", textDecoration: "none" }}
                  href="tel:+919205110208"
                >
                  Call Us Now
                </a>
              </button>
            </div>
          </div>

          <div className="us-landing-page-footer-section">
            <h4>Quick Links</h4>
            <ul className="us-landing-page-footer-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href="#"
                    onClick={(e) => handleQuickLink(e, l.selector)}
                    style={{ cursor: "pointer" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="us-landing-page-footer-section">
            <h4>Office Address</h4>
            <p>4th Floor, F42, Saidulajab, Saiyad Ul Ajaib Village, Saket, New Delhi, Delhi 110030</p>
            <p>+91 92051 10208</p>
          </div>
        </div>

        <div className="us-landing-page-footer-bottom">
          <p>© Delhi Digita Co., Inc. 2025</p>
          <p>
            Made with love ❤️ by{" "}
            <span className="us-landing-page-text-orange">
              <a href="https://delhidigital.co/" style={{ color: "#9ca3af", textDecoration: "none" }}>
                Delhi Digita Co.
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
