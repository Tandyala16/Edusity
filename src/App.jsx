import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import AboutUs from './components/AboutUs/AboutUs';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const programsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const campusRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Handle Navbar Button Clicks
  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Navbar
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        handleNavigation={handleNavigation}
        heroRef={heroRef}
        programsRef={programsRef}
        aboutUsRef={aboutUsRef}
        campusRef={campusRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={programsRef}>
          <Programs />
        </div>
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={campusRef}>
          <Campus />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
