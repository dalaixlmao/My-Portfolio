import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav">
      <div className="left"></div>
      <div
      className="right"
      >
        <button>About Me</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default NavBar;
