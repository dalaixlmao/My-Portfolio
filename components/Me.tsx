import { Bangers } from "next/font/google";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { gmail, instagram, linkedin } from "@/store/links";

const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function Me() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleInteraction1 = () => {
    if (ref.current) {
      ref.current.textContent = "Hii!!";
    }
    setHovered(true);
    console.log("clicked");
  };
  const handleInteraction2 = () => {
    if (ref.current) {
      ref.current.textContent = "";
    }
    setHovered(false);
    console.log("clicked");
  };

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{
        backgroundImage: hovered ? 'url("/images/MyShadow.svg")' : "",
        backgroundSize: "contain",
        backgroundPosition: "center right 6.5rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        onMouseEnter={handleInteraction1}
        onMouseLeave={handleInteraction2}
        className="z-10 hover:h-[298px] border-2 hover:border-transparent border-violet-500 rounded-2xl h-[270px] hover:mt-0 mt-[28px] w-full transition-all"
        style={{
          backgroundImage: 'url("/images/MeOnly.svg")',
          backgroundSize: "contain",
          backgroundPosition: hovered ? "center right 7rem" : "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          ref={ref}
          className={`${bangers.className} relative top-0 ml-3 mt-4 text-3xl text-violet-950`}
        ></div>
        {hovered && (
          <div
            className={`${bangers.className} w-1/3 ml-[220px] mt-[120px] text-xl text-violet-950`}
          >
            <div className="text-right">Want to connect?</div>
            <div className="flex mt-0 justify-around w-full h-full flex-row">
              <button
                onClick={() => {
                  window.open(
                    instagram,
                    "_blank"
                  );
                  router.push("/");
                }}
              >
                <FaInstagramSquare size={"25"} />
              </button>
              <button
                onClick={() => {
                  window.open(
                    linkedin,
                    "_blank"
                  );
                  router.push("/");
                }}
              >
                <FaLinkedin size={"25"} />
              </button>
              <button
                onClick={() => {
                  window.open(gmail, "_blank");
                  router.push("/");
                }}
              >
                <SiGmail size={"25"} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
