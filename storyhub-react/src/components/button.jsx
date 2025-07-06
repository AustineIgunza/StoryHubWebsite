// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, type = "button", onClick, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`custom-btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
