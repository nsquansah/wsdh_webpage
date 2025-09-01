import React from 'react';
import{FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import "../styles/main.css";
// import '../components/Logo';
import Logo from './Logo';


function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("active");
    }
   
  
   
    return(
        <header>
            <Logo />
            <nav  ref={navRef}> 
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
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