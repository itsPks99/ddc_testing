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

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div id="case-studies" ref={ref} className="us-landing-page-case-studies">
      <div className="us-landing-page-container">
        <div className="us-landing-page-testimonials-header">
          <div className="us-landing-page-badge us-landing-page-badge-white">CASE STUDY</div>
          <h2 className="us-landing-page-case-studies-title">
            <span className="us-landing-page-text-orange">Featured</span>{" "}
            <span className="us-landing-page-text-pink">Case Study</span>
            <br />
            The Good Stuff's Flawless Gummies
          </h2>
        </div>

        <div className={`us-landing-page-case-studies-grid ${isVisible ? "visible" : ""}`}>
          <div>
            <img src="/case-study-mockups.png" alt="Case study mockups" className="us-landing-page-case-study-image" />
          </div>
          <div>
            <img
              src="/case-study-reviews.png"
              alt="Product reviews and metrics"
              className="us-landing-page-case-study-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
