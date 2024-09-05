import Card from "./Card";
import Me from "./Me";
import Headers from "./Headers";
import { useRouter } from "next/navigation";
import Bullet from "./Bullet";

export default function About() {
  const router = useRouter();
  return (
    <Card>
      <div className="z-20 pt-[600px] flex flex-col w-full md:px-3 md:pt-0 mb-6">
        <Headers text="About Me" />
        <div
          onClick={() => {
            console.log("clicked");
          }}
          className="w-full h-full flex flex-col items-center lg:items-start xl:flex-row text-justify"
        >
          <div className=" w-full text-xs mt-6 md:mt-12 md:pr-9 wrap text-violet-100/50 font-light leading-relaxed">
            I'm an innovative full-stack developer and a proud graduate of the
            <a
              onClick={() => {
                router.push("https://www.iitr.ac.in/");
              }}
              className="hover:underline cursor-pointer transition-all font-semibold text-violet-400"
            >
              {" "}
              Indian Institute of Technology, Roorkee (IITR)
            </a>
            , where I earned a B.Tech degree in Mechanical Engineering in 2024.
            My academic journey honed my analytical thinking and problem-solving
            skills, which are crucial for tackling complex challenges in the
            tech world. Alongside my engineering background, I have developed a
            strong expertise in competitive programming, holding an Expert
            rating on{" "}
            <a
              onClick={() => {
                router.push("https://codeforces.com/profile/_watch_this_");
              }}
              className="hover:underline cursor-pointer transition-all font-semibold text-violet-400"
            >
              Codeforces (1620)
            </a>{" "}
            and a Knight rating on{" "}
            <a
              onClick={() => {
                router.push("https://leetcode.com/u/aaryan4nubhav/");
              }}
              className="hover:underline cursor-pointer transition-all font-semibold text-violet-400"
            >
              Leetcode (1865)
            </a>
            . This blend of rigorous engineering principles and a passion for
            innovation defines my approach to software development, allowing me
            to craft creative and efficient solutions.
            <div className="font-medium">Skills :</div>
            <div className="flex flex-row justify-between text-justify">
              
              <div className="flex flex-col bg-blue">
                <ul className="text-left">
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">C++</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2 w-5/6">Data Structures and Algorithms</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">TypeScript</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">Next.js</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">React.js</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">MongoDB</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2 w-5/6">Object Oriented Programming</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col bg-blue">
                <ul className="text-left">
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">Node.js</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">Express.js</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">PostgreSQL</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">Prisma ORM</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2">Docker</a>
                  </li>
                  <li className="flex flex-row">
                    <Bullet />
                    <a className="pl-2 w-3/5">Competitive Programming</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              console.log("clicked");
            }}
            className="w-full h-full flex flex-col items-center"
          >
            <div className="max-w-[350px] w-[350px] min-w-[350px] xl:w-2/3 h-[300px] mt-5 lg:mt-12 border bg-violet-500 border-violet-400 rounded-2xl">
              <Me />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
