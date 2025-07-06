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
          <form className="write-form" onSubmit={(e) => e.preventDefault()}>
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
    </>
  );
};

export default WriteUp;
