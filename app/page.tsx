import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen  px-6 py-8">
      <Hero />
      <About />
    </div>
  );
}
