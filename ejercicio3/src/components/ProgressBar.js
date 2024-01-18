import React from "react";
import "../styles/styles.css"; // Update import path for styles

const ProgressBar = ({ width: inputWidth }) => {
  return (
    <div>
      <div className="container">
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            {inputWidth}%
          </div>
        ) : (
          alert("please enter value less than 100")
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
