import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Campus.css';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  }

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  }

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
      <div className="gallery">
        {[gallery1, gallery2, gallery3, gallery4].map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`Campus gallery ${index + 1}`}
            className="campus-photo"
            custom={index}
            variants={photoVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(photo)}
          />
        ))}
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Campus;