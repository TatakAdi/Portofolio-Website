"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type ProjectCardProps = {
  title: string;
  category: string;
  type: string;
  thumbnail: string;
  techStack: string[];
  onClickAction?: () => void;
};

export default function ProjectCard({
  title,
  category,
  type,
  thumbnail,
  techStack,
  onClickAction,
}: ProjectCardProps) {
  return (
    <Card
      onClick={onClickAction}
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* {Thumbnail} */}
      <div className="relative h-40 w-full overflow-hidden bg-muted">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <CardContent>
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {category} . {type}
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
