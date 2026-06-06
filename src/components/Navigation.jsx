"use client";

import { useEffect, useState } from "react";
import { useSite } from "./site/SiteProvider";

const LeafLogo = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3v18" />
    <path d="M8 7l4-4 4 4" />
    <path d="M6 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
  </svg>
);

const LINKS = [
  { id: "icp", label: "Who We Help" },
  { id: "engine", label: "How It Works" },
  { id: "results", label: "Results" },
  { id: "about", label: "About" },
  { id: "calc", label: "Revenue Calculator" },
];

export default function Navigation() {
  const { scrollTo, scrollToTop, mobileOpen, setMobileOpen } = useSite();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a className="logo" onClick={scrollToTop}>
          <div className="logo-box">
            <LeafLogo />
          </div>
          <div className="logo-text">
            <span className="logo-name">Leagun Technologies</span>
            <span className="logo-tag">We aim. We fire. You get the jobs.</span>
          </div>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a onClick={() => scrollTo(l.id)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a className="btn btn-sm btn-ghost" onClick={() => scrollTo("calc")}>
            Revenue Calculator
          </a>
          <a className="btn btn-sm btn-primary" onClick={() => scrollTo("final")}>
            I&apos;m Ready To Scale
          </a>
        </div>

        <button
          className="ham"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mob-menu${mobileOpen ? " open" : ""}`}>
        <button
          className="mob-x"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {LINKS.map((l) => (
          <a key={l.id} onClick={() => scrollTo(l.id)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-md btn-primary" onClick={() => scrollTo("final")}>
          I&apos;m Ready To Scale
        </a>
      </div>
    </>
  );
}
