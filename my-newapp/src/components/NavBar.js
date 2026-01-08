import React from 'react';
import{FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import "../styles/main.css";
// import '../components/Logo';
import Logo from './Logo';
import { Link } from "react-router-dom";


function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("active");
    }
   
  
   
    return(
        <header>
            <Logo />
            <nav  ref={navRef}> 
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/Products">Products</Link>
                <Link to="/contact">Contact Us</Link>
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