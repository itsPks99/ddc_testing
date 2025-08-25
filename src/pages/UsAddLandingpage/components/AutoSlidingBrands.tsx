"use client"

export default function AutoSlidingBrands() {
  const brandImages = [
    { src: "/assets/us-landing-page/website-cards-1.png", alt: "E-commerce websites showcase" },
    { src: "/assets/us-landing-page/website-cards-2.png", alt: "Footwear brand websites" },
    { src: "/assets/us-landing-page/website-cards-3.png", alt: "Fashion brand websites" },
    { src: "/assets/us-landing-page/website-cards-4.png", alt: "Beauty brand websites" },
    { src: "/assets/us-landing-page/website-cards-5.png", alt: "Beverage brand websites" },
    { src: "/assets/us-landing-page/website-cards-6.png", alt: "Jewelry brand websites" },
    { src: "public/assets/us-landing-page/website-cards-7.png", alt: "Premium brand websites" },
    { src: "public/assets/us-landing-page/website-cards-8.png", alt: "Case study websites" },
  ]

  return (
    <div className="us-landing-page-brands-section">
      <div className="us-landing-page-brands-slider">
        {brandImages.map((brandImages, imageIndex) => (
          <div key={`${imageIndex}`} className="us-landing-page-brands-item">
            <img src={brandImages.src || "/placeholder.svg"} alt={brandImages.alt} className="us-landing-page-brands-image" />
          </div>
        ))}
      </div>
    </div>
  )
}
