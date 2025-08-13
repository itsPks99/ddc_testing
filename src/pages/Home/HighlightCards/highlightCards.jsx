import React, { useEffect, useState, useRef } from 'react';
import './highlightCards.css';
import { useNavigate } from 'react-router-dom';

const HighlightCards = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const highlightCards = [
    {
      id: 1,
      title: 'Social Media',
      color: '#7389AC',
      textcolor: '#062042',
      image: './assets/highlightedCards/socialMedia.png',
      link: '/services/social-media',
    },
    {
      id: 2,
      title: 'Photography',
      color: '#BBA4A4',
      textcolor: '#6E4646',
      image: './assets/highlightedCards/photography.png',
      link: '/services/photography',
    },
    {
      id: 3,
      title: 'Web/App Development',
      color: '#562807',
      textcolor: '#F1EFE5',
      image: './assets/highlightedCards/WebDev.png',
      link: '/services/webapp-development',
    },
    {
      id: 4,
      title: 'Branding',
      color: '#F1EFE5',
      textcolor: '#062042',
      image: './assets/highlightedCards/branding.png',
      link: '/services/branding',
    },
    {
      id: 5,
      title: 'Performance Marketing',
      color: '#0C2646',
      textcolor: '#ffffff',
      image: './assets/highlightedCards/performance.jpeg',
      link: '/services/performance-marketing',
    },
  ];

  return (
    <div className="highlight-container" ref={containerRef}>
      <div className="highlight-header">
        <h2>Specialized knowledge areas</h2>
        <button 
          className="highlight-button"
          onClick={toggleExpand}
        >
          View More
        </button>
      </div>
      
      <div className={`highlightCards-container ${isExpanded ? 'expanded' : ''}`}>
        {highlightCards.map((highlightCard, index) => (
          <div 
            key={highlightCard.id}
            className="highlightCard"
            onClick={() => navigate(highlightCard.link)}
            style={{ 
              backgroundColor: highlightCard.color,
              zIndex: highlightCards.length - index,
              cursor: 'pointer'
            }}
          >
            <div className="highlightCard-title" style={{ color: highlightCard.textcolor }}>
              {highlightCard.title}
            </div>
            {highlightCard.image && (
              <div className="highlighthighlightCard-image-container">
                <img 
                  src={highlightCard.image} 
                  alt={highlightCard.title} 
                  className="highlighthighlightCard-image" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightCards;
