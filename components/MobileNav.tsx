import { NavButtonMobile } from "./NavButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SocialButtonMobile from "./SocialButtonMobile";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export interface NavProps {
  setIsOpen: (a: boolean) => void;
  router: AppRouterInstance;
}

export default function MobileNav({ setIsOpen, router }: NavProps) {
  return (
    <div className="h-screen top-0 right-0 bg-black/80 w-screen flex flex-col items-end absolute fixed">
      <div className="w-4/5 h-screen flex flex-col bg-slate-900">
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="w-full flex flex-col items-end p-5"
        ></div>

        <div className="flex text-xs flex-col items-center justify-around h-2/5">
          <NavButtonMobile text="About" onClick={() => {setIsOpen(false);}} isActive={true} />
          <NavButtonMobile
            text="Experience"
            onClick={() => {setIsOpen(false);}}
            isActive={true}
          />
          <NavButtonMobile text="Projects" onClick={() => {setIsOpen(false);}} isActive={true} />
          <div
            onClick={() => {
              window.open(
                "https://bit.ly/3BgsrVX"
              , "_blank");
              router.push("/");
            }}
            className=" mt-5 border border-violet-500 text-violet-500 px-3 py-2 rounded-[4px] cursor-pointer hover:border-transparent transition-all hover:bg-violet-800 hover:text-violet-100 "
          >
            Resume
          </div>
        </div>
        <div className="flex flex-col items-center h-2/5 justify-center">
            <div className="text-violet-100/60 text-lg font-semibold">
              Social
            </div>
            <div className="h-3/5 w-4/5 pt-2 border-t-[1px] border-violet-100/10">
              <div className="flex flex-row w-full justify-around">
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
            </div>
          </div>
      </div>
    </div>
  );
}
