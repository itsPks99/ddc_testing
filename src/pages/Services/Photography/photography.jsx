import "./photography.css"
import { FaCamera, FaUserTie, FaBuilding, FaUtensils } from "react-icons/fa"
import { MdCelebration } from "react-icons/md"

const Photography = () => {
  return (
    <div className="photography-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Photography</h1>
            <p>
              Capture your brand's story through stunning visuals that engage your audience and elevate your marketing
              efforts.
            </p>
            <button className="cta-button">Book a Session</button>
          </div>
          <div className="hero-visual">
            <div className="photography-studio">
              <div className="camera-setup">
                <div className="main-camera">
                  <div className="camera-body">
                    <div className="lens-ring">
                      <div className="lens-center"></div>
                    </div>
                    <div className="camera-details">
                      <div className="viewfinder"></div>
                      <div className="flash"></div>
                    </div>
                  </div>
                </div>
                <div className="photo-gallery">
                  <div className="photo-frame frame-1">
                    <div className="photo-content"></div>
                  </div>
                  <div className="photo-frame frame-2">
                    <div className="photo-content"></div>
                  </div>
                  <div className="photo-frame frame-3">
                    <div className="photo-content"></div>
                  </div>
                </div>
                <div className="studio-lights">
                  <div className="light-beam beam-1"></div>
                  <div className="light-beam beam-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Photography Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FaCamera /></div>
              <h3>Product Photography</h3>
              <p>High-quality product shots that showcase your items in the best light for e-commerce and marketing.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaUserTie /></div>
              <h3>Corporate Photography</h3>
              <p>Professional headshots and corporate event photography to enhance your business image.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaBuilding /></div>
              <h3>Commercial Photography</h3>
              <p>Architectural and commercial space photography for real estate and business marketing.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><MdCelebration /></div>
              <h3>Event Photography</h3>
              <p>Comprehensive event coverage capturing all the important moments and emotions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="photography-portfolio">
        <div className="container">
          <h2>Photography Portfolio</h2>
          <div className="portfolio-categories">
            <div className="category-tabs">
              <button className="category-tab active">All Projects</button>
              <button className="category-tab">Product</button>
              <button className="category-tab">Corporate</button>
              <button className="category-tab">Events</button>
            </div>
          </div>
          <div className="photography-showcase">
            <div className="photo-project project-featured">
              <div className="project-gallery">
                <div className="main-photo">
                  <div className="photo-overlay">
                    <h3>Fashion Product Shoot</h3>
                    <p>High-end fashion photography for luxury brand campaign</p>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <div className="project-specs">
                  <div className="spec">
                    <span className="spec-label">Camera:</span>
                    <span className="spec-value">Canon EOS R5</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Lens:</span>
                    <span className="spec-value">85mm f/1.4</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Photos:</span>
                    <span className="spec-value">150+ Images</span>
                  </div>
                </div>
                <div className="project-result">300% Engagement Increase</div>
              </div>
            </div>
            <div className="photo-project">
              <div className="project-icon"><FaBuilding /></div>
              <h4>Corporate Headshots</h4>
              <p>Professional headshots for tech company executives and team members</p>
              <div className="project-metric">50+ Executives</div>
            </div>
            <div className="photo-project">
              <div className="project-icon"><MdCelebration /></div>
              <h4>Product Launch Event</h4>
              <p>Complete event coverage including keynote, networking, and product demonstrations</p>
              <div className="project-metric">500+ Photos</div>
            </div>
            <div className="photo-project">
              <div className="project-icon"><FaUtensils /></div>
              <h4>Restaurant Menu Photography</h4>
              <p>Appetizing food photography for restaurant chain menu and marketing materials</p>
              <div className="project-metric">25+ Dishes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <h2>Our Photography Portfolio</h2>
          <div className="portfolio-tabs">
            <button className="tab-button active">All</button>
            <button className="tab-button">Product</button>
            <button className="tab-button">Corporate</button>
            <button className="tab-button">Events</button>
          </div>
          <div className="portfolio-gallery">
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Product Shoot</h3>
                <p>Fashion Collection 2024</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Corporate Event</h3>
                <p>Annual Conference</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Architecture</h3>
                <p>Modern Office Space</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Portrait Session</h3>
                <p>Executive Headshots</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Product Lifestyle</h3>
                <p>Tech Accessories</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image"></div>
              <div className="gallery-overlay">
                <h3>Event Coverage</h3>
                <p>Product Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Photography Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Consultation</h3>
              <p>Understanding your vision, requirements, and objectives for the photography session.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Location scouting, equipment preparation, and detailed shoot planning.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Photography</h3>
              <p>Professional photography session with attention to lighting, composition, and detail.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Post-Production</h3>
              <p>Professional editing and retouching to deliver high-quality final images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="equipment-section">
        <div className="container">
          <h2>Professional Equipment</h2>
          <div className="equipment-grid">
            <div className="equipment-item">
              <h3>Cameras</h3>
              <p>Professional DSLR and mirrorless cameras for exceptional image quality</p>
            </div>
            <div className="equipment-item">
              <h3>Lenses</h3>
              <p>Wide range of professional lenses for every shooting scenario</p>
            </div>
            <div className="equipment-item">
              <h3>Lighting</h3>
              <p>Studio and portable lighting equipment for perfect illumination</p>
            </div>
            <div className="equipment-item">
              <h3>Accessories</h3>
              <p>Tripods, reflectors, and other professional accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="photography-cta-section">
        <div className="container">
          <h2>Ready to Capture Your Vision?</h2>
          <p>Let's create stunning visuals that tell your story and captivate your audience.</p>
          <button className="cta-button-secondary">Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default Photography
