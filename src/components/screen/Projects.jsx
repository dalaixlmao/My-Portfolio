import React from "react";
import "./Projects.css";
import CategoryBlock from "../subComponents/CategoryBlock";
import ProjectComponent from "../subComponents/ProjectComponent";
function Projects() {
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
      <CategoryBlock component={<ProjectComponent texts={texts}/>} />
    </div>
  );
}

export default Projects;
