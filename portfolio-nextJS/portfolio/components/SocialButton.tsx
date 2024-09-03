import { ReactNode, useRef, useState } from "react";
import { IconType } from "react-icons";
import { IconContext } from "react-icons";
import { useRouter } from "next/navigation";

export default function SocialButton({
  button,
  link,
  title,
}: {
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
          if (ref.current) ref.current.style.width = "30px";
        }}
        onMouseLeave={() => {
          setHovered(false);
          if (ref.current) ref.current.style.width = "16px";
        }}
        onClick={() => {
          router.push(link);
        }}
        className="flex cursor-pointer flex-row items-center transition-all"
        title={title}
      >
        <div ref={ref} className="h-[1px] w-[16px] bg-violet-100/50"></div>
        {button}
      </div>
    </IconContext.Provider>
  );
}
