"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { ProjectCardData } from "@/lib/types";

type ProjectCardProps = {
  project: ProjectCardData;
  onClickAction?: () => void;
};

export default function ProjectCard({
  project,
  onClickAction,
}: ProjectCardProps) {
  const { title, category, type, thumbnails, techStack } = project;
  const hasTwo = thumbnails.length >= 2;
  const first = thumbnails[0];
  const second = thumbnails[1];

  const isWebMobile =
    hasTwo && first.type === "web" && second.type === "mobile";
  return (
    <Card
      onClick={onClickAction}
      className={`group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        onClickAction && "cursor-pointer hover:-translate-y-1"
      }`}
    >
      {/* {Thumbnail} */}
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        {hasTwo ? (
          <div
            className={`grid h-full ${
              isWebMobile ? "grid-cols-[2fr_1fr]" : "grid-cols-2"
            }`}
          >
            {/* FIRST */}
            <div className="relative h-full w-full">
              <Image
                src={first.src}
                alt={`${title} preview 1`}
                fill
                className={`transition-transform duration-300 group-hover:scale-105 ${
                  first.type === "mobile"
                    ? "object-contain p-3"
                    : "object-cover"
                }
                `}
              />
            </div>
            {/* SECOND */}
            <div className="relative h-full w-full">
              <Image
                src={second.src}
                alt={`${title} preview 2`}
                fill
                className={`transition-transform duration-300 group-hover:scale-105 ${
                  second.type === "mobile"
                    ? "object-contain p-3"
                    : "object-cover"
                }`}
              />
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <Image
              src={first.src}
              alt={title}
              fill
              className={`
              transition-transform duration-300 group-hover:scale-105
              ${first.type === "mobile" ? "object-contain p-4" : "object-cover"}
              `}
            />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      {/* Content */}
      <CardContent className="space-y-2 p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {category} · {type}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant={"secondary"} className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
