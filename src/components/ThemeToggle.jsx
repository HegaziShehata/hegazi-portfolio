import { useState } from "react";
import "./ThemeToggle.css";

const STORAGE_KEY = "theme";

// index.html sets data-theme on <html> before the first paint (no flash),
// so the initial state is simply read back from there.
const getCurrentTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getCurrentTheme);
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;

    // Short-lived class that enables a smooth colour transition (see index.css)
    root.classList.add("theme-switching");
    root.setAttribute("data-theme", next);
    window.setTimeout(() => root.classList.remove("theme-switching"), 350);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the theme still switches.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-toggle"
      onClick={toggleTheme}
    >
      <span className="theme-toggle__thumb" aria-hidden="true" />

      <svg
        className={`theme-toggle__icon ${!isDark ? "is-active" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      <svg
        className={`theme-toggle__icon ${isDark ? "is-active" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
      </svg>
    </button>
  );
}
