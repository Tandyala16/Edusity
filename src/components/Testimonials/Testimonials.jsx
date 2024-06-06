import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import image1 from '@/assets/user-1.png';
import image2 from '@/assets/user-2.png';
import image3 from '@/assets/user-3.png';
import image4 from '@/assets/user-4.png'; // Import user-4.png

// Array of names and countries for random assignment
const names = [
  "Alice Johnson", "Bob Smith", "Charlie Brown",  "Emily Davis"
];
const countries = [
  "United States", "Canada", "United Kingdom",  "Germany"
];

const testimonials = [
  {
    img: image1,
    text: 'This product has changed my life! The quality is unmatched and the customer service is exceptional.',
    name: names[Math.floor(Math.random() * names.length)], // Random name
    country: countries[Math.floor(Math.random() * countries.length)] // Random country
  },
  {
    img: image2,
    text: 'A fantastic experience from start to finish. The team really knows their stuff and the results speak for themselves.',
    name: names[Math.floor(Math.random() * names.length)], // Random name
    country: countries[Math.floor(Math.random() * countries.length)] // Random country
  },
  {
    img: image3,
    text: 'Highly recommended! I was amazed at the level of detail and care put into each aspect of the service.',
    name: names[Math.floor(Math.random() * names.length)], // Random name
    country: countries[Math.floor(Math.random() * countries.length)] // Random country
  },
  {
    img: image4,
    text: 'I am so impressed with this company! They exceeded my expectations in every way.', // Add a testimonial for user-4.png
    name: names[Math.floor(Math.random() * names.length)], // Random name
    country: countries[Math.floor(Math.random() * countries.length)] // Random country
  },
];

const Testimonials = ({ ref }) => { // Receive the ref prop
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('fade-in');

  const prevTestimonial = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setAnimationClass('fade-in');
    }, 500);
  };

  const nextTestimonial = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimationClass('fade-in');
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section" ref={ref}>
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-subtitle">Hear it from those who have experienced our service</p>
      <div className="testimonials-container">
        <button className="nav-button prev" onClick={prevTestimonial}>&#8249;</button>
        <div className={`testimonial ${animationClass}`} key={currentIndex}>
          <div className="testimonial-content">
            <img src={testimonials[currentIndex].img} alt="Client" />
            <div className="testimonial-info">
              <p className="testimonial-name">
                {testimonials[currentIndex].name}
                <span className="testimonial-country">
                  - {testimonials[currentIndex].country}
                </span>
              </p>
              <p>{testimonials[currentIndex].text}</p>
            </div>
          </div>
        </div>
        <button className="nav-button next" onClick={nextTestimonial}>&#8250;</button>
      </div>
    </section>
  );
};

export default Testimonials;