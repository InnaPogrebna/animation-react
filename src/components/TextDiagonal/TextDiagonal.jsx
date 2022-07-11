import React from "react";
import "./TextDiagonal.scss";

export default function TextDiagonal() {
  const deg = (Math.atan(window.innerHeight / window.innerWidth) * 180) / Math.PI;
  const repeateText = "full-cycle event agency".repeat(8);

  return (
    <div className="diagonal"
      style={{ transform: `rotate(-${deg}deg) translate(0%, -50%)` }}
    >
      <div className="diagonal-top">
        <span className="diagonal-text">{repeateText}</span>
      </div>
      <div className="diagonal-bottom">
        <span className="diagonal-text">{repeateText}</span>
      </div>
    </div>
  );
}
