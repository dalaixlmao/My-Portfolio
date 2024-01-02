import React from "react";
import "./AboutMeComponent.css";
import Gmail from "../../assets/Gmail.svg";
import Github from "../../assets/Github.svg";
import Codeforces from "../../assets/Codeforces.svg";
import Instagram from "../../assets/Instagram.svg";
import Leetcode from "../../assets/Leetcode.svg";
import Linkedin from "../../assets/Linkedin.svg";
function AboutMeComponent() {
  return (
    <div className="container">
      <div className="first-half">
        <div className="title">
          <div className="about">About</div> <div className="Me">Me</div>
        </div>
        <div className="about-me-para">
          Passionate problem solver and code maestro, I navigate the digital
          realm with an analytical flair. From conquering competitive coding
          arenas to crafting impeccable solutions, I thrive on challenging
          development quests.
        </div>
        <div className="buttons">
          <div className="my-resume">
            <button className="my-resume-buttons">My Resume</button>
          </div>
          <div className="contact-me">
            <button className="my-resume-buttons">Contact Me</button>
          </div>
        </div>
        <div className="links">
          <div >
            <div className="links-title">social media</div>
            <div className="links-icon">
            
            <a href="https://www.instagram.com/__4nubhav__/" >  <img src={Instagram} className="media-icons" /></a>
            <a href="https://www.linkedin.com/in/anubhav-aaryan-099987201/">  <img src={Linkedin} className="media-icons" /></a>
            <a href="mailto:aaryan4nubhav@gmail.com">  <img src={Gmail} className="media-icons" /></a>
            </div>
          </div>
          <div >
            <div className="links-title">Coding Platforms</div>
            <div className="links-icon">
            <a href="https://github.com/dalaixlmao">  <img src={Github} className="media-icons" /></a>
            <a href="https://codeforces.com/profile/_watch_this_">  <img src={Codeforces} className="media-icons"/></a>
            <a href="https://leetcode.com/aaryan4nubhav/">  <img src={Leetcode} className="media-icons" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="second-half">illustration</div>
    </div>
  );
}

export default AboutMeComponent;
