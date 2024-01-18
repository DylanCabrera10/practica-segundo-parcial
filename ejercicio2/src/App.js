import React, { useState } from "react";
import Timer from "./components/Timer";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

const App = () => {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(window.myTimer);
  };

  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  return (
    <div className="app-container">
      <Timer timer={timer} />
      <ButtonPanel startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
    </div>
  );
};

export default App;
