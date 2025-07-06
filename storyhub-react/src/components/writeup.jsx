import React from 'react';
import { Link } from 'react-router-dom';
import './writeup.css';

const WriteUp = () => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <Link to="/">StoryHub</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/browse">Browse</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/writeup" className="active">Write</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-login">Log In</Link>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Start Writing Your Story</h1>
          <p>Unleash your creativity and share your stories with the world.</p>
        </div>
      </section>

      <section className="write-section">
        <div className="container">
          <form className="write-form">
            <label htmlFor="title">Story Title</label>
            <input type="text" id="title" name="title" placeholder="Enter your story title" required />

            <label htmlFor="content">Your Story</label>
            <textarea id="content" name="content" rows="10" placeholder="Write your story here..." required></textarea>

            <button type="submit" className="btn btn-primary">Publish Story</button>
          </form>
        </div>
      </section>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-links">
            <div className="footer-column">
              <h3>StoryHub</h3>
              <ul>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Press</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Copyright</Link></li>
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
    </>
  );
};

export default WriteUp;
