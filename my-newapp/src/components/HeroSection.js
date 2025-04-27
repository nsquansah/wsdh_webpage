import React from 'react';
import boy from '../images/boy.jpg';
import '../styles/HeroSection.css';


function heroSection(){
    return(
        <div className="hero-section">
            <img src={boy} alt="boy" className="hero-image"/>
            <div className="hero-text">
                <h1>Welcome to My New App</h1>
                <p>This is a simple hero section with an image and some text.</p>
                <button className="hero-button">Get Started</button>
            </div>
        </div>
            );
}
export default heroSection;
