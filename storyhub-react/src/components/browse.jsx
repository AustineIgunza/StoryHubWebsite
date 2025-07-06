import React from 'react';
import { Link } from 'react-router-dom';
import './browse.css';

const Browse = () => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <Link to="/">StoryHub</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/browse" className="active">Browse</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/writeup">Write</Link></li>
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
          <h1>Discover Amazing Stories</h1>
          <p>Read, write, and connect with a community of passionate readers and writers.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for stories, authors, or genres..." />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
      </section>

      <section className="featured-stories">
        <div className="container">
          <h2>Featured Stories</h2>
          <div className="story-grid">
            {/* Each story card can be extracted into a reusable component later */}
            {/* Add your story cards here (copied directly from HTML) */}
            {/* START OF ONE CARD */}
            <div className="story-card">
              <div className="story-cover">
                <img src="https://i.postimg.cc/J49m83pK/image.png" alt="Story Cover" />
                <span className="badge">Trending</span>
              </div>
              <div className="story-info">
                <h3>Garden</h3>
                <p className="author">By Adeline Palmerstone</p>
                <div className="stats">
                  <span><i className="fas fa-eye"></i> 45.2K</span>
                  <span><i className="fas fa-heart"></i> 3.1K</span>
                </div>
              </div>
            </div>
            {/* Copy and paste remaining cards here as-is from your HTML */}
            {/* END OF ONE CARD */}
          </div>

          <div className="cta-section">
            <h2>Ready to share your story?</h2>
            <Link to="/writeup" className="btn btn-primary">Start Writing Now</Link>
          </div>
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
            <p>&copy; 2025 StoryHub. All rights reserved.AANA</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Browse;
