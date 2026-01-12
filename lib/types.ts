export type ProjectCategory = "Academic" | "Personal" | "Certification";

export type ThumbnailVariant = "mobile" | "web";

export type ProjectThumbnail = {
  src: string;
  type: ThumbnailVariant;
};

export type ProjectStage =
  | "Production Ready"
  | "MVP Ready"
  | "Experimental"
  | "Learning";

export type ProjectCompletionReason =
  | "Production"
  | "Academic Scope"
  | "Architecture Refactor"
  | "Learning Objective";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;

  category: ProjectCategory;
  stage: ProjectStage;
  type: string;
  year: number;
  completionReason?: ProjectCompletionReason;

  thumbnails: ProjectThumbnail[];
  techStack: string[];

  role: string;

  overview: string;

  features: string[];

  challenges?: string[];
  solution?: string[];

  currentWork?: string[];
  statusNote?: string;

  confidential: boolean;
};

export type ProjectCardData = Pick<
  Project,
  | "id"
  | "slug"
  | "title"
  | "shortDescription"
  | "category"
  | "stage"
  | "type"
  | "thumbnails"
  | "techStack"
  | "year"
  | "confidential"
>;
