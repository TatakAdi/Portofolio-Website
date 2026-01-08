"use client";

import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isVisible } = useInView();
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Tatak 👋
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Final-year Informatics Student focused on Web Development
        </p>
        <p className="text-base md:text-lg max-w-xl text-foreground mb-8">
          I build modern, responsive web applications with a focus on clean UI,
          maintenable code and real-world usability and currently focus on my
          final projects while preparing for internship opportunities
        </p>
      </div>
    </section>
  );
}
