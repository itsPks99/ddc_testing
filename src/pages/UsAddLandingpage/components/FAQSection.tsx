"use client"

import { useEffect, useRef, useState } from "react"
import { Plus } from "lucide-react"

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

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the difference between landing pages and product pages?",
      answer:
        "Landing pages are designed for specific campaigns and conversions, while product pages showcase individual products in your catalog.",
    },
    {
      question: "Will my website have both the landing page and the product page?",
      answer:
        "Yes, we can create both landing pages and product pages that work together seamlessly to maximize your conversion rates.",
    },
    {
      question: "What if I have 100 products and want custom treatment for all of them?",
      answer:
        "We offer scalable solutions and can work with you to prioritize the most important products and create templates for others.",
    },
    {
      question: "Will you create my entire website if asked?",
      answer:
        "Yes, we offer complete website development services beyond just landing pages, including full e-commerce solutions.",
    },
    {
      question: "Do you work with platforms other than Shopify?",
      answer:
        "While we specialize in Shopify, we also work with other platforms like WooCommerce, Magento, and custom solutions.",
    },
    {
      question: "How will these landing pages work better than my current pages?",
      answer:
        "Our landing pages are optimized for conversion using proven psychology principles, A/B testing, and data-driven design decisions.",
    },
    {
      question: "What increase in the conversion rate should I expect?",
      answer:
        "While results vary, our clients typically see 20-100% improvement in conversion rates within the first month.",
    },
    {
      question: "Are you the right strategists for my brand?",
      answer:
        "We work best with growth-focused D2C brands that value data-driven results and are committed to long-term success.",
    },
  ]

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
          <div className="us-landing-page-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="us-landing-page-faq-item">
                <button
                  className="us-landing-page-faq-question"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <Plus className={`us-landing-page-faq-icon ${openFAQ === index ? "rotated" : ""}`} />
                </button>
                {openFAQ === index && (
                  <div className="us-landing-page-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
