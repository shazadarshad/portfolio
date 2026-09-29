"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Copy, Heart, Moon, ShoppingBag, Star, Sun } from "lucide-react";

const round = (n: number) => Math.round(n * 100) / 100;

/** Halftone vortex — a nod to Durowave's dot-tunnel, drawn procedurally. */
function Halftone() {
  const dots: { x: number; y: number; r: number }[] = [];
  const rings = 16;
  for (let k = 1; k <= rings; k++) {
    const radius = 10 + k * 17;
    const count = Math.round((2 * Math.PI * radius) / 11);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + k * 0.22;
      const swirl = (1 + Math.sin(a * 2 + k * 0.55)) / 2;
      const r = 0.4 + 3.6 * swirl * (k / rings);
      if (r < 0.7) continue;
      dots.push({ x: round(300 + Math.cos(a) * radius), y: round(300 + Math.sin(a) * radius * 0.62), r: round(r) });
    }
  }
  return (
    <svg viewBox="0 60 600 480" className="h-full w-full" aria-hidden="true">
      <g fill="#1d1d1f">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>
    </svg>
  );
}

export function TalentHubArt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-x-[-10%] bottom-[-18%] top-[0%] opacity-90"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      >
        <Halftone />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,#f5f5f7_0%,rgba(245,245,247,0.85)_18%,transparent_42%)]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[38%] w-[250px] -translate-x-1/2 rounded-[20px] border border-white/70 bg-white/75 p-4 text-left shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-ink text-[13px] font-semibold text-white">AK</span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-ink">Candidate profile</p>
            <p className="text-[12px] text-ink-2">Python · Flask · SQL</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-canvas px-2.5 py-1 text-[11px] text-ink-2">CV uploaded</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0066cc] px-2.5 py-1 text-[11px] font-medium text-white">
            <Star aria-hidden className="size-3 fill-current" /> Shortlisted
          </span>
        </div>
      </motion.div>
    </div>
  );
}

const products = [
  { name: "Aurora Buds", price: "$129", g: "from-[#5b6cff] via-[#7d4dff] to-[#2a1f7a]", rot: -10, x: "-62%" },
  { name: "Pulse Watch", price: "$199", g: "from-[#ff5d5d] via-[#d42b4a] to-[#5a0f22]", rot: 0, x: "-50%" },
  { name: "Echo Mini", price: "$89", g: "from-[#2fe0a3] via-[#11a37b] to-[#07473a]", rot: 10, x: "-38%" },
];

export function ShoplyArt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-1/2 top-[40%] h-[300px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(125,77,255,0.35),transparent_65%)] blur-2xl" />
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          className="absolute left-1/2 top-[22%] w-[170px] rounded-[22px] border border-white/10 bg-[#1c1c1e] p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
          style={{ zIndex: i === 1 ? 3 : 1, x: p.x }}
          initial={reduce ? { rotate: p.rot } : { opacity: 0, y: 60, rotate: 0 }}
          whileInView={{ opacity: 1, y: i === 1 ? -14 : 12, rotate: p.rot }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`relative grid aspect-square place-items-center overflow-hidden rounded-[16px] bg-gradient-to-br ${p.g}`}>
            <div className="size-[55%] rounded-full bg-white/20 shadow-[inset_0_2px_12px_rgba(255,255,255,0.45)] backdrop-blur" />
            <Heart aria-hidden className="absolute right-2.5 top-2.5 size-4 text-white/85" strokeWidth={2} />
          </div>
          <p className="mt-3 text-[13px] font-medium text-white">{p.name}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[13px] text-white/60">{p.price}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ink">
              <ShoppingBag aria-hidden className="size-3" /> Add
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const clicks = [18, 32, 26, 44, 38, 58, 50, 72, 64, 88, 80, 100];

export function SniplinkArt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/20 bg-white/10 p-5 text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between rounded-full bg-white px-4 py-2.5">
          <span className="font-mono text-[14px] font-medium text-ink">snip.link/h3xQ</span>
          <Copy aria-hidden className="size-4 text-ink-2" />
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[12px] text-white/70">Total clicks</p>
            <p className="text-[30px] font-semibold tracking-tight text-white">1,284</p>
          </div>
          <span className="mb-2 rounded-full bg-white/15 px-2 py-0.5 text-[11px] text-white">+18% this week</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {clicks.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-t-[4px] bg-white/80"
              initial={reduce ? false : { height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              style={reduce ? { height: `${h}%` } : undefined}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function PortfolioArt() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-1/2 top-[26%] size-[300px] -translate-x-1/2 overflow-hidden rounded-full shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
        initial={reduce ? false : { rotate: -30, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-white to-[#e8e8ed]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-[#2c2c2e] to-black" />
        <Sun aria-hidden className="absolute left-[18%] top-[40%] size-12 text-[#ff9f0a]" strokeWidth={1.6} />
        <Moon aria-hidden className="absolute right-[18%] top-[40%] size-11 text-[#a1a1ff]" strokeWidth={1.6} />
      </motion.div>
      <div className="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-[13px] text-ink-2 shadow-sm backdrop-blur">
        <span className="size-2 rounded-full bg-[#28c840]" /> shazadarshad.com
      </div>
    </div>
  );
}
