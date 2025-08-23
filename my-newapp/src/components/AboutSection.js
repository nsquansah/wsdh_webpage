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
          <div className="about-header">
          <h1 className="about">About Us</h1>
          <p className="about-text">At Well Skills Development Hub, we believe in the power of a single opportunity to change a life. We are dedicated to the women and youth of Ghana's marginalized communities, offering more than just training, we're offering a pathway to a brighter future. By providing crucial skills in entrepreneurship, financial literacy, and technology, we give them the tools to not just survive, but to thrive.</p>


                    <div className="mission">Mission </div>
                      <p className="mission-text">To empower women and youth in deprived communities by providing them with the skills, knowledge, and resources to create sustainable businesses and healthy, prosperous lives.</p>
                   
                    <div className="vision">Vision</div>
                      <p className="vision-text">A future where every woman and young person, regardless of their background, has the power to innovate, the skills to thrive, and the confidence to lead their communities towards a more prosperous future.</p>
                      <p className="knowus"> click to know us more  « «</p>
          </div>
         
         
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
  
