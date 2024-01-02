import React from "react";
import "./SkillComponent.css";
import SkillBox from "./SkillBox";
function SkillComponent({ texts }) {
  return (
    <div className="skill-container">
      <div className="skills-left">illustration</div>
      <div className="skills-right">
        <div className="title">Skills</div>
        <div className="skills-boxes">
          {texts.map(([text,percent], index) => (
            <div>
            <SkillBox text={text} percent={percent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillComponent;
