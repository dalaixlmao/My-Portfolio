import React from "react";
import "./Skills.css";
import CategoryBlock from "../subComponents/CategoryBlock";
import SkillComponent from "../subComponents/SkillComponent";
function Skills() {
  const texts = [
    ['C++','50%'],
    ['Data Structure and Algorithms','50%'],
    ['Problem Sovling','60%'],
    ['HTML','70%'],
    ['CSS','60%'],
    ['JavaScript','80%'],
    ['ReactJS','100%'],
  ];
  return (
    <div className="skills">
      <CategoryBlock component={<SkillComponent texts={texts}/>}/>
    </div>
  );
}

export default Skills;      
