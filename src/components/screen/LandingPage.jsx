// LandingPage.jsx

import React, { useState } from "react";
import "./LandingPage.css";
import Me from "../../assets/Me.svg";

function LandingPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMeHovered, setIsMeHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMeMouseEnter = () => {
    setIsMeHovered(true);
  };

  const handleMeMouseLeave = () => {
    setIsMeHovered(false);
  };

  return (
    <div className="Landing" onMouseMove={handleMouseMove}>
      <div className="centerContainer">
        <div
          className={`me ${isMeHovered ? "transparent-bg" : ""}`}
          onMouseEnter={handleMeMouseEnter}
          onMouseLeave={handleMeMouseLeave}
          style={{
            clipPath: `circle(400px at ${cursorPosition.x}px ${
              cursorPosition.y
            }px)`,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Me} alt="My SVG" />
        </div>
        <div className="intro">
          <p className="line1">Hey, I am Anubhav Aaryan</p>
          <p className="line2">I am a software developer!</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
