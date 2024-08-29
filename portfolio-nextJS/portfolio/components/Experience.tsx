import Skill from "./Skill";

export default function Experience() {

    const skill = [
        "Next.js", 
        "React.js",
        "Node.js",
        "TypeScript",
        "TailwindCSS",
        "MongoDB",
    ]


  return (
    <div className="w-full flex flex-col md:items-start items-center md:flex-row mt-[140px] transition-all text-sm text-white/50 hover:bg-white/10 hover:border-white/10 pmd:x-6 py-4 rounded-2xl border border-white/30 shadow-inner leading-relaxed">
      <div className="w-1/2 md:w-1/5 flex flex-row md:flex-col items-start">
        <div className="w-full flex flex-row items-center justify-between">
          <div>May</div>
          <div className="w-3 h-[1px] bg-white/50 mx-1"></div> <div>Nov</div>
        </div>
        <div className="md:ml-0 ml-2">2023</div>
      </div>
      <div className="ml-6">
        <div className="text-lg font-medium text-white flex md:flex-row flex-col md:items-center">
          <div>Full Stack Developer</div>
          <div className="md:block hidden h-1 w-1 bg-white rounded-full ml-2"></div>
          <div className="md:ml-2 text-white/70">Reslink</div>
          <TopRight />
        </div>
        <div className="mt-2">
          Architected and implemented RESTful APIs, ensuring data flow and
          integration with microservices. Engineered and optimised client-side
          components, enhancing performance and user experience. Developed and
          deployed responsive web applications using Next.js, contributing to
          the full software development lifecycle from ideation to deployment.
          Key Achievements Boosted application performance by 30% through
          client-side optimizations. Successfully delivered 5 major features.
        </div>
        <div className="flex flex-row flex-wrap"> {
            skill.map((e, index)=>{
                return <Skill key={index} text={e} />
            })
            }</div>
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
      className="ml-2 size-3 md:block hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
