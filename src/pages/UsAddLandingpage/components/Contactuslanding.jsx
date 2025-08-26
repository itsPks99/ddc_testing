"use client"

import React, { useEffect, useRef, useState } from "react"

export default function ContactSection() {
  const COUNTRIES = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
  ]

  const [country, setCountry] = useState(COUNTRIES[0])
  const [showList, setShowList] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    url: "",
    spend: "",
  })

  const listRef = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) setShowList(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      phone_full: `${country.code} ${form.phone}`.trim(),
      country: country.name,
    }
    console.log("Contact form:", payload)
    alert("Submitted! Check console for payload.")
  }

  return (
    <section className="contact-wrap">
      <style>{`
        :root{
          --card-bg:#fff;
          --text:#0e0f12;
          --muted:#667085;
          --ring:#eceef2;
          --btn:#ff5a22;
          --btn-hover:#e04f1e;
          --shadow: 0 10px 25px rgba(3,7,18,.08), 0 4px 10px rgba(3,7,18,.05);
          --radius: 18px;
          --pill: 999px;
          --field-h: 56px;
        }
        .contact-wrap{
          min-height: 100vh;
          display:flex; align-items:center; justify-content:center;
          padding: clamp(24px, 6vw, 72px);
          background:
            radial-gradient(70% 90% at 80% 30%, rgba(255,140,122,.12), transparent 60%),
            radial-gradient(70% 90% at 20% 70%, rgba(255,170,150,.10), transparent 60%),
            #fff;
        }
        .contact-card{
          width: min(680px, 92vw);
          background: var(--card-bg);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: clamp(20px, 4.2vw, 36px);
        }
        .brand{
          text-align:center;
          color:#ff6a8c;
          font-weight:800;
          letter-spacing:.08em;
          margin-bottom:6px;
        }
        .title{
          text-align:center;
          font-weight:800;
          color:var(--text);
          font-size: clamp(28px, 4.2vw, 44px);
          letter-spacing:-.02em;
          margin: 0 0 18px;
        }
        .form{
          display:grid; gap:14px;
        }
        .field, .select, .phone-group{
          position:relative;
          height: var(--field-h);
          border:1px solid var(--ring);
          border-radius: 14px;
          overflow:hidden;
          background:#fff;
        }
        .input, .select-el{
          width:100%; height:100%;
          border:none; outline:none; background:transparent;
          padding: 0 16px;
          font-size:16px; color:var(--text);
        }
        .select{
          display:grid;
        }
        .select-el{
          appearance:none; -webkit-appearance:none; -moz-appearance:none;
          padding-right:38px;
        }
        .select:after{
          content:"▾";
          position:absolute; right:14px; top:50%; translate:0 -50%;
          color:#6b7280; pointer-events:none;
        }
        .phone-group{
          display:grid; grid-template-columns: auto 1fr;
          padding-left: 56px; /* space for code button width */
        }
        .code-btn{
          position:absolute; left:8px; top:50%; translate:0 -50%;
          display:flex; align-items:center; gap:8px;
          border:1px solid var(--ring); background:#fff;
          height:40px; padding:0 10px; border-radius: 12px;
          cursor:pointer; user-select:none;
        }
        .code-btn span{ font-size:18px; line-height:1; }
        .code-caret{ color:#6b7280; font-size:12px; }
        .phone-input{
          width:100%; height:100%; border:none; outline:none; background:transparent;
          font-size:16px; color:var(--text);
          padding: 0 16px;
        }
        .code-list{
          position:absolute; left:8px; top:calc(100% + 8px);
          width: 230px; background:#fff; border:1px solid var(--ring);
          border-radius:12px; box-shadow: var(--shadow);
          z-index: 10; max-height: 240px; overflow:auto;
        }
        .code-item{
          display:flex; align-items:center; gap:10px;
          padding:10px 12px; cursor:pointer; font-size:14px;
        }
        .code-item:hover{ background:#f7f7f8; }
        .submit{
          margin-top: 6px;
          height: 56px;
          border:none; outline:none; width:100%;
          border-radius: var(--pill); color:#fff; font-weight:700; font-size:16px;
          background: linear-gradient(180deg, var(--btn), #ff5a22 70%);
          box-shadow: 0 8px 18px rgba(255,90,34,.25);
          cursor:pointer;
          transition: transform .08s ease, box-shadow .2s ease;
        }
        .submit:hover{ transform: translateY(-1px); box-shadow: 0 10px 22px rgba(255,90,34,.35); }
        .submit:active{ transform: translateY(0); box-shadow: 0 6px 12px rgba(255,90,34,.2); }

        /* hint text */
        ::placeholder{ color:#9aa1a9; }
      `}</style>

      <div className="contact-card">
        <div className="brand">TLPC</div>
        <h2 className="title">Contact Us</h2>

        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={onChange}
              required
            />
          </label>

          <label className="field">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
            />
          </label>

          {/* Phone with country code + flag */}
          <div className="phone-group" ref={listRef}>
            <button
              type="button"
              className="code-btn"
              aria-haspopup="listbox"
              aria-expanded={showList}
              onClick={() => setShowList((s) => !s)}
            >
              <span>{country.flag}</span>
              <span>{country.code}</span>
              <span className="code-caret">▾</span>
            </button>

            <input
              className="phone-input"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={onChange}
              inputMode="tel"
              pattern="[0-9\\s\\-()]*"
              required
            />

            {showList && (
              <div className="code-list" role="listbox">
                {COUNTRIES.map((c) => (
                  <div
                    key={c.name}
                    role="option"
                    className="code-item"
                    onClick={() => {
                      setCountry(c)
                      setShowList(false)
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{c.flag}</span>
                    <span style={{ flex: 1 }}>{c.name}</span>
                    <span style={{ color: "#6b7280" }}>{c.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="field">
            <input
              className="input"
              type="url"
              name="url"
              placeholder="Website URL"
              value={form.url}
              onChange={onChange}
            />
          </label>

          <label className="select">
            <select
              className="select-el"
              name="spend"
              value={form.spend}
              onChange={onChange}
              required
            >
              <option value="" disabled>Ads Spends</option>
              <option value="<5k">&lt; $5,000 / month</option>
              <option value="5-20k">$5,000 – $20,000 / month</option>
              <option value="20-50k">$20,000 – $50,000 / month</option>
              <option value="50-100k">$50,000 – $100,000 / month</option>
              <option value=">100k">&gt; $100,000 / month</option>
            </select>
          </label>

          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}
