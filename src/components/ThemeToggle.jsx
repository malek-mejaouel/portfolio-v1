import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import {cn} from '@/lib/utils';
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 flex justify-right text-yellow-300 " />
      ) : (
        <Moon className="h-6 w-6 flex justify-right text-blue-900 " />
      )}
    </button>
  );
};
