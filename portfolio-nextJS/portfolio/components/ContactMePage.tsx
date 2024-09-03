import Card from "./Card";
import { useRouter } from "next/navigation";

export default function ContactMePage() {
  const router = useRouter();
  return (
    <Card>
      <div className="flex flex-col items-center justify-between mt-[600px] md:mt-36">
        <div className="flex flex-col items-center">
          <div className="hover:bg-clip-text cursor-default transition-all hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  md:text-6xl text-center text-4xl text-semibold">
            Get In Touch
          </div>
          <div className="text-center text-xs text-violet-100/50 font-light leading-relaxed mt-4 max-w-[550px]">
            I am continually eager to explore new technologies and push the
            boundaries of what&apos;s possible. Hence would love to join in for
            a good discussion on some project idea, or work on it.
          </div>
          <button
            onClick={() => {
              router.push("mailto:aaryan4nubhav@gmail.com");
            }}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:border-transparent border py-3 px-5 mt-8 rounded-md text-violet-600 border-violet-600 hover:text-white hover:bg-violet-600 hover:font-medium transition-all"
          >
            Connect Here
          </button>
        </div>
        <div>
          <div
            onClick={() => {
              router.push("https://github.com/dalaixlmao");
            }}
            className="cursor-pointer mt-[80px] text-[12px] w-[200px] font-light text-violet-400 flex flex-row justify-between"
          >
            <a>Developed</a>
            <a>by</a>
            <a>Anubhav</a>
            <a>Aaryan</a>
          </div>
        </div>
      </div>
    </Card>
  );
}
