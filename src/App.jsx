import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import AboutUs from './components/AboutUs/AboutUs';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import FloatingContact from './components/FloatingContact/FloatingContact';
import Statistics from './components/Statistics/Statistics';
import FAQ from './components/FAQ/FAQ';
import Team from './components/Team/Team';
import Preloader from './components/Preloader/Preloader';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Title from './components/Title/Title';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playState, setPlayState] = useState(false);
  const [loading, setLoading] = useState(true);

  // Refs for scrolling
  const heroRef = useRef(null);
  const programsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const campusRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <Router>
      {loading && <Preloader />}
      <ScrollProgress />
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
        <div ref={heroRef} id='hero'>
          <Hero />
        </div>

        <motion.div
          ref={programsRef}
          id='program'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Title subTitle='Our PROGRAM' title='What We Offer' />
          <Programs />
        </motion.div>

        <motion.div
          ref={aboutUsRef}
          id='about'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <AboutUs setPlayState={setPlayState} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Statistics />
        </motion.div>

        <motion.div
          ref={campusRef}
          id='campus'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Title subTitle='Gallery' title='Campus Photos' />
          <Campus />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Title subTitle='Our Team' title='Meet The Faculty' />
          <Team />
        </motion.div>

        <motion.div
          ref={testimonialsRef}
          id='testimonials'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Title subTitle='TESTIMONIALS' title='What Student Says' />
          <Testimonials />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <FAQ />
        </motion.div>

        <motion.div
          ref={contactRef}
          id='contact'
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
        </motion.div>
      </main>

      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <FloatingContact />
    </Router>
  );
}

export default App;
