import { ReactNode, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { useRouter } from "next/navigation";

export default function SocialButton({
  fade,
  button,
  link,
  title,
}: {
  fade:boolean;
  button: ReactNode;
  link: string;
  title: string;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <IconContext.Provider
      value={{
        color: hovered ? "#a78bfa" : "white",
        className: !hovered
          ? "opacity-50 h-5 w-5 transition-all py-[2px] pr-[4px]"
          : "opacity-100 h-5 w-5 transition-all py-0 pr-0",
      }}
    >
      <div
        onMouseEnter={() => {
          setHovered(true);
          if (ref.current) {
            ref.current.style.width = "30px";
            ref.current.style.backgroundColor = "#a78bfa";
            ref.current.style.opacity="100%"
          }
        }}
        style={{
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
        }}
        onMouseLeave={() => {
          setHovered(false);
          if (ref.current) {
            ref.current.style.width = "16px";
            ref.current.style.backgroundColor = "white";
            ref.current.style.opacity="50%"
          }
        }}
        onClick={() => {
          window.open(link, "_blank");
          router.push("/");
          
        }}
        className={`flex cursor-pointer flex-row items-center duration-150 transition-all ${fade ? "opacity-100" : "opacity-0"}`}
        title={title}
      >
        <div ref={ref} className="h-[1px] w-[16px] bg-violet-100/50"></div>
        {button}
      </div>
    </IconContext.Provider>
  );
}
