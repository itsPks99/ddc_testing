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

export default function MetricsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const metrics = [
    { label: "CRO", value: "+65%", desc: "Conversion Rate" },
    { label: "AOV", value: "+40%", desc: "Average Order Value" },
    { label: "SPEED", value: "+85%", desc: "Page Load Speed" },
    { label: "MOBILE", value: "+90%", desc: "Mobile Performance" },
    { label: "SEO", value: "+75%", desc: "Search Rankings" },
  ]

  return (
    <div ref={ref} className="us-landing-page-metrics">
      <div className="us-landing-page-container">
        <div className="us-landing-page-metrics-grid">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`us-landing-page-metric-item ${isVisible ? "visible" : ""} delay-${index * 100}`}
            >
              <div className={`us-landing-page-badge us-landing-page-badge-primary`}>{metric.label}</div>
              <div className="us-landing-page-metric-value">{metric.value}</div>
              <div className="us-landing-page-metric-desc">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
