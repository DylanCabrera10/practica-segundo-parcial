import React from "react";
import "../styles/timerStyles.css";

const Timer = ({ timer }) => {
  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
    </div>
  );
};

export default Timer;
