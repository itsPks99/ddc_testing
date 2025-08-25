"use client"

import { useEffect, useRef, useState } from "react"

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function IncludedServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      icon: "💎",
      title: "UI/UX Design",
      description:
        "We craft intuitive and visually appealing designs that enhance user experience and drive conversions.",
    },
    {
      icon: "📝",
      title: "Content & Graphics",
      description: "We create compelling content and graphics that resonate with your audience and boost engagement.",
    },
    {
      icon: "🛍️",
      title: "Shopify Development",
      description:
        "We build high-performance landing pages that are optimized for speed, functionality, and seamless user interactions.",
    },
  ]

  return (
    <div id="included-services" ref={ref} className="us-landing-page-features">
      <div className="us-landing-page-container">
        <div className="us-landing-page-features-container">
          <div className="us-landing-page-features-cta">
            <div className="us-landing-page-card us-landing-page-card-gray">
              <h3 className="us-landing-page-features-title">
                Ready To Blow The
                <br />
                Doors Off?
              </h3>
              <button className="us-landing-page-btn us-landing-page-btn-primary">Get In Touch</button>
            </div>
          </div>
          <div className="us-landing-page-features-content">
            <div className="us-landing-page-badge">Custom Landing Page Design</div>
            <h2 className="us-landing-page-features-title">
              <span className="us-landing-page-text-orange">Included</span> in Every
              <br />
              Landing Page Design
            </h2>
            <p className="us-landing-page-features-description">
              Tailored landing to highlight your bestsellers, refine your sales pitch, and engage today's distracted
              shopper.
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
