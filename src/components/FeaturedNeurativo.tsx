"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, MessageSquare, Mic, Search } from "lucide-react";
import { projects } from "@/content/site";
import { ArrowLink, Reveal } from "./ui";

const project = projects.find((p) => p.slug === "neurativo")!;

const notes = [
  { h: true, t: "1. What is a neural network?" },
  { t: "Layers of connected nodes that learn patterns from data." },
  { t: "Each connection has a weight adjusted during training." },
  { h: true, t: "2. Activation functions" },
  { t: "Add non-linearity — ReLU, sigmoid, tanh." },
];

const bars = Array.from({ length: 28 }, (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7)));

export function FeaturedNeurativo() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative overflow-hidden bg-night px-6 pb-24 pt-24 text-white md:pb-32 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[45%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(41,151,255,0.18),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow text-white/55">
            <span className="text-link-dark">03</span>
            <span className="mx-2 opacity-50">—</span>Featured Work
          </p>
          <h2 className="display mt-4 text-[56px] text-[#f5f5f7] md:text-[80px]">{project.name}</h2>
          <p className="mt-3 text-[21px] tracking-[-0.01em] text-[#f5f5f7]/85 md:text-[28px]">{project.tagline}</p>
          <div className="mt-6 flex justify-center gap-7">
            {project.live && (
              <ArrowLink href={project.live} tone="dark" size="lg">
                Visit site
              </ArrowLink>
            )}
            {project.code && (
              <ArrowLink href={project.code} tone="dark" size="lg">
                View code
              </ArrowLink>
            )}
          </div>
        </Reveal>

        {/* Product mockup */}
        <Reveal delay={0.1} y={60} className="mt-16 md:mt-20">
          <div
            role="img"
            aria-label="Neurativo interface: a live lecture recording, notes generated in real time, and a Q&A assistant."
            className="mx-auto grid max-w-[980px] gap-3 rounded-[32px] border border-white/10 bg-night-2 p-3 text-left shadow-[0_40px_120px_-40px_rgba(41,151,255,0.35)] md:grid-cols-[1fr_1.35fr_1fr]"
          >
            {/* Live recording */}
            <div className="flex flex-col gap-3">
              <div className="rounded-[22px] bg-night-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium text-white/70">
                    <span className="size-2 rounded-full bg-[#ff453a] [animation:pulse-dot_1.6s_ease-in-out_infinite]" />
                    Recording
                  </span>
                  <span className="font-mono text-[12px] text-white/50">42:18</span>
                </div>
                <div className="mt-5 flex h-14 items-center gap-[3px]">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="w-full origin-center rounded-full bg-gradient-to-t from-[#2997ff] to-[#9fd0ff]"
                      style={{
                        height: `${h * 100}%`,
                        animation: reduce ? undefined : `wave ${0.9 + (i % 5) * 0.18}s ease-in-out ${i * 0.05}s infinite`,
                      }}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[13px] text-white/50">Lecture 07</p>
                <p className="text-[15px] font-medium text-white/90">Intro to Neural Networks</p>
              </div>
              <div className="flex gap-3">
                {[Mic, FileText, Search].map((I, i) => (
                  <span key={i} className="grid h-14 flex-1 place-items-center rounded-[18px] bg-night-3 text-white/70">
                    <I aria-hidden className="size-5" strokeWidth={1.6} />
                  </span>
                ))}
              </div>
            </div>

            {/* Live notes */}
            <div className="rounded-[22px] bg-night-3 p-5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-white/90">Live notes</span>
                <span className="rounded-full bg-[#2997ff]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#6cb8ff]">
                  Generating
                </span>
              </div>
              <motion.ul
                className="mt-4 space-y-2.5"
                initial={reduce ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-20%" }}
                variants={{ show: { transition: { staggerChildren: 0.45, delayChildren: 0.4 } } }}
              >
                {notes.map((n) => (
                  <motion.li
                    key={n.t}
                    variants={{ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0 } }}
                    className={
                      n.h ? "pt-1 text-[14px] font-semibold text-white" : "flex gap-2 text-[13px] leading-snug text-white/65"
                    }
                  >
                    {!n.h && <span className="mt-[7px] size-1 shrink-0 rounded-full bg-white/40" />}
                    {n.t}
                  </motion.li>
                ))}
                <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="h-4">
                  <span className="inline-block h-4 w-[2px] bg-[#2997ff] [animation:caret_1s_steps(1)_infinite]" />
                </motion.li>
              </motion.ul>
            </div>

            {/* Q&A */}
            <div className="flex flex-col rounded-[22px] bg-night-3 p-5">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90">
                <MessageSquare aria-hidden className="size-4" strokeWidth={1.8} />
                Ask the lecture
              </span>
              <div className="mt-4 flex flex-1 flex-col justify-end gap-2.5">
                <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2997ff] px-3.5 py-2 text-[13px] text-white">
                  Why do we need activation functions?
                </p>
                <p className="max-w-[92%] rounded-2xl rounded-bl-md bg-white/[0.08] px-3.5 py-2 text-[13px] leading-snug text-white/80">
                  Without them the network is just a linear model — they let it learn complex patterns.
                  <span className="mt-1.5 block text-[11px] text-[#6cb8ff]">From the lecture · 12:04</span>
                </p>
              </div>
              <div className="mt-3 rounded-full bg-white/[0.06] px-4 py-2.5 text-[12px] text-white/35">Ask anything…</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-[680px]">
          <p className="text-[17px] leading-[1.65] text-white/65 md:text-[19px]">{project.description}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-white/12 px-3 py-1 text-[12px] text-white/70">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
