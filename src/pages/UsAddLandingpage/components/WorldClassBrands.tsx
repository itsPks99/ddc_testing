"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

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

function useMultipleScrollAnimations(count: number) {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(new Array(count).fill(false))
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
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

      // Check if section is in sticky zone
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const progress = Math.abs(rect.top) / (containerHeight - windowHeight)
        setScrollProgress(progress)
        const cardIndex = Math.min(Math.floor(progress * 8), 7)
        setCurrentCard(cardIndex)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { containerRef, currentCard, scrollProgress }
}

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
      image: "public/assets/us-landing-page/Website cards- 2.png",
    },
    {
      name: "Manvi Daga",
      rating: 5,
      description:
        "We launched Manvi Daga's fashion Shopify store, creating a seamless shopping experience with remarkable results.",
      metrics: { CRO: "+35%", AOV: "+40%", REV: "+85%" },
      color: "us-landing-page-card-pink",
      image: "/goodbug-website-mockup.png",
    },
    {
      name: "Senthera World",
      rating: 5,
      description:
        "A natural beauty brand's Shopify store, focusing on organic products and sustainable shopping experience.",
      metrics: { CRO: "+28%", AOV: "+20%", REV: "+55%" },
      color: "us-landing-page-card-blue",
      image: "/healthfab-website-mockup.png",
    },
    {
      name: "Nauvab Footwear",
      rating: 5,
      description:
        "Custom Shopify development for premium footwear brand with enhanced user experience and mobile optimization.",
      metrics: { CRO: "+22%", AOV: "+30%", REV: "+65%" },
      color: "us-landing-page-card-orange",
      image: "/footwear-ecommerce-website.png",
    },
    {
      name: "July Issue",
      rating: 5,
      description:
        "Fashion e-commerce platform with advanced filtering, wishlist functionality, and seamless checkout process.",
      metrics: { CRO: "+18%", AOV: "+35%", REV: "+48%" },
      color: "us-landing-page-card-purple",
      image: "/fashion-ecommerce-website.png",
    },
    {
      name: "Anthi Naturals",
      rating: 5,
      description:
        "Organic beauty products Shopify store with subscription model and customer loyalty program integration.",
      metrics: { CRO: "+25%", AOV: "+28%", REV: "+58%" },
      color: "us-landing-page-card-green",
      image: "/natural-beauty-website.png",
    },
    {
      name: "Drink Sober",
      rating: 5,
      description:
        "Beverage e-commerce platform with age verification, subscription services, and inventory management system.",
      metrics: { CRO: "+20%", AOV: "+32%", REV: "+52%" },
      color: "us-landing-page-card-teal",
      image: "/beverage-ecommerce-website.png",
    },
    {
      name: "Geum Jewels",
      rating: 5,
      description:
        "Luxury jewelry Shopify store with AR try-on feature, custom product configurator, and premium checkout experience.",
      metrics: { CRO: "+30%", AOV: "+45%", REV: "+78%" },
      color: "us-landing-page-card-yellow",
      image: "/luxury-jewelry-ecommerce.png",
    },
  ]

  return (
    <div id="world-brands" ref={containerRef} className="us-landing-page-world-brands us-landing-page-sticky-section-8">
      <div className="us-landing-page-sticky-content">
        <div ref={ref} className="us-landing-page-container">
          <div className="us-landing-page-testimonials-header">
            <div
              ref={setRef(0)}
              className={`us-landing-page-badge us-landing-page-animate-fade-up ${visibleElements[0] ? "visible" : ""}`}
            >
              World Class Brands
            </div>
            <h2
              ref={setRef(1)}
              className={`us-landing-page-world-brands-title us-landing-page-animate-fade-up us-landing-page-animate-delay-2 ${visibleElements[1] ? "visible" : ""}`}
            >
              World Class Brand <span className="us-landing-page-text-orange">Rely</span>{" "}
              <span className="us-landing-page-text-pink">On Us</span>
            </h2>
          </div>

          <div className="us-landing-page-world-brands-sticky-container">
            <div
              className={`us-landing-page-world-brands-horizontal-8 ${isVisible ? "visible" : ""}`}
              style={{
                transform: `translateX(-${scrollProgress * (caseStudies.length - 1) * (100 / caseStudies.length)}%)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {[...caseStudies, ...caseStudies].map((study, index) => (
                <div
                  key={`${study.name}-${index}`}
                  ref={index < 8 ? setRef(index + 2) : undefined}
                  className={`us-landing-page-card us-landing-page-brand-card-8 ${study.color} us-landing-page-animate-scale us-landing-page-animate-delay-${(index % 8) + 1} ${index < 8 && visibleElements[index + 2] ? "visible" : ""} ${index % 8 === currentCard ? "us-landing-page-active-card" : ""}`}
                >
                  <div>
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.name} case study`}
                      className="us-landing-page-brand-image"
                    />
                  </div>
                  <div className="us-landing-page-brand-header">
                    <h3 className="us-landing-page-brand-name">{study.name}</h3>
                    <div className="us-landing-page-star-rating">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="us-landing-page-star" />
                      ))}
                    </div>
                  </div>
                  <p className="us-landing-page-brand-description">{study.description}</p>
                  <div className="us-landing-page-brand-metrics">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="us-landing-page-metric">
                        <div className="us-landing-page-metric-label">{key}</div>
                        <div className="us-landing-page-metric-number">{value}</div>
                        <div className="us-landing-page-metric-type">
                          {key === "CRO" ? "Conversion Rate" : key === "AOV" ? "Avg. Order Value" : "Revenue"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
