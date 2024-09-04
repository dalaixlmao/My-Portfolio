import { ReactNode, useRef, useState } from "react";
import { IconType } from "react-icons";
import { IconContext } from "react-icons";
import { useRouter } from "next/navigation";

export default function SocialButtonMobile({
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
        color: "#a78bfa",
        className: !hovered
          ? "opacity-50 h-5 w-5 transition-all py-[2px] pr-[4px]"
          : "opacity-100 h-5 w-5 transition-all py-0 pr-0",
      }}
    >
      <div
        style={{
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
        }}
        onClick={() => {
          router.push(link);
        }}
        className="flex cursor-pointer flex-row items-center duration-150 transition-all"
        title={title}
      >
        {button}
      </div>
    </IconContext.Provider>
  );
}
