import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialButton from "./SocialButton";
import { useEffect, useState } from "react";


export default function Social() {
  const [lineVis, setLineVis] = useState(false);
  const [iconVis, setIconVis] = useState(false);
  const [insta, setInsta] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [CF, setCF] = useState(false);
  const [LC, setLC] = useState(false);
  const [gmail, setGmail] = useState(false);
  const [github, setgithub] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setLineVis(true);
    },1000);
    setTimeout(()=>{
      setIconVis(true);
    }, 2000);
    setTimeout(()=>{
      setInsta(true);
    }, 2100);
    setTimeout(()=>{
      setLinkedin(true);
    }, 2200);
    setTimeout(()=>{
      setCF(true);
    }, 2300);
    setTimeout(()=>{
      setLC(true);
    }, 2400);
    setTimeout(()=>{
      setgithub(true);
    }, 2500);
    setTimeout(()=>{
      setGmail(true);
    }, 2600);


  },[lineVis, iconVis])


  return (
   
    <div className="flex flex-row h-[400px] min-w-[100px] px-10">
      {<div className={`h-[400px] w-[1px] bg-violet-100/50 transition-all ease-in ${lineVis ? "transform translate-y-0" : "translate-y-[400px]"}`}></div>}
      <div className={`flex flex-col h-4/5 justify-around transition-all ease-in ${iconVis ? "opacity-100" : "opacity-0"}`}>
        <SocialButton fade={insta} button={<FaInstagram />} link="https://www.instagram.com/__4nubhav__/" title={"Instagram"}/>
        <SocialButton fade={linkedin} button={<FaLinkedin />} link="https://www.linkedin.com/in/anubhav-aaryan-099987201/" title={"Linkedin"}/>
        <SocialButton fade={CF} button={<SiCodeforces />} link="https://codeforces.com/profile/_watch_this_" title={"Codeforces"}/>
        <SocialButton fade={LC} button={<SiLeetcode />} link="https://leetcode.com/u/aaryan4nubhav/" title={"Leetcode"}/>
        <SocialButton fade={github} button={<FaGithub />} link="https://github.com/dalaixlmao" title={"Github"}/>
        <SocialButton fade={gmail} button={<SiGmail />} link="mailto:aaryan4nubhav@gmail.com" title={"Gmail"}/>
      </div>
    </div>
  );
}
