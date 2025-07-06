import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
