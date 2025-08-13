import { useState, useEffect } from 'react';
import {FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';
import { Rotate3D } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circle progress calculations
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <svg className="progress-ring" width="60" height="60">
            <circle
              className="ring-background"
              stroke="#eee"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
            />
            <circle
              className="ring-progress"
              stroke="#008DCB"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <FaArrowUp size={18} style={{ color: '#008DCB',}} />
        </div>
      )}
    </>
  );
};

export default BackToTop;
