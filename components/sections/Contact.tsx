"use client";

import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-6 transition-all duration-700 ease-out"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-3xl text-center space-y-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground text-base md:text-lg">
          I’m open for internship opportunities, collaboration, or just a
          friendly chat. Feel free to reach out.
        </p>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="mailto:tatakadisubagyo@gmail.com"
            className="flex items-center gap-2 rouded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
          >
            <SiGmail className="h-4 w-4" />
            Email Me
          </a>

          <Link
            href="https://github.com/TatakAdi"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
          >
            <SiGithub className="h-4 w-4" /> Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/tatak-adi-subagyo-4a7b6a27a"
            target="_blank"
            className="flex items-center gap-2 rouded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
          >
            <SiLinkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
