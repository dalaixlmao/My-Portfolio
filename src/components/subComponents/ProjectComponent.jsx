import React from "react";
import "./ProjectComponent.css";
import DownArrow from "../../assets/DownArrow.svg";
import imag from "../../assets/draftProject.jpg";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Project from "./Project";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function ProjectComponent({ texts }) {
  const project = [
    [
      "Title1",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title2",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title3",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title4",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title5",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title6",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
    [
      "Title7",
      imag,
      "This is body ! This is body ! This is body ! This is body !This is body !This is body ! This is body ! This is body ! This is body ! This is body ! v vvvv This is body ! This is body ! This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !This is body !",
    ],
  ];
  return (
    <div className="project-container">
      <div className="project-title">Projects</div>
      <select name="cars" className="skills-dropdown">
        <option value="choose-a-skill">*Choose a skill</option>
        {texts.map(([text, percent], index) => (
          <option value={text}>{text}</option>
        ))}
      </select>
      <div className="project-component">
        {project.map(([title, image, body], index) => (
          <Project title={title} image={image} body={body} />
        ))}
      </div>
    </div>
  );
}

export default ProjectComponent;
