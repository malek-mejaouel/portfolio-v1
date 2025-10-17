import { Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

    // notify other components (canvas background) about theme changes
    try {
      window.dispatchEvent(new CustomEvent("themechange", { detail: { isDark: isDarkMode } }));
    } catch (e) {
      // ignore (older browsers)
    }
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode((v) => !v);
  const btnRef = useRef(null);
  const [topStyle, setTopStyle] = useState({ top: "1rem" });

  useEffect(() => {
    function alignWithNavbar() {
      const nav = document.querySelector("nav");
      if (!nav) return setTopStyle({ top: "1rem" });
      const rect = nav.getBoundingClientRect();
      // center of navbar vertically + small offset
      const top = Math.max(8, rect.top + rect.height / 2 - 16);
      setTopStyle({ top: `${top}px` });
    }

    alignWithNavbar();
    window.addEventListener("resize", alignWithNavbar);
    window.addEventListener("scroll", alignWithNavbar, { passive: true });
    return () => {
      window.removeEventListener("resize", alignWithNavbar);
      window.removeEventListener("scroll", alignWithNavbar);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={toggle}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        // use JS to align vertically with the navbar center; keep right offset
        "fixed max-sm:hidden right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
      style={topStyle}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
