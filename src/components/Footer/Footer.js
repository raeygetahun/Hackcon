import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@your_tiktok" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Hackcon. All rights reserved.
        <br/>
        Designed and Developed by IT Department.
      </p>
    </footer>
  );
};

export default Footer;
