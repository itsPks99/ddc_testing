import "./web-app-development.css"
import { FaReact, FaNodeJs, FaGraduationCap, FaDatabase, FaMobileAlt, FaLeaf, FaLaptopCode, FaShoppingCart, FaCodeBranch } from "react-icons/fa"

const WebAppDevelopment = () => {
  return (
    <div className="webapp-page">
      {/* Hero Section */}
      <section className="webapp-hero-section">
        <div className="webapp-container">
          <div className="webapp-hero-content">
            <div className="webapp-hero-badge">
              <span>Web & App Development</span>
            </div>
            <h1 className="webapp-hero-title">
              Build Powerful 
              <span className="webapp-highlight"> Digital Solutions</span>
            </h1>
            <p className="webapp-hero-subtitle">
              Create scalable web applications and mobile apps that deliver exceptional user experiences and drive business growth with modern technologies.
            </p>
            <div className="webapp-hero-actions">
              <button className="webapp-cta-primary">Start Your Project</button>
              <button className="webapp-cta-secondary">View Our Work</button>
            </div>
            <div className="webapp-hero-stats">
              <div className="webapp-stat-item">
                <span className="webapp-stat-number">200+</span>
                <span className="webapp-stat-label">Apps Built</span>
              </div>
              <div className="webapp-stat-item">
                <span className="webapp-stat-number">99.9%</span>
                <span className="webapp-stat-label">Uptime</span>
              </div>
              <div className="webapp-stat-item">
                <span className="webapp-stat-number">50M+</span>
                <span className="webapp-stat-label">Users Served</span>
              </div>
            </div>
          </div>
          <div className="webapp-hero-visual">
            <div className="webapp-development-workspace">
              <div className="webapp-code-editor">
                <div className="webapp-editor-header">
                  <div className="webapp-editor-tabs">
                    <div className="webapp-tab webapp-tab-active">React.tsx</div>
                    <div className="webapp-tab">Node.js</div>
                    <div className="webapp-tab">MongoDB</div>
                  </div>
                  <div className="webapp-editor-actions">
                    <div className="webapp-action-btn">▶</div>
                    <div className="webapp-action-btn">⚙</div>
                  </div>
                </div>
                <div className="webapp-code-content">
                  <div className="webapp-code-line">
                    <span className="webapp-line-number">1</span>
                    <span className="webapp-code-keyword">import</span>
                    <span className="webapp-code-text"> React from 'react'</span>
                  </div>
                  <div className="webapp-code-line">
                    <span className="webapp-line-number">2</span>
                    <span className="webapp-code-keyword">const</span>
                    <span className="webapp-code-text"> App = () =&gt; {`{`}</span>
                  </div>
                  <div className="webapp-code-line">
                    <span className="webapp-line-number">3</span>
                    <span className="webapp-code-text">  return {`<div>Hello World</div>`}</span>
                  </div>
                  <div className="webapp-code-line">
                    <span className="webapp-line-number">4</span>
                    <span className="webapp-code-text">{`}`}</span>
                  </div>
                </div>
              </div>
              <div className="webapp-tech-stack">
                <div className="webapp-stack-layer webapp-frontend">
                  <div className="webapp-layer-icon"><FaReact /></div>
                  <span>Frontend</span>
                </div>
                <div className="webapp-stack-layer webapp-backend">
                  <div className="webapp-layer-icon"><FaNodeJs /></div>
                  <span>Backend</span>
                </div>
                <div className="webapp-stack-layer webapp-database">
                  <div className="webapp-layer-icon"><FaDatabase /></div>
                  <span>Database</span>
                </div>
                <div className="webapp-data-flow">
                  <div className="webapp-flow-arrow webapp-arrow-1">↕</div>
                  <div className="webapp-flow-arrow webapp-arrow-2">↕</div>
                </div>
              </div>
              <div className="webapp-browser-preview">
                <div className="webapp-browser-header">
                  <div className="webapp-browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="webapp-url-bar">localhost:3000</div>
                </div>
                <div className="webapp-browser-content">
                  <div className="webapp-app-header"></div>
                  <div className="webapp-app-body">
                    <div className="webapp-app-sidebar"></div>
                    <div className="webapp-app-main"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="webapp-tech-section">
        <div className="webapp-container">
          <div className="webapp-section-header">
            <h2 className="webapp-section-title">Technologies We Use</h2>
            <p className="webapp-section-subtitle">Modern tech stack for scalable and performant applications</p>
          </div>
          <div className="webapp-tech-grid">
            <div className="webapp-tech-category">
              <div className="webapp-category-header">
                <div className="webapp-category-icon"><FaReact /></div>
                <h3 className="webapp-category-title">Frontend</h3>
              </div>
              <div className="webapp-tech-items">
                <div className="webapp-tech-item">React</div>
                <div className="webapp-tech-item">Vue.js</div>
                <div className="webapp-tech-item">Angular</div>
                <div className="webapp-tech-item">Next.js</div>
                <div className="webapp-tech-item">TypeScript</div>
              </div>
            </div>
            <div className="webapp-tech-category">
              <div className="webapp-category-header">
                <div className="webapp-category-icon"><FaLeaf /></div>
                <h3 className="webapp-category-title">Backend</h3>
              </div>
              <div className="webapp-tech-items">
                <div className="webapp-tech-item">Node.js</div>
                <div className="webapp-tech-item">Python</div>
                <div className="webapp-tech-item">PHP</div>
                <div className="webapp-tech-item">Java</div>
                <div className="webapp-tech-item">Go</div>
              </div>
            </div>
            <div className="webapp-tech-category">
              <div className="webapp-category-header">
                <div className="webapp-category-icon"><FaMobileAlt /></div>
                <h3 className="webapp-category-title">Mobile</h3>
              </div>
              <div className="webapp-tech-items">
                <div className="webapp-tech-item">React Native</div>
                <div className="webapp-tech-item">Flutter</div>
                <div className="webapp-tech-item">iOS</div>
                <div className="webapp-tech-item">Android</div>
                <div className="webapp-tech-item">Ionic</div>
              </div>
            </div>
            <div className="webapp-tech-category">
              <div className="webapp-category-header">
                <div className="webapp-category-icon"><FaLeaf /></div>
                <h3 className="webapp-category-title">Database</h3>
              </div>
              <div className="webapp-tech-items">
                <div className="webapp-tech-item">MongoDB</div>
                <div className="webapp-tech-item">PostgreSQL</div>
                <div className="webapp-tech-item">MySQL</div>
                <div className="webapp-tech-item">Firebase</div>
                <div className="webapp-tech-item">Redis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="webapp-services-section">
        <div className="webapp-container">
          <div className="webapp-section-header">
            <h2 className="webapp-section-title">Development Services</h2>
            <p className="webapp-section-subtitle">End-to-end development solutions for your digital needs</p>
          </div>
          <div className="webapp-services-grid">
            <div className="webapp-service-card">
              <div className="webapp-service-icon">
                <div className="webapp-icon-bg"><FaLaptopCode /></div>
              </div>
              <h3 className="webapp-service-title">Web Applications</h3>
              <p className="webapp-service-desc">
                Custom web applications built with modern frameworks for optimal performance and user experience.
              </p>
              <div className="webapp-service-features">
                <span>Responsive Design</span>
                <span>PWA Support</span>
                <span>SEO Optimized</span>
              </div>
            </div>
            <div className="webapp-service-card">
              <div className="webapp-service-icon">
                <div className="webapp-icon-bg"><FaMobileAlt /></div>
              </div>
              <h3 className="webapp-service-title">Mobile Apps</h3>
              <p className="webapp-service-desc">
                Native and cross-platform mobile applications for iOS and Android with seamless functionality.
              </p>
              <div className="webapp-service-features">
                <span>Cross-Platform</span>
                <span>Native Performance</span>
                <span>App Store Ready</span>
              </div>
            </div>
            <div className="webapp-service-card">
              <div className="webapp-service-icon">
                <div className="webapp-icon-bg"><FaShoppingCart /></div>
              </div>
              <h3 className="webapp-service-title">E-commerce Solutions</h3>
              <p className="webapp-service-desc">
                Complete e-commerce platforms with payment integration, inventory management, and analytics.
              </p>
              <div className="webapp-service-features">
                <span>Payment Gateway</span>
                <span>Inventory System</span>
                <span>Analytics</span>
              </div>
            </div>
            <div className="webapp-service-card">
              <div className="webapp-service-icon">
                <div className="webapp-icon-bg"><FaCodeBranch /></div>
              </div>
              <h3 className="webapp-service-title">API Development</h3>
              <p className="webapp-service-desc">
                Robust APIs and backend services to power your applications and integrate with third-party systems.
              </p>
              <div className="webapp-service-features">
                <span>RESTful APIs</span>
                <span>GraphQL</span>
                <span>Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="webapp-projects-section">
        <div className="webapp-container">
          <div className="webapp-section-header">
            <h2 className="webapp-section-title">Development Projects</h2>
            <p className="webapp-section-subtitle">Successful applications we've built for various industries</p>
          </div>
          <div className="webapp-projects-showcase">
            <div className="webapp-project-card webapp-project-featured">
              <div className="webapp-project-header">
                <div className="webapp-project-badge">Featured Project</div>
                <h3 className="webapp-project-title">SaaS Analytics Platform</h3>
                <p className="webapp-project-desc">Full-stack web application with real-time data processing and interactive dashboards</p>
              </div>
              <div className="webapp-project-preview">
                <div className="webapp-project-mockup">
                  <div className="webapp-mockup-header">
                    <div className="webapp-mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="webapp-mockup-url">analytics.app</div>
                  </div>
                  <div className="webapp-mockup-content">
                    <div className="webapp-mockup-sidebar"></div>
                    <div className="webapp-mockup-main">
                      <div className="webapp-mockup-charts">
                        <div className="webapp-chart webapp-chart-1"></div>
                        <div className="webapp-chart webapp-chart-2"></div>
                      </div>
                      <div className="webapp-mockup-table"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="webapp-project-tech">
                <div className="webapp-tech-tag">React</div>
                <div className="webapp-tech-tag">Node.js</div>
                <div className="webapp-tech-tag">MongoDB</div>
                <div className="webapp-tech-tag">Socket.io</div>
              </div>
              <div className="webapp-project-metrics">
                <div className="webapp-metric">
                  <span className="webapp-metric-number">10K+</span>
                  <span className="webapp-metric-label">Users</span>
                </div>
                <div className="webapp-metric">
                  <span className="webapp-metric-number">99.9%</span>
                  <span className="webapp-metric-label">Uptime</span>
                </div>
                <div className="webapp-metric">
                  <span className="webapp-metric-number">2TB</span>
                  <span className="webapp-metric-label">Data Processed</span>
                </div>
              </div>
            </div>
            <div className="webapp-project-card">
              <div className="webapp-project-icon"><FaShoppingCart /></div>
              <h4 className="webapp-project-name">E-commerce Platform</h4>
              <p className="webapp-project-summary">Custom shopping platform with payment integration and inventory management</p>
              <div className="webapp-project-stat">$2M+ Revenue</div>
            </div>
            <div className="webapp-project-card">
              <div className="webapp-project-icon"><FaMobileAlt /></div>
              <h4 className="webapp-project-name">Mobile Banking App</h4>
              <p className="webapp-project-summary">Secure banking application with biometric authentication and real-time transactions</p>
              <div className="webapp-project-stat">500K+ Downloads</div>
            </div>
            <div className="webapp-project-card">
              <div className="webapp-project-icon"><FaGraduationCap /></div>
              <h4 className="webapp-project-name">Learning Management System</h4>
              <p className="webapp-project-summary">Educational platform with video streaming, quizzes, and progress tracking</p>
              <div className="webapp-project-stat">25K+ Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="webapp-process-section">
        <div className="webapp-container">
          <div className="webapp-section-header">
            <h2 className="webapp-section-title">Development Process</h2>
            <p className="webapp-section-subtitle">Our proven methodology for delivering exceptional digital solutions</p>
          </div>
          <div className="webapp-process-timeline">
            <div className="webapp-process-step">
              <div className="webapp-step-number">01</div>
              <div className="webapp-step-content">
                <h3 className="webapp-step-title">Planning & Analysis</h3>
                <p className="webapp-step-desc">Requirements analysis, architecture design, and project roadmap creation with detailed specifications.</p>
                <div className="webapp-step-features">
                  <span>Requirements Gathering</span>
                  <span>Technical Architecture</span>
                  <span>Project Planning</span>
                </div>
              </div>
            </div>
            <div className="webapp-process-step">
              <div className="webapp-step-number">02</div>
              <div className="webapp-step-content">
                <h3 className="webapp-step-title">Design & Prototyping</h3>
                <p className="webapp-step-desc">UI/UX design, wireframing, and prototype development for optimal user experience and interface design.</p>
                <div className="webapp-step-features">
                  <span>UI/UX Design</span>
                  <span>Wireframing</span>
                  <span>Interactive Prototypes</span>
                </div>
              </div>
            </div>
            <div className="webapp-process-step">
              <div className="webapp-step-number">03</div>
              <div className="webapp-step-content">
                <h3 className="webapp-step-title">Development & Testing</h3>
                <p className="webapp-step-desc">Agile development with regular updates, comprehensive testing, and quality assurance processes.</p>
                <div className="webapp-step-features">
                  <span>Agile Development</span>
                  <span>Quality Assurance</span>
                  <span>Performance Testing</span>
                </div>
              </div>
            </div>
            <div className="webapp-process-step">
              <div className="webapp-step-number">04</div>
              <div className="webapp-step-content">
                <h3 className="webapp-step-title">Launch & Support</h3>
                <p className="webapp-step-desc">Deployment, monitoring, and ongoing support to ensure smooth operation and continuous improvement.</p>
                <div className="webapp-step-features">
                  <span>Deployment</span>
                  <span>Monitoring</span>
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="webapp-cta-section">
        <div className="webapp-container">
          <div className="webapp-cta-content">
            <h2 className="webapp-cta-title">Ready to Build Something Amazing?</h2>
            <p className="webapp-cta-subtitle">Let's discuss your project and create a digital solution that exceeds your expectations and drives business growth.</p>
            <div className="webapp-cta-actions">
              <button className="webapp-cta-primary">Start Your Project</button>
              <button className="webapp-cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebAppDevelopment
