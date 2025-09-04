
import React, { useEffect, useRef, useState } from "react";

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  // EXACTLY six images → displayed as 2 cards (3 per card on desktop, 2 per card on phones)
  const images = [
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0006.jpg?v=1756986849",
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0010_291e1182-d2fe-4082-8104-d38e12a1e62e.jpg?v=1756987566",
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0011.jpg?v=1756986923", // replace if needed
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0007.jpg?v=1756986922",
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0007.jpg?v=1756986922",
    "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250904-WA0009.jpg?v=1756986922", // replace if needed
  ].filter(Boolean);

  // Split into two groups of three
  const groups = [images.slice(0, 3), images.slice(3, 6)];

  return (
    <section id="case-studies" ref={ref} className="us-landing-page-case-studies cs-section cs-dark">
      <style>{`
        .cs-section { padding-block: clamp(48px, 7vw, 96px); --phoneH: clamp(260px, 55vh, 560px); }
        .cs-dark { background:#0b0d10; color:#fff; }
        .cs-wrap { display: grid; gap: clamp(20px, 3vw, 32px); }

        /* Header (kept exactly like before) */
        .cs-kicker { font-weight: 900; font-size: clamp(32px, 3.8vw, 48px); line-height: 1.05; background: linear-gradient(90deg, #ff7a59, #ff66b3, #a855f7); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -0.02em; }
        .cs-title { margin: 6px 0 0 0; font-weight: 800; font-size: clamp(30px, 5.8vw, 64px); line-height: 1.08; letter-spacing: -0.02em; color:#fff; }

        /* Two cards */
        .cs-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(28px, 3.5vw, 48px); }
        .cs-rail { background:#bfe1ff; border-radius: 24px; padding: clamp(14px, 2vw, 22px); overflow: hidden; opacity:0; transform: translateY(10px); transition: opacity .5s ease, transform .5s ease; }
        .visible .cs-rail { opacity:1; transform: translateY(0); }

        /* Phone frames inside each card */
        .cs-images { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(12px, 1.8vw, 24px); align-items: start; justify-items: stretch; }
        .phone {aspect-ratio: 9 / 19; background:#fff; border-radius: 20px; padding: clamp(10px, 1.2vw, 14px); border: 1px solid rgba(2,6,23,.08); box-shadow: 0 12px 28px rgba(2,6,23,.18); display: flex; align-items: flex-start; justify-content: center; }
        .phone__img { max-height: 100%; width: 100%; height: 100%; object-fit: fill; object-position: top center; border-radius: 12px; display:block; }
        .cs-hide-mobile { display:block; }

        /* Responsive: stack the two cards, and show only 2 images per card */
        @media (max-width: 900px) { .cs-list { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .cs-images { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cs-hide-mobile { display:none !important; }
          .cs-section { --phoneH: 360px; }
        }
      `}</style>

      <div className="us-landing-page-container cs-wrap">
        {/* Keep the title EXACTLY like earlier */}
        <header>
          <div className="cs-kicker">Featured Case Study</div>
          {/* <h2 className="cs-title">The Good Stuff’s Flawless Gummies</h2> */}
        </header>

        <div className={`cs-list ${isVisible ? "visible" : ""}`}>
          {groups.map((group, idx) => (
            <div className="cs-rail" key={`group-${idx}`}>
              <div className="cs-images">
                {group.map((src, i) => (
                  <div className={`phone ${i === 2 ? "cs-hide-mobile" : ""}`} key={`img-${idx}-${i}`}>
                    <img className="phone__img" src={src || "/placeholder.svg"} alt={`Case Study image ${idx * 3 + i + 1}`} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}