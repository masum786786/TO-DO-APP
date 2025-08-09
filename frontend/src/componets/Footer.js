import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company">
        <h3>RealEstateCo</h3>
        <p>Building dreams, one home at a time.</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/agents">Agents</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>Email: info@realestateco.com</p>
        <p>Phone: +91 7257925345</p>
        <p>Location: Mumbai, India</p>
      </div>
    </footer>
  );
};

export default Footer;
