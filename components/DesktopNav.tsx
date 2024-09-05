import { NavButtonDesktop } from "./NavButton";
import { NavProps } from "./MobileNav";

export default function DesktopNav({setIsOpen, router}:NavProps){
    return <div className="flex flex-row justify-end text-xs items-center">
    <NavButtonDesktop text="About" onClick={() => {}} isActive={true} />
    <NavButtonDesktop
      text="Experience"
      onClick={() => {}}
      isActive={true}
    />
    <NavButtonDesktop text="Projects" onClick={() => {}} isActive={true} />

    <div
      onClick={() => {
        router.push(
          "https://drive.google.com/file/d/11cR2rPerVm1lIvbdS1UldwVzzmdK46md/view?usp=drive_link"
        );
      }}
      className="hidden md:block border border-violet-500 text-violet-500 px-3 py-2 rounded-[4px] cursor-pointer hover:border-transparent transition-all hover:bg-violet-800 hover:text-violet-100 "
    >
      Resume
    </div>
  </div>
}