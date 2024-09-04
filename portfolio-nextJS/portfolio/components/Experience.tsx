import { useRef } from "react";
import Skill from "./Skill";
import { useRouter } from "next/navigation";

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

        <div
          onClick={() => {
            router.push(companyLink);
          }}
          onMouseEnter={() => {
            if (ref.current) ref.current.style.width = "100%";
          }}
          onMouseLeave={() => {
            if (ref.current) ref.current.style.width = "0%";
          }}
          className="ml-1 text-violet-400 font-semibold cursor-pointer transition-all"
        >
          {company}
          <div
            ref={ref}
            className="bg-violet-400 h-[1px] w-0 mt-[-5px] duration-500 transition-all"
          ></div>
        </div>
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

function Bullet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a78bfa" className="size-2 mt-1">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
</svg>

  );
}
