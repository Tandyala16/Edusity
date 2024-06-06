import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-us-container" ref={ref}>
      <div className="about-us-content">
        <h1>About University</h1>
        <h2>Nurturing Tomorrow's Leaders</h2>
        <p>
          Join our innovative education programs designed to empower students with the knowledge and skills needed to excel. Our focus on hands-on learning and mentorship prepares future educators for impactful careers.
        </p>
        <button className="learn-more-btn" onClick={openModal}>Learn More</button> 
      </div>
      <div className="about-us-video" onClick={openModal}>
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" alt="Thumbnail" className="video-thumbnail"/>
        <div className="play-button-container">
          <div className="play-button">
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7L8 5z"/>
            </svg>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-modal-btn" onClick={closeModal}>Close</button> 
          </div>
        </div>
      )}
    </div>
  );
});

export default AboutUs;
