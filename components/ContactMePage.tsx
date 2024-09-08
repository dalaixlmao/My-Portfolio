import Card from "./Card";
import { useRouter } from "next/navigation";
import SocialButtonMobile from "./SocialButtonMobile";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactMePage() {
  const router = useRouter();
  return (
    <Card>
      <div className="md:h-auto flex flex-col items-center h-screen justify-around mt-[2600px] pt-12 md:pt-0 md:mt-36">
        <div className="flex flex-col items-center">
          <div className="duration-500 bg-clip-text hover:text-white cursor-default transition-all text-transparent bg-gradient-to-r from-pink-500 to-violet-500  md:text-6xl text-center text-4xl text-semibold">
            Get In Touch
          </div>
          <div className="text-center text-xs text-violet-100/50 font-light leading-relaxed mt-4 max-w-[550px]">
            I am continually eager to explore new technologies and push the
            boundaries of what&apos;s possible. Hence would love to join in for
            a good discussion on some project idea, or work on it.
          </div>
          <button
            onClick={() => {
              router.push("mailto:aaryan4nubhav@gmail.com");
            }}
            className="duration-250 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:border-transparent border py-3 px-5 mt-8 rounded-md text-violet-600 border-violet-600 hover:text-white hover:bg-violet-600 hover:font-medium transition-all"
          >
            Connect Here
          </button>
        </div>

        <div className="mt-[80px]">
        <div className="md:hidden block flex flex-row w-full justify-around pb-1 border-b border-white/10">
                <SocialButtonMobile
                  button={<FaInstagram />}
                  link="https://www.instagram.com/__4nubhav__/"
                  title={"Instagram"}
                />
                <SocialButtonMobile
                  button={<FaLinkedin />}
                  link="https://www.linkedin.com/in/anubhav-aaryan-099987201/"
                  title={"Linkedin"}
                />
                <SocialButtonMobile
                  button={<SiCodeforces />}
                  link="https://codeforces.com/profile/_watch_this_"
                  title={"Codeforces"}
                />
                <SocialButtonMobile
                  button={<SiLeetcode />}
                  link="https://leetcode.com/u/aaryan4nubhav/"
                  title={"Leetcode"}
                />
                <SocialButtonMobile
                  button={<FaGithub />}
                  link="https://github.com/dalaixlmao"
                  title={"Github"}
                />
                <SocialButtonMobile
                  button={<SiGmail />}
                  link="mailto:aaryan4nubhav@gmail.com"
                  title={"Gmail"}
                />
              </div>
          <div
            onClick={() => {
              window.open("https://github.com/dalaixlmao/My-Portfolio", "_blank");
              router.push("/");
            }}
            className="cursor-pointer mt-1  text-[12px] w-[200px] font-light text-violet-400 flex flex-row justify-between"
          >
            <a>Developed</a>
            <a>by</a>
            <a>Anubhav</a>
            <a>Aaryan</a>
          </div>
        </div>
      </div>
    </Card>
  );
}
