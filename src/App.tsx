import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubContributions } from "@/components/portfolio/GitHubContributions";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) document.documentElement.style.scrollBehavior = "auto";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <GitHubContributions />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
