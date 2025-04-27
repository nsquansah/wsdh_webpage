import React from 'react';
import boy from '../images/boy.jpg';
import '../styles/HeroSection.css';


function heroSection(){
    return(
        <div className="hero-section">
            <img src={boy} alt="boy" className="hero-image"/>
            <div className="hero-text">
                <h1 className='whatwedo'>From Farms to Tech</h1>
                
                <p className='summary1'>We support women through training in entrepreneurship,</p>
                <p className='summary2'> farming, food processing, and technology </p>
                <p className='summary3'>— driving change from the grassroots.</p>
                <button className="btn neon-pulse"><span>Donate</span></button>
            </div>
        </div>
            );
}
export default heroSection;
