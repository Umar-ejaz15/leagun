"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

const SiteContext = createContext(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}

export default function SiteProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null); // 'succ' | 'video' | 'terms' | 'privacy' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafScroll = useRef(0);

  /* ---------- Lock body scroll while a modal / mobile menu is open ---------- */
  useEffect(() => {
    const locked = activeModal !== null || mobileOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal, mobileOpen]);

  /* ---------- Close modal / menu on Escape ---------- */
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setActiveModal(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------- Navigation ----------
     Manual wheel/touch scrolling stays NATIVE (compositor thread) so it
     responds instantly. "Jump to section" clicks animate at a CONSTANT speed
     (linear easing) — no slow-in/slow-out. A user wheel/touch cancels it. */
  useEffect(() => {
    const cancel = () => cancelAnimationFrame(rafScroll.current);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    return () => {
      cancelAnimationFrame(rafScroll.current);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  const animateScroll = useCallback((targetY) => {
    cancelAnimationFrame(rafScroll.current);
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const endY = Math.max(0, Math.min(targetY, maxY));
    const startY = window.pageYOffset;
    const diff = endY - startY;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || Math.abs(diff) < 2) {
      window.scrollTo(0, endY);
      return;
    }
    // Constant velocity: ~2.6px per ms, clamped so very short/long jumps stay sane.
    const duration = Math.min(1500, Math.max(320, Math.abs(diff) / 2.6));
    let start = null;
    const stepFn = (ts) => {
      if (start === null) start = ts;
      const t = Math.min(1, (ts - start) / duration); // linear → consistent speed
      window.scrollTo(0, startY + diff * t);
      if (t < 1) rafScroll.current = requestAnimationFrame(stepFn);
    };
    rafScroll.current = requestAnimationFrame(stepFn);
  }, []);

  const scrollTo = useCallback(
    (id) => {
      const target = document.getElementById(id);
      if (!target) return;
      setMobileOpen(false);
      const y = target.getBoundingClientRect().top + window.pageYOffset - 64;
      animateScroll(y);
    },
    [animateScroll]
  );

  const scrollToTop = useCallback(() => animateScroll(0), [animateScroll]);

  const openModal = useCallback((id) => setActiveModal(id), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const value = {
    scrollTo,
    scrollToTop,
    activeModal,
    openModal,
    closeModal,
    mobileOpen,
    setMobileOpen,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
