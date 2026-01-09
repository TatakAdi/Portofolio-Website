"use client";

import { useInView } from "@/hooks/useInView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiTypescript,
  SiNextdotjs,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

const primaryStack = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Express.js", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
];

const secondaryStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Prisma", icon: SiPrisma },
  { name: "Supabase", icon: SiSupabase },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
];

const learningStack = [
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
];

function StackCard({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: React.ElementType }[];
}) {
  return (
    <Card className="border-border bg-background">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-3 gap-4">
          {items.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-2 rounded-md border border-border p-3 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
            >
              <Icon className="text-2xl" />
              <span className="text-xs text-center">{name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function TechStack() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="tech-stack"
      className="w-full min-h-screen flex items-center px-6 md:px-12"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto w-full transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My Primary focus is web development, with additional experience in
            mobile development and ongoing learning in machine learning
            fundamentals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StackCard title="Primary (Comfortable)" items={primaryStack} />
          <StackCard title="Secondary / Exposure" items={secondaryStack} />
          <StackCard title="Currently Learning" items={learningStack} />
        </div>
      </div>
    </section>
  );
}
