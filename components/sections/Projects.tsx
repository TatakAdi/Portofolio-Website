"use client";

import { Project, ProjectCardData } from "@/lib/types";
import { mapProjectsToCardData } from "@/lib/project.mapper";
import ProjectCard from "@/components/project/ProjectCard";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type ProjectProps = {
  projects: Project[];
  onProjectClickAction?: (project: Project) => void;
};

export default function Projects({
  projects,
  onProjectClickAction,
}: ProjectProps) {
  const { ref, isVisible } = useInView();

  const featuredProjects = projects.filter(
    (p) =>
      !p.confidential &&
      (p.stage === "Production Ready" || p.stage === "MVP Ready")
  );
  const projectCards = mapProjectsToCardData(featuredProjects);

  return (
    <section
      id="projects"
      className="space-y-6 transition-all duration-700 ease-out"
    >
      <div
        className={`flex items-center justify-between transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline hover:text-foreground"
        >
          View All
        </Link>
      </div>
      <p className="max-2-xl text-muted-foreground">
        Selected production-ready and MVP projects showcasing my experience in
        backend, mobile, and web development.
      </p>
      <div
        ref={ref}
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {projectCards.slice(0, 3).map((card) => (
          <ProjectCard
            key={card.id}
            project={card}
            onClickAction={() => {
              const fullProject = projects.find((p) => p.id === card.id);
              if (fullProject && onProjectClickAction) {
                onProjectClickAction(fullProject);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}
