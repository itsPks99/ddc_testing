"use client"

import { useEffect, useRef, useState } from "react"

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_8kQUcwsLx0L-wZLLDULclWT459K8VNPRUZQTO1F7J0vycro4NpjzRvI4sWOtPqAZ4w/exec" // <- paste your deployed Web App URL here

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)

  // form state
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<null | "ok" | "err">(null)

  useEffect(() => { setHeroVisible(true) }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!form.name || !form.email) {
    setStatus("err")
    return
  }

  setSubmitting(true)
  setStatus(null)

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",  // 👈 important
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }).toString(),
    })

    // 👇 Always mark success if fetch didn’t throw
    setStatus("ok")
    setForm({ name: "", email: "", phone: "", message: "" })
  } catch {
    setStatus("err")
  } finally {
    setSubmitting(false)
  }
}


  return (
    <section id="hero" ref={heroRef} className="us-landing-page-hero">
      <div className="us-landing-page-container">
        <div className={`us-landing-page-hero-content ${heroVisible ? "visible" : ""}`}>
          <div className="us-landing-page-badge">Over 50+ Shopify stores delivered</div>

          <h1 className="us-landing-page-hero-title">
            We Help E-commerce Brands Build
            <br />
            High-Converting <span className="us-landing-page-text-orange">Shopify</span>{" "}
            <span className="us-landing-page-text-pink">Stores</span>
          </h1>

          <p className="us-landing-page-hero-subtitle">
            Custom Shopify Development & E-commerce Solutions
          </p>

          {/* --- Hero form (unchanged structure, just posts to Apps Script) --- */}
          <form className="us-landing-page-hero-form" onSubmit={handleSubmit} noValidate>
            <div className="hero-form-row">
              <input
                className="hero-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="hero-input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="hero-form-row">
              <input
                className="hero-input"
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="hero-form-row">
              <textarea
                className="hero-textarea"
                name="message"
                placeholder="Tell us briefly about your project"
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <div className="hero-form-actions">
              <button
                className="us-landing-page-btn us-landing-page-btn-primary"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Get Free Consultation"}
              </button>
              {status === "ok" && <span className="hero-form-status ok">Thanks! We’ll be in touch.</span>}
              {status === "err" && <span className="hero-form-status err">Please try again.</span>}
            </div>
          </form>
          {/* --- END form --- */}

          {/* Keeping the original CTA commented out as you had it */}
          {/* <button className="us-landing-page-btn us-landing-page-btn-primary us-landing-page-btn-lg">
            <a href="https://wa.me/919205110208" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </a>
          </button> */}
        </div>
      </div>
    </section>
  )
}
