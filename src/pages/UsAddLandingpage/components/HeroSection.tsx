"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  return (
    <section id="hero" ref={heroRef} className="us-landing-page-hero">
      <div className="us-landing-page-container">
        <div className={`us-landing-page-hero-content ${heroVisible ? "visible" : ""}`}>
          <div className="us-landing-page-badge">Over 50+ Shopify stores delivered</div>
          <h1 className="us-landing-page-hero-title">
            We Help E-commerce Brands Build
            <br />
            High-Converting <span className="us-landing-page-text-orange">Shopify</span>{" "}
            <span className="us-landing-page-text-pink">Stores</span>
          </h1>
          <p className="us-landing-page-hero-subtitle">Custom Shopify Development & E-commerce Solutions</p>
          <button className="us-landing-page-btn us-landing-page-btn-primary us-landing-page-btn-lg"><a href="https://wa.me/919205110208" style={{ color: "white", textDecoration: "none" }}> Contact Us</a></button>
        </div>
      </div>
    </section>
  )
}
