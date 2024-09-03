"use client";
import { useState, useEffect, useRef, useCallback, RefObject } from "react";
import Landing from "@/components/Landing";
import AboutPage from "@/components/AboutPage";
import Details from "@/components/Details";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ExperiencePage from "@/components/ExperiencePage";
import ProjectPage from "../components/ProjectPage";
import ContactMePage from "@/components/ContactMePage";
import Social from "@/components/Social";

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersection = (
  options: IntersectionOptions
): [RefObject<HTMLElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, callback, options]);

  return [ref, isIntersecting];
};

export default function Home(): JSX.Element {
  const [landingRef, isLandingVisible] = useIntersection({
    threshold: 0.5,
  });
  const [aboutPageRef, isAboutPageVisible] = useIntersection({
    threshold: 0.5,
  });
  const [detailsRef, isDetailsVisible] = useIntersection({
    threshold: 0.5,
  });
  const [aboutRef, isAboutVisible] = useIntersection({
    threshold: 0.5,
  });
  const [experienceRef, isExperienceVisible] = useIntersection({
    threshold: 0.5,
  });
  const [ProjectRef, isProjectVisible] = useIntersection({
    threshold: 0.0,
  });
  const [contactMeRef, isContactMeVisible] = useIntersection({
    threshold: 1.0,
  });

  return (
    <div className="z-10 w-screen bg-slate-900 h-screen overflow-y-auto lg:snap-y md:snap-mandatory scroll-smooth">
      <CursorArea />
      {!isLandingVisible && <div className="absolute fixed top-0 z-30"><Navbar /></div>}
      {!isLandingVisible && <div className="absolute fixed bottom-0 z-30 text-white md:block hidden"><Social /></div>}
      <section ref={landingRef} className="z-20 h-screen snap-start">
        {isLandingVisible && <Landing />}
      </section>
      <section ref={aboutPageRef} className="z-20 h-screen snap-start">
        {isAboutPageVisible && <AboutPage />}
      </section>
      <section ref={aboutRef} className="z-20 h-screen snap-start">
        {isAboutVisible && <About />}
      </section>
      <section ref={experienceRef} className="z-20 h-screen snap-start">
        {isExperienceVisible && <ExperiencePage />}
      </section>
      <section ref={ProjectRef} className="z-20 min-h-screen snap-start">
        {isProjectVisible && <ProjectPage />}
      </section>
      <section ref={contactMeRef} className="z-20 h-screen snap-start">
        {isContactMeVisible && <ContactMePage/>}
      </section>
    </div>
  );
}



const CursorArea = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute w-[800px] blur-[200px] h-[800px] bg-blue-500/10 rounded-full cursor-default pointer-events-none transition-transform duration-75 ease-linear top-0 left-0"
      style={{
        transform: `translate(${cursorPosition.x - 400}px, ${
          cursorPosition.y - 400
        }px)`,
      }}
    ></div>
  );
};