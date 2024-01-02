import React from "react";
import "./Project.css";
import LinkToProject from "../../assets/LinkToProject.svg";
function Project({ title, image, body }) {
  return (
    <div className="project-box">
      <div className="left-one">
        <div className="project-icon"><img className="project-icon-pic" src={image}/></div>
      </div>
      <div className="right-one">
        <div className="right-top">
          <div className="project-heading">{title}</div>
          <div className="link-icon"><img className="link-class" src={LinkToProject}/></div>
        </div>
        <div className="project-body">{body}</div>
      </div>
    </div>
  );
}

export default Project;
