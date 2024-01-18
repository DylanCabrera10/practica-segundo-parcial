import React, { useState } from 'react';
import Button from './components/Button';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

function App() {
  const [messageVisible, setMessageVisible] = useState(true);

  const toggleMessageVisibility = () => {
    setMessageVisible(!messageVisible);
  };

  return (
    <div className="App">
      <div className="center-container">
        <div className="left-content">
          <Button onClick={toggleMessageVisibility} />
        </div>
        <div className="right-content">
          <WelcomeMessage visible={messageVisible} />
        </div>
      </div>
    </div>
  );
}

export default App;