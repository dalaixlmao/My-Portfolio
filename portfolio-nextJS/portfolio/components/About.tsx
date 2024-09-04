import Card from "./Card";
import Me from "./Me";
import Headers from "./Headers";

export default function About() {
  return (
    <Card>
      <div className="flex flex-col w-full md:px-3 mt-70 md:mt-0">
        <Headers text="About Me" />
        <div onClick={()=>{console.log("clicked")}} className="w-full h-full flex flex-col items-center lg:items-start xl:flex-row">
          <div  className=" w-full text-xs mt-6 md:mt-12 md:pr-9 wrap text-violet-100/50 font-light leading-relaxed">
            I&apos;m a full-stack developer who graduated from{" "}
            <a className="font-semibold text-violet-400">
              Indian Institute of Technology, Roorkee (IITR)
            </a>
            , with a B.Tech degree in Mechanical Engineering in 2024. My
            academic journey provided me with a robust foundation in analytical
            thinking and problem-solving, crucial for tackling complex
            challenges in the tech world. This background, combined with a
            strong drive for innovation, has shaped my approach to software
            development, where I blend rigorous engineering principles with
            creative flair.
          </div>
          <div onClick={()=>{console.log("clicked")}} className="" >
            <div className="max-w-[350px] w-[350px] min-w-[350px] xl:w-2/3 h-[300px] mt-12 border bg-violet-500 border-violet-400 rounded-2xl">
              <Me />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
