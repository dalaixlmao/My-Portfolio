import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ShortIntro() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(()=>{setFadeIn(true);}, 250);
    
  },[]);
  const router = useRouter();
  return (
    <div className="text-white flex flex-col md:mt-0">
      <div className="text-sm text-violet-400">Hello Everyone,</div>
      <div className={caveat.className+` text-3xl text-clip font-bold text-nowrap overflow-hidden lg:text-6xl duration-[1000ms] transition-all w-0 z-10 ${fadeIn?"w-full":"w-0"} `}>
        I&apos;m <a className={caveat.className}>Anubhav Aaryan</a>
      </div>
      <div
        className={`h-1 h-[8px] lg:h-3 mt-[-15px] md:mt-[-20px] lg:mt-[-30px] bg-gradient-to-r from-pink-500/50 to-violet-500/50 transition-all duration-[1000ms] ${
          fadeIn ? "transform translate-x-0" : "-translate-x-full"
        }`}
      ></div>
      <div className="md:text-2xl text-xl font-medium mt-4">Software Developer</div>
      <div className="mt-6 flex flex-row transition-all">
        <button onClick={()=>{window.open("mailto:aaryan4nubhav@gmail.com", "_blank");router.push("/")}} className="text-violet-400 hover:text-white flex transition-all flex-row items-center hover:border-transparent border border-violet-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400 pl-4 pr-4 py-2 rounded-full">
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
