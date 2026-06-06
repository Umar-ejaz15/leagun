"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper — replaces the design's `.r` / `.d1..d4` classes.
 * Fades + lifts content into view once, mirroring the original GSAP/IO reveal.
 *
 * Props:
 *   as     - element/component to render (default "div")
 *   delay  - seconds to stagger (matches d1=.08, d2=.18, d3=.28, d4=.38)
 *   y      - initial offset (default 34px, like the original transform)
 *
 * Forwards refs so callers can attach pointer interactions (e.g. tilt).
 */
const Reveal = forwardRef(function Reveal(
  { as = "div", delay = 0, y = 34, className, children, ...rest },
  ref
) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Reveal;
