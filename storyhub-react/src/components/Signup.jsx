// src/components/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Button from './Button';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      alert('Account created!');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <Button type="submit">Sign Up</Button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
