import Card from "./Card";
import Headers from "./Headers";
import { projects } from "@/store/projects";
import Project from "./Project";

export default function ProjectPage() {
  return (
    <Card>
      <div className="flex flex-col w-full mt-[1000px] pt-72 md:pt-0 md:mt-36">
        <div className="w-full">
          <Headers text="Projects" />
        </div>
        <div className="xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1">
            {
                projects.map((el, index)=>{
                    return <div key={index} className="flex flex-col items-center w-full py-2 min-h-[350px]"><Project title={el.title} link={el.link} description={el.description} posterLink={el.posterLink} skill={el.skill} /></div>
                })
            }
        </div>
      </div>
    </Card>
  );
}
