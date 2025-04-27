import React from "react";
import { useState, useEffect } from "react";
import '../styles/AboutPage.css';
import boy from '../images/boy.jpg'
import children from '../images/children.jpg'

function AboutPage() {
    const images = [boy, children]; // Add your images here
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images.length]);
    
      const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex - 1 + images.length) % images.length
        );
      };
    
      return (
        <div className="about-section">
          <h1 className="about">About Us</h1>
          <div className="carousel">
            <button className="arrow left-arrow" onClick={handlePrev}>
          «
        </button>
            
    
            <img 
              src={images[currentImageIndex]} 
              alt="women empowerment" 
              className="womenempowerment" 
            />
    
            <button className="arrow right-arrow" onClick={handleNext}>
            »
            </button>
          </div>
        </div>
      );
    }
    
    export default AboutPage;
  
