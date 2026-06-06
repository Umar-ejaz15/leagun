"use client";

import { Fragment } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSite } from "./site/SiteProvider";
import Cta from "./site/Cta";

// 3D scene is client-only (uses WebGL / window) — never server-render it.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

const HEAD = [
  { t: "We" },
  { t: "get" },
  { t: "tree" },
  { t: "&" },
  { t: "landscaping" },
  { t: "companies" },
  { t: "more", em: true },
  { t: "booked", em: true },
  { t: "jobs.", em: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};
const wordVar = {
  hidden: { opacity: 0, y: "110%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { scrollTo } = useSite();

  return (
    <section id="hero" className="s-darker">
      <div id="hero-canvas" aria-hidden="true">
        <HeroScene />
      </div>
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />

      <div className="wrap">
        {/* Centered headline */}
        <motion.div
          className="hero-head"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.span className="hero-badge" variants={fade} custom={0}>
            <span className="dot" />
            For tree services, landscapers &amp; arborists
          </motion.span>

          <h1>
            <motion.span variants={container} style={{ display: "inline" }}>
              {HEAD.map((w, i) => (
                <Fragment key={i}>
                  <span
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                      verticalAlign: "top",
                    }}
                  >
                    <motion.span
                      className="word"
                      variants={wordVar}
                      style={{ display: "inline-block" }}
                    >
                      {w.em ? <em>{w.t}</em> : w.t}
                    </motion.span>
                  </span>
                  {i < HEAD.length - 1 ? " " : null}
                </Fragment>
              ))}
            </motion.span>
          </h1>
        </motion.div>

        {/* Two columns: pitch (left) · method cards (right) */}
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.p className="hero-sub" variants={fade} custom={0.5}>
              You&apos;re the best in your market at the work. Staying booked
              shouldn&apos;t come down to referrals and luck. We build the system
              that brings you a steady flow of real jobs — and we run it for you.
            </motion.p>

            <motion.div className="hero-actions" variants={fade} custom={0.65}>
              <Cta className="btn-lg btn-primary" onClick={() => scrollTo("final")}>
                I&apos;m Ready To Scale →
              </Cta>
              <Cta className="btn-lg btn-ghost" onClick={() => scrollTo("calc")}>
                Revenue Calculator
              </Cta>
            </motion.div>

            <motion.div className="hero-proof" variants={fade} custom={0.8}>
              <div className="proof-faces">
                <div className="pf">TS</div>
                <div className="pf">LC</div>
                <div className="pf">AR</div>
                <div className="pf">+</div>
              </div>
              <div className="proof-txt">
                <span className="proof-stars">★★★★★</span>
                <br />
                <strong>One industry. Done right.</strong> Tree &amp; landscaping
                only.
              </div>
            </motion.div>
          </motion.div>

          {/* Hero credibility: our 3-step method */}
          <motion.div
            className="hero-cards"
            aria-hidden="true"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-card c1">
              <div className="hc-step">01</div>
              <div className="hc-ttl">We find your buyers</div>
              <div className="hc-txt">
                People in your area looking for tree and yard work right now.
              </div>
            </div>
            <div className="h-card c2">
              <div className="hc-step">02</div>
              <div className="hc-ttl">We book the jobs</div>
              <div className="hc-txt">
                Ads, follow-up, and scheduling — handled end to end.
              </div>
            </div>
            <div className="h-card c3">
              <div className="hc-step">03</div>
              <div className="hc-ttl">You cash the check</div>
              <div className="hc-txt">
                You show up, quote, and close. We run the engine behind it.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="mouse" />
        Scroll
      </div>
    </section>
  );
}
