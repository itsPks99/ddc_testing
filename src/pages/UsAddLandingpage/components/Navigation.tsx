"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const handleNavClick = (sectionId) => {
    smoothScrollTo(sectionId)
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
  }

  // detect active section while scrolling (only for mobile)
  useEffect(() => {
    const sections = ["case-studies", "faqs"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="us-landing-page-nav">
      <div className="us-landing-page-nav-container us-landing-page-container">
        <div className="us-landing-page-nav-links">
          <button
            onClick={() => handleNavClick("case-studies")}
            className="us-landing-page-nav-link"
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavClick("faqs")}
            className="us-landing-page-nav-link"
          >
            FAQs
          </button>
        </div>

        <a href="/us-landing-page">
          <img
            className="us-landing-page-nav-logo"
            src="/assets/all_logos/ddc logo/ddc logo 2 cropped.png"
            alt="Delhi Digital Co."
            style={{ maxWidth: "100px", height: "auto" }}
          />
        </a>

        <div className="us-landing-page-nav-actions">
          <button className="us-landing-page-btn us-landing-page-btn-primary">
            <a
              href="https://wa.me/919205110208"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </button>
          <button
            className="us-landing-page-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="us-landing-page-mobile-menu">
          <div className="us-landing-page-mobile-menu-content">
            <div className="us-landing-page-mobile-menu-section">
              <button
              onClick={() => handleNavClick("included-services")}
                className={`us-landing-page-mobile-menu-link us-landing-page-mobile-menu-label ${
                  activeSection === "included-services" ? "active" : ""
                }`}
              >
              {/* className="us-landing-page-mobile-menu-label us-landing-page-mobile-menu-link" */}
               Explore
              </button>
              <button
                onClick={() => handleNavClick("case-studies")}
                className={`us-landing-page-mobile-menu-link ${
                  activeSection === "case-studies" ? "active" : ""
                }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => handleNavClick("faqs")}
                className={`us-landing-page-mobile-menu-link ${
                  activeSection === "faqs" ? "active" : ""
                }`}
              >
                Faqs
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
