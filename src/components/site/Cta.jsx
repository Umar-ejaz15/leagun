"use client";

import { useMagnetic } from "./interactions";

/**
 * Magnetic call-to-action button. Renders an <a>-styled button using the
 * design's `.btn` classes. Pass the variant classes via `className`.
 */
export default function Cta({ children, className = "", onClick, ...rest }) {
  const ref = useMagnetic();
  return (
    <a ref={ref} className={`btn ${className}`} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
