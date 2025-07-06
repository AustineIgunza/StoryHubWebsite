import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/">StoryHub</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/browse">Browse</Link></li>
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
  );
};

export default Header;
