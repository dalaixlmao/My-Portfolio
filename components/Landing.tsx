"use client";

import { useRef, useState, useEffect, MutableRefObject } from "react";
import { RefObject } from "react";

export default function Landing({visible, setIsLandingVisible}:{visible:boolean, setIsLandingVisible:(a:boolean)=>void}) {
  const [fadeIn, setFadeIn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setTimeout(()=>{
      setFadeIn(true);
    }, 300)

    setTimeout(()=>{
      setIsLandingVisible(false);
      setFadeIn(false);
    }, 2500)

    setTimeout(()=>{
      if(ref.current)
      ref.current.style.display="none";
    }, 3000)

  }, [setIsLandingVisible, setFadeIn]);
  return (
    <div
    ref={ref}
      className={` h-screen bg-slate-900 text-white flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`text-xl text-center md:text-5xl lg:text-8xl transition-transform duration-1000 ${
          fadeIn && visible ? "transform translate-x-0" : "-translate-x-[2000px]"
        }`}
      >
        👋 Hi, This is{" "}
        <a className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
          Anubhav
        </a>
        .
      </div>
      <div
        className={`text-xl text-center md:text-5xl lg:text-8xl md:mt-6 lg:mt-12 transition-transform duration-1000 ${
          fadeIn && visible ? "transform translate-x-0" : "-translate-x-[2000px]"
        }`}
      >
        I am a{" "}
        <a className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold overflow-hidden">
          Software Developer
        </a>
        .
      </div>
    </div>
  );
}


