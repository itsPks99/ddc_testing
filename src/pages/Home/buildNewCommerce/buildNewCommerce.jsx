import { useEffect, useRef } from "react";
import "./buildNewCommerce.css";

const BuildNewCommerce = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)
  const personImageRef = useRef(null)
  const brandCardRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const leftCard = leftCardRef.current
    const rightCard = rightCardRef.current
    const personImage = personImageRef.current
    const brandCard = brandCardRef.current

    const handleMouseMove = (e) => {
      // Calculate mouse position relative to the center of the section
      const rect = section.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center (normalized between -1 and 1)
      const distanceX = (e.clientX - centerX) / (rect.width / 2)
      const distanceY = (e.clientY - centerY) / (rect.height / 2)

      // Text follows cursor direction (subtle movement)
      text.style.transform = `translate(${distanceX * 15}px, ${distanceY * 10}px)`

      // Images move in opposite direction (more pronounced movement)
      leftCard.style.transform = `translate(${-distanceX * 25}px, ${-distanceY * 15}px)`
      rightCard.style.transform = `translate(${-distanceX * 25}px, ${-distanceY * 15}px)`
      personImage.style.transform = `translate(${-distanceX * 20}px, ${-distanceY * 10}px)`
      brandCard.style.transform = `translate(${-distanceX * 30}px, ${-distanceY * 20}px)`
    }

    section.addEventListener("mousemove", handleMouseMove)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="build-commerce-section" ref={sectionRef}>
      <div className="commerce-container">
        <div className="stats-cards">
          <div className="stat-card conversion-card" ref={leftCardRef}>
            <div className="card-content">
              <p className="Gilroy-Light">Conversion Boost</p>
              <h3 className="card-value">+12%</h3>
              <div className="chart">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
              </div>
            </div>
          </div>

          <div className="stat-card brands-card" ref={rightCardRef}>
            <div className="card-content">
              <p className="Gilroy-Light"> Brands Scaled</p>
              <h3 className="card-value">150+</h3>
              
            </div>
          </div>
        </div>

        <div className="headline-container" ref={textRef}>
          <h1 className="headline gilroy-heavy">
            <span className="headline-dark">Trasforming   </span>
            <span className="headline-light">Clicks Into</span>
            <br />
            <span className="headline-dark">Customers.</span>
          </h1>
        </div>

        <div className="info-cards">
          <div className="info-card person-card" ref={personImageRef}>
            <div className="card-content">
              {/* <p className="card-subtitle">Beyond Headless</p> */}
              <h3 className="card-title">
                Performance-Driven 
                <br />
                Paid Ads
              </h3>
            </div>
          </div>

          <div className="info-card brand-card" ref={brandCardRef}>
            <div className="card-content">
              <h3 className="card-title">Branding & Social Media Excellence</h3>
              <div className="product-image">
                <img src="/assets/aboutddc.png" alt="Product" />
              </div>
              <svg className="homeArrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              {/* <div className="podcast-link">
                <p>Listen to our podcast</p>
                <span className="arrow">→</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildNewCommerce

