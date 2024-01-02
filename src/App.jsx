import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LandingPage from "./components/screen/LandingPage";
import React from "react";
import "./App.css";
import NavBar from "./components/subComponents/NavBar";
import AboutMe from "./components/screen/AboutMe";
import Skills from "./components/screen/Skills";
import Projects from "./components/screen/Projects";

function App() {
  return (
    <div className="app">
      <div className="navigation-bar">
        <NavBar />
      </div>
      <div className="landing-page-screen">
        <LandingPage />
      </div>
      <div className="about-me-screen">
        <AboutMe />
      </div>
      <div className="skill-screen">
        <Skills />
      </div>
      <div className="project-screen">
        <Projects />
      </div>
    </div>
  );
}

export default App;
