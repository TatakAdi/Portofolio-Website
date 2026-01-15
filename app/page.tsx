"use client";

import { useState } from "react";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/techStack";
import Certificates from "@/components/sections/Certificate";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ProjectModal from "@/components/project/ProjectModal";

import ProjectData from "@/data/projects.data";
import CertificateData from "@/data/certificates.data";
import { Project, Certificate } from "@/lib/types";

export default function Home() {
  const projects: Project[] = ProjectData;
  const certificates: Certificate[] = CertificateData;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen  px-6 py-8">
      <Hero />
      <About />
      <TechStack />
      <Certificates certificates={certificates} />
      <Projects
        projects={projects}
        onProjectClickAction={(project) => setActiveProject(project)}
      />
      <Contact />

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onCloseAction={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
