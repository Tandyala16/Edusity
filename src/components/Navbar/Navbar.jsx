import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = ({ toggleMenu, isMenuOpen, handleNavigation, heroRef, programsRef, aboutUsRef, campusRef, testimonialsRef, contactRef }) => {

  const [sticky, setSticky] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  }

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      <div className="container navbar-content">
        <img src={logo} alt="Edusity Logo" className="logo" />
        <ul className={isMenuOpen ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
          <li>
            <div className="theme-toggle" onClick={toggleTheme}>
              {darkTheme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </div>
          </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
