import React from 'react';
import '../styles/HeroSection2.css';

const HeroSection2 = () => {
  // Logic to handle the smooth scroll to top
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-container">
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Hope Starts With You!.
        </h1>
        
        <p className="hero-description">
          One lesson can spark a dream.
          One skill can create a future.
          At Well Skills Development Hub, your support turns potential into possibility.
          Join us—let’s raise strong women, confident girls, and empowered communities.
        </p>
        
        <button className="hero-button">
          Get Involved
        </button>
      </div>

      {/* Back to Top Icon with Click Handler */}
      <div 
        className="scroll-top" 
        onClick={handleBackToTop}
        role="button"
        aria-label="Back to top"
      >
        <span>↑</span>
      </div>
    </section>
  );
};

export default HeroSection2;