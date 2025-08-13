import React, { useState } from 'react';
import './SectorsSection.css';

const SectorsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const sectors = [
    {
  id: 1,
  title: "SOBER ",
  description: "Sober is a non-alcoholic beverage brand that offers a refreshing alternative for those seeking a sober lifestyle without compromising on taste.",
  image: "/CaseStudys/Sober.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  color: "#0c5a4c",
  overlayColor: "rgba(51, 51, 51, 0.8)"
},
{
  id: 2,
  title: "SAMSARA",
  description: "Samsara is a brand that embodies the essence of nature and sustainability, offering products that connect people with the earth's resources in a mindful way.",
  image: "/CaseStudys/Samsaragin.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 3,
  title: "NOUA NAILS",
  description: "Noua Nails is a beauty brand specializing in high-quality nail care products, designed to enhance the natural beauty of nails while promoting healthy growth.",
  image: "/CaseStudys/nouanails.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 4,
  title: "MENWORKS",
  description: "Menworks is a modern grooming company rooted in the traditions of the past. We combine everyday authenticity and high-performance ingredients with a luxurious skincare experience. We are committed to delivering an astonishingly superior grooming experience from head to toe, day in and day out.",
  image: "/CaseStudys/menworks.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 5,
  title: "ABRACADABRA",
  description: "An Indian brand creating safe, beautiful, and thoughtfully designed baby essentials for every precious moment. Born from a mother’s vision to craft secure and comforting pieces, Abracadabra has grown into a trusted name for families across India.",
  image: "/CaseStudys/Abracadabra.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 6,
  title: "SUNEHARI DHAGA",
  description: "Sunehari Dhaga is a brand that celebrates the art of traditional Indian craftsmanship, offering exquisite handmade products that blend cultural heritage with modern aesthetics.",
  image: "/CaseStudys/suneharidhaga.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 7,
  title: "NAUVAB",
  description: "Nauvab is a luxury brand that specializes in high-end fashion and accessories, offering a unique blend of contemporary design and timeless elegance.",
  image: "/CaseStudys/nauvab.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 8,
  title: "ORNOD",
  description: "Ornod is a brand that focuses on creating innovative and stylish home decor products, designed to enhance living spaces with a touch of modern elegance.",
  image: "/CaseStudys/ornod.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
}

    // {
    //   id: 9,
    //   title: "Hospitality",
    //   description: "Creating exceptional guest experiences in the evolving hospitality industry.",
    //   image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 10,
    //   title: "Real Estate",
    //   description: "Navigating market trends and opportunities in the dynamic real estate sector.",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 11,
    //   title: "Automobile",
    //   description: "Driving innovation in the rapidly evolving automotive industry.",
    //   image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 12,
    //   title: "E-Commerce",
    //   description: "Optimizing digital retail experiences for today's online shoppers.",
    //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // }
  ];

  const displayedSectors = showAll ? sectors : sectors.slice(0, 5);

  return (
    <section className="sector-module-section">
      <div className="sector-module-container">
        {/* Added section title */}
        {/* <div className="sector-module-header">
          <h2 className="sector-module-main-title">Sectors </h2>
          <p className="sector-module-subtitle">Specialized expertise across diverse Sectors</p>
        </div> */}
        
        <div className="sector-module-grid">
          {displayedSectors.map((sector, index) => (
            <div 
              className={`sector-module-card ${index >= 3 && index < 5 ? 'sector-module-wide-card' : ''}`}
              key={sector.id}
              style={sector.color ? { backgroundColor: sector.color } : {}}
            >
              <div className="sector-module-image">
                <img 
                  src={sector.image || "/placeholder.svg"} 
                  alt={sector.title}
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(sector.title)}`;
                  }}
                />
                <div className="sector-module-overlay"></div>
                <div 
                  className="sector-module-hover-overlay"
                  style={{ backgroundColor: sector.overlayColor || 'rgba(0, 0, 0, 0.7)' }}
                ></div>
              </div>
              
              <div className="sector-module-content">
                <h3 className="sector-module-title">
                  {sector.title}
                  {/* {sector.hasArrow && <span className="sector-module-arrow-icon">›</span>} */}
                </h3>
                
                <div className="sector-module-description">
                  <p>{sector.description}</p>
                  {/* Added Read More button to all cards */}
                  {/* <a href="#" className="sector-module-learn-more">
                    Read More <span className="sector-module-circle-arrow">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sector-module-show-all-container">
          <button className="sector-module-show-all-button" onClick={() => setShowAll(!showAll)}>
            <span>See {showAll ? "less" : "more"}</span>
            <span className={`sector-module-button-arrow ${showAll ? "up" : "down"}`}></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;