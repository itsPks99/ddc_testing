"use client"

import { useEffect, useRef, useState } from "react"
import { FaShopify, FaLaptopCode, FaPalette } from "react-icons/fa"


function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function IncludedServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      icon: <FaShopify size={32} />,
      title: "Shopify Development",
      description:
        "High-performance Shopify storefronts and landing pages built for speed, SEO, and conversions.",
    },
    {
      icon: <FaLaptopCode size={32} />,
      title: "Custom Development",
      description:
        "Headless/React builds, custom APIs, and integrations tailored to your workflows and business logic.",
    },
    {
      icon: <FaPalette size={32} />,
      title: "UI/UX Design",
      description:
        "Clean, conversion-focused design that looks premium and guides shoppers to checkout.",
    },
  ]

  return (
    <div id="included-services" ref={ref} className="us-landing-page-features">
      <div className="us-landing-page-container">
        <div className="us-landing-page-features-container">
          <div className="us-landing-page-features-cta">
            <div className="us-landing-page-card us-landing-page-card-gray">
              <h3 className="us-landing-page-features-title">
                Ready to Turn Traffic into Revenue?
                <br />
                We Build High Converting Stores.
              </h3>

              <button className="us-landing-page-btn us-landing-page-btn-primary"><a href="https://wa.me/919205110208" style={{ color: "white", textDecoration: "none" }}>Get In Touch</a></button>
            </div>
          </div>

          <div className="us-landing-page-features-content">
            <div className="us-landing-page-badge">Shopify &amp; Custom Development</div>

            <h2 className="us-landing-page-features-title">
              <span className="us-landing-page-text-orange">Included</span> in Every
              <br />
              Shopify &amp; Custom Build
            </h2>

            <p className="us-landing-page-features-description">
              Conversion-ready pages and storefronts—whether on Shopify or fully custom—built to load fast, look
              premium, and sell more.
            </p>

            <div className="us-landing-page-features-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`us-landing-page-feature-item ${isVisible ? "visible" : ""} delay-${index * 200}`}
                >
                  <div className="us-landing-page-feature-icon">{service.icon}</div>
                  <h3 className="us-landing-page-feature-title">{service.title}</h3>
                  <p className="us-landing-page-feature-desc">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
