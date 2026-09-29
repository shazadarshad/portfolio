"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Bot, Code2, Layers, Lightbulb, MessageCircle, Repeat, Sparkles, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useState, type ComponentType, type KeyboardEvent, type SVGProps } from "react";
import { aiTools, skills, softSkills, stack } from "@/content/site";
import { SectionHeading } from "./ui";

type Card = {
  key: string;
  title: string;
  body?: string;
  icon?: string;
  Glyph?: ComponentType<SVGProps<SVGSVGElement>>;
};

const softGlyphs = [Lightbulb, MessageCircle, Users, Zap, Repeat];

const tabs: { id: string; label: string; Icon: typeof Code2; cards: Card[] }[] = [
  {
    id: "technical",
    label: "Technical",
    Icon: Code2,
    cards: skills.map((s) => ({ key: s.name, title: s.name, body: s.description, icon: s.icon })),
  },
  {
    id: "stack",
    label: "Stack",
    Icon: Layers,
    cards: stack.map((t) => ({
      key: t.name,
      title: t.name,
      body: `Used in ${t.usedIn.join(", ")}`,
      icon: t.icon,
    })),
  },
  {
    id: "ai",
    label: "AI Tools",
    Icon: Bot,
    cards: aiTools.map((s) => ({ key: s.name, title: s.name, body: s.description, icon: s.icon })),
  },
  {
    id: "soft",
    label: "Soft Skills",
    Icon: Sparkles,
    cards: softSkills.map((s, i) => ({ key: s, title: s, Glyph: softGlyphs[i % softGlyphs.length] })),
  },
];

export function Skills() {
  const [tab, setTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === tab)!;

  // Arrow / Home / End keys move between tabs (WAI-ARIA tabs pattern).
  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const i = tabs.findIndex((t) => t.id === tab);
    const next =
      e.key === "ArrowRight" ? (i + 1) % tabs.length
      : e.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length
      : e.key === "Home" ? 0
      : e.key === "End" ? tabs.length - 1
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setTab(tabs[next].id);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <section id="skills" className="relative isolate overflow-hidden bg-[#eceef5] px-6 py-24 md:py-32">
      {/* Gradient mesh backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[25%] h-[80%] w-[45%] rotate-[18deg] rounded-full bg-[linear-gradient(160deg,#ffb36b,#ff8a3d_45%,#ffd29a)] opacity-80 blur-[90px] [animation:drift_18s_ease-in-out_infinite]" />
        <div className="absolute -left-[5%] -top-[20%] h-[60%] w-[50%] rounded-full bg-[#a99ad8] opacity-70 blur-[100px] [animation:drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute -right-[10%] top-[10%] h-[85%] w-[45%] rounded-full bg-[#8e95cc] opacity-60 blur-[110px] [animation:drift_26s_ease-in-out_infinite]" />
        <div className="absolute left-[30%] top-[20%] h-[70%] w-[45%] rounded-full bg-white opacity-80 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-[1100px]">
        <SectionHeading index="02" label="Skills" title="My Toolkit" />

        <LayoutGroup>
          <div className="mt-10 flex justify-center">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="glass grid w-full grid-cols-4 gap-0.5 rounded-full p-1 sm:inline-flex sm:w-auto sm:gap-1"
            >
              {tabs.map(({ id, label, Icon }) => {
                const selected = id === tab;
                return (
                  <button
                    key={id}
                    role="tab"
                    id={`tab-${id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setTab(id)}
                    onKeyDown={onTabKey}
                    className={`relative flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-1 py-2.5 text-[12px] font-semibold transition-colors duration-300 min-[380px]:text-[13px] sm:px-5 sm:py-2 ${
                      selected ? "text-ink" : "text-ink/85 hover:text-ink"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="skills-tab"
                        className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Icon aria-hidden className="relative hidden size-3.5 sm:block" strokeWidth={2.2} />
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </LayoutGroup>

        <div className="relative mt-10 min-h-[250px]">
          <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} tabIndex={0}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={current.id}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.045 } },
                exit: { opacity: 0, transition: { duration: 0.15 } },
              }}
            >
              {current.cards.map((c) => (
                <motion.li
                  key={c.key}
                  variants={{
                    hidden: { opacity: 0, y: 14, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="glass group flex items-start gap-4 rounded-[var(--radius-card)] p-5 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/60"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/80 shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
                    {c.icon ? (
                      <Image src={c.icon} alt="" width={24} height={24} className="size-6" />
                    ) : c.Glyph ? (
                      <c.Glyph aria-hidden className="size-5 text-ink" strokeWidth={1.8} />
                    ) : null}
                  </span>
                  <div className="min-w-0 self-center">
                    <h3 className="text-[15px] font-semibold text-ink">{c.title}</h3>
                    {c.body && <p className="mt-1 text-[13px] leading-[1.5] text-ink-2">{c.body}</p>}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
