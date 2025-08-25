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
      name: "Manvi Tejpal",
      role: "Founder - Manvi Daga",
      rating: 5,
      text: "Delhi Digital Co. transformed our fashion brand's online presence with a stunning Shopify store. The mobile-first approach resulted in a 60% increase in mobile conversions and significantly improved our customer experience.",
    },
    {
      name: "Tieva Jewels Team",
      role: "Founder - Tieva Jewels",
      rating: 5,
      text: "Working with Delhi Digital Co. was a game-changer for our jewelry business. Their custom Shopify development increased our average order value by 45% and streamlined our entire sales process.",
    },
    {
      name: "Nauvab Team",
      role: "Founder - Nauvab Footwear",
      rating: 5,
      text: "The team at Delhi Digital Co. delivered an exceptional Shopify store that perfectly showcases our footwear collection. Our conversion rate improved by 35% within the first month of launch.",
    },
    {
      name: "Senthera World",
      role: "Founder - Senthera World",
      rating: 5,
      text: "Delhi Digital Co.'s expertise in e-commerce development helped us create a beautiful, high-performing Shopify store for our wellness products. The results exceeded our expectations with improved user engagement and sales.",
    },
  ]

  return (
    <div id="testimonials" ref={ref} className="us-landing-page-testimonials">
      <div className="us-landing-page-container">
        <div className="us-landing-page-testimonials-header">
          <div className="us-landing-page-testimonials-avatars">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="us-landing-page-avatar"></div>
            ))}
          </div>
          <h2 className="us-landing-page-testimonials-title">
            <span className="us-landing-page-text-orange">50+</span> Happy Clients
          </h2>
          <p className="us-landing-page-testimonials-subtitle">Trusted by growing e-commerce brands</p>
        </div>

        <div className="us-landing-page-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`us-landing-page-card us-landing-page-testimonial-card ${isVisible ? "visible" : ""} delay-${index * 100}`}
            >
              <p className="us-landing-page-testimonial-text">{testimonial.text}</p>
              <div className="us-landing-page-testimonial-author">
                <div className="us-landing-page-author-avatar"></div>
                <div className="us-landing-page-author-info">
                  <div className="us-landing-page-author-name">{testimonial.name}</div>
                  <div className="us-landing-page-author-role">{testimonial.role}</div>
                </div>
                <div className="us-landing-page-testimonial-rating">
                  <span className="us-landing-page-rating-number">{testimonial.rating}.0</span>
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
