"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/** The three pieces of the "S" monogram (viewBox 0 0 200 200). */
const PIECES = [
  { d: "M132.9 43 A38 38 0 0 0 62 62", from: { x: -46, y: -58, rotate: -38 } },
  { d: "M62 62 A38 38 0 0 0 100 100 A38 38 0 0 1 138 138", from: { x: 64, y: -8, rotate: 28 } },
  { d: "M138 138 A38 38 0 0 1 67.1 157", from: { x: -30, y: 62, rotate: -24 } },
];

type Props = {
  className?: string;
  /** Fly-in assembly animation (hero). */
  animated?: boolean;
  /** "chrome" = white/silver 3D look, "flat" = solid ink for small UI marks. */
  variant?: "chrome" | "flat" | "flat-light";
};

export function SMark({ className, animated = false, variant = "chrome" }: Props) {
  const uid = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const animate = animated && !reduce;

  if (variant !== "chrome") {
    const color = variant === "flat" ? "#1d1d1f" : "#ffffff";
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
        <g fill="none" stroke={color} strokeWidth={30} strokeLinecap="round">
          {PIECES.map((p) => (
            <path key={p.d} d={p.d} />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="-10 -10 220 230" className={className} aria-hidden="true" overflow="visible">
      <defs>
        <linearGradient id={`chrome-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#f2f2f5" />
          <stop offset="0.75" stopColor="#d6d6dc" />
          <stop offset="1" stopColor="#f7f7f9" />
        </linearGradient>
        <linearGradient id={`edge-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4e4ea" />
          <stop offset="1" stopColor="#b9b9c2" />
        </linearGradient>
        <filter id={`shadow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <radialGradient id={`ground-${uid}`}>
          <stop offset="0" stopColor="#000" stopOpacity="0.16" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft floor shadow */}
      <motion.ellipse
        cx="100"
        cy="206"
        rx="70"
        ry="9"
        fill={`url(#ground-${uid})`}
        initial={animate ? { opacity: 0, scale: 0.4 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />

      {PIECES.map((p, i) => (
        <motion.g
          key={p.d}
          initial={animate ? { ...p.from, opacity: 0, scale: 0.9 } : false}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 16,
            mass: 1.1,
            delay: 0.15 + i * 0.14,
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          {/* cast shadow */}
          <path
            d={p.d}
            transform="translate(6 12)"
            fill="none"
            stroke="#1d1d1f"
            strokeOpacity="0.14"
            strokeWidth={30}
            strokeLinecap="round"
            filter={`url(#shadow-${uid})`}
          />
          {/* bevel edge */}
          <path d={p.d} fill="none" stroke={`url(#edge-${uid})`} strokeWidth={33} strokeLinecap="round" />
          {/* body */}
          <path d={p.d} fill="none" stroke={`url(#chrome-${uid})`} strokeWidth={28} strokeLinecap="round" />
          {/* specular highlight */}
          <path
            d={p.d}
            transform="translate(-3 -4)"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.95"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </svg>
  );
}
