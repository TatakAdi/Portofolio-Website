import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/techStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import ProjectData from "@/data/projects.json";
import { Project } from "@/lib/types";

export default function Home() {
  const projects = ProjectData as unknown as Project[];

  return (
    <div className="min-h-screen  px-6 py-8">
      <Hero />
      <About />
      <TechStack />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
