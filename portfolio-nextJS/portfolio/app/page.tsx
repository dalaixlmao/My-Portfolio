"use client";
import Landing from "@/components/Landing";
import AboutPage from "@/components/AboutPage";
import Work from "@/components/Works";
import NavButton from "@/components/NavButton";
import Details from "@/components/Details";

export default function Home() {
  return (
    <div className="w-screen bg-slate-900 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section className="h-screen snap-start">
        <Landing />
      </section>
      <section className="h-screen snap-start">
        <AboutPage />
      </section>
      <section className="h-screen snap-start">
        <Details />
      </section>
    </div>
  );
}
