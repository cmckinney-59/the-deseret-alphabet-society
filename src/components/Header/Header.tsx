import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import "./Header.css";
import { useDarkMode } from "../../contexts/DarkModeContext";

const TABS = [
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/events", label: "Events" },
  { to: "/transliterator", label: "Transliterator" },
] as const;

export default function Header(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="App-header">
      <div className="header-brand">
        <h1 className="App-Header-Text">
          <span className="header-title-full">The Deseret Alphabet Society</span>
          <span className="header-title-short">Deseret Alphabet Society</span>
        </h1>
      </div>
      <nav className="header-tabs" aria-label="Primary">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `header-tab${isActive ? " header-tab--active" : ""}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
      <button
        type="button"
        className="dark-mode-toggle"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <AiFillSun className="icon" />
        ) : (
          <AiFillMoon className="icon" />
        )}
      </button>
    </header>
  );
}
