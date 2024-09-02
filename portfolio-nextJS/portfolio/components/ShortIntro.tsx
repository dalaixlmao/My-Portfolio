import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShortIntro() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  },[]);
  const router = useRouter();
  return (
    <div className="text-white flex flex-col md:mt-0">
      <div className="text-sm mb-5 text-violet-400">Hi, my name is</div>
      <div className="text-3xl lg:text-6xl font-bold z-10">
        Anubhav Aaryan
      </div>
      <div
        className={`h-1 h-[8px] lg:h-3 mt-[-15px] md:mt-[-20px] lg:mt-[-30px] bg-gradient-to-r from-pink-500/50 to-violet-500/50 transition-transform duration-1000 ${
          fadeIn ? "transform translate-x-0" : "-translate-x-full"
        }`}
      ></div>
      <div className="md:text-2xl text-xl font-medium mt-4">Software Developer</div>
      <div className="text-white/50 mt-4 w-full lg:w-1/2 text-sm font-light">
        I am an innovative full-stack developer and recent IIT Roorkee graduate
        with a strong foundation in competitive programming, holding an Expert
        rating on <a onClick={()=>{router.push("https://codeforces.com/profile/_watch_this_")}} className="cursor-pointer hover:underline transition-all text-violet-400 font-medium">Codeforces (1620)</a> and a Knight rating on{" "}
        <a onClick={()=>{router.push("https://leetcode.com/u/aaryan4nubhav/")}} className="cursor-pointer hover:underline transition-all text-violet-400 font-medium">Leetcode (1865)</a>.
      </div>
      <div className="mt-6 flex flex-row transition-all">
        <button onClick={()=>{router.push("mailto:aaryan4nubhav@gmail.com")}} className="text-violet-400 hover:text-white flex transition-all flex-row items-center hover:border-transparent border border-violet-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400 pl-4 pr-4 py-2 rounded-full">
          Say Hello <RightArrow />
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
