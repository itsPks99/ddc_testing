"use client"

import { useEffect, useRef, useState } from "react"

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function MetricsSection() {
  const { ref, isVisible } = useScrollAnimation()

  // Copy matches your screenshot
  const metrics = [
    { label: "CAC",  value: "-20%", desc: "New Customer" },
    { label: "CRO",  value: "+45%", desc: "Conversion Rate" },
    { label: "ROAS", value: "+20%", desc: "Profitable Ad Spend" },
    { label: "CAC",  value: "-30%", desc: "Old Customer" },
    { label: "LP",   value: "+20%", desc: "LP > ATC%" },
  ]

  return (
    <section ref={ref} className="us-landing-page-metrics metrics">
      {/* Local styles to match the uploaded layout */}
      <style>{`
        .metrics {
          background: #111213; /* deep charcoal */
          color: #fff;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0; /* no gaps so the single-side divider is clean */
          opacity: 0;
          transform: translateY(6px);
          transition: opacity .45s ease, transform .45s ease;
        }
        .metrics-grid.visible { opacity: 1; transform: none; }

        .metric {
          position: relative;
          padding: 22px clamp(16px, 3vw, 48px);
          display: grid;
          justify-items: start;
          row-gap: 10px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity .45s ease, transform .45s ease;
        }
        .metrics-grid.visible .metric { opacity: 1; transform: none; }

        /* Single-side divider (right side only) */
        .metric:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 18%;
          bottom: 18%;
          width: 1px;
          background: rgba(255,255,255,.18);
        }

        .metric__badge {
          display: inline-block;
          background: #ffe600;
          color: #0b0d10;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .02em;
          border-radius: 999px;
          padding: 6px 10px;
        }

        .metric__value {
          font-weight: 600;
          font-size: clamp(28px, 4.4vw, 56px);
          line-height: 1;
        }

        .metric__desc {
          color: rgba(255,255,255,.7);
          font-size: 14px;
        }

        /* Mobile: stack items and drop the divider */
        @media (max-width: 720px) {
          .metrics-grid { grid-template-columns: 1fr; }
          .metric:not(:last-child)::after { display: none; }
          .metric { padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,.12); }
          .metric:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="us-landing-page-container">
        <div className={`metrics-grid ${isVisible ? "visible" : ""}`}>
          {metrics.map((m, i) => (
            <div className="metric" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="metric__badge">{m.label}</span>
              <div className="metric__value">{m.value}</div>
              <div className="metric__desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
