"use client";

import { useInView } from "@/hooks/useInView";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function ContactPage() {
  const { ref, isVisible } = useInView();
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div
        ref={ref}
        className={`max-w-xl text-center space-y-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Interested in working together or discussing an opportunity? Feel free
          to reach out through any of the channels below.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-6">
          <a
            href="mailto:tatakadisubagyo@gmail.com"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
            aria-label="Send email to Tatak Adi"
          >
            <SiGmail className="h-4 w-4" />
            tatakadisubagyo@gmail.com
          </a>

          <Link
            href="https://github.com/TatakAdi"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
          >
            <SiGithub className="h-4 w-4" /> TatakAdi
          </Link>
          <Link
            href="https://www.linkedin.com/in/tatak-adi-subagyo-4a7b6a27a"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
          >
            <SiLinkedin className="h-4 w-4" />
            Tatak Adi Subagyo
          </Link>
        </div>
      </div>
    </main>
  );
}
