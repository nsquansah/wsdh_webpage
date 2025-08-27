import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutSection';
import ProjectSession from './components/ProjectSession';
import Whatwedo from './components/Whatwedo';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <AboutPage />
      <ProjectSession />
      <Whatwedo />

  
    </React.Fragment>
      
      
      

  );
}

export default App;
