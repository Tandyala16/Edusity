import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'f1740742-f405-4f9f-93f7-614dce4f2214' 
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormSubmitted(false); // Reset the state after successful submission
        // Optionally, display a more user-friendly success message
        // setSuccessMessage('Your message has been sent successfully!');
      } else {
        console.error('Form submission failed:', response.status);
        setFormSubmitted(false); // Reset the state even if there's an error
        // Optionally, display an error message to the user
        // setError('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmitted(false); // Reset the state in case of an error
      // Optionally, display an error message to the user
      // setError('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Connect with Us</h3>
            <p>
              We'd love to hear from you! Whether you have a question, a project
              idea, or just want to say hello, feel free to reach out using the
              form below or the contact information provided.
            </p>
            <ul className="contact-details">
              <li>
                <a href="mailto:Contact@GreatStack.dev">
                  <i className="fas fa-envelope"></i> Contact@GreatStack.dev
                </a>
              </li>
              <li>
                <a href="tel:+1123-456-7890">
                  <i className="fas fa-phone"></i> +1123-456-7890
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i> 77 Massachusetts Ave,
                  Cambridge MA 02139, United States
                </a>
              </li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter your message"
              />
            </div>
            <button type="submit" className="submit-button" disabled={formSubmitted}>
              {formSubmitted ? 'Sending...' : 'Send Message'}
              <i className="fas fa-paper-plane"></i>
            </button>
            {/* Display success or error messages */}
            {/* {successMessage && <p className="success-message">{successMessage}</p>}
            {error && <p className="error-message">{error}</p>} */}
            </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;