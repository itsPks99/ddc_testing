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

export default function ScheduleCallSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div id="schedule-call" ref={ref} className="us-landing-page-schedule-call">
      <div className="us-landing-page-container">
        <div className="us-landing-page-schedule-header">
          <h2 className="us-landing-page-schedule-title">
            Ready to Take This Forward?
            <br />
            Let's <span className="us-landing-page-text-orange">Schedule</span>{" "}
            <span className="us-landing-page-text-pink">Call.</span>
          </h2>
          <p className="us-landing-page-schedule-description">
            It maximizes revenue and customer satisfaction by improving the efficiency of your existing traffic,
            reducing costs.
          </p>
        </div>

        <div className={`us-landing-page-schedule-content ${isVisible ? "visible" : ""}`}>
          <img
            src="/schedule-call-interface.png"
            alt="Schedule call interface"
            className="us-landing-page-schedule-image"
          />
        </div>
      </div>
    </div>
  )
}
