"use client";
import React from "react";
import "./trusted-brands.css";

/* ------------------  YOUR DATA  ------------------ */
// Row 1
const partners = [
  { id: 1, name: "Company One",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/MENWORKS_LOGO.png?v=1751619275", url: "https://example.com/1" },
  { id: 2, name: "Company Two",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nakhrali_dhani_logo.png?v=1751619278", url: "https://example.com/2" },
  { id: 3, name: "Company Three",logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nauvab_logo_black.png?v=1751619275", url: "https://example.com/3" },
  { id: 4, name: "Company Four", logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/noua_nails_logo_black.png?v=1751619278", url: "https://example.com/4" },
  { id: 5, name: "Company Five", logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Ornod_black.png?v=1751619278", url: "https://example.com/5" },
  { id: 6, name: "Company Six",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Palashindia_Logo_5_5.png?v=1751619275", url: "https://example.com/6" },
];

// Row 2
const partners2 = [
  { id: 1, name: "Company One",   logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Samsara_Logo-01.png?v=1751619275", url: "https://example.com/1" },
  { id: 2, name: "Company Two",   logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_ribion_logo_png.png?v=1751619278", url: "https://example.com/2" },
  { id: 3, name: "Company Three", logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sitara.png?v=1751619275", url: "https://example.com/3" },
  { id: 4, name: "Company Four",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sober.png?v=1751619274", url: "https://example.com/4" },
  { id: 5, name: "Company Five",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/logo_1.png?v=1751619275", url: "https://example.com/5" },
  { id: 6, name: "",              logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/suri_fresh_logo.png?v=1751619276", url: "https://example.com/6" },
];

// Row 3
const partners3 = [
  { id: 1, name: "Company Seven",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/The_wouff_Logo-01.png?v=1751619275", url: "https://example.com/7" },
  { id: 2, name: "Company Eight",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Vanilla_Clothing-18.png?v=1751619278", url: "https://example.com/8" },
  { id: 3, name: "Company Nine",   logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_logo.png?v=1751619276", url: "https://example.com/7" },
  { id: 7, name: "Company Seven",  logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/please-me_0001_PLEASE-ME-logo-18.png?v=1751619275", url: "https://example.com/7" },
  { id: 5, name: "Company Eleven", logo: "/assets/all_logos/allLogo/Hi Pink Logo.png", url: "https://example.com/8" },
  { id: 6, name: "Company Twelve", logo: "/assets/all_logos/allLogo/Seryeon logo-04.png", url: "https://example.com/7" },
];

function LogoRow({ items }) {
  return (
    <ul className="tb-grid" role="list">
      {items.map((p) => (
        <li key={`${p.id}-${p.logo}`} className="tb-item">
          <a
            href={p.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="tb-card"
            aria-label={p.name || "Brand"}
            title={p.name || "Brand"}
          >
            <img className="tb-logo" src={p.logo} alt={p.name || "Brand"} loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function TrustedBrands() {
  return (
    <section className="tb-section">
      <div className="tb-container">
        <p className="tb-eyebrow">Trusted by leading brands</p>

        {/* 3 rows – 6 logos each (desktop), responsive down to 2–3 per row */}
        <LogoRow items={partners} />
        <LogoRow items={partners2} />
        <LogoRow items={partners3} />
      </div>
    </section>
  );
}
