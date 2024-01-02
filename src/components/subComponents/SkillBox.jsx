import React from "react";
import "./SkillBox.css";
function SkillBox({text, percent}) {
  return (
    <div className="skillBox">
    <div className="default">{text}</div>
    <div className="on-hover">{percent}</div>
    </div>
  );
}

export default SkillBox;
