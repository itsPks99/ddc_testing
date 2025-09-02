"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Plus } from "lucide-react"

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

/* Single FAQ item with smooth height animation */
function FAQItem({ globalIndex, faq, isOpen, onToggle }) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const [maxH, setMaxH] = useState("0px")

  // measure on mount + whenever content or open state changes
  useEffect(() => {
    const measure = () => {
      if (!innerRef.current) return
      const h = innerRef.current.scrollHeight || 0
      setMaxH(isOpen ? `${h}px` : "0px")
    }
    measure()
    // re-measure on font load / window resize for accuracy
    const ro = new ResizeObserver(measure)
    if (innerRef.current) ro.observe(innerRef.current)
    window.addEventListener("resize", measure)
    // small rAF to catch first paint
    const raf = requestAnimationFrame(measure)

    return () => {
      window.removeEventListener("resize", measure)
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [isOpen, faq.answer])

  return (
    <div
      className={`us-landing-page-faq-item ${isOpen ? "is-open" : ""}`}
      key={globalIndex}
    >
      <button
        className="us-landing-page-faq-question"
        onClick={() => onToggle(isOpen ? null : globalIndex)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${globalIndex}`}
      >
        <span>{faq.question}</span>
        <Plus className={`us-landing-page-faq-icon ${isOpen ? "rotated" : ""}`} />
      </button>

      {/* Animated wrapper (height) */}
      <div
        id={`faq-panel-${globalIndex}`}
        ref={outerRef}
        className={`us-landing-page-faq-answer ${isOpen ? "open" : "closed"}`}
        style={{ maxHeight: maxH }}
        aria-hidden={!isOpen}
      >
        {/* Fading/slide inner */}
        <div ref={innerRef} className={`faq-answer-inner ${isOpen ? "show" : ""}`}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = useMemo(
    () => [
      {
        question: "What does your agency specialize in?",
        answer:
          "We are a full-service digital agency focused on Shopify development, custom builds, digital marketing campaigns, photography, product shoots, and social media management.",
      },
      {
        question: "Do you only work on Shopify projects?",
        answer:
          "Shopify is our core expertise, but we also provide custom development solutions and can integrate with other platforms when required.",
      },
      {
        question: "Can you build my entire website, not just landing pages?",
        answer:
          "Yes, we handle complete end-to-end website development — from Shopify storefronts and landing pages to full custom e-commerce solutions.",
      },
      {
        question: "Do you also manage digital marketing?",
        answer:
          "Absolutely. We run data-driven ad campaigns across Meta, Google, and other platforms, focused on driving measurable growth for your brand.",
      },
      {
        question: "Do you provide product photography and shoots?",
        answer:
          "Yes, we offer professional product photography and creative shoots to showcase your brand and products in the best light.",
      },
      {
        question: "Can you handle our social media accounts?",
        answer:
          "Yes, we provide end-to-end social media management including content creation, scheduling, engagement, and growth strategies.",
      },
      {
        question: "What if I have a large product catalog?",
        answer:
          "We design scalable solutions that handle hundreds of products efficiently, with custom strategies for your top-performing items.",
      },
      {
        question: "How do your landing pages perform better?",
        answer:
          "Our landing pages are optimized for conversions using proven design psychology, A/B testing, and performance-focused strategies.",
      },
      {
        question: "What kind of results can I expect?",
        answer:
          "While results vary, our clients typically see significant improvements in sales, engagement, and conversions within the first few weeks.",
      },
      {
        question: "Who do you work best with?",
        answer:
          "We work best with growth-focused D2C brands looking for premium Shopify builds, creative marketing, photography, and complete social media support.",
      },
    ],
    []
  )

  // hard split into two independent columns (desktop), stack on mobile
  const leftFAQs = faqs.filter((_, i) => i % 2 === 0)
  const rightFAQs = faqs.filter((_, i) => i % 2 === 1)

  return (
    <div id="faqs" ref={ref} className="us-landing-page-faq">
      <div className="us-landing-page-container">
        <div className="us-landing-page-faq-header">
          <div className="us-landing-page-badge">FAQs</div>
          <h2 className="us-landing-page-faq-title">
            Frequently Asked <span className="us-landing-page-text-pink">Questions</span>
          </h2>
        </div>

        <div className={`us-landing-page-faq-content ${isVisible ? "visible" : ""}`}>
          <div className="us-landing-page-faq-columns">
            <div className="us-landing-page-faq-col">
              {leftFAQs.map((faq, index) => {
                const globalIndex = index * 2
                const isOpen = openFAQ === globalIndex
                return (
                  <FAQItem
                    key={globalIndex}
                    globalIndex={globalIndex}
                    faq={faq}
                    isOpen={isOpen}
                    onToggle={setOpenFAQ}
                  />
                )
              })}
            </div>

            <div className="us-landing-page-faq-col">
              {rightFAQs.map((faq, index) => {
                const globalIndex = index * 2 + 1
                const isOpen = openFAQ === globalIndex
                return (
                  <FAQItem
                    key={globalIndex}
                    globalIndex={globalIndex}
                    faq={faq}
                    isOpen={isOpen}
                    onToggle={setOpenFAQ}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
