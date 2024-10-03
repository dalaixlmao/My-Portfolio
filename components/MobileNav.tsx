import { NavButtonMobile } from "./NavButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SocialButtonMobile from "./SocialButtonMobile";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { codeforces, github, gmail, instagram, leetcode, linkedin, resume } from "@/store/links";

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
                resume
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
                  link={instagram}
                  title={"Instagram"}
                />
                <SocialButtonMobile
                  button={<FaLinkedin />}
                  link={linkedin}
                  title={"Linkedin"}
                />
                <SocialButtonMobile
                  button={<SiCodeforces />}
                  link={codeforces}
                  title={"Codeforces"}
                />
                <SocialButtonMobile
                  button={<SiLeetcode />}
                  link={leetcode}
                  title={"Leetcode"}
                />
                <SocialButtonMobile
                  button={<FaGithub />}
                  link={github}
                  title={"Github"}
                />
                <SocialButtonMobile
                  button={<SiGmail />}
                  link={gmail}
                  title={"Gmail"}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
