"use client";

import { useRef, useState, useEffect } from "react";

export default function Landing() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div
    
      className={`w-screen h-screen bg-slate-900 text-white flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <CursorArea />
      <div
        className={`text-xl md:text-8xl transition-transform duration-1000 ${
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
        className={`text-xl md:text-8xl md:mt-12 transition-transform duration-1000 ${
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

const CursorArea = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute w-[800px] blur-[200px] h-[800px] bg-blue-500/10 rounded-full cursor-default pointer-events-none transition-transform duration-75 ease-linear top-0 left-0"
      style={{
        transform: `translate(${cursorPosition.x - 400}px, ${
          cursorPosition.y - 400
        }px)`,
      }}
    ></div>
  );
};
