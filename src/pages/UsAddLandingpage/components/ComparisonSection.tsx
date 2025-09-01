"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

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

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation()

  const positives = [
    {
      title: "Serious About Growth",
      desc: "You’re ready to scale revenue with high-converting Shopify stores or custom builds that don’t cut corners.",
    },
    {
      title: "Trust the Experts",
      desc: "You want a hands-on partner with deep Shopify & headless (React/Node) experience who can own outcomes.",
    },
    {
      title: "Performance First",
      desc: "Speed, SEO, analytics and CRO matter more than trends—every page should load fast and convert better.",
    },
    {
      title: "Brand + Strategy",
      desc: "You care about storytelling, clean UI/UX, and long-term compounding results—not just a one-off launch.",
    },
  ]

  const negatives = [
    {
      title: "Cheapest Over Quality",
      desc: "If price is the only metric and craftsmanship is optional, we won’t be the right fit.",
    },
    {
      title: "Pixel-Pushing & Micro-Managing",
      desc: "You don’t trust partners to make design/tech decisions and prefer to direct every minor change.",
    },
    {
      title: "Chasing Vanity",
      desc: "Awards and trends matter more than measurable growth, data, and customer experience.",
    },
    {
      title: "Quick Fix Mindset",
      desc: "You want hacks instead of a resilient, fast store with clear strategy, testing, and iteration.",
    },
  ]

  return (
    <div ref={ref} className="us-landing-page-comparison">
      <div className="us-landing-page-container">
        <div className="us-landing-page-comparison-header">
          <div className="us-landing-page-badge">Your Match</div>
          <h2 className="us-landing-page-comparison-title">
            Are We the <span className="us-landing-page-text-orange">Right</span>{" "}
            <span className="us-landing-page-text-pink">Fit?</span>
          </h2>
        </div>

        <div className={`us-landing-page-comparison-grid ${isVisible ? "visible" : ""}`}>
          {/* Best fit */}
          <div className="us-landing-page-comparison-list">
            {positives.map((item, index) => (
              <div key={index} className="us-landing-page-comparison-item">
                <CheckCircle className="us-landing-page-comparison-icon us-landing-page-icon-green" />
                <div className="us-landing-page-comparison-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center logo */}
          <div className="us-landing-page-comparison-center">
            <div className="us-landing-page-comparison-circle">
              <img className="us-landing-page-comparison-logo" src="/assets/all_logos/ddc logo/ddc logo 2 cropped.png" alt="Delhi Digital Co." style={{ maxWidth: "140px", height: "auto", color: "white" }} />
              {/* <div>Delhi</div>
              <div>Digital Co.</div> */}
            </div>
          </div>

          {/* Not a fit */}
          <div className="us-landing-page-comparison-list">
            {negatives.map((item, index) => (
              <div key={index} className="us-landing-page-comparison-item">
                <XCircle className="us-landing-page-comparison-icon us-landing-page-icon-red" />
                <div className="us-landing-page-comparison-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
