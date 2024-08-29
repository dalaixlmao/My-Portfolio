import NavButton from "./NavButton";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import { describe } from "node:test";

export default function Work() {
  const projects = [
    {
      skill: [
        "Next.js",
        "Node.js",
        "Turborepo",
        "Express.js",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma ORM",
        "Chart.js",
        "Docker",
        "TypeScript",
      ],
      link: ["https://github.com/dalaixlmao/Transaction-App"],
      posterLink: "https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png",
      title: "Wallet Management App",
      description: `Developed a scalable fintech solution with features such as P2P transfers and real-time balance tracking.`,
    },
    {
      skill: [
        "Redis messaging queue",
        "Next.js",
        "Turborepo",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "React.js",
        "TailwindCSS",
        "TypeScript",
      ],
      link: ["https://github.com/dalaixlmao/Movie-Booking-Management-App"],
      posterLink:
        "https://repository-images.githubusercontent.com/363009543/e049ba80-ab25-11eb-8112-78ae862803a0",
      title: "Movie Booking App",
      description: `Developed a full-stack movie booking application utilising Redis messaging queue to manage seat availability, ensuring single-request execution at a time by queuing and processing requests sequentially to prevent booking conflicts.`,
    },
    {
      title:"Codeforces API Visualizer",
      link:[ "https://cf-viz.vercel.app/","https://github.com/dalaixlmao/Cf-visualizer"],
      skill: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "React.js",
        "TailwindCSS",
        "TypeScript",
      ],
      posterLink:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/455635130_517746877297013_8546318818708104287_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9q8YpUEFZzgQ7kNvgF_03l5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEFwY9ot-_b16g3yQiTVOHvXPW_PM1nxZZk9sYKiTRwSg&oe=66F679A4",
      description:
        "Developed web app fetching Codeforces user data through API, quantifying questions by tags and ratings.",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center text-white">
      <About />
      <Experience />
      <div className="mt-[140px] flex flex-col items-center">
        {projects.map((e, index) => {
          return (
            <Project
            key = {index}
              skill={e.skill}
              link={e.link}
              title={e.title}
              posterLink={e.posterLink}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
}
