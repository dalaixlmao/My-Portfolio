// import Image from "next/image";
// import { useEffect, useState } from "react";
import { Bangers } from "next/font/google";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function Me() {
  // const [fadeIn, setFadeIn] = useState(false);
  // useEffect(() => {
  //   setFadeIn(true);
  // });
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden"
    style={{
      backgroundImage: hovered?'url("/images/MyShadow.svg")':"",
      backgroundSize: "contain", 
      backgroundPosition: "center right 6.5rem",
      backgroundRepeat: "no-repeat",
    }}
    >
    <div
    onMouseEnter={() => {
      if (ref.current) {
        ref.current.textContent = "Hii!!";
        // ref.current.style.backgroundPosition="center right 5rem";
      }
      setHovered(true);
    }}
    onMouseLeave={() => {
      if (ref.current) {
        ref.current.textContent = "";
      }
      setHovered(false);
    }}
      className="hover:h-[298px] border-2 border-violet-500 rounded-2xl h-[270px] hover:mt-0 mt-[28px] w-full transition-all"
      style={{
        backgroundImage: 'url("/images/MeOnly.svg")',
        backgroundSize: "contain", 
        backgroundPosition: hovered?"center right 7rem":"center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        ref={ref}
        className={bangers.className + " relative top-0 ml-3 mt-4 text-3xl text-violet-950"}
      >
      </div>
      {hovered && <div
        ref={ref2}
        // onClick={()=>{ router.push()}}
        className={bangers.className + "  w-1/3 ml-[220px] mt-[120px] text-xl text-violet-950"}
      >
        <div className="text-right">Want to connect?</div>
        <div className="flex mt-0 justify-around w-full h-full flex-row">
        <button onClick={()=>{router.push("https://www.instagram.com/__4nubhav__/")}} className="">
        <FaInstagramSquare size={"25"}/>
        </button>
        <button onClick={()=>{router.push("https://www.linkedin.com/in/anubhav-aaryan-099987201/")}} className="">
          <FaLinkedin size={"25"}/>
        </button>
        <button onClick={()=>{router.push("mailto:aaryan4nubhav@gmail.com")}} className="">
          <SiGmail size={"25"}/>
        </button>
        </div>
      </div>}
    </div></div>
  );
}
