import { useState } from "react";
import { useRouter } from "next/navigation";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets:["latin"], weight:["400", "700"]})

interface ProjectType {
  title: string;
  description: string;
  link: string[];
  skill: string[];
  posterLink: string;
}

export default function Project({
  title,
  description,
  link,
  skill,
  posterLink,
}: ProjectType) {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hoveredAll, setHoveredAll] = useState(false);
  const router = useRouter();
  return (
    <div
      onMouseEnter={() => {
        setHoveredAll(true);
      }}
      onMouseLeave={() => {
        setHoveredAll(false);
      }}
      className="z-10 w-[90%] rounded-lg p-4 cursor-pointer transition-all flex flex-col h-full bg-white bg-opacity-[5%] hover:bg-opacity-[10%] mt-2 hover:mt-0 transition-all"
    >
      <div className="z-20 flex flex-row items-center justify-between">
        <div
        onClick={() => {
          if(!hovered1)
          {  window.open(link[0], '_blank');
            router.push("/");
          }
        }}>
          <Folder />
        </div>
        <div className="flex flex-row" title="Deployed Link">
          {link[1] && <div
          onClick={() => {
            window.open(link[1], '_blank');
            router.push("/");
          }}
          onMouseEnter={() => {
            setHovered1(true);
          }}
          onMouseLeave={() => {
            setHovered1(false);
          }}
           className="">
            <LinkButton hovered={hovered1} />
          </div>}
          <div
          title="Github Link"
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
            onClick={() => {
              window.open(link[0], '_blank');
              router.push("/");
            }}
            className={"transition-all"}
          >
            <TopRight hovered={hovered} />
          </div>
        </div>
      </div>
      <div
      onClick={() => {
        if(!hovered1)
        {window.open(link[0], '_blank');
          router.push("/");
        }
      }}
       className="z-10">
        <div className={hoveredAll?"text-violet-400 mt-2 text-sm font-semibold":"text-violet-100 mt-2 text-sm font-semibold"}>{title}</div>
        <div className={"mt-2 text-[15px] font-light text-violet-100/50"}>{description}</div>
        <div className="flex flex-row flex-wrap mt-3">
          {skill.map((elem, index)=>{
            return <div key={index} className={spaceMono.className+" mr-4 text-violet-100/30 leading relaxed text-[12px]"}>{elem}</div>
          })}
        </div>
      </div>
    </div>
  );
}

function LinkButton({ hovered }: { hovered: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={hovered ? "#a78bfa" : "white"}
      className="size-4 mr-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
}

function TopRight({ hovered }: { hovered: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={hovered ? "#a78bfa" : "white"}
      className={"size-4 transition-all hover:violet-400"
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

function Folder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#c084fc"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
}
