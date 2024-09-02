import Card from "./Card";
import Me from "./Me";

export default function About() {
  return (
    <Card>
      <div className="flex flex-col w-full px-3 mt-70 md:mt-0">
        <div className="flex flex-row items-center w-full">
          <div className="text-lg w-2/4 md:w-1/5 font-semibold text-violet-100 text-left">
            About Me
          </div>
          <div className="h-[1px] w-3/4 md:w-4/5 bg-violet-500/30 rounded-full"></div>
        </div>
        <div className="w-full h-full flex flex-col items-center lg:items-start xl:flex-row">
          <div className="w-full text-xs mt-6 md:mt-12 md:pr-9 wrap text-violet-100/50 font-light leading-relaxed">
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
          <div className="max-w-[400px] w-[400px] min-w-[350px] xl:w-2/3 h-[300px] mt-12 border bg-violet-500 border-violet-400 rounded-lg">
            <Me />
          </div>
        </div>
      </div>

      {/* <div className="text-base font-semibold text-white">
        Background and education
      </div>
      <p className="mt-1 border-b-2 pb-2 border-white/10">
        I&apos;m a full-stack developer who graduated from{" "}
        <a className="font-semibold text-white/70">Indian Institute of Technology, Roorkee (IITR)</a>,
        with a B.Tech degree in Mechanical Engineering in 2024. My academic journey
        provided me with a robust foundation in analytical thinking and
        problem-solving, crucial for tackling complex challenges in the tech
        world. This background, combined with a strong drive for innovation, has
        shaped my approach to software development, where I blend rigorous
        engineering principles with creative flair.
      </p>
      <div className="text-base font-semibold  text-white mt-2">
        My technical and creative side
      </div>
      <p className="mt-1 border-b-2 pb-2 border-white/10">
        My technical expertise spans a range of modern technologies, including
        Next.js, React.js, Node.js, and TypeScript. I specialize in crafting
        scalable web applications and am proficient in using Prisma ORM for
        efficient data management. Beyond my technical skills, I have a deep
        passion for creativity. I enjoy sketching and digital art, which adds a
        unique dimension to my projects, allowing me to infuse them with
        originality and a fresh perspective. My problem-solving prowess is
        highlighted by my <a className="font-semibold text-white/70">Codeforces rating of 1620 (Expert)</a> and <a className="font-semibold text-white/70">Leetcode rating
        of 1865 (Knight)</a>, demonstrating my capability to tackle complex
        algorithms and data structures.
      </p>
      <div className="text-base font-semibold text-white mt-2">Goals</div>
      <p className="mt-1">
        I am continually eager to explore new technologies and push the
        boundaries of what&apos;s possible. My creative pursuits and technical
        skills fuel my enthusiasm for developing innovative solutions. I am
        excited to leverage my background and abilities to contribute to
        impactful projects, bringing both technical excellence and a touch of
        creativity to every challenge I encounter.
      </p> */}
    </Card>
  );
}
