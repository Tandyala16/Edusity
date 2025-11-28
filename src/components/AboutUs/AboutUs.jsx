import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = React.forwardRef(({ setPlayState }, ref) => {
  return (
    <div className="about-us-container" ref={ref}>
      <div className="about-us-content">
        <h1>About University</h1>
        <h2>Nurturing Tomorrow's Leaders</h2>
        <p>
          Join our innovative education programs designed to empower students with the knowledge and skills needed to excel. Our focus on hands-on learning and mentorship prepares future educators for impactful careers.
        </p>
        <button className="learn-more-btn" onClick={() => setPlayState(true)}>Learn More</button>
      </div>
      <div className="about-us-video" onClick={() => setPlayState(true)}>
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" alt="Thumbnail" className="video-thumbnail" />
        <div className="play-button-container">
          <div className="play-button">
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
