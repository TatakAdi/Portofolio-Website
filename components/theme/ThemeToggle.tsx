"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
      flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm cursor-pointer transition-colors duration-200 ease-in-out bg-background text-foreground hover:bg-foreground hover:text-background"
    >
      {isDark ? <Moon /> : <Sun />}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
