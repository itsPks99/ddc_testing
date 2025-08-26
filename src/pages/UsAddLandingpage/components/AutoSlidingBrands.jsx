
import React from "react";


export default function PortfolioStrip() {
  const images = [
    "/assets/us-landing-page/Websitecards-1.png",
    "/assets/us-landing-page/Websitecards-2.png",
    "/assets/us-landing-page/Websitecards-3.png",
    "/assets/us-landing-page/Websitecards-4.png",
    "/assets/us-landing-page/Websitecards-5.png",
    "/assets/us-landing-page/Websitecards-6.png",
    "/assets/us-landing-page/Websitecards-7.png",
    "/assets/us-landing-page/Websitecards-8.png",
  ];

  const slides = [...images, ...images];

  return (
    <section
      className="portfolio-strip"
      style={{
        // Compact sizes with clamps so they DON'T grow too tall on large screens
        "--cardW": "clamp(160px, 18vw, 240px)",
        "--cardH": "clamp(460px, 38vh, 540px)",
        "--gap": "20px",
        "--radius": "10px",
        "--duration": "36s",
        "height": "600px",
    
      }}
    >
      <style>{styles}</style>

      <div className="strip-mask">
        <div className="track track--rtl">
          {slides.map((src, i) => (
            <div className="us-landing-card" key={`pf-${i}`}>
              <img
                src={src}
                alt="Portfolio screenshot"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = `
.portfolio-strip {align-content: center; position: relative; width: 100%; padding-block: 0; height: calc(var(--cardH) + 0px);  }

/* Edge fade like the uploaded layout */
.strip-mask { background: #fffffff; overflow: hidden; mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%); -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%); }

.track { display: flex; align-items: center; gap: var(--gap); width: max-content; padding-inline: var(--gap); }
/* Right → Left motion */
.track--rtl { animation: slideLeft var(--duration) linear infinite; }
/*.portfolio-strip:hover .track--rtl { animation-play-state: paused; }*/

.us-landing-card { margin: 0; width: var(--cardW); height: var(--cardH); flex: 0 0 auto; border-radius: var(--radius); overflow: hidden; background: transparent; box-shadow: none; border: none; display: grid; place-items: center; }
.us-landing-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

@keyframes slideLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Keep it compact on all screens; only tighten gaps on small */
@media (max-width: 640px) { .track { gap: 14px; } }
@media (prefers-reduced-motion: reduce) { .track--rtl { animation: none; transform: translateX(-25%); } }
`;
