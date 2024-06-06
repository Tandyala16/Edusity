import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Campus.css';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';

const Campus = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 }, // Staggered delay
    }),
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <section className="campus-section" ref={ref}>
      <motion.h2
        className="campus-heading"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        Welcome to Our Campus
      </motion.h2>
      <motion.h3
        className="campus-subtitle"
        variants={subtitleVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore our vibrant community and facilities
      </motion.h3>
      <div className="campus-gallery">
        {[gallery1, gallery2, gallery3, gallery4].map((photo, index) => (
          <motion.div
            key={index}
            className="campus-photo-container"
            custom={index}
            variants={photoVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
          >
            <motion.img
              src={photo}
              alt={`Campus gallery ${index + 1}`}
              className="campus-photo"
              variants={hoverVariants}
            />
          </motion.div>
        ))}
      </div>
      <motion.button
        className="explore-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>
    </section>
  );
};

export default Campus;