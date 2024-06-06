import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleMenu, isMenuOpen, handleNavigation, heroRef, programsRef, aboutUsRef, campusRef, testimonialsRef, contactRef }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Edusity Logo" className="navbar-logo" />
        <div className="navbar-items">
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/" onClick={() => handleNavigation(heroRef)}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/programs" onClick={() => handleNavigation(programsRef)}>Programs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" onClick={() => handleNavigation(aboutUsRef)}>About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="/campus" onClick={() => handleNavigation(campusRef)}>Campus</Link>
            </li>
            <li className="navbar-item">
              <Link to="/testimonials" onClick={() => handleNavigation(testimonialsRef)}>Testimonials</Link>
            </li>
            <li className="navbar-item navbar-button">
              <Link to="/contact" onClick={() => handleNavigation(contactRef)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
