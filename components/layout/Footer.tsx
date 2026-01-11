import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* LEFT */}
        <div className="text-sm text-muted-foreground">
          @ {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">Tatak Adi</span>. Built
          with Next.js, Tailwind CSS, & ShadCn
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/TatakAdi"
            target="_blank"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <SiGithub className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tatak-adi-subagyo-4a7b6a27a"
            target="_blank"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <SiLinkedin className="h-5 w-5" />
          </Link>
          <a
            href="mailto:tatakadisubagyo@gmail.com"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <SiGmail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
