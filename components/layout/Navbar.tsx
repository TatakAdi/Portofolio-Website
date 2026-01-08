"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/theme/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  console.log("Navbar rendered");
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-transparent ">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/*Logo */}
        <Link href={"/"} className="text-lg font-bold ">
          Tatak<span className="text-primary">.</span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
