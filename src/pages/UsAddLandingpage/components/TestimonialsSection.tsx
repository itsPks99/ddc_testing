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

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  const testimonials = [
    {
      name: "Manvi",
      role: "Founder - Manvi Daga",
      rating: 4.4,
      text: "This team transformed our outdated store into a modern, high-converting Shopify storefront. The design is sleek, mobile-friendly, and lightning fast. Since launch, our sales and engagement have improved dramatically. Truly Shopify experts!",
      avatar: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/gettyimages-1764821779-612x612.jpg?v=1756761795",
    },
    {
      name: "Suhail Bajpai",
      role: "Founder - Tieva Jewels",
      rating: 4.3,
      text: "From theme customization to advanced integrations, they handled our entire Shopify build flawlessly. They also optimized our checkout flow which boosted conversions right away. I highly recommend them for anyone serious about scaling on Shopify.",
      avatar: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/gettyimages-1540766473-612x612.jpg?v=1756761794",
    },
    {
      name: "Gautam Bali",
      role: "Founder - Nauvab Footwear",
      rating: 4.6,
      text: "We needed a partner who understood Shopify inside out—and that’s exactly what we found. They built custom features, streamlined our product pages, and connected us with marketing tools that doubled our ROI. Outstanding Shopify development team.",
      avatar: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/gettyimages-2183082245-612x612.jpg?v=1756761794",
    },
    {
      name: "Margarita",
      role: "Founder - Senthera World",
      rating: 4.5,
      text: "Our Shopify store is now a real asset to our growing business thanks to this agency. They combined beautiful design with smart functionality and supported it with solid marketing. Everything works seamlessly from product uploads to order tracking.",
      avatar: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/gettyimages-1987655119-612x612.jpg?v=1756761795",
    },
  ]

  return (
    <div id="testimonials" ref={ref} className="us-landing-page-testimonials">
      <div className="us-landing-page-container">
        <div className="us-landing-page-testimonials-header">
          <div className="us-landing-page-testimonials-avatars">
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={t.avatar}
                alt={t.name}
                className="us-landing-page-avatar"
              />
            ))}
          </div>
          <h2 className="us-landing-page-testimonials-title">
            <span className="us-landing-page-text-orange">50+</span> Happy Clients
          </h2>
          <p className="us-landing-page-testimonials-subtitle">
            Trusted by growing e-commerce brands
          </p>
        </div>

        <div className="us-landing-page-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`us-landing-page-card us-landing-page-testimonial-card ${isVisible ? "visible" : ""} delay-${index * 100}`}
            >
              <p className="us-landing-page-testimonial-text">{testimonial.text}</p>
              <div className="us-landing-page-testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="us-landing-page-author-avatar"
                />
                <div className="us-landing-page-author-info">
                  <div className="us-landing-page-author-name">{testimonial.name}</div>
                  <div className="us-landing-page-author-role">{testimonial.role}</div>
                </div>
                <div className="us-landing-page-testimonial-rating">
                  <span className="us-landing-page-rating-number">{testimonial.rating}</span>
                  <Star className="us-landing-page-star" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
