import { useRef } from "react";

export default function NavButton({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="flex flex-row items-center text-white/30 hover:text-white mb-5 cursor-pointer"
      onMouseEnter={() => {
        if (ref.current) {
          ref.current.style.width = "56px";
          ref.current.style.opacity = "100%";
        //   ref.current.style.tra
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.width = "28px";
          ref.current.style.opacity = "30%";
        }
      }}
    >
      <div className="h-[1px] w-7 hover:w-10 bg-white mr-3 transition-all rounded-full" style={{opacity:0.3}} ref={ref}></div>
      <div>{text}</div>
    </div>
  );
}
