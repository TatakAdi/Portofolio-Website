"use client";

import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectModal from "@/components/project/ProjectModal";
import projects from "@/data/projects.data";
import { Project, ProjectCardData } from "@/lib/types";
import { useInView } from "@/hooks/useInView";

const allProjects = projects as Project[];

export default function ProjectsPage() {
  const visibleProjects: ProjectCardData[] = allProjects
    .filter((p) => !p.confidential)
    .map(
      ({
        id,
        slug,
        title,
        shortDescription,
        category,
        type,
        thumbnails,
        techStack,
        year,
        confidential,
      }) => ({
        id,
        slug,
        title,
        shortDescription,
        category,
        type,
        thumbnails,
        techStack,
        year,
        confidential,
      })
    );
  const { ref, isVisible } = useInView();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <>
      <section
        ref={ref}
        className={`container mx-auto space-y-8 py-10 transition-all duration-700 ease-out ${
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard
                project={project}
                onClickAction={() =>
                  setActiveProject(
                    allProjects.find((p) => p.id === project.id) ?? null
                  )
                }
              />
            </div>
          ))}
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
