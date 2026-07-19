import { useState } from "react";
import { Link } from "wouter";

const navItems = ["Work", "Skills", "Experience", "Contact"];

/**
 * SiteHeader — shared nav for the home page and every project detail page.
 *
 * Nav items are plain `#anchor` links (not wouter <Link>s) on purpose: our
 * custom hash-location hook (see hooks/useAppHashLocation.ts) treats any
 * hash that isn't a route path (i.e. doesn't start with "/") as "go home",
 * and Home.tsx scrolls to the matching section after it mounts. That means
 * these links work correctly from any page without needing route-aware
 * logic here.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-6 px-4 lg:px-8 backdrop-blur-sm border-b"
      style={{ background: "#121111", borderStyle: "none" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover-fade text-sm tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#94908a" }}
        >
          PORTFOLIO 2026
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link hover-fade text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#eeeeee" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
        >
          <span
            className="block h-px w-full transition-transform duration-500"
            style={{
              background: "#eeeeee",
              transformOrigin: "center",
              transform: menuOpen ? "translateY(7.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-full transition-opacity duration-300"
            style={{ background: "#eeeeee", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-full transition-transform duration-500"
            style={{
              background: "#eeeeee",
              transformOrigin: "center",
              transform: menuOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: menuOpen ? "240px" : "0px", opacity: menuOpen ? 1 : 0 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-5 pt-6 pb-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover-fade text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#eeeeee" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
