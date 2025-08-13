import React, { useEffect, useRef, useState } from "react";
import ImageZoomSection from "../ImageZoomSection/imageZoomSection";
import "./StoryCards.css";

const StoryCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const totalCards = 5;
  const storyCardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!storyCardsRef.current) return;

      const sectionTop = storyCardsRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const cardHeight = viewportHeight; // Adjust for when to switch cards

      // Calculate which card should be active
      const newActiveIndex = Math.floor((scrollY - sectionTop) / cardHeight);
      if (newActiveIndex >= 0 && newActiveIndex < totalCards) {
        setActiveCardIndex(newActiveIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalCards]);

  return (
    <>
      <div className="storyCardsWrapper" ref={storyCardsRef}>
        <div className="storyCardsSection">
          <h2 className="storyCardsTitle">Started from the bottom</h2>

          <div className="storyCardsStack">
            {[...Array(totalCards)].map((_, index) => (
              <div
                key={index}
                className={`storyCard ${index === activeCardIndex ? "active" : ""}`}
              >
                <div className="storyCardImage">
                  <img
                    src={[
                     ][index]}
                    alt={`Story card ${index + 1}`}
                  />
                </div>
                <div className="storyCardContent">
                  <span className="storyCardLabel">
                    {[][index]}
                  </span>
                  <h3>
                    {[][index]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageZoomSection />
    </>
  );
};

export default StoryCards;
