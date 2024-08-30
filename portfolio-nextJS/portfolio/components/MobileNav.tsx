import { NavButtonMobile } from "./NavButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface NavProps{
    setIsOpen: (a:boolean)=>void;
    router: AppRouterInstance
}

export default function MobileNav({setIsOpen, router}:NavProps){
    return <div className="h-screen top-0 right-0 bg-black/80 w-screen flex flex-col items-end absolute">
    <div className="w-4/5 h-screen flex flex-col bg-slate-900">
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className="w-full flex flex-col items-end p-5"
      ></div>

      <div className="flex text-xs flex-col items-center justify-around h-3/5">
        <NavButtonMobile
          text="About"
          onClick={() => {}}
          isActive={true}
        />
        <NavButtonMobile
          text="Experience"
          onClick={() => {}}
          isActive={true}
        />
        <NavButtonMobile
          text="Projects"
          onClick={() => {}}
          isActive={true}
        />
        <div
          onClick={() => {
            router.push(
              "https://drive.google.com/file/d/11G-q2iEenxl5PSMlY5mh7EkSiXKdCAUW/view?usp=sharing"
            );
          }}
          className=" mt-5 border border-violet-500 text-violet-500 px-3 py-2 rounded-[4px] cursor-pointer hover:border-transparent transition-all hover:bg-violet-800 hover:text-violet-100 "
        >
          Resume
        </div>
      </div>
    </div>
  </div>
}