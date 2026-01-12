import { Project, ProjectCardData } from "@/lib/types";

export function mapProjectsToCardData(projects: Project[]): ProjectCardData[] {
  return projects.map(
    ({
      id,
      slug,
      title,
      shortDescription,
      category,
      stage,
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
      stage,
      type,
      thumbnails,
      techStack,
      year,
      confidential,
    })
  );
}
