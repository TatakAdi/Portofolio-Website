import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/techStack";

export default function Home() {
  return (
    <div className="min-h-screen  px-6 py-8">
      <Hero />
      <About />
      <TechStack />
    </div>
  );
}
