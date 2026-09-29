"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, FileClock, HandHeart, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/content/site";
import { ArrowLink, Reveal } from "./ui";

const project = projects.find((p) => p.slug === "openhand")!;

const causes = [
  { title: "Clean water for Mannar", raised: 72, amount: "LKR 540,000", tint: "from-[#7cc4ff] to-[#2f7bd9]" },
  { title: "School books for 120 kids", raised: 48, amount: "LKR 186,500", tint: "from-[#ffd08a] to-[#ff8a3d]" },
];

const audit = [
  { Icon: BadgeCheck, t: "Cause verified by admin", s: "2m ago" },
  { Icon: LockKeyhole, t: "Payout details encrypted", s: "2m ago" },
  { Icon: HandHeart, t: "Donation received", s: "5m ago" },
  { Icon: FileClock, t: "Cause submitted for review", s: "1h ago" },
];

const highlights = [
  { Icon: BadgeCheck, t: "Manually verified", d: "Every cause and payout is checked before it goes public." },
  { Icon: LockKeyhole, t: "Encrypted payouts", d: "Payout details are encrypted, protected by row-level security." },
  { Icon: ShieldCheck, t: "Full audit trail", d: "Admins verify from a dedicated console, and every action is logged." },
];

export function FeaturedOpenhand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.9, 1]);

  return (
    <section className="overflow-hidden bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow text-ink-2">Featured Work</p>
          <h2 className="display mt-4 text-[56px] text-ink md:text-[80px]">{project.name}</h2>
          <p className="mt-3 text-[21px] tracking-[-0.01em] text-ink md:text-[28px]">{project.tagline}</p>
          <div className="mt-6 flex justify-center gap-7">
            {project.live && (
              <ArrowLink href={project.live} size="lg">
                Visit site
              </ArrowLink>
            )}
            {project.code && (
              <ArrowLink href={project.code} size="lg">
                View code
              </ArrowLink>
            )}
          </div>
        </Reveal>

        {/* Laptop */}
        <div ref={ref} className="mx-auto mt-16 max-w-[900px] [perspective:1600px] md:mt-20">
          <motion.div style={{ rotateX, scale, transformOrigin: "bottom center" }}>
            <div className="mx-auto w-[88%] rounded-t-[18px] border-[6px] border-b-0 border-[#1a1a1c] bg-[#1a1a1c] p-0 shadow-[0_0_0_1px_#3a3a3e] md:rounded-t-[26px] md:border-[12px] md:border-b-0">
              <div
                role="img"
                aria-label="Openhand interface: verified causes with donation progress and an audit trail."
                className="relative aspect-[16/10] overflow-hidden rounded-t-[8px] bg-[#fbfbfd] text-left md:rounded-t-[12px]"
              >
                {/* app bar */}
                <div className="flex items-center justify-between border-b border-black/[0.06] px-[4%] py-[2.2%]">
                  <span className="flex items-center gap-1.5 text-[clamp(8px,1.5vw,14px)] font-semibold text-ink">
                    <HandHeart aria-hidden className="size-[1.2em] text-[#ff6b3d]" /> openhand
                  </span>
                  <span className="rounded-full bg-ink px-[1.2em] py-[0.4em] text-[clamp(6px,1.1vw,11px)] font-medium text-white">
                    Start a cause
                  </span>
                </div>
                <div className="grid h-full grid-cols-[1.6fr_1fr] gap-[3%] p-[4%]">
                  <div className="flex flex-col">
                    <p className="text-[clamp(8px,1.6vw,16px)] font-semibold tracking-tight text-ink">Verified causes</p>
                    <div className="mt-[4%] grid grid-cols-2 gap-[5%]">
                      {causes.map((c) => (
                        <div key={c.title} className="overflow-hidden rounded-[clamp(6px,1.2vw,14px)] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                          <div className={`relative aspect-[16/10] bg-gradient-to-br ${c.tint}`}>
                            <span className="absolute left-[6%] top-[8%] inline-flex items-center gap-[0.3em] rounded-full bg-white/90 px-[0.6em] py-[0.2em] text-[clamp(5px,0.9vw,10px)] font-semibold text-emerald-600">
                              <BadgeCheck aria-hidden className="size-[1.1em]" /> Verified
                            </span>
                          </div>
                          <div className="p-[7%]">
                            <p className="truncate text-[clamp(6px,1.1vw,12px)] font-semibold text-ink">{c.title}</p>
                            <div className="mt-[6%] h-[clamp(2px,0.45vw,5px)] rounded-full bg-black/[0.07]">
                              <motion.div
                                className="h-full rounded-full bg-emerald-500"
                                initial={reduce ? false : { width: 0 }}
                                whileInView={{ width: `${c.raised}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                style={reduce ? { width: `${c.raised}%` } : undefined}
                              />
                            </div>
                            <p className="mt-[5%] text-[clamp(5px,0.95vw,10px)] text-ink-2">
                              <span className="font-semibold text-ink">{c.amount}</span> raised
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[4%] hidden grid-cols-3 sm:grid gap-[3%] rounded-[clamp(6px,1.2vw,14px)] bg-ink p-[3.5%] text-white">
                      {[
                        ["Pending review", "3"],
                        ["Verified causes", "24"],
                        ["Donors", "1,204"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <p className="text-[clamp(5px,0.85vw,10px)] text-white/55">{k}</p>
                          <p className="text-[clamp(8px,1.7vw,19px)] font-semibold tracking-tight">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[clamp(6px,1.2vw,14px)] bg-white p-[7%] shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                    <p className="text-[clamp(6px,1.2vw,13px)] font-semibold text-ink">Audit trail</p>
                    <ul className="mt-[6%] space-y-[8%]">
                      {audit.map(({ Icon, t, s }) => (
                        <li key={t} className="flex items-start gap-[6%]">
                          <span className="grid size-[clamp(12px,2.2vw,24px)] shrink-0 place-items-center rounded-full bg-canvas text-ink">
                            <Icon aria-hidden className="size-[60%]" strokeWidth={2} />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[clamp(5px,0.95vw,11px)] font-medium text-ink">{t}</span>
                            <span className="block text-[clamp(5px,0.85vw,9px)] text-ink-2">{s}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* base */}
            <div className="relative mx-auto h-[10px] w-full rounded-b-[14px] bg-gradient-to-b from-[#d9d9de] via-[#b9b9c0] to-[#8e8e96] md:h-[18px] md:rounded-b-[22px]">
              <div className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-[8px] bg-[#a3a3aa]" />
            </div>
            <div className="mx-auto h-6 w-[90%] rounded-[50%] bg-black/10 blur-xl" />
          </motion.div>
        </div>

        <Reveal className="mx-auto mt-14 max-w-[720px]">
          <p className="text-[17px] leading-[1.65] text-ink-2 md:text-[19px]">{project.description}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[980px] gap-4 text-left md:grid-cols-3">
          {highlights.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08} className="h-full rounded-[var(--radius-card)] bg-canvas p-6">
              <Icon aria-hidden className="size-6 text-ink" strokeWidth={1.6} />
              <h3 className="mt-4 text-[17px] font-semibold text-ink">{t}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-ink-2">{d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-black/10 px-3 py-1 text-[12px] text-ink-2">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
