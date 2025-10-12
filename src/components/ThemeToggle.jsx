import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const THEME_KEY = "theme";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark") return true;
      if (stored === "light") return false;
    } catch (e) {
      // ignore localStorage errors
    }
    // fallback to system preference
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Keep document class and localStorage in sync
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem(THEME_KEY, "dark");
      } catch (e) {
        // ignore
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem(THEME_KEY, "light");
      } catch (e) {
        // ignore
      }
    }
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode((v) => !v);

  return (
    <button
      onClick={toggle}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
