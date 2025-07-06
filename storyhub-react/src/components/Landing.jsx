import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
  return (
    <div>
      <Header />

      <section className="hero">
        <h1>Discover Amazing Stories</h1>
        <p>Read, connect, and explore books from various genres.</p>
        <input type="text" placeholder="Search for stories, authors, or genres..." />
      </section>

      <section className="featured-stories">
        <div className="container">
          <h2>Featured Stories</h2>
          <div className="story-grid">
            {[
              {
                title: 'Garden',
                author: 'Adeline Palmerstone',
                img: 'https://i.postimg.cc/J49m83pK/image.png',
                views: '45.2K',
                likes: '3.1K',
                badge: 'Trending',
              },
              {
                title: 'Haunting Adeline',
                author: 'H.D Carlton',
                img: 'https://i.postimg.cc/5NRwWWPc/image.png',
                views: '12.7K',
                likes: '892',
                badge: 'New',
              },
              {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                img: 'https://i.postimg.cc/DZ8nFC3j/image.png',
                views: '45.2K',
                likes: '3.1K',
                badge: 'Trending',
              },
              {
                title: 'The Echoes of War',
                author: 'Butere Girls High School',
                img: 'https://i.postimg.cc/Qx74Pxqd/Whats-App-Image-2025-06-01-at-22-02-01-1a09e884.jpg',
                views: '45.2K',
                likes: '3.1K',
                badge: 'Trending',
              },
              {
                title: 'The A Court Of Silver Flames',
                author: 'Sarah J. Maas',
                img: 'https://i.postimg.cc/zfHVw6r6/Whats-App-Image-2025-06-01-at-22-10-00-3790c459.jpg',
                views: '45.2K',
                likes: '3.1K',
                badge: 'Best Selling',
              },
            ].map((story, index) => (
              <div className="story-card" key={index}>
                <div className="story-cover">
                  <img src={story.img} alt="Story Cover" />
                  <span className={`badge ${story.badge.toLowerCase().replace(' ', '-')}`}>
                    {story.badge}
                  </span>
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
            <Link to="/writeup" className="btn-primary">Start Writing Now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
