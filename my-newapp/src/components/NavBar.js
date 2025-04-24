import React from 'react';
import{FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import "../styles/main.css";


function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
   
  
   
    return(
        <header>
            <h3>LOGO</h3>
            <nav  ref={navRef}> 
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
                <button className='nav-btn nav-close-btn' onclick={showNavbar}>
                <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
            
        </header>

        
    );
    
}
export default NavBar;