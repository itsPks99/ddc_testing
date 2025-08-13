import "./performance-marketing.css"
import { FaChartBar, FaSearch, FaUtensils, FaBriefcase, FaBullseye, FaGoogle, FaFacebookF, FaShopify  } from "react-icons/fa"
import { MdAnalytics } from "react-icons/md"

const PerformanceMarketing = () => {
  return (
    <div className="perf-marketing-page">
      {/* Hero Section */}
      <section className="perf-hero-section">
        <div className="perf-container">
          <div className="perf-hero-content">
            <div className="perf-hero-badge">
              <span>Performance Marketing</span>
            </div>
            <h1 className="perf-hero-title">
              Drive Measurable Results with
              <span className="perf-highlight"> Data-Driven Marketing</span>
            </h1>
            <p className="perf-hero-subtitle">
              Maximize your ROI and accelerate business growth with strategic performance marketing campaigns across
              Google Ads, Facebook, and other platforms.
            </p>
            <div className="perf-hero-actions">
              <button className="perf-cta-primary">Get Started</button>
              <button className="perf-cta-secondary">View Case Studies</button>
            </div>
            <div className="perf-hero-stats">
              <div className="perf-stat-item">
                <span className="perf-stat-number">450%</span>
                <span className="perf-stat-label">Avg ROAS</span>
              </div>
              <div className="perf-stat-item">
                <span className="perf-stat-number">$2.8M</span>
                <span className="perf-stat-label">Revenue Generated</span>
              </div>
              <div className="perf-stat-item">
                <span className="perf-stat-number">65%</span>
                <span className="perf-stat-label">Cost Reduction</span>
              </div>
            </div>
          </div>
          <div className="perf-hero-visual">
            <div className="perf-marketing-ecosystem">
              <div className="perf-central-hub">
                <div className="perf-hub-icon"><FaChartBar /></div>
                <div className="perf-hub-rings">
                  <div className="perf-ring perf-ring-1"></div>
                  <div className="perf-ring perf-ring-2"></div>
                  <div className="perf-ring perf-ring-3"></div>
                </div>
              </div>
              <div className="perf-platform perf-google">
                <div className="perf-platform-icon"><FaGoogle /></div>
                <div className="perf-platform-label">Google Ads</div>
                <div className="perf-platform-metric">+320%</div>
              </div>
              <div className="perf-platform perf-facebook">
                <div className="perf-platform-icon"><FaFacebookF /></div>
                <div className="perf-platform-label">Facebook</div>
                <div className="perf-platform-metric">+280%</div>
              </div>
              <div className="perf-platform perf-analytics">
                <div className="perf-platform-icon"><MdAnalytics /></div>
                <div className="perf-platform-label">Analytics</div>
                <div className="perf-platform-metric">Real-time</div>
              </div>
              <div className="perf-platform perf-shopify">
                <div className="perf-platform-icon"><FaShopify /></div>
                <div className="perf-platform-label">Shopify</div>
                <div className="perf-platform-metric">+450%</div>
              </div>
              <div className="perf-data-streams">
                <div className="perf-stream perf-stream-1"></div>
                <div className="perf-stream perf-stream-2"></div>
                <div className="perf-stream perf-stream-3"></div>
                <div className="perf-stream perf-stream-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="perf-services-section">
        <div className="perf-container">
          <div className="perf-section-header">
            <h2 className="perf-section-title">Performance Marketing Services</h2>
            <p className="perf-section-subtitle">Comprehensive solutions to maximize your marketing ROI</p>
          </div>
          <div className="perf-services-grid">
            <div className="perf-service-card">
              <div className="perf-service-icon">
                <div className="perf-icon-bg"><FaBullseye /></div>
              </div>
              <h3 className="perf-service-title">PPC Advertising</h3>
              <p className="perf-service-desc">
                Strategic pay-per-click campaigns across Google, Facebook, and other platforms to maximize conversions.
              </p>
              <div className="perf-service-features">
                <span>Google Ads</span>
                <span>Facebook Ads</span>
                <span>LinkedIn Ads</span>
              </div>
            </div>
            <div className="perf-service-card">
              <div className="perf-service-icon">
                <div className="perf-icon-bg"><FaChartBar /></div>
              </div>
              <h3 className="perf-service-title">Conversion Optimization</h3>
              <p className="perf-service-desc">
                Optimize your funnel and landing pages to increase conversion rates and reduce acquisition costs.
              </p>
              <div className="perf-service-features">
                <span>A/B Testing</span>
                <span>Landing Pages</span>
                <span>Funnel Analysis</span>
              </div>
            </div>
            <div className="perf-service-card">
              <div className="perf-service-icon">
                <div className="perf-icon-bg"><MdAnalytics /></div>
              </div>
              <h3 className="perf-service-title">Analytics & Reporting</h3>
              <p className="perf-service-desc">
                Comprehensive tracking and reporting to measure performance and identify growth opportunities.
              </p>
              <div className="perf-service-features">
                <span>Google Analytics</span>
                <span>Custom Dashboards</span>
                <span>ROI Tracking</span>
              </div>
            </div>
            <div className="perf-service-card">
              <div className="perf-service-icon">
                <div className="perf-icon-bg"><FaSearch /></div>
              </div>
              <h3 className="perf-service-title">SEO & SEM</h3>
              <p className="perf-service-desc">
                Search engine optimization and marketing to improve organic visibility and drive qualified traffic.
              </p>
              <div className="perf-service-features">
                <span>Keyword Research</span>
                <span>On-page SEO</span>
                <span>Technical SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="perf-results-section">
        <div className="perf-container">
          <div className="perf-section-header">
            <h2 className="perf-section-title">Campaign Results</h2>
            <p className="perf-section-subtitle">Real results from our performance marketing campaigns</p>
          </div>
          <div className="perf-results-showcase">
            <div className="perf-result-card perf-result-featured">
              <div className="perf-result-header">
                <div className="perf-result-badge">Featured Case Study</div>
                <h3 className="perf-result-title">E-commerce Fashion Brand</h3>
                <p className="perf-result-desc">
                  Complete performance marketing transformation for luxury fashion retailer
                </p>
              </div>
              <div className="perf-result-platforms">
                <div className="perf-platform-tag">Google Ads</div>
                <div className="perf-platform-tag">Facebook</div>
                <div className="perf-platform-tag">Instagram</div>
                <div className="perf-platform-tag">Shopify</div>
              </div>
              <div className="perf-result-metrics">
                <div className="perf-metric-large">
                  <span className="perf-metric-value">450%</span>
                  <span className="perf-metric-label">ROAS Increase</span>
                </div>
                <div className="perf-metrics-grid">
                  <div className="perf-metric-small">
                    <span className="perf-metric-number">$2.8M</span>
                    <span className="perf-metric-text">Revenue</span>
                  </div>
                  <div className="perf-metric-small">
                    <span className="perf-metric-number">65%</span>
                    <span className="perf-metric-text">Cost Reduction</span>
                  </div>
                  <div className="perf-metric-small">
                    <span className="perf-metric-number">12K</span>
                    <span className="perf-metric-text">New Customers</span>
                  </div>
                  <div className="perf-metric-small">
                    <span className="perf-metric-number">6 Months</span>
                    <span className="perf-metric-text">Timeline</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="perf-result-card">
              <div className="perf-result-icon"><FaBriefcase /></div>
              <h4 className="perf-result-name">SaaS Platform</h4>
              <p className="perf-result-summary">Lead generation campaigns across Google & LinkedIn</p>
              <div className="perf-result-stat">300% Lead Increase</div>
            </div>
            <div className="perf-result-card">
              <div className="perf-result-icon"><FaUtensils /></div>
              <h4 className="perf-result-name">Restaurant Chain</h4>
              <p className="perf-result-summary">Location-based advertising and social media campaigns</p>
              <div className="perf-result-stat">200% Foot Traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="perf-process-section">
        <div className="perf-container">
          <div className="perf-section-header">
            <h2 className="perf-section-title">Our Process</h2>
            <p className="perf-section-subtitle">How we deliver exceptional performance marketing results</p>
          </div>
          <div className="perf-process-timeline">
            <div className="perf-process-step">
              <div className="perf-step-number">01</div>
              <div className="perf-step-content">
                <h3 className="perf-step-title">Strategy Development</h3>
                <p className="perf-step-desc">
                  We analyze your business goals and create a comprehensive performance marketing strategy.
                </p>
                <div className="perf-step-features">
                  <span>Market Research</span>
                  <span>Competitor Analysis</span>
                  <span>Goal Setting</span>
                </div>
              </div>
            </div>
            <div className="perf-process-step">
              <div className="perf-step-number">02</div>
              <div className="perf-step-content">
                <h3 className="perf-step-title">Campaign Setup</h3>
                <p className="perf-step-desc">
                  Implementation of tracking, campaigns, and optimization frameworks across all channels.
                </p>
                <div className="perf-step-features">
                  <span>Platform Setup</span>
                  <span>Tracking Implementation</span>
                  <span>Creative Development</span>
                </div>
              </div>
            </div>
            <div className="perf-process-step">
              <div className="perf-step-number">03</div>
              <div className="perf-step-content">
                <h3 className="perf-step-title">Optimization</h3>
                <p className="perf-step-desc">
                  Continuous testing and optimization to improve performance and maximize ROI.
                </p>
                <div className="perf-step-features">
                  <span>A/B Testing</span>
                  <span>Bid Optimization</span>
                  <span>Audience Refinement</span>
                </div>
              </div>
            </div>
            <div className="perf-process-step">
              <div className="perf-step-number">04</div>
              <div className="perf-step-content">
                <h3 className="perf-step-title">Reporting</h3>
                <p className="perf-step-desc">
                  Regular performance reports with actionable insights and recommendations.
                </p>
                <div className="perf-step-features">
                  <span>Custom Dashboards</span>
                  <span>Weekly Reports</span>
                  <span>Strategy Adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="perf-cta-section">
        <div className="perf-container">
          <div className="perf-cta-content">
            <h2 className="perf-cta-title">Ready to Boost Your Performance?</h2>
            <p className="perf-cta-subtitle">
              Let's discuss how we can help you achieve measurable results with performance marketing.
            </p>
            <div className="perf-cta-actions">
              <button className="perf-cta-primary">Start Your Campaign</button>
              <button className="perf-cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PerformanceMarketing
