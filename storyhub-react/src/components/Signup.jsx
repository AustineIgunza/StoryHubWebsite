import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create your account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="#">Log In</a></p>
      </div>
    </div>
  );
}

export default Signup;
