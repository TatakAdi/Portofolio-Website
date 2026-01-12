"use client";

import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectModal from "@/components/project/ProjectModal";
import projects from "@/data/projects.data";
import { Project, ProjectCardData } from "@/lib/types";
import { mapProjectsToCardData } from "@/lib/project.mapper";
import { useInView } from "@/hooks/useInView";

const allProjects = projects as Project[];

export default function ProjectsPage() {
  const publicProjects = allProjects.filter((p) => !p.confidential);
  const productionProjects = publicProjects.filter(
    (p) => p.stage === "Production Ready"
  );
  const mvpProjects = publicProjects.filter((p) => p.stage === "MVP Ready");
  const learningProjects = publicProjects.filter(
    (p) => p.stage === "Experimental" || p.stage === "Learning"
  );

  const { ref, isVisible } = useInView();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const openProject = (id: string) =>
    setActiveProject(allProjects.find((p) => p.id === id) ?? null);
  return (
    <>
      <section
        ref={ref}
        className={`container mx-auto space-y-8 px-8 py-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="max-w-2xl text-muted-foreground">
            A collection of academic, personal, and experimental projects I have
            worked on, covering web, mobile, and backend systems.
          </p>
        </div>

        {/* Production Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Production Projects</h3>
            <p className="text-muted-foreground max-w-2xl">
              Public-facing and production-ready projects.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mapProjectsToCardData(productionProjects).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClickAction={() => openProject(project.id)}
            />
          ))}
        </div>

        {/* MVP Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">MVP & Ongoing</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mapProjectsToCardData(mvpProjects).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClickAction={() => openProject(project.id)}
              />
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Learning & Academic</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mapProjectsToCardData(learningProjects).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClickAction={() => openProject(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onCloseAction={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
