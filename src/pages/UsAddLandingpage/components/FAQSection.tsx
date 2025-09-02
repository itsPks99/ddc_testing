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
