import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Explore Budget</h3>
          <p>Your go-to guide for budget-friendly travel! Find the best tips, itineraries, and travel hacks for your next adventure.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/budgeting-tips">Budgeting Tips</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:gauravs12009@gmail.com">gauravs12009@gmail.com</a></p>
          <p>Phone: <a href="tel:8233198895">+91 8233198895</a></p>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/ig_myto" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/MytoUniver53936" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://in.pinterest.com/btechug2026/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Explore Budget. All rights reserved.</p>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

