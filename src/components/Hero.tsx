"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/content/site";
import { ArrowLink } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Headline + intro are visible from the first paint (only slide), so they
  // count as painted immediately for Largest Contentful Paint.
  const rise = (delay: number, fade = true) =>
    reduce
      ? {}
      : {
          initial: fade ? { opacity: 0, y: 24 } : { y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white px-6 pb-16 pt-28 text-center"
    >
      <motion.div style={{ y: textY, opacity: fade }} className="relative">
        <motion.p {...rise(0.05)} className="text-[17px] text-ink-2 md:text-[19px]">
          {profile.greeting}
        </motion.p>

        <motion.h1 {...rise(0.1, false)} className="display mt-2 text-[52px] sm:text-[72px] md:text-[88px]">
          <span className="text-gradient-light block pb-1">{profile.name}.</span>
          <span className="mt-1 block text-[30px] tracking-[-0.02em] text-ink-3 sm:text-[40px] md:text-[48px]">
            {profile.headline}.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.18, false)}
          className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] text-ink-2 md:text-[19px]"
        >
          {profile.intro.before}
          <a href="#work" className="font-semibold text-ink underline-offset-4 hover:underline">
            {profile.intro.highlight}
          </a>
          {profile.intro.after}
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-7 py-3.5 text-[17px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_16px_30px_-12px_rgba(0,0,0,0.5)]"
          >
            Get In Touch
            <ChevronRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <ArrowLink href="#work" external={false} size="md">
            View My Work
          </ArrowLink>
        </motion.div>

        {profile.openToWork && (
          <motion.p
            {...rise(0.42)}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-canvas/70 px-3.5 py-1.5 text-[13px] text-ink-2"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative size-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities<span className="hidden sm:inline"> · {profile.location}</span>
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
