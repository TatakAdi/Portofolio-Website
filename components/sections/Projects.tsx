"use client";

import { Project, ProjectCardData } from "@/lib/types";
import ProjectCard from "@/components/project/ProjectCard";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  const { ref, isVisible } = useInView();

  const projectCards: ProjectCardData[] = projects.map(
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
    })
  );

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
          className="text-sm text-muted-foreground hover:underline"
        >
          View All
        </Link>
      </div>
      <div
        ref={ref}
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {projectCards.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
