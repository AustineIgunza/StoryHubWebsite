import React from 'react';
import { Link } from 'react-router-dom';
import './browse.css';

const stories = [
  {
    title: 'Dark Realms',
    author: 'L.J. Rivers',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500',
    views: '15.7K',
    likes: '1.2K',
    badge: 'Popular',
  },
  {
    title: 'Garden',
    author: 'Adeline Palmerstone',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500',
    views: '45.2K',
    likes: '3.1K',
    badge: 'New',
  },
  {
    title: 'Winds of Time',
    author: 'Theo Anders',
    img: 'https://images.unsplash.com/photo-1520974735194-97b923c1e8c0?w=500',
    views: '22.4K',
    likes: '1.9K',
    badge: 'Classic',
  },
  {
    title: 'Silent Horizon',
    author: 'Marcia Lane',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=500',
    views: '31.6K',
    likes: '2.4K',
    badge: 'Award-Winning',
  },
  {
    title: 'Crimson Code',
    author: 'Devlin Black',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500',
    views: '38.9K',
    likes: '2.7K',
    badge: 'Trending',
  },
  {
    title: 'The Mirror\'s Secret',
    author: 'Fiona Grey',
    img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500',
    views: '26.4K',
    likes: '2.2K',
    badge: 'Editor\'s Pick',
  }
];

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
            {stories.map((story, index) => (
              <div className="story-card" key={index}>
                <div className="story-cover">
                  <img src={story.img} alt="Story Cover" />
                  <span className="badge">{story.badge}</span>
                </div>
                <div className="story-info">
                  <h3>{story.title}</h3>
                  <p className="author">By {story.author}</p>
                  <div className="stats">
                    <span><i className="fas fa-eye"></i> {story.views}</span>
                    <span><i className="fas fa-heart"></i> {story.likes}</span>
                  </div>
                </div>
              </div>
            ))}
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
            <p>&copy; 2025 StoryHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Browse;
