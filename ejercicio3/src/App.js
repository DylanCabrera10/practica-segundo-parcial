import React, { useState } from "react";
import "./App.css"; // Update import path for styles
import ProgressBar from "./components/ProgressBar"; // Update import path for component

export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}
