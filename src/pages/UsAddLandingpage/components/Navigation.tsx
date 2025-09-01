"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

function smoothScrollTo(elementId: string) {
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

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="us-landing-page-nav">
      <div className="us-landing-page-nav-container us-landing-page-container">
        <div className="us-landing-page-nav-links">
          <button onClick={() => handleNavClick("case-studies")} className="us-landing-page-nav-link">
            Case Studies
          </button>
          <button onClick={() => handleNavClick("faqs")} className="us-landing-page-nav-link">
            FAQs
          </button>
        </div>
        <a href="/us-landing-page"><img className="us-landing-page-nav-logo" src="/assets/all_logos/ddc logo/ddc logo 2 cropped.png" alt="Delhi Digital Co." style={{ maxWidth: "100px", height: "auto" }} /></a>
        <div className="us-landing-page-nav-actions">
          <button className="us-landing-page-btn us-landing-page-btn-primary" >
           <a href="https://wa.me/919205110208" style={{ color: "white", textDecoration: "none" }}> Contact Us</a>
          </button>
          <button className="us-landing-page-mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="us-landing-page-mobile-menu">
          <div className="us-landing-page-mobile-menu-content">
            <div className="us-landing-page-mobile-menu-section">
              <div className="us-landing-page-mobile-menu-label">EXPLORE</div>
              <button onClick={() => handleNavClick("case-studies")} className="us-landing-page-mobile-menu-link">
                Case Studies
              </button>
              <button onClick={() => handleNavClick("faqs")} className="us-landing-page-mobile-menu-link">
                FAQs
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
