import "./social-media.css"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaTwitterSquare, 
  FaLinkedinIn, 
  FaChartBar, 
  FaChartLine, 
  FaComments, 
  FaShoppingCart, 
  FaHospital 
} from "react-icons/fa";
import { FaTwitter as FaTwitterX } from "react-icons/fa6";
import { FaPenNib as FaContentCreation } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="social-media-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Social Media</h1>
            <p>
              Build a strong social media presence that engages your audience, drives brand awareness, and converts
              followers into customers.
            </p>
            <button className="cta-button">Boost Your Presence</button>
          </div>
          <div className="hero-visual">
            <div className="social-media-hub">
              <div className="central-dashboard">
                <div className="dashboard-header">
                  <div className="dashboard-title">Social Hub</div>
                  <div className="dashboard-stats">
                    <div className="stat">1.2M</div>
                    <div className="stat">85%</div>
                  </div>
                </div>
                <div className="dashboard-content">
                  <div className="content-row">
                    <div className="content-block"></div>
                    <div className="content-block"></div>
                  </div>
                  <div className="content-row">
                    <div className="content-block wide"></div>
                  </div>
                </div>
              </div>
              <div className="social-platforms">
                <div className="platform-bubble platform-facebook">
                  <div className="platform-icon"><FaFacebookF /></div>
                  <div className="platform-metrics">2.5K</div>
                </div>
                <div className="platform-bubble platform-instagram">
                  <div className="platform-icon"><FaInstagram /></div>
                  <div className="platform-metrics">5.8K</div>
                </div>
                <div className="platform-bubble platform-twitter">
                  <div className="platform-icon"><FaTwitterX /></div>
                  <div className="platform-metrics">1.2K</div>
                </div>
                <div className="platform-bubble platform-linkedin">
                  <div className="platform-icon"><FaLinkedinIn /> </div>
                  <div className="platform-metrics">3.4K</div>
                </div>
              </div>
              <div className="engagement-lines">
                <div className="engagement-line line-1"></div>
                <div className="engagement-line line-2"></div>
                <div className="engagement-line line-3"></div>
                <div className="engagement-line line-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Social Media Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FaContentCreation /></div>
              <h3>Content Creation</h3>
              <p>Engaging posts, stories, and multimedia content tailored to each platform and your audience.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaChartBar /></div>
              <h3>Social Media Strategy</h3>
              <p>Comprehensive strategies to grow your following and achieve your business objectives.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaComments /></div>
              <h3>Community Management</h3>
              <p>Active engagement with your audience, responding to comments and building relationships.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaChartLine /></div>
              <h3>Social Media Advertising</h3>
              <p>Targeted ad campaigns across platforms to reach new audiences and drive conversions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-campaigns">
        <div className="container">
          <h2>Social Media Campaign Results</h2>
          <div className="campaigns-showcase">
            <div className="campaign-card campaign-featured">
              <div className="campaign-header">
                <h3>Tech Startup Launch Campaign</h3>
                <div className="campaign-platforms">
                  <span>Facebook</span>
                  <span>Instagram</span>
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                </div>
              </div>
              <div className="campaign-metrics">
                <div className="metric-large">
                  <span className="metric-value">2.5M</span>
                  <span className="metric-label">Total Reach</span>
                </div>
                <div className="metric-grid">
                  <div className="metric">
                    <span>450%</span>
                    <label>Engagement</label>
                  </div>
                  <div className="metric">
                    <span>12K</span>
                    <label>New Followers</label>
                  </div>
                  <div className="metric">
                    <span>85%</span>
                    <label>Brand Awareness</label>
                  </div>
                  <div className="metric">
                    <span>300</span>
                    <label>Leads Generated</label>
                  </div>
                </div>
              </div>
              <div className="campaign-duration">6-Month Campaign</div>
            </div>
            <div className="campaign-card">
              <div className="campaign-icon">🛒</div>
              <h4>E-commerce Holiday Campaign</h4>
              <p>Black Friday and holiday season social media marketing across all platforms</p>
              <div className="campaign-result">$500K Revenue</div>
            </div>
            <div className="campaign-card">
              <div className="campaign-icon"><FaShoppingCart /></div>
              <h4>E-commerce Holiday Campaign</h4>
              <p>Black Friday and holiday season social media marketing across all platforms</p>
              <div className="campaign-result">$500K Revenue</div>
            </div>
            <div className="campaign-card">
              <div className="campaign-icon"><FaHospital /></div>
              <h4>Healthcare Awareness Campaign</h4>
              <p>Health awareness campaign with educational content and community engagement</p>
              <div className="campaign-result">1M+ Impressions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <div className="container">
          <h2>Platforms We Manage</h2>
          <div className="platforms-grid">
            <div className="platform-card">
              <div className="platform-icon"><FaFacebookF /></div>
              <h3>Facebook</h3>
              <p>Build communities and drive engagement with targeted content and advertising.</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon"><FaInstagram /></div>
              <h3>Instagram</h3>
              <p>Visual storytelling through posts, stories, and reels to showcase your brand.</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon"><FaTwitter /></div>
              <h3>Twitter</h3>
              <p>Real-time engagement and thought leadership in your industry.</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon"><FaLinkedinIn /></div>
              <h3>LinkedIn</h3>
              <p>Professional networking and B2B marketing to reach decision makers.</p>
            </div>
            {/* <div className="platform-card">
              <div className="platform-icon">🎵</div>
              <h3>TikTok</h3>
              <p>Creative short-form videos to reach younger audiences and go viral.</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">📺</div>
              <h3>YouTube</h3>
              <p>Long-form video content for education, entertainment, and brand building.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Social Media Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Audit & Analysis</h3>
              <p>Comprehensive analysis of your current social media presence and competitor research.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Strategy Development</h3>
              <p>Creating a tailored social media strategy aligned with your business goals.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Content Planning</h3>
              <p>Developing content calendars and creating engaging posts for each platform.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Execution & Optimization</h3>
              <p>Publishing content, engaging with audience, and optimizing based on performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <h2>Results We Deliver</h2>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-number">150%</div>
              <h3>Engagement Increase</h3>
              <p>Average engagement rate improvement across all platforms</p>
            </div>
            <div className="result-item">
              <div className="result-number">300%</div>
              <h3>Follower Growth</h3>
              <p>Organic follower growth within the first 6 months</p>
            </div>
            <div className="result-item">
              <div className="result-number">200%</div>
              <h3>Brand Awareness</h3>
              <p>Increase in brand mentions and social media reach</p>
            </div>
            <div className="result-item">
              <div className="result-number">180%</div>
              <h3>Lead Generation</h3>
              <p>Improvement in social media driven leads and conversions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="social-media-cta-section">
        <div className="container">
          <h2>Ready to Dominate Social Media?</h2>
          <p>Let's create a social media strategy that builds your brand and drives real business results.</p>
          <button className="cta-button-secondary">Get Started Today</button>
        </div>
      </section>
    </div>
  )
}

export default SocialMedia
