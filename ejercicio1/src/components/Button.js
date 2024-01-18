import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      Show/Hide
    </button>
  );
};

export default Button;