import "./branding.css"
import {
FaFigma,
FaMagic,
FaPaintBrush,
FaClipboard,
FaTheaterMasks,
FaBox,
FaPizzaSlice,
FaShoePrints,
FaHospitalAlt
} from "react-icons/fa";

const Branding = () => {
  return (
    <div className="brand-page">
      {/* Hero Section */}
      <section className="brand-hero-section">
        <div className="brand-container">
          <div className="brand-hero-content">
            <div className="brand-hero-badge">
              <span>Brand Identity Design</span>
            </div>
            <h1 className="brand-hero-title">
              Create a Powerful
              <span className="brand-highlight"> Brand Identity</span>
            </h1>
            <p className="brand-hero-subtitle">
              Build a distinctive brand that resonates with your audience and sets you apart from the competition with
              comprehensive identity design and strategy.
            </p>
            <div className="brand-hero-actions">
              <button className="brand-cta-primary">Start Your Brand Journey</button>
              <button className="brand-cta-secondary">View Portfolio</button>
            </div>
            <div className="brand-hero-stats">
              <div className="brand-stat-item">
                <span className="brand-stat-number">150+</span>
                <span className="brand-stat-label">Brands Created</span>
              </div>
              <div className="brand-stat-item">
                <span className="brand-stat-number">300%</span>
                <span className="brand-stat-label">Recognition Boost</span>
              </div>
              <div className="brand-stat-item">
                <span className="brand-stat-number">98%</span>
                <span className="brand-stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="brand-hero-visual">
            <div className="brand-design-studio">
              <div className="brand-canvas">
                <div className="brand-canvas-header">
                  <div className="brand-canvas-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="brand-canvas-title">Brand Studio</div>
                </div>
                <div className="brand-canvas-content">
                  <div className="brand-logo-element">
                    <div className="brand-logo-text">LOGO</div>
                    <div className="brand-logo-shapes">
                      <div className="brand-shape brand-circle"></div>
                      <div className="brand-shape brand-square"></div>
                      <div className="brand-shape brand-triangle"></div>
                    </div>
                  </div>
                  <div className="brand-color-section">
                    <div className="brand-color-palette">
                      <div className="brand-color brand-primary"></div>
                      <div className="brand-color brand-secondary"></div>
                      <div className="brand-color brand-accent"></div>
                      <div className="brand-color brand-neutral"></div>
                    </div>
                    <div className="brand-color-codes">
                      <span>#FF6B35</span>
                      <span>#1E40AF</span>
                      <span>#10B981</span>
                    </div>
                  </div>
                  <div className="brand-typography">
                    <div className="brand-font-sample">Aa</div>
                    <div className="brand-font-name">Gilroy</div>
                  </div>
                </div>
              </div>
              <div className="brand-design-tools">
                <div className="brand-tool">
                  <div className="brand-tool-icon"><FaFigma /></div>
                  <span>Illustrator</span>
                </div>
                <div className="brand-tool">
                  <div className="brand-tool-icon"><FaFigma /></div>
                  <span>Figma</span>
                </div>
                <div className="brand-tool">
                  <div className="brand-tool-icon"><FaMagic /></div>
                  <span>Photoshop</span>
                </div>
              </div>
              <div className="brand-creative-elements">
                <div className="brand-element brand-element-1"></div>
                <div className="brand-element brand-element-2"></div>
                <div className="brand-element brand-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="brand-services-section">
        <div className="brand-container">
          <div className="brand-section-header">
            <h2 className="brand-section-title">Brand Identity Services</h2>
            <p className="brand-section-subtitle">Complete brand identity solutions from concept to implementation</p>
          </div>
          <div className="brand-services-grid">
            <div className="brand-service-card">
              <div className="brand-service-icon">
                <div className="brand-icon-bg"><FaPaintBrush /></div>
              </div>
              <h3 className="brand-service-title">Logo Design</h3>
              <p className="brand-service-desc">
                Distinctive logo designs that capture your brand essence and create lasting impressions across all
                touchpoints.
              </p>
              <div className="brand-service-features">
                <span>Logo Concepts</span>
                <span>Icon Design</span>
                <span>Variations</span>
              </div>
            </div>
            <div className="brand-service-card">
              <div className="brand-service-icon">
                <div className="brand-icon-bg"><FaClipboard /></div>
              </div>
              <h3 className="brand-service-title">Brand Guidelines</h3>
              <p className="brand-service-desc">
                Comprehensive brand guidelines to ensure consistent application across all marketing materials and
                platforms.
              </p>
              <div className="brand-service-features">
                <span>Style Guide</span>
                <span>Usage Rules</span>
                <span>Templates</span>
              </div>
            </div>
            <div className="brand-service-card">
              <div className="brand-service-icon">
                <div className="brand-icon-bg"><FaTheaterMasks /></div>
              </div>
              <h3 className="brand-service-title">Visual Identity</h3>
              <p className="brand-service-desc">
                Complete visual identity systems including colors, typography, and graphic elements that work
                harmoniously.
              </p>
              <div className="brand-service-features">
                <span>Color Palette</span>
                <span>Typography</span>
                <span>Graphics</span>
              </div>
            </div>
            <div className="brand-service-card">
              <div className="brand-service-icon">
                <div className="brand-icon-bg"><FaBox /></div>
              </div>
              <h3 className="brand-service-title">Brand Applications</h3>
              <p className="brand-service-desc">
                Design applications across business cards, letterheads, packaging, and digital assets for complete brand
                presence.
              </p>
              <div className="brand-service-features">
                <span>Business Cards</span>
                <span>Packaging</span>
                <span>Digital Assets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="brand-portfolio-section">
        <div className="brand-container">
          <div className="brand-section-header">
            <h2 className="brand-section-title">Brand Identity Projects</h2>
            <p className="brand-section-subtitle">Successful brand transformations across various industries</p>
          </div>
          <div className="brand-portfolio-showcase">
            <div className="brand-portfolio-card brand-portfolio-featured">
              <div className="brand-portfolio-header">
                <div className="brand-portfolio-badge">Featured Project</div>
                <h3 className="brand-portfolio-title">Tech Startup Rebrand</h3>
                <p className="brand-portfolio-desc">
                  Complete brand identity transformation for innovative fintech startup
                </p>
              </div>
              <div className="brand-portfolio-preview">
                <div className="brand-mockup-container">
                  <div className="brand-mockup-logo">FINTECH</div>
                  <div className="brand-mockup-colors">
                    <div className="brand-mockup-color" style={{ background: "#1E40AF" }}></div>
                    <div className="brand-mockup-color" style={{ background: "#10B981" }}></div>
                    <div className="brand-mockup-color" style={{ background: "#F59E0B" }}></div>
                    <div className="brand-mockup-color" style={{ background: "#EF4444" }}></div>
                  </div>
                  <div className="brand-mockup-typography">
                    <div className="brand-mockup-text">Aa Bb Cc</div>
                    <div className="brand-mockup-font">Gilroy Bold</div>
                  </div>
                </div>
              </div>
              <div className="brand-portfolio-deliverables">
                <div className="brand-deliverable">Logo Design</div>
                <div className="brand-deliverable">Brand Guidelines</div>
                <div className="brand-deliverable">Marketing Materials</div>
                <div className="brand-deliverable">Digital Assets</div>
              </div>
              <div className="brand-portfolio-result">300% Brand Recognition Increase</div>
            </div>
            <div className="brand-portfolio-card">
              <div className="brand-portfolio-icon"><FaPizzaSlice /></div>
              <h4 className="brand-portfolio-name">Restaurant Chain</h4>
              <p className="brand-portfolio-summary">
                Warm, family-friendly brand identity with consistent application across 15 locations
              </p>
              <div className="brand-portfolio-stat">15 Locations</div>
            </div>
            <div className="brand-portfolio-card">
              <div className="brand-portfolio-icon"><FaShoePrints /></div>
              <h4 className="brand-portfolio-name">Fashion Brand</h4>
              <p className="brand-portfolio-summary">
                Luxury fashion identity with elegant typography and sophisticated color palette
              </p>
              <div className="brand-portfolio-stat">50% Sales Boost</div>
            </div>
            <div className="brand-portfolio-card">
              <div className="brand-portfolio-icon"> <FaHospitalAlt /></div>
              <h4 className="brand-portfolio-name">Healthcare Clinic</h4>
              <p className="brand-portfolio-summary">
                Trustworthy medical brand with calming colors and professional typography
              </p>
              <div className="brand-portfolio-stat">200% Patient Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="brand-process-section">
        <div className="brand-container">
          <div className="brand-section-header">
            <h2 className="brand-section-title">Our Branding Process</h2>
            <p className="brand-section-subtitle">Strategic approach to creating memorable brand identities</p>
          </div>
          <div className="brand-process-timeline">
            <div className="brand-process-step">
              <div className="brand-step-number">01</div>
              <div className="brand-step-content">
                <h3 className="brand-step-title">Discovery & Research</h3>
                <p className="brand-step-desc">
                  Understanding your business, values, target audience, and competitive landscape through comprehensive
                  research.
                </p>
                <div className="brand-step-features">
                  <span>Brand Audit</span>
                  <span>Market Research</span>
                  <span>Competitor Analysis</span>
                </div>
              </div>
            </div>
            <div className="brand-process-step">
              <div className="brand-step-number">02</div>
              <div className="brand-step-content">
                <h3 className="brand-step-title">Strategy & Positioning</h3>
                <p className="brand-step-desc">
                  Developing brand positioning and messaging that differentiates you in the market and resonates with
                  your audience.
                </p>
                <div className="brand-step-features">
                  <span>Brand Strategy</span>
                  <span>Positioning</span>
                  <span>Messaging</span>
                </div>
              </div>
            </div>
            <div className="brand-process-step">
              <div className="brand-step-number">03</div>
              <div className="brand-step-content">
                <h3 className="brand-step-title">Design & Creation</h3>
                <p className="brand-step-desc">
                  Creating visual elements that bring your brand strategy to life with impactful design and memorable
                  aesthetics.
                </p>
                <div className="brand-step-features">
                  <span>Logo Design</span>
                  <span>Visual Identity</span>
                  <span>Brand Assets</span>
                </div>
              </div>
            </div>
            <div className="brand-process-step">
              <div className="brand-step-number">04</div>
              <div className="brand-step-content">
                <h3 className="brand-step-title">Implementation & Guidelines</h3>
                <p className="brand-step-desc">
                  Rolling out your new brand across all channels with detailed guidelines and ongoing support.
                </p>
                <div className="brand-step-features">
                  <span>Brand Guidelines</span>
                  <span>Asset Library</span>
                  <span>Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-cta-section">
        <div className="brand-container">
          <div className="brand-cta-content">
            <h2 className="brand-cta-title">Ready to Build Your Brand?</h2>
            <p className="brand-cta-subtitle">
              Let's create a brand identity that tells your story and connects with your audience on a deeper level.
            </p>
            <div className="brand-cta-actions">
              <button className="brand-cta-primary">Start Your Project</button>
              <button className="brand-cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Branding
