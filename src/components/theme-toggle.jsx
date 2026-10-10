"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-[114px] h-[40px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 ${className}`}
      />
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div className="flex items-center gap-1 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
            theme === "light"
              ? "bg-white text-amber-500 shadow-sm"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
          title="Light Mode"
          aria-label="Light Mode"
        >
          <Sun className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
            theme === "dark"
              ? "bg-zinc-800 text-lime-400 shadow-sm"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
          title="Dark Mode"
          aria-label="Dark Mode"
        >
          <Moon className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setTheme("system")}
          className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
            theme === "system"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
          title="System Preference"
          aria-label="System Preference"
        >
          <Monitor className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
