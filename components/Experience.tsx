import { useRef } from "react";
import Skill from "./Skill";
import { useRouter } from "next/navigation";
import Bullet from "./Bullet";

interface Experience {
  title: string;
  company: string;
  description: string[];
  from: string;
  to: string;
  year: string;
  companyLink: string;
}

export default function Experience({
  title,
  company,
  description,
  from,
  to,
  year,
  companyLink,
}: Experience) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <div className="flex flex-col rounded-lg hover:bg-violet-100 hover:bg-opacity-[5%] px-3 py-2 transition-all">
      <div className="flex flex-row">
        <div className="text-violet-100">{title} <a className="text-violet-400 font-semibold">@</a></div>

        <button
          onClick={() => {
            router.push(companyLink);
            console.log("clicked");
          }}
          onMouseEnter={() => {
            if (ref.current) ref.current.style.width = "100%";
          }}
          onMouseLeave={() => {
            if (ref.current) ref.current.style.width = "0%";
          }}
          onTouchStart={()=>{router.push(companyLink);}}
          className="ml-1 text-violet-400 font-semibold cursor-pointer transition-all"
        >
          {company}
          <div
            ref={ref}
            className="bg-violet-400 h-[1px] w-0 mt-[-5px] duration-500 transition-all"
          ></div>
        </button>
      </div>

      <div className="text-xs text-violet-100/40">
        {from + " - " + to + ", " + year}
      </div>
      <div>
        <ul className="text-xs font-extralight leading-relaxed text-violet-100/50">
          {description.map((el, index) => {
            return (
              <div key={index} className="flex py-1 flex-row">
                <div></div><Bullet />
                <li className="w-[90%] ml-2 flex flex-row">
                 {el}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
