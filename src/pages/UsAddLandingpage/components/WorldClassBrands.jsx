"use client"

import {useEffect, useRef, useState} from "react"
import {Star} from "lucide-react"

/* ---------- helpers (no TS) ---------- */
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, {threshold: 0.1})
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return {ref, isVisible}
}

function useMultipleScrollAnimations(count) {
  const [visibleElements, setVisibleElements] = useState(
    new Array(count).fill(false)
  )
  const refs = useRef([])

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
      }, {threshold: 0.1})
      observer.observe(ref)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [count])

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }
  return {visibleElements, setRef}
}

/* ---------- component: carousel (page-wise slide) ---------- */
export default function WorldClassBrands() {
  const {ref, isVisible} = useScrollAnimation()
  const {visibleElements, setRef} = useMultipleScrollAnimations(10)

  const caseStudies = [
    {
      name: "Tieva Jewels",
      rating: 5,
      description:
        "A premium jewelry e-commerce store with custom Shopify development, optimized for luxury shopping experience.",
      metrics: {CRO: "+15%", AOV: "+25%", REV: "+45%"},
      color: "us-landing-page-card-gray",
      images: ["/assets/us-landing-page/Tievadesktop.png", "/assets/us-landing-page/tievamobile.png"],
      tint: "#F2F2F2",
    },
    {
      name: "Manvi Daga",
      rating: 5,
      description:
        "We launched Manvi Daga's fashion Shopify store, creating a seamless shopping experience with remarkable results.",
      metrics: {CRO: "+35%", AOV: "+40%", REV: "+85%"},
      color: "us-landing-page-card-pink",
      images: ["/assets/us-landing-page/Manvidesktop.png", "/assets/us-landing-page/Manvimobile.png"],
      tint: "#FBE8F3",
    },
    {
      name: "Senthera World",
      rating: 5,
      description:
        "A natural beauty brand's Shopify store, focusing on organic products and sustainable shopping experience.",
      metrics: {CRO: "+28%", AOV: "+20%", REV: "+55%"},
      color: "us-landing-page-card-blue",
      images: ["/assets/us-landing-page/Sentharadesktop.png", "/assets/us-landing-page/Sentharamobile.png"],
      tint: "#EEF7FF",
    },
    {
      name: "Nauvab Footwear",
      rating: 5,
      description:
        "Custom Shopify development for premium footwear brand with enhanced user experience and mobile optimization.",
      metrics: {CRO: "+22%", AOV: "+30%", REV: "+65%"},
      color: "us-landing-page-card-orange",
      images: ["/assets/us-landing-page/Navab.png", "/assets/us-landing-page/Navabphone.png"],
    },
    {
      name: "July Issue",
      rating: 5,
      description:
        "Fashion e-commerce platform with advanced filtering, wishlist functionality, and seamless checkout process.",
      metrics: {CRO: "+18%", AOV: "+35%", REV: "+48%"},
      color: "us-landing-page-card-purple",
      images: ["/assets/portfolioimages/julyissue/julyissuedesktop1.png", "/assets/portfolioimages/julyissue/julyphone.png"],
    },
  ]

  // allow `images` array OR fallback to single `image`; also strip leading "public/"
  const clean = (p) => (p || "").replace(/^public\//, "")
  const pair = (cs) =>
    Array.isArray(cs.images) && cs.images.length
      ? [clean(cs.images[0]), clean(cs.images[1] || cs.images[0])]
      : [clean(cs.image), clean(cs.image)]

  // ---- Carousel state (page-wise) ----
  const [perView, setPerView] = useState(3)     // 3 on desktop, 1 on mobile
  const [index, setIndex] = useState(0)         // current *item* index; we move by page (perView)

  // handle responsiveness
  useEffect(() => {
    const setPV = () => {
      const pv = window.innerWidth <= 768 ? 1 : 3
      setPerView(prev => {
        if (prev !== pv) {
          setIndex(i => Math.min(Math.floor(i / pv) * pv, Math.max(0, caseStudies.length - pv)))
        }
        return pv
      })
    }
    setPV()
    window.addEventListener("resize", setPV)
    return () => window.removeEventListener("resize", setPV)
  }, [caseStudies.length])

  // page math
  const total = caseStudies.length
  const pages = Math.max(1, Math.ceil(total / perView))
  const gotoPageByDelta = (deltaPages) => {
    const currentPage = Math.floor(index / perView)
    let nextPage = currentPage + deltaPages
    if (nextPage < 0) nextPage = pages - 1
    if (nextPage > pages - 1) nextPage = 0
    setIndex(nextPage * perView)
  }
  const prev = () => gotoPageByDelta(-1)
  const next = () => gotoPageByDelta(1)

  return (
    <div id="world-brands" className="us-landing-page-world-brands">
      <style>{`
        /* carousel shell */
        .wcb-shell { position: relative; }
        .wcb-viewport { overflow: hidden; position: relative; }
        .wcb-track {
          display: flex;
          gap: 16px;
          will-change: transform;
          transition: transform 450ms cubic-bezier(.22, .61, .36, 1);
          padding: 20px 0;
        }
        .wcb-slide {
          flex: 0 0 calc((100% - (16px * ${perView - 1})) / ${perView});
          max-width: calc((100% - (16px * ${perView - 1})) / ${perView});
        }

        /* nav buttons - transparent bg */
        .wcb-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background:#bebaba1a;
          padding: 0;
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 2;
          border-radius: 50%;

        }
        .wcb-nav:focus-visible { outline: 2px solid rgba(0,0,0,.25); outline-offset: 2px; }
        .wcb-prev { left: -20px; }
        .wcb-next { right: -20px; }
        .wcb-nav svg { width: 28px; height: 28px; opacity: .9; }
        .wcb-nav:hover svg { opacity: 1; }

        /* card / image styling */
        .wcb-card { display:grid; gap:16px; background:#fff; border-radius:18px; padding:clamp(14px,2vw,18px); box-shadow:0 10px 28px rgba(2,6,23,.06); }

        .wcb-frame {
          background:#fff;
          border:1px solid rgba(2,6,23,.08);
          border-radius:12px;
          overflow:hidden;
          gap:8px;
          display:grid;
          grid-template-columns: 4fr 1fr;
          align-items:flex-start;
          justify-content:center;
        
        }
        .wcb-frame img {
          height:100%;
          width:auto;
          max-width:100%;
          object-fit:contain;
          object-position:top center;
          display:block;
          transform:translateZ(0);
        }
        .wcb-head { display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .wcb-name { font-weight:800; font-size:clamp(18px,2vw,18px); }
        .wcb-stars { color:#ff6b00; display:inline-flex; gap:4px; }
        .wcb-desc { color:#4b5563; font-size:14px; line-height:1.55; }
        .wcb-stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(12px,1.6vw,18px); }
        .wcb-stat { display:grid; justify-items:center; gap:6px; position:relative; }
        .wcb-stat:not(:first-child)::before { content:""; position:absolute; left:-8px; top:12%; bottom:12%; width:1px; background:rgba(2,6,23,.1); }
        .wcb-pill { background:#eef0f2; color:#3b3f45; font-weight:700; font-size:11px; padding:6px 10px; border-radius:999px; }
        .wcb-num { font-weight:900; font-size:clamp(18px,2.8vw,18px); }
        .wcb-type { color:#6b7280; font-size:13px; }

        @media (max-width:768px){
          .wcb-slide { flex-basis: 100%; max-width: 100%; }
          .wcb-prev { left: -2px; }
          .wcb-next { right: -2px; }
          .wcb-frame { min-height: clamp(200px, 48vw, 320px); grid-template-columns: 1fr 1fr; }
        }
        @media (max-width:480px){
          .wcb-frame { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="us-landing-page-sticky-content">
        <div ref={ref} className="us-landing-page-container wcb-shell">
          {/* header */}
          <div className="us-landing-page-testimonials-header">
            <div className={`us-landing-page-badge us-landing-page-animate-fade-up ${isVisible ? "visible" : ""}`}>
              World Class Brands
            </div>
            <h2 className={`us-landing-page-world-brands-title us-landing-page-animate-fade-up us-landing-page-animate-delay-2 ${isVisible ? "visible" : ""}`}>
              World Class Brands <span className="us-landing-page-text-orange">Rely</span>{" "}
              <span className="us-landing-page-text-pink">On Us</span>
            </h2>
          </div>

          {/* nav buttons */}
          <button aria-label="Previous" className="wcb-nav wcb-prev" onClick={prev}>
            <svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Next" className="wcb-nav wcb-next" onClick={next}>
            <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {/* carousel */}
          <div className="wcb-viewport">
            <div
              className="wcb-track"
              style={{transform: `translateX(-${(Math.floor(index / perView)) * 100}%)`}}
            >
              {caseStudies.map((study, i) => {
                const [desk, mob] = pair(study)
                return (
                  <div
                    key={`${study.name}-${i}`}
                    ref={i < 5 ? setRef(i + 2) : undefined}
                    className={`wcb-slide us-landing-page-card us-landing-page-brand-card-8 ${study.color} us-landing-page-animate-scale us-landing-page-animate-delay-${(i % 8) + 1} ${i < 5 && visibleElements[i + 2] ? "visible" : ""} wcb-card`}
                  >
                    {/* mockups */}
                    <div className="wcb-frame">
                      <img src={desk || "/placeholder.svg"} alt={`${study.name} desktop mockup`} />
                      <img src={mob || "/placeholder.svg"} alt={`${study.name} mobile mockup`} />
                    </div>

                    {/* brand + stars */}
                    <div className="us-landing-page-brand-header wcb-head">
                      <h3 className="us-landing-page-brand-name wcb-name">{study.name}</h3>
                      <div className="us-landing-page-star-rating wcb-stars">
                        {[...Array(study.rating)].map((_, k) => (
                          <Star key={k} className="us-landing-page-star" size={16} />
                        ))}
                      </div>
                    </div>

                    {/* description */}
                    <p className="us-landing-page-brand-description wcb-desc">{study.description}</p>

                    {/* metrics */}
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
