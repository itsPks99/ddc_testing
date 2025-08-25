"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

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

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation()

  const positives = [
    { title: "Growth", desc: "You have a remarkable product and are committed to your next phase of growth." },
    {
      title: "True Industry Expertise",
      desc: "You're interested in finding a true ally with world class industry expertise.",
    },
    {
      title: "Creative Work",
      desc: "You are looking for unique, creative work and a strategy designed specifically for you.",
    },
    {
      title: "Win Awards",
      desc: "You faith in data-driven startifies and do not get sidetracked by the desire to win awards.",
    },
  ]

  const negatives = [
    {
      title: "Don't Have Trust",
      desc: "You Don't trust the team you've hired or you tend to micro-manage creative work.",
    },
    {
      title: "Not Interested In Brand",
      desc: "You are just in it for making a quick profit, and you are not excited about your brand.",
    },
    { title: "Refuse to Acknowledge", desc: "You refuse to acknowledge market trends and changing consumer demands." },
    { title: "Hustle Culture", desc: 'You romanticize "hustel culture" and working non-stop.' },
  ]

  return (
    <div ref={ref} className="us-landing-page-comparison">
      <div className="us-landing-page-container">
        <div className="us-landing-page-comparison-header">
          <div className="us-landing-page-badge">Your Match</div>
          <h2 className="us-landing-page-comparison-title">
            Are We Made <span className="us-landing-page-text-orange">For</span>{" "}
            <span className="us-landing-page-text-pink">Each Other?</span>
          </h2>
        </div>

        <div className={`us-landing-page-comparison-grid ${isVisible ? "visible" : ""}`}>
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

          <div className="us-landing-page-comparison-center">
            <div className="us-landing-page-comparison-circle">
              <div className="us-landing-page-comparison-logo">
                <div>The Landing</div>
                <div>Page Company</div>
              </div>
            </div>
          </div>

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
