"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

/* ---------- your original helpers (unchanged) ---------- */
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function useMultipleScrollAnimations(count: number) {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    new Array(count).fill(false)
  )
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => {
            const next = [...prev]
            next[index] = true
            return next
          })
        }
      }, { threshold: 0.1 })
      observer.observe(ref)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [count])

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el
  }

  return { visibleElements, setRef }
}

function useStickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentCard, setCurrentCard] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress = Math.abs(rect.top) / (containerHeight - windowHeight)
        setScrollProgress(progress)
        const cardIndex = Math.min(Math.floor(progress * 5), 4)
        setCurrentCard(cardIndex)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { containerRef, currentCard, scrollProgress }
}

/* ---------- component with uploaded layout + sticky ---------- */
export default function WorldClassBrands() {
  const { ref, isVisible } = useScrollAnimation()
  const { visibleElements, setRef } = useMultipleScrollAnimations(10)
  const { containerRef, currentCard, scrollProgress } = useStickyScroll()

  const caseStudies = [
    {
      name: "Tieva Jewels",
      rating: 5,
      description:
        "A premium jewelry e-commerce store with custom Shopify development, optimized for luxury shopping experience.",
      metrics: { CRO: "+15%", AOV: "+25%", REV: "+45%" },
      color: "us-landing-page-card-gray",
      images: ["/assets/us-landing-page/Tievadesktop.png", "/assets/us-landing-page/tievamobile.png"],
      tint: "#F2F2F2",
    },
    {
      name: "Manvi Daga",
      rating: 5,
      description:
        "We launched Manvi Daga's fashion Shopify store, creating a seamless shopping experience with remarkable results.",
      metrics: { CRO: "+35%", AOV: "+40%", REV: "+85%" },
      color: "us-landing-page-card-pink",
      image: "/assets/us-landing-page/Manvidesktop.png",
      images: ["/assets/us-landing-page/Manvidesktop.png", "/assets/us-landing-page/Manvimobile.png"],
      tint: "#FBE8F3",
    },
    {
      name: "Senthera World",
      rating: 5,
      description:
        "A natural beauty brand's Shopify store, focusing on organic products and sustainable shopping experience.",
      metrics: { CRO: "+28%", AOV: "+20%", REV: "+55%" },
      color: "us-landing-page-card-blue",
      image: "/assets/us-landing-page/Sentharadesktop.png",
      images: ["/assets/us-landing-page/Sentharadesktop.png", "/assets/us-landing-page/Sentharamobile.png"],
      tint: "#EEF7FF",
    },
    {
      name: "Nauvab Footwear",
      rating: 5,
      description:
        "Custom Shopify development for premium footwear brand with enhanced user experience and mobile optimization.",
      metrics: { CRO: "+22%", AOV: "+30%", REV: "+65%" },
      color: "us-landing-page-card-orange",
      image: "/assets/us-landing-page/Navab.png",
      images: ["/assets/us-landing-page/Navab.png", "/assets/us-landing-page/Navabphone.png"],
    },
    {
      name: "July Issue",
      rating: 5,
      description:
        "Fashion e-commerce platform with advanced filtering, wishlist functionality, and seamless checkout process.",
      metrics: { CRO: "+18%", AOV: "+35%", REV: "+48%" },
      color: "us-landing-page-card-purple",
      image: "/assets/portfolioimages/julyissue/julyissuedesktop1.png",
      images: ["/assets/portfolioimages/julyissue/julyissuedesktop1.png", "/assets/portfolioimages/julyissue/julyphone.png"],
    },
  ]

  // allow `images` array OR fallback to single `image`; also strip leading "public/"
  const clean = (p?: string) => (p || "").replace(/^public\//, "")
  const pair = (cs: any) =>
    Array.isArray(cs.images) && cs.images.length
      ? [clean(cs.images[0]), clean(cs.images[1] || cs.images[0])]
      : [clean(cs.image), clean(cs.image)]

  /* === UPDATED SCROLL MATH: scroll only across the first 5 items === */
  const TOTAL = caseStudies.length * 3        // because we render [...caseStudies, ...caseStudies]
  const VISIBLE = caseStudies.length          // we want to finish at the 5th card
  const rawTranslate = scrollProgress * (VISIBLE - 1) * (100 / TOTAL) // 4 * (100/10) = 40%
  const MAX_SHIFT = 36.0566                   // clamp (tweak if your gaps/margins change)
  const translatePct = Math.min(rawTranslate, MAX_SHIFT)

  return (
    <div
      id="world-brands"
      ref={containerRef}
      className="us-landing-page-world-brands us-landing-page-sticky-section-8"
    >
      {/* layout styles matching the upload, layered on top of your classes */}
      <style>{`
        .wcb-card { display:grid; gap:16px; background:#fff; border-radius:18px; padding:clamp(14px,2vw,18px); box-shadow:0 10px 28px rgba(2,6,23,.06); }
        /* keep your other rules the same... */

        .wcb-bay {
          /* you can adjust this height if needed */
          --tint:#f3f4f6;
          background:var(--tint);
          border-radius:16px;
          padding:clamp(10px,1.4vw,14px);
          display:grid;
          grid-template-columns:7fr 3fr;
          gap:clamp(10px,1.4vw,14px);
          align-items:stretch;
        }

        /* ✅ Top-align and normalize how images fill the frames */
        .wcb-frame {
          background:#fff;
          border:1px solid rgba(2,6,23,.08);
          border-radius:12px;
          overflow:hidden;
          gap:8px;
          /* align content to the top, center horizontally */
          display: grid;
          grid-template-columns: 4fr 1fr;
          align-items:flex-start;
          justify-content:center;
        }

        /* image fills by height, stays top-aligned, never crops */
        .wcb-frame img {
          height:100%;          /* scale by height for consistent alignment */
          width:auto;           /* respect aspect ratio */
          max-width:100%;       /* don’t overflow horizontally */
          object-fit:contain;   /* no cropping */
          object-position:top center; /* ⬆️ align to top edge */
          display:block;
          transform:translateZ(0); /* avoid subpixel blur on some GPUs */

        }

        .wcb-head { display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .wcb-name { font-weight:800; font-size:clamp(18px,2vw,18px); }
        .wcb-stars { color:#ff6b00; display:inline-flex; gap:4px; }
        .wcb-desc { color:#4b5563; font-size:14px; line-height:1.55; }
        .wcb-stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(12px,1.6vw,18px); }
        .wcb-stat { display:grid; justify-items:center; gap:6px; position:relative; }
        .wcb-stat:not(:first-child)::before { content:""; position:absolute; left:-8px; top:12%; bottom:12%; width:1px; background:rgba(2,6,23,.1); }
        .wcb-pill { background:#eef0f2; color:#3b3f45; font-weight:700; font-size:11px; padding:6px 10px; border-radius:999px; alignment-content:center; }
        .wcb-num { font-weight:900; font-size:clamp(18px,2.8vw,18px); }
        .wcb-type { color:#6b7280; font-size:13px; }

        /* mobile: stack the two mockups vertically but keep two per card */
        @media (max-width:600px){ .wcb-bay{ grid-template-columns:1fr; } }
      `}</style>

      <div className="us-landing-page-sticky-content">
        <div ref={ref} className="us-landing-page-container">
          {/* header stays exactly as your earlier version */}
          <div className="us-landing-page-testimonials-header">
            <div
              ref={setRef(0)}
              className={`us-landing-page-badge us-landing-page-animate-fade-up ${visibleElements[0] ? "visible" : ""}`}
            >
              World Class Brands
            </div>
            <h2
              ref={setRef(1)}
              className={`us-landing-page-world-brands-title us-landing-page-animate-fade-up us-landing-page-animate-delay-2 ${visibleElements[1] ? "visible" : ""
                }`}
            >
              World Class Brands <span className="us-landing-page-text-orange">Rely</span>{" "}
              <span className="us-landing-page-text-pink">On Us</span>
            </h2>
          </div>

          {/* sticky horizontal container (unchanged behavior) */}
          <div className="us-landing-page-world-brands-sticky-container">
            <div
              className={`us-landing-page-world-brands-horizontal-8 ${isVisible ? "visible" : ""}`}
              style={{
                transform: `translateX(-${translatePct}%)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {[...caseStudies, ...caseStudies].map((study, index) => {
                const [desk, mob] = pair(study)
                return (
                  <div
                    key={`${study.name}-${index}`}
                    ref={index < 5 ? setRef(index + 2) : undefined}
                    className={`us-landing-page-card us-landing-page-brand-card-8 ${study.color} us-landing-page-animate-scale us-landing-page-animate-delay-${(index % 8) + 1
                      } ${index < 5 && visibleElements[index + 2] ? "visible" : ""} ${index % 5 === currentCard ? "us-landing-page-active-card" : ""
                      } wcb-card`}
                  >
                    {/* uploaded layout: two-image mockup bay */}
                    {/* <div className="wcb-bay" style={{ ["--tint" as any]: (study as any).tint || "#F3F4F6" }}>
                      <div className="wcb-frame">
                        <img src={desk || "/placeholder.svg"} alt={`${study.name} desktop mockup`} />
                        <img src={mob || "/placeholder.svg"} alt={`${study.name} mobile mockup`} />
                      </div>
                      <div className="wcb-frame">
                        <img src={mob || "/placeholder.svg"} alt={`${study.name} mobile mockup`} />
                      </div>
                    </div> */}

                    <div className="wcb-frame">
                      <img src={desk || "/placeholder.svg"} alt={`${study.name} desktop mockup`} />
                      <img src={mob || "/placeholder.svg"} alt={`${study.name} mobile mockup`} />
                    </div>

                    {/* brand + stars (same classes so your theme applies) */}
                    <div className="us-landing-page-brand-header wcb-head">
                      <h3 className="us-landing-page-brand-name wcb-name">{study.name}</h3>
                      <div className="us-landing-page-star-rating wcb-stars">
                        {[...Array(study.rating)].map((_, i) => (
                          <Star key={i} className="us-landing-page-star" size={16} />
                        ))}
                      </div>
                    </div>

                    {/* description */}
                    <p className="us-landing-page-brand-description wcb-desc">{study.description}</p>

                    {/* metrics with separators */}
                    <div className="us-landing-page-brand-metrics wcb-stats">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="us-landing-page-metric wcb-stat">
                          <div className="us-landing-page-metric-label wcb-pill">{key}</div>
                          <div className="us-landing-page-metric-number wcb-num">{value}</div>
                          <div className="us-landing-page-metric-type wcb-type">
                            {key === "CRO" ? "Conversion Rate" : key === "AOV" ? "Avg. Order Value" : "Revenue"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
