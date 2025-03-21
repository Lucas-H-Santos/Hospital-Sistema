import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ backgroundImage, children, height = '500px', overlay = true, overlayOpacity = 0.6, backgroundColor = 'rgba(0, 0, 0, 0.5)' }) => {
  const parallaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height
  };
  
  const overlayStyle = {
    backgroundColor: backgroundColor,
    opacity: overlayOpacity
  };
  
  return (
    <div className="parallax-section" style={parallaxStyle}>
      {overlay && <div className="parallax-overlay" style={overlayStyle}></div>}
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
