import React from "react";
import "../styles/buttonPanelStyles.css";

const ButtonPanel = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="button-panel-container">
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default ButtonPanel;
