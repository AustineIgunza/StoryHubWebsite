import React from 'react';
import { Link } from 'react-router-dom';
import './community.css';

const Community = () => {
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
              <li><Link to="/community" className="active">Community</Link></li>
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
          <h1>Join the StoryHub Community</h1>
          <p>Connect with fellow storytellers, share ideas, and grow together.</p>
        </div>
      </section>

      <section className="community-section container">
        <div className="posts-list">
          <article
            className="post"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1603570417489-3c3ecf1d36b6?auto=format&fit=crop&w=1000&q=80')"
            }}
          >
            <h2>Welcome to the Community!</h2>
            <p>Introduce yourself and share your favorite writing tips.</p>
            <div className="post-meta">Posted by <strong>Admin</strong> - June 1, 2025</div>
          </article>

          <article
            className="post"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1584697964403-b53e3f327b51?auto=format&fit=crop&w=1000&q=80')"
            }}
          >
            <h2>Story Feedback Thread</h2>
            <p>Share your drafts here and get constructive feedback from peers.</p>
            <div className="post-meta">Posted by <strong>JaneDoe</strong> - June 3, 2025</div>
          </article>

          <article
            className="post"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1610484825822-6e0c3c5cc745?auto=format&fit=crop&w=1000&q=80')"
            }}
          >
            <h2>Writing Prompts and Challenges</h2>
            <p>Participate in weekly prompts to keep your creativity flowing.</p>
            <div className="post-meta">Posted by <strong>StoryMaster</strong> - June 5, 2025</div>
          </article>
        </div>

        <aside className="community-sidebar">
          <h3>Community Rules</h3>
          <ul>
            <li>Be respectful and supportive</li>
            <li>No plagiarism or spam</li>
            <li>Keep discussions relevant to writing and storytelling</li>
            <li>Use constructive criticism</li>
          </ul>

          <h3>Popular Tags</h3>
          <div className="tags">
            <span className="tag">#fantasy</span>
            <span className="tag">#writingtips</span>
            <span className="tag">#feedback</span>
            <span className="tag">#prompts</span>
            <span className="tag">#community</span>
          </div>
        </aside>
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

export default Community;
