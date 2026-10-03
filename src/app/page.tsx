import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { About } from "@/components/sections/About";
import { AiEngineering } from "@/components/sections/AiEngineering";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { GitHub } from "@/components/sections/GitHub";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Architecture />
        <AiEngineering />
        <GitHub />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
