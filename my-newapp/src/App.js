import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutSection';
import ProjectSession from './components/ProjectSession';
import Whatwedo from './components/Whatwedo';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
  
    <React.Fragment>
      {/* <div className='App'> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
            <NavBar />
            <HeroSection />
           <AboutPage />
            <ProjectSession />
            <Whatwedo />
            <Footer />
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    {/* </div> */}
  
    </React.Fragment>
      
      
      

  );
}

export default App;
