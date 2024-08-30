"use client";

import { useRef, useState, useEffect, MutableRefObject } from "react";
import { RefObject } from "react";

export default function Landing() {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div
      className={` h-screen bg-slate-900 text-white flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`text-xl text-center md:text-5xl lg:text-8xl transition-transform duration-1000 ${
          fadeIn ? "transform translate-x-0" : "-translate-x-full"
        }`}
      >
        👋 Hi, this is{" "}
        <a className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
          Anubhav
        </a>
        .
      </div>
      <div
        className={`text-xl text-center md:text-5xl lg:text-8xl md:mt-6 lg:mt-12 transition-transform duration-1000 ${
          fadeIn ? "transform translate-x-0" : "-translate-x-full"
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


