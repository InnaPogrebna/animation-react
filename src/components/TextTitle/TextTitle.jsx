import React from "react";
import "./TextTitle.scss";
import Circle from "../Circle/Circle";

export default function TextTitle() {
  return (
    <div className="contain">
      <div className="contain__yellowBlock"></div>
      <div className="contain-title">
        <h1 className="contain-title-text">full-cycle event agency</h1>
        <div className="contain-title-circle">
          <Circle />
        </div>
      </div>
    </div>
  );
}
