"use client"

import { useState, useRef } from "react"
import "./ShopifyPartnerSection.css"
import ringSound from "/public/assets/shopify_sale_sound.mp3"
import { SiShopify } from "react-icons/si";
import { CloudCog } from "lucide-react";

const ShopifyPartnerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleLearnMoreClick = () => {
    console.log("Learn more clicked")
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  const handleLearnMoreClick1 = (e) => {
    window.open("https://www.shopify.com/in/blog/what-is-shopify", "_blank", "noopener,noreferrer")
  }

  

  return (
    <section className="shopify-partner-section">
      <div className="shopify-partner-content">
        <h1 className="shopify-partner-title">
          <span>India's </span>
         
          <span className="highlight-text">leading</span> Shopify
          <br />
          Premier Partner
        </h1>

        <div  className={`shopify-logo-container ${isPlaying ? "playing" : ""}`} onClick={handleLearnMoreClick}>
          <div className="shopify-logo-pill">
            <div className="shopify-logo-circle">
        
              <img className="logo-img" src="./assets/shopify-logo.svg" alt="shopify logo" /> 
               {/* <SiShopify className="shopify-logo" /> */}
            </div>
          </div>
        </div>

        <div className="shopify-tagline">
          <h2>
            Not to brag, but we're really
            <br />
            good at Shopify. Find out why.
          </h2>
          <button className={`learn-more-btn`} onClick={handleLearnMoreClick1}>
            
              Learn more
            
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={ringSound} onEnded={handleAudioEnd} />
    </section>
  )
}

export default ShopifyPartnerSection
