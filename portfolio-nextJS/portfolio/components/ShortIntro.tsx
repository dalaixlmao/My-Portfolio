import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShortIntro() {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(()=>{
        setFadeIn(true);
    })
  const router = useRouter();
  return (
    <div className="text-white flex flex-col">
      <div className="md:text-6xl font-bold z-10">Anubhav Aaryan</div>
      <div className={`h-1 md:h-3 mt-[-15px] md:mt-[-30px] bg-gradient-to-r from-pink-500/50 to-violet-500/50 transition-transform duration-1000 ${
          fadeIn ? "transform translate-x-0" : "-translate-x-full"
        }`}></div>
      <div className="text-2xl font-medium mt-4">Software Developer</div>
      <div className="text-white/50 mt-4 w-full md:w-1/2 text-sm font-light">
        I am an innovative full-stack developer and recent IIT Roorkee graduate
        with a strong foundation in competitive programming, holding an Expert
        rating on Codeforces (1620) and a Knight rating on Leetcode (1865).
      </div>
      <div className="mt-6 flex flex-row transition-all">
        <button className="flex transition-all flex-row items-center bg-gradient-to-r from-pink-500 to-violet-500 pl-4 pr-4 py-2 rounded-full">
          Say Hello <RightArrow />
        </button>
        <button
          onClick={() => {
            router.push(
              "https://drive.google.com/file/d/11G-q2iEenxl5PSMlY5mh7EkSiXKdCAUW/view?usp=sharing"
            );
          }}
          className="ml-5 transition-all transition-all flex flex-row items-center border border-white/50 pl-4 pr-4 py-2 rounded-full hover:bg-gradient-to-r hover:border-white/0 hover:from-pink-500 hover:to-violet-500"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
