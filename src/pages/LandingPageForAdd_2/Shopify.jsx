"use client"

import { useState, useEffect } from "react"
import { Phone, CheckCircle, Mail, MapPin, ChevronDown, ChevronUp, ExternalLink, WheatIcon } from "lucide-react"
import "../LandingPageForAdd/ShopifyLandingPage.css"
// import ImageSection from "../LandingPageForAdd/ImagesSection-1/imageSection-1"
import { FaWhatsapp } from "react-icons/fa"

const Shopify = () => {
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
      question: "How long does it take to develop a custom Shopify store?",
      answer:
        "Based on your reference and specific requirements, our expert team will develop your custom Shopify store within 14 business working days. We’ll discuss all your needs during a free consultation call and provide a tailored roadmap for your project.",
    },
    {
      question: "Can you integrate my existing inventory management system?",
      answer:
        "Yes, we can integrate most major inventory management systems with your Shopify store using APIs or third-party apps, ensuring seamless inventory sync and automation.",
    },
    {
      question: "Do you provide ongoing maintenance and support services?",
      answer:
        "Absolutely. We offer a range of post-launch support plans including technical maintenance, design tweaks, performance optimization, and priority assistance for critical issues.",
    },
    {
      question: "What payment gateways can you integrate with my store?",
      answer:
        "We support integration with a wide variety of payment gateways including Razorpay, PayU, Cashfree, CCAvenue, Stripe, and international gateways based on your target market.",
    },
    {
      question: "How do you ensure my Shopify store is optimized for conversions?",
      answer:
        "We use proven CRO strategies—like optimized layouts, clear CTAs, mobile responsiveness, SEO, and fast-loading design—to maximize conversions from day one.",
    },
  ];


  // const clientaddlogos = [
  //   [
  //     { name: "TechCorp", url: "https://techcorp.com" },
  //     { name: "StyleHub", url: "https://stylehub.com" },
  //     { name: "GreenLeaf", url: "https://greenleaf.com" },
  //     { name: "UrbanWear", url: "https://urbanwear.com" },
  //     { name: "FreshMart", url: "https://freshmart.com" },
  //     { name: "EliteGoods", url: "https://elitegoods.com" },
  //   ],
  //   [
  //     { name: "ModernStyle", url: "https://modernstyle.com" },
  //     { name: "PureLiving", url: "https://pureliving.com" },
  //     { name: "CraftStore", url: "https://craftstore.com" },
  //     { name: "TrendyFashion", url: "https://trendyfashion.com" },
  //     { name: "HomeDecor", url: "https://homedecor.com" },
  //     { name: "SportZone", url: "https://sportzone.com" },
  //   ],
  //   [
  //     { name: "LuxuryBrand", url: "https://luxurybrand.com" },
  //     { name: "EcoFriendly", url: "https://ecofriendly.com" },
  //     { name: "DigitalStore", url: "https://digitalstore.com" },
  //     { name: "FashionForward", url: "https://fashionforward.com" },
  //     { name: "HealthyLife", url: "https://healthylife.com" },
  //     { name: "TechGadgets", url: "https://techgadgets.com" },
  //   ],
  // ]

  const pricingPlans = [
    {
      name: "Shopify Professional (₹90,000)",
      description: "Advanced plan for scaling brands",
      price: "₹90,000",
      color: "purple",
      features: [
        "Advanced E-Commerce Site",
        "Upto 250 Products",
        "SEO + Keyword Research",
        "SSL Certificate",
        "Mobile & Desktop Responsive Design",
        "1500 Words Content (FAQs, Blogs, etc)",
        "Full Social Media Setup (Facebook, Instragram, Twitter, LinkedIn, etc.)",
        "Full Google Analytics Setup",
      ],
      expandedFeatures: [
        "Google Maps for Store",
        "WhatsApp Chat + API Integration",
        "Full Speed Optimization",
        "Search Console Setup",
        "Auto-Responder Contact Form",
        "Custom Favicon",
        "Custom Policy Drafting (Privacy, Refund, ToS)",
        "Multiple Payment Gateway Integrations",
        "Pixel Tracking (FB, Google Ads)",
        "Advanced Shipping Setup + Rates",
        "Up to 3 App Installations",
        "Basic Abandon Cart Reminders",
        "No Android App",
        "No iOS App",
        "30-Day Support (Email/Chat)",
      ],
    },

    {
      name: "Shopify Premium (₹140,000)",
      description: "High-growth businesses, advanced marketing needs",
      price: "₹140,000",
      color: "green",
      features: [
        "Elite E-Commerce Site",
        "Upto 500 Products",
        "Advanced SEO Strategy (Competitive Analysis, Technical SEO)",
        "SSL Certificate",
        "Mobile & Desktop Responsive Design",
        "Upto 3,000 words (Detailed product content, blog posts, etc.)",
        "Basic Social Sharing Features",
        "Google Analytics with Custom Report Setup",
        "Google Maps for Physical Store",
        "WhatsApp Chat + API Integration",
      ],
      expandedFeatures: [

        "Advanced Performance Tuning (Image Optimization, Speed Boost)",
        "Custom Favicon",
        "Enhanced Form + Auto-responder + Basic CRM Integration",
        "Standard Policy Templates",
        "Customized Policy Drafting + Cookie Consent Banner",
        "Payment Gateway Setup + Fraud Prevention Basics",
        "Advanced Pixel Tracking (Multi-platform, Custom Events)",
        "Shipping Setup with Rate Configuration + Shipping Labels",
        "Upto 5 Shopify App Installations & Advanced Configuration",
        "Advanced Abandoned Cart Reminders Setup",
        "Android App Not Included",
        "iOS App Included",
        "Email/Chat/Phone support for 45 days"
      ],
    },
    {
      name: "Shopify Ultimate + Android App (₹199,000)",
      description: "Enterprise-level, multi-channel approach, mobile-first strategy",
      price: "₹199,000",
      color: "blue",
      features: [
        "Advanced E-Commerce Site + Android Hybrid App",
        "Upto 500 Products",
        "Advanced SEO Strategy + App Store Optimization (ASO)",
        "SSL Certificate",
        "Mobile & Desktop Responsive Design",
        "Upto 3,000 words (Website + App content synergy)",
        "Advanced Social Sharing & Engagement",
        "Enhanced E-commerce Tracking",
        "Google Maps for Physical Store",
        "WhatsApp Chat + API Integration",
      ],
      expandedFeatures: [

        "Advanced Performance Tuning (Website & App)",
        "Search Console Setup",
        "Enhanced Contact Form + Auto-responder + Advanced CRM Integration",
        "Custom Favicon",
        "Customized Policy Drafting + Cookie Consent Banner",
        "Payment Gateway Setup + Fraud Prevention",
        "Advanced Pixel Tracking (Multi-platform, Custom Events)",
        "Advanced Shipping Rules + Rate Configuration",
        "Upto 7 Shopify App Installations with Full Integration",
        "Basic Referral Program Setup",
        "Advanced Abandoned Cart Recovery Strategy",
        "Android App Included",
        "iOS App Not Included",
        "Email/Chat/Phone support for 60 days"
      ],
    },
  ];


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

              <form className="hero-contact-form" action="https://usebasin.com/f/20a5cdbdbe69" method="POST">
                <input type="hidden" name="redirect" value="https://delhidigital.co/shopify" />
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
            <h2 className="section-title">Professional Shopify Development Starting at ₹90,000</h2>
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

      {/* Client Logos Section */}
      {/* <section className="clients-section">
        <div className="container">
          <div className="add-section-header">
            <h2 className="section-title">Trusted by Leading Brands</h2>
            <p className="section-subtitle">Powering success for businesses across industries</p>
          </div>

          <div className="clients-slider">
            {clientaddlogos.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="slider-row"
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div
                  className={`slider-track ${rowIndex === 1 ? "slide-left" : "slide-right"} ${hoveredRow === rowIndex ? "paused" : ""}`}
                >
                  {[...row, ...row].map((client, clientIndex) => (
                    <button
                      key={clientIndex}
                      onClick={() => window.open(client.url, "_blank")}
                      className="client-addlogo"
                    >
                      <div className="client-name">
                        {client.name}
                        <ExternalLink size={16} className="external-icon" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <ImageSection />

      {/* Pricing Plans */}
      <section className="plans-section">
        <div className="container">
          <div className="add-section-header">
            <h2 className="section-title">Choose Your Perfect Package: Shopify Development Solutions</h2>
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
      </section>



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
              <form className="final-contact-form" action="https://usebasin.com/f/20a5cdbdbe69" method="POST">
                <input type="hidden" name="redirect" value="https://delhidigital.co/shopify" />
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

export default Shopify