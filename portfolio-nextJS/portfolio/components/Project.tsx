import Skill from "./Skill";
import { useRouter } from "next/navigation";

export default function Project({title, description, link, skill, posterLink}:{title:string, description:string, link:string[], skill:string[], posterLink:string}) {

  const router = useRouter();
  return (
    <div onClick={()=>{router.push(link[0])}} className="w-full flex flex-row mt-4 text-sm text-white/50 cursor-pointer hover:bg-white/10 hover:border-white/10 transition-all px-6 py-4 rounded-2xl border border-white/30 shadow-inner leading-relaxed">
      <div
        className="w-24 h-12 flex flex-col items-start mt-2 rounded-md bg-white border border-slate-400"
        style={{
          backgroundImage:
            `url(${posterLink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="ml-6 w-full">
        <div className="text-lg font-medium text-white flex flex-row items-center">
          <div>{title}</div>
          <TopRight />
        </div>
        <div className="mt-2">
          {description}
        </div>
        <div className="flex flex-row flex-wrap">
          {" "}
          {skill.map((e) => {
            return <Skill text={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

function TopRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="ml-2 size-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
