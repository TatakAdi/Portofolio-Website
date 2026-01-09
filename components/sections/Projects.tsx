import { Project } from "@/lib/types";
import ProjectCard from "@/components/project/ProjectCard";
import Link from "next/link";

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            type={project.type}
            thumbnail={project.thumbnail}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}
