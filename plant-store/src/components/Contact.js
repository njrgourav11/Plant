// src/components/Contact.jsx

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-info">
            <h2>Stay Updated</h2>
            <p>Need to get in touch with us?</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
