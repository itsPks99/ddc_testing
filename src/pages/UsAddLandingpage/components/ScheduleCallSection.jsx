"use client"
import React from "react";
import "./ScheduleCallSection.css";

export default function ScheduleCallSection() {
  return (
    <section className="schedule">
      <div className="schedule__bg-grid" aria-hidden />
      <div className="schedule__container">
        <header className="schedule__heading">
          <h2 className="schedule__title">
            Ready to Take This Forward?{" "}
            <span className="nowrap">
              Let’s <span className="accent">Schedule Call.</span>
            </span>
          </h2>
          <p className="schedule__sub">
            It maximizes revenue and customer satisfaction by improving the
            efficiency of your existing traffic, reducing costs.
          </p>
        </header>

        <div className="schedule__layout">
          {/* LEFT RAIL */}
          <div className="schedule__rail schedule__rail--left">
            <Callout
              title="On boarding Call"
              avatars={[
                // swapped images (you can replace with your own)
                "https://images.unsplash.com/photo-1531123414780-f7422ead5769?q=80&w=128", // team huddle
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=128",
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128",
              ]}
            />
            <Callout
              title="Discovery Call"
              avatars={[
                "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=128",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=128",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128",
              ]}
            />
          </div>

          {/* CENTER STAGE */}
          <div className="schedule__stage">
            <div className="stage-card" role="group" aria-label="Video call preview">
              <img
                className="stage-card__poster"
                alt="Host in a discovery call"
                /* swapped poster (replace with your brand image if you prefer) */
                src="https://cdn.shopify.com/s/files/1/0596/9965/8889/files/young-women-enjoy-freedom-on-the-beach-on-a-sunny-2023-11-27-05-28-54-utc-770x513.webp?v=1756804219"
              />

              {/* Floating participants */}
              <div className="stage-card__peers">
                <Peer
                  name="Anushka Gupta"
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=320"
                />
                <Peer
                  name="Kavita Upadhyay"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=320"
                />
              </div>

              {/* CTAs (auto-move below on phones via CSS) */}
              <div className="stage-card__actions">
                <a href="tel:+919205110208" className="btn btn--light" aria-label="Call us now">
                  <PhoneIcon />
                  <span>Call Us Now</span>
                </a>
                <button className="btn btn--primary" type="button">
                  <ChatIcon />
                  <span>
                    <a
                      href="https://wa.me/919205110208"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}Get In Touch
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT RAIL */}
          <div className="schedule__rail schedule__rail--right">
            <Callout
              right
              title="Regular Catchup"
              avatars={[
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128",
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=128",
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=128",
              ]}
            />
            <Callout
              right
              title="Final Delivery Call"
              avatars={[
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=128",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=128",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small subcomponents ---------- */

function Callout({ title, avatars, right }) {
  return (
    <div className={`callout ${right ? "callout--right" : ""}`}>
      <p className="callout__title">{title}</p>
      <div className="avatar-stack" aria-hidden>
        {avatars.map((src, i) => (
          <img key={i} className="avatar" src={src} alt="" />
        ))}
      </div>
    </div>
  );
}

function Peer({ name, src }) {
  return (
    <div className="peer">
      <img src={src} alt={name} />
      <span className="peer__name">{name}</span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 9.81 19.79 19.79 0 0 1 .09 1.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.13.98.35 1.94.66 2.86a2 2 0 0 1-.45 2.11L6.1 7.91a16 16 0 0 0 6 6l1.22-1.17a2 2 0 0 1 2.11-.45c.92.31 1.88.53 2.86.66A2 2 0 0 1 22 16.92z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 6h-2V3a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12l4-4h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
