import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutSection';
import ProjectSession from './components/ProjectSession';
import Whatwedo from './components/Whatwedo';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage.js';
import AboutMainPage from './components/AboutMainPage.js';
import ContactMainPage from './components/ContactMainPage.js';
import ServicesMainPage from './components/ServicesMainPage.js';
import LoginMainPage from './components/LoginMainPage.js';

function App() {
  return (
       <div className='App'> 
        <NavBar />

    
       <Routes> 
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutMainPage />} />
         <Route path="/services" element={<ServicesMainPage />} />
          <Route path="/contact" element={<ContactMainPage />} />
          <Route path="/login" element={<LoginMainPage />} />


      </Routes> 
    
    </div>
  

      
      
      

  );
}

export default App;
