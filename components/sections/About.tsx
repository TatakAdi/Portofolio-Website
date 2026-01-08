"use client";

import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, isVisible } = useInView();
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div
        ref={ref}
        className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border border-border">
            <img
              src="FotoDiri3.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            Informatics Student
          </p>
          <p className="text-base leading-relaxed text-foreground">
            I'm a final year Informatics student with a strong interest in
            software development. I enjoy building clean, responsive, and
            user-focused applications using modern technologies.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            I mainly work with React, Typescript, and Tailwind CSS, and I'm
            continuosly improving my skills by building real projects.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            Currently, I'm focusing on my final project while continuing to
            improve my skills and preparing for internship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
