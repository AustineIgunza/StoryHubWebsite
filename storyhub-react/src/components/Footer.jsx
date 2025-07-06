import React from 'react';
import './HeaderFooter.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-column">
            <h3>StoryHub</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Copyright</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <ul>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 StoryHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
