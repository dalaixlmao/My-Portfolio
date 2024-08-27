import ShortIntro from "./ShortIntro";
import NavButton from "./NavButton";
import Me from "@/public/Me";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const [fadeIn, setFadeIn] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        setFadeIn(true);
    },[])
  return (
    <div className={`md:px-0 pb-5 px-2 h-screen text-white flex flex-col items-center duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}>
      <div className={`w-full md:w-3/4 h-4/5 pt-24 flex flex-col justify-center`}>
        <div className={`flex flex-col-reverse md:flex-row justify-center w-full transition-transform`}>
          <ShortIntro />
          <div className={`md:mb-0 w-full flex flex-col items-end px-12 md:px-0 md:mt-0 mt-24`}>
            <Me />
          </div>
        </div>
      </div>
      {/* <div className={`md:block hidden flex flex-col w-full items-center mt-24`} onClick={()=>{router.push("/about")}}>
          <GoDown />
        </div> */}
    </div>
  );
}

function GoDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      opacity={"0.5"}
      className="size-10 hover:size-8 transition-all"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
      />
    </svg>
  );
}
