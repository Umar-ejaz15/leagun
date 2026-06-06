"use client";

import { useEffect, useRef } from "react";
import Reveal from "./site/Reveal";

const STEPS = [
  {
    n: "01",
    title: "The Prospect",
    body: "Someone nearby needs a tree down or a yard handled. We put your company in front of them first.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "The Lead",
    body: "They raise their hand. We capture and qualify them, so you never waste a drive on a tire-kicker.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3c3 4 3 7 0 10-3-3-3-6 0-10z" />
        <path d="M12 13v8M8 21h8" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "One System",
    body: 'Every lead lands in one place. No sticky notes. No lost numbers. No "I forgot to call them back."',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "We Chase, Not You",
    body: "Texts, calls, and reminders fire in minutes. The company that answers first wins the job — every time.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Booked Job",
    body: "A ready-to-pay customer shows up on your calendar. You quote it, close it, and do what you do best.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function AcquisitionEngine() {
  const pathRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const path = pathRef.current;
    const pulse = pulseRef.current;
    if (reduce || !path || !pulse || !path.getTotalLength) return;

    const len = path.getTotalLength();
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const t = ((ts - start) % 3000) / 3000;
      const pt = path.getPointAtLength(t * len);
      pulse.setAttribute("cx", pt.x);
      pulse.setAttribute("cy", pt.y);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="engine" className="s-dark">
      <div className="wrap">
        <div className="sec-head center">
          <Reveal as="span" className="eyebrow">
            The acquisition engine
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            From total stranger
            <br />
            to <em>paid invoice.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            Here&apos;s exactly what happens once we turn it on. No fluff. Every
            step below is built, automated, and run by our team — not yours.
          </Reveal>
        </div>

        <div className="flow">
          <svg
            className="flow-svg"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flowgrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2fae63" />
                <stop offset="1" stopColor="#d4a843" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              className="flow-path"
              d="M100,60 C250,10 350,110 500,60 C650,10 750,110 900,60"
            />
            <circle ref={pulseRef} className="flow-pulse" r="6" cx="100" cy="60" />
          </svg>

          <div className="flow-stage">
            {STEPS.map((s, i) => (
              <Reveal className="flow-node" key={s.n} delay={0.08 * (i + 1)}>
                <span className="flow-step">{s.n}</span>
                <div className="flow-ico">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
