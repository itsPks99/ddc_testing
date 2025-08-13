"use client"

import { useState, useEffect } from "react"
import { Phone, CheckCircle, Mail, MapPin, ChevronDown, ChevronUp, ExternalLink, WheatIcon } from "lucide-react"
import "./ShopifyLandingPage.css" // Import your CSS styles
import OurClients from "../Home/OurClients/ourClients"
import { FaWhatsapp } from "react-icons/fa"
import { useLocation } from "react-router-dom";
import SectorSection from "./SectorsSection/SectorsSection"; // Import the new SectorSection component

const ShopifyLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [expandedPlan, setExpandedPlan] = useState(null)
  const [hoveredRow, setHoveredRow] = useState(null)

  const [isDesktop, setIsDesktop] = useState(false);

  // Phone number validation
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    // Allow only numbers
    const numericInput = input.replace(/\D/g, "");

    if (numericInput.length > 10) return; // Max 10 digits

    setPhone(numericInput);

    if (numericInput.length === 10) {
      setError(""); // Clear error when valid
    } else {
      setError("Phone number must be exactly 10 digits");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const togglePlan = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index)
  }

  const phoneNumber = "9205110208"
  const whatsappMessage = "Hello! I'm interested in your Shopify development services."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const handlePhoneClick = () => {
    window.open(`tel:+91${phoneNumber}`, "_self")
  }

  const faqs = [
  {
    question: "How long does it take to build a custom Shopify store?",
    answer:
      "Depending on the scope, a fully customized Shopify store typically takes 10-14 business days. We kick things off with a discovery call to understand your brand and goals, then build a tailored roadmap for success.",
  },
  {
    question: "Can you help migrate my existing store to Shopify?",
    answer:
      "Yes! We offer seamless store migration services from platforms like WooCommerce, Wix, Magento, and Squarespace to Shopify, including product data, design elements, and SEO settings.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Absolutely. We provide ongoing support packages that include bug fixes, design updates, performance optimization, and priority technical support post-launch.",
  },
  {
    question: "What integrations are supported with Shopify?",
    answer:
      "We can integrate major CRMs, ERPs, inventory management systems, email marketing tools, payment gateways like Stripe and PayPal, and much more.",
  },
  {
    question: "Is my Shopify store going to be mobile-optimized?",
    answer:
      "Every store we design is 100% responsive, ensuring a seamless experience across smartphones, tablets, and desktops.",
  },
  {
    question: "Can you help improve my store’s conversions?",
    answer:
      "Yes! Our conversion specialists implement high-performing UX strategies including streamlined navigation, persuasive CTAs, optimized checkout flows, and more.",
  },
  {
    question: "What makes Delhi Digital Co. different from other agencies?",
    answer:
      "We're a results-first Shopify agency focused on U.S. brands. We blend world-class design with strategic marketing to build stores that don’t just look amazing—but actually generate revenue.",
  },
];



  // const pricingPlans = [
  //   {
  //     name: "Shopify Starter (₹30,000)",
  //     description: "Perfect for new ventures & local shops",
  //     price: "₹30,000",
  //     color: "blue",
  //     features: [
  //       "Essential E-Commerce Site",
  //       "Upto 25 Products",
  //       "Basic Structure SEO",
  //       "SSL Certificate",
  //       "Mobile & Desktop Responsive Design",
  //       "No Content Creation (Client provides)",
  //       "Basic Social Media Links",
  //       "Basic Google Analytics Setup",
  //     ],
  //     expandedFeatures: [
  //       "No Google Maps Embed",
  //       "No WhatsApp Integration",
  //       "Basic Speed Optimization",
  //       "Basic Contact Form",
  //       "Custom Favicon",
  //       "Standard Policy Templates",
  //       "Payment Gateway Assistance",
  //       "No Conversion Tracking",
  //       "Basic Shipping Setup (1 Carrier)",
  //       "No Shopify Apps Setup",
  //       "No Referral/Abandon Cart",
  //       "7-Day Support (Email/Chat)",
  //     ],
  //   },
  //   {
  //     name: "Shopify Growth (₹60,000)",
  //     description: "Great for growing businesses",
  //     price: "₹60,000",
  //     color: "green",
  //     features: [
  //       "Optimized E-Commerce Site",
  //       "Upto 100 Products",
  //       "On-Page SEO (Meta, Headings)",
  //       "SSL Certificate",
  //       "Mobile & Desktop Responsive Design",
  //       "Upto 500 words Content Creation",
  //       "Social Media Integration (Facebook, Instragram, Twitter,)",
  //       "Google Analytics Setup",
  //     ],
  //     expandedFeatures: [
  //       "Google Maps for Store",
  //       "WhatsApp Direct Chat",
  //       "Speed Optimization",
  //       "Search Console Integration",
  //       "Enhanced Contact Form",
  //       "Custom Favicon",
  //       "Standard Policy Templates",
  //       "Popular Payment Gateway Integration",
  //       "Basic Pixel for FB, Google Ads",
  //       "Shipping Setup (Multiple Carriers)",
  //       "1 Shopify App Install",
  //       "Basic Abandon Cart Reminders",
  //       "No Android App",
  //       "15-Day Support (Email/Chat)",
  //     ],
  //   },
  //   {
  //     name: "Shopify Professional (₹90,000)",
  //     description: "Advanced plan for scaling brands",
  //     price: "₹90,000",
  //     color: "purple",
  //     features: [
  //       "Advanced E-Commerce Site",
  //       "Upto 250 Products",
  //       "SEO + Keyword Research",
  //       "SSL Certificate",
  //       "Mobile & Desktop Responsive Design",
  //       "1500 Words Content (FAQs, Blogs, etc)",
  //       "Full Social Media Setup (Facebook, Instragram, Twitter, LinkedIn, etc.)",
  //       "Full Google Analytics Setup",
  //     ],
  //     expandedFeatures: [
  //       "Google Maps for Store",
  //       "WhatsApp Chat + API Integration",
  //       "Full Speed Optimization",
  //       "Search Console Setup",
  //       "Auto-Responder Contact Form",
  //       "Custom Favicon",
  //       "Custom Policy Drafting (Privacy, Refund, ToS)",
  //       "Multiple Payment Gateway Integrations",
  //       "Pixel Tracking (FB, Google Ads)",
  //       "Advanced Shipping Setup + Rates",
  //       "Up to 3 App Installations",
  //       "Basic Abandon Cart Reminders",
  //       "No Android App",
  //       "30-Day Support (Email/Chat)",
  //     ],
  //   },
  // ];


  return (
    <div className="landing-page">
      {/* WhatsApp Floating Button */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick} aria-label="Contact us on WhatsApp">
        <FaWhatsapp />
      </button>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="addlogo-section">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDC%20logo.1-rB8OzOGLZSdzpVwGAiKPr25kx5Vocw.png"
                alt="Delhi Digital Co Logo"
                className="addlogo"
              />
            </div>
            <div className="phone-section">
              <Phone size={16} />
              <button onClick={handlePhoneClick} className="phone-btn">
                +91-92051-10208
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="add-hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-content">
              <div className="badges">
                <span className="badge badge-green">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ShopifyPartners_Primary-QgXFRltxqSq8wdqvYUFLvQYcpt6cfi.png"
                    alt="Shopify Partners"
                    className="badge-logo"
                  />
                </span>
                <span className="badge badge-teal">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ShopifyExpert_Primary_Wordmark-hSvJvEh3xXhf5zNeSHpnGmot757jiN.png"
                    alt="Shopify Expert"
                    className="badge-logo"
                  />
                </span>
              </div>

              <div className="hero-text" >
                <h1 className="hero-title" style={{ textTransform: "capitalize" }}>
                  transform you
                  <br />
                  business vision into
                  <br />a powerful
                  <br />
                  <span className="highlight">shopify store</span>
                </h1>

                <p className="hero-description">
                  We create high-converting Shopify stores that drive sales and grow your business. From concept to
                  launch, we handle everything.
                </p>

                <button onClick={handleWhatsAppClick} className="add-cta-button">
                  <FaWhatsapp size={20} />
                  <span>START YOUR PROJECT TODAY</span>
                </button>
              </div>
            </div>

            {/* Right Column - Hero Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2 className="form-title">
                  GET A FREE CONSULTATION
                  <br />
                  <span className="highlight">& PROJECT QUOTE</span>
                </h2>
              </div>

              <form className="hero-contact-form" action="https://usebasin.com/f/39f51f3244ec" method="POST">
                <input type="hidden" name="redirect" value="https://delhidigital.co/shopify-landing-page" />
                <div className="hero-form-row">
                  <input type="text" name="name" placeholder="Your Name*" className="hero-form-input" required />
                  <input type="email" name="email" placeholder="Email Address" className="hero-form-input" />
                </div>
                {error && <p className="error-text">{error}</p>}
                <input type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className="hero-form-input"
                  value={phone}
                  onChange={handleChange}
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Tell us about your business and project requirements*"
                  rows={4}
                  className="hero-form-textarea"
                  required
                ></textarea>
                <button type="submit" className="hero-form-submit">
                  GET FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="add-section-header">
            <h2 className="section-title">Professional Shopify Development Starting at $499</h2>
            <p className="section-subtitle">INCLUDES FREE DOMAIN & PROFESSIONAL EMAIL INTEGRATION </p>
          </div>

          <div className="features-grid">
            <div className="features-image">
              <div className="image-wrapper">
                <video
                  className="features-video"
                  src="/assets/Ddc-Final Video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallbackImg = document.getElementById("fallback-image");
                    if (fallbackImg) fallbackImg.style.display = "block";
                  }}
                />
                <img
                  id="fallback-image"
                  src="/assets/socialMedia-fallback.jpg"
                  alt="Fallback image"
                  style={{ display: "none", maxWidth: "100%", borderRadius: "1rem" }}
                />
              </div>
            </div>

            <div className="features-content">
              <h2 className="features-title">
                build a store that
                <br />
                <span className="highlight">convert vistion into</span>
                <br />
                loyal customers
              </h2>
              <div className="features-text">
                <p>
                  Our expert team doesn't just build Shopify stores - we create comprehensive e-commerce solutions that
                  drive results. Every store is custom-designed to reflect your brand identity and optimized for maximum
                  conversions.
                </p>
                <p>
                  We conduct thorough market research, competitor analysis, and user experience optimization to ensure
                  your store stands out in the crowded e-commerce landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Clients Section */}      
      <OurClients />

      {/* Pricing Plans */}
      {/* <section className="plans-section">
        <div className="container">
          <div className="add-section-header">
            <h2 className="section-title">Your Shopify Development Starting from $499</h2>
          </div>

          <div className="plans-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`plan-card plan-${plan.color}`}>
                <div className="plan-content">
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                    <div className="plan-price">{plan.price}</div>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>

                  {(isDesktop || expandedPlan === index) && (
                    <div className="expanded-features">
                      <ul className="expanded-list">
                        {plan.expandedFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <CheckCircle size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!isDesktop && (
                    <button className="expand-btn" onClick={() => togglePlan(index)}>
                      {expandedPlan === index ? (
                        <>
                          <ChevronUp size={16} />
                          View Less Inclusions
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          View More Inclusions
                        </>
                      )}
                    </button>
                  )}

                  <div className="plan-contact">
                    <p className="contact-label">TALK TO US</p>
                    <button onClick={handlePhoneClick} className="contact-phone">
                      +91-92051-10208
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-content">
              <div className="section-label">E-COMMERCE EXPERTS</div>
              <h2 className="faq-title">
                Ready to Dominate Your Market with Delhi Digital Co.?
                <br />
                <span className="highlight">Let's Build Your E-Commerce Empire!</span>
              </h2>
              <div className="faq-text">
                <p>
                  Delhi Digital Co. specializes in creating high-performance Shopify stores that don't just look great -
                  they convert. Our comprehensive approach combines cutting-edge design with proven conversion
                  optimization strategies.
                </p>
                <p>
                  We understand that every business is unique. That's why our team of certified Shopify experts works
                  closely with you to understand your specific goals, target audience, and market positioning.
                </p>
                <p>
                  From initial concept to post-launch optimization, we're your dedicated partners in e-commerce success.
                  Ready to transform your business vision into a profitable online reality?
                </p>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button onClick={() => toggleFaq(index)} className="faq-question">
                    <span>{faq.question}</span>
                    <ChevronDown size={20} className={`faq-icon ${openFaq === index ? "rotated" : ""}`} />
                  </button>

                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Sector Section */}
      <SectorSection />

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="add-section-header">
            <h2 className="section-title">
              Ready to Launch Your E-Commerce Success Story? Let's Create Something Amazing Together!
            </h2>
          </div>

          <div className="cta-grid">
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={24} />
                <button onClick={handlePhoneClick} className="contact-link">
                  +91-92051-10208
                </button>
              </div>
              <div className="contact-item">
                <Mail size={24} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@delhidigital.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text"
                >
                  hello@delhidigital.co
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={24} />
                <div className="contact-address">
                  <p>4th Floor, F42, Saidulajab, </p>
                  <p>Saiyad Ul Ajaib Village,</p>
                  <p>Saket,New Delhi, Delhi 110030</p>
                </div>
              </div>

              {/* <div className="contact-item">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDC%20logo.1-rB8OzOGLZSdzpVwGAiKPr25kx5Vocw.png"
                  alt="Delhi Digital Co"
                  className="contact-addlogo"
                />
              </div> */}
            </div>

            <div className="final-form">
              <form className="final-contact-form" action="https://usebasin.com/f/39f51f3244ec" method="POST">
              <input type="hidden" name="redirect" value="https://delhidigital.co/shopify-landing-page" />
                <div className="final-form-row">
                  <input type="text" name="name" placeholder="Your Name*" className="final-form-input" required />
                  <input type="email" name="email" placeholder="Email Address" className="final-form-input" />
                </div>
                {error && <p className="error-text">{error}</p>}
                <input type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className="final-form-input"
                  value={phone}
                  onChange={handleChange}
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Tell us about your project vision and requirements*"
                  rows={4}
                  className="final-form-textarea"
                  required
                ></textarea>
                <button type="submit" className="final-form-submit">
                  GET FREE CONSULTATION
                </button>
                <button type="button" onClick={handleWhatsAppClick} className="whatsapp-submit">
                  <FaWhatsapp size={20} />
                  <span>CHAT ON WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h2 className="footer-title">Professional Shopify Development Services</h2>
            <p className="footer-text">
              Delhi Digital Co. is your trusted partner for creating exceptional Shopify stores that drive real business
              results. We combine technical expertise with creative design to deliver e-commerce solutions that not only
              look stunning but also convert visitors into loyal customers.
            </p>
            <p className="footer-text">
              Our team stays ahead of the latest e-commerce trends and technologies to ensure your store is always
              competitive. Whether you're launching your first online store or scaling an existing business, we have the
              experience and dedication to help you achieve your goals.
            </p>
          </div>

          <div className="footer-bottom">
            <div className="footer-addlogo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDC%20logo.1-rB8OzOGLZSdzpVwGAiKPr25kx5Vocw.png"
                alt="Delhi Digital Co"
                className="footer-addlogo-img"
              />
            </div>
            <div className="footer-copyright">© 2025 Delhi Digital Co. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ShopifyLandingPage