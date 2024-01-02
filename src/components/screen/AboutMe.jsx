import React from "react";
import "./AboutMe.css";
import NavBar from "../subComponents/NavBar";
import CategoryBlock from "../subComponents/CategoryBlock";
import AboutMeComponent from "../subComponents/AboutMeComponent";
function AboutMe() {
  return (
    <div className="AboutMe">
      
      <CategoryBlock component={<AboutMeComponent/>}/>
    </div>
  );
}

export default AboutMe;
