export type ProjectCategory = "Academic" | "Personal" | "Certification";

export type ThumbnailVariant = "mobile" | "web";

export type ProjectThumbnail = {
  src: string;
  type: ThumbnailVariant;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;

  category: ProjectCategory;
  type: string;
  year: number;

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
  | "type"
  | "thumbnails"
  | "techStack"
  | "year"
>;
