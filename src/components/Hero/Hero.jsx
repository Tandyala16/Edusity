import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering the Next Generation of Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
        </motion.p>
        <motion.button
          className="btn"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore more <img src={dark_arrow} alt="" />
        </motion.button>
      </div>
    </div>
  );
});

export default Hero;
