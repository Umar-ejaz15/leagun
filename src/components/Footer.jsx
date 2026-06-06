"use client";

import { useSite } from "./site/SiteProvider";

const LeafLogo = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3v18" />
    <path d="M8 7l4-4 4 4" />
    <path d="M6 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
  </svg>
);

export default function Footer() {
  const { scrollTo, scrollToTop, openModal } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-brand">
            <a className="logo" onClick={scrollToTop}>
              <div className="logo-box">
                <LeafLogo />
              </div>
              <span className="logo-name">Leagun</span>
            </a>
            <p>
              The growth partner built only for tree service, landscaping, and
              arborist companies across the United States. We aim. We fire. You get
              the jobs.
            </p>
            <div className="ft-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61580256073424"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M14 9h3V5.5h-2.5c-2 0-3.5 1.5-3.5 3.5v2H8.5V14H11v6h3v-6h2.5L17 11h-3V9.5c0-.3.2-.5.5-.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/106195542/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8.5h-3V20h3V8.5zM5 4a1.75 1.75 0 100 3.5A1.75 1.75 0 005 4zM20.5 20v-6.4c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.5h-3V20h3v-6.2c0-.3 0-.6.1-.8.3-.6.8-1.3 1.8-1.3 1.3 0 1.8 1 1.8 2.4V20h3.4z" />
                </svg>
              </a>
              <a
                href="https://x.com/leagun_tech?s=21"
                target="_blank"
                rel="noopener"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M17.5 3h2.7l-5.9 6.7L21 21h-5.4l-4.3-5.6L6.4 21H3.7l6.3-7.2L3 3h5.5l3.9 5.1L17.5 3zm-1 16.2h1.5L8.1 4.7H6.5l9.9 14.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a onClick={() => scrollTo("icp")}>Who We Help</a>
              </li>
              <li>
                <a onClick={() => scrollTo("engine")}>How It Works</a>
              </li>
              <li>
                <a onClick={() => scrollTo("results")}>Results</a>
              </li>
              <li>
                <a onClick={() => scrollTo("about")}>About</a>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Get Started</h4>
            <ul>
              <li>
                <a onClick={() => scrollTo("final")}>I&apos;m Ready To Scale</a>
              </li>
              <li>
                <a onClick={() => scrollTo("calc")}>Revenue Calculator</a>
              </li>
              <li>
                <a onClick={() => openModal("video")}>Watch the Video</a>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+13074301754">(307) 430-1754</a>
              </li>
              <li>
                <a href="mailto:contact@leagun.com">contact@leagun.com</a>
              </li>
              <li>
                <a href="http://leagun.com" target="_blank" rel="noopener">
                  leagun.com
                </a>
              </li>
              <li>
                <a>30 N Gould St Ste R</a>
              </li>
              <li>
                <a>Sheridan, WY 82801</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bot">
          <div className="ft-copy">
            © {year} Leagun Technologies LLC. All rights reserved.
          </div>
          <div className="ft-links">
            <a onClick={() => openModal("privacy")}>Privacy Policy</a>
            <a onClick={() => openModal("terms")}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
