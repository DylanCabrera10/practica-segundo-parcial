import React from 'react';
import '../styles/WelcomeMessage.css';

const WelcomeMessage = ({ visible }) => {
  return (
    <p className={`welcome-message ${visible ? 'visible' : 'hidden'}`}>
      Welcome to React Challenges
    </p>
  );
};

export default WelcomeMessage;