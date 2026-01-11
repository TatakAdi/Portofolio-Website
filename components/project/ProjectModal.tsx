"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { Project } from "@/lib/types";

type Props = {
  project: Project;
  onCloseAction: () => void;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onCloseAction }: Props) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseAction();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onCloseAction]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in"
      onClick={onCloseAction}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-background p-6 shadow-xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted cursor-pointer"
          onClick={onCloseAction}
        >
          <X size={18} />
        </button>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">
            {project.category} · {project.type} · {project.year}
          </p>

          <p className="text-sm">
            <span className="font-medium">Role:</span> {project.role}
          </p>

          {project.statusNote && (
            <p className="text-sm italic text-muted-foreground">
              {project.statusNote}
            </p>
          )}
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((i) => (
              <Badge key={i} variant={"secondary"}>
                {i}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <Section title="Overview">
            <p className="text-sm text-muted-foreground">{project.overview}</p>
          </Section>

          <Section title="Key Features">
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>

          {project.challenges && (
            <Section title="Challenges">
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {project.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.solution && (
            <Section title="Solution & Approach">
              <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                {project.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.currentWork && (
            <Section title="Current Work">
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {project.currentWork.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
