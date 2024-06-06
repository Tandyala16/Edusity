import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.png';

const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="hero-overlay"></div>
      <img src={heroImage} alt="Hero Background" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Edusity</h1>
        <p className="hero-subtitle">Empowering Education Through Technology</p>
        <a href="#explore" className="hero-button">Explore Now <span className="arrow">→</span></a>
      </div>
    </div>
  );
});

export default Hero;
