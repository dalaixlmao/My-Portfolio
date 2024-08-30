import { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Cross from "@/public/Cross";
import Menu from "@/public/Menu";
import { NavButtonDesktop, NavButtonMobile } from "./NavButton";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="transition-all shadow-xl w-screen flex flex-row justify-between px-4 md:px-12 py-3 bg-slate-900/70 backdrop-blur-md">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <div
        className="md:hidden transition-all z-30 block w-full flex-col items-end flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? <Menu /> : <Cross />}
      </div>
      {isOpen ? (
        <MobileNav setIsOpen={setIsOpen} router={router} />
      ) : (
        <></>
      )}
      <DesktopNav setIsOpen={setIsOpen} router={router} />
    </div>
  );
}

