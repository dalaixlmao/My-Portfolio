import { useState } from "react";
import Work from "./Works";

export default function Details() {
  const [activeSection, setActiveSection] = useState<"About" | "Experience" | "Projects">("About");

  const scrollToSection = (section: "About" | "Experience" | "Projects") => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mt-12 flex w-full flex-col justify-center items-center overflow-y-auto">
      
    </div>
  );
}
