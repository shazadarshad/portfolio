"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, profile } from "@/content/site";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,box-shadow] duration-500 backdrop-blur-[20px] backdrop-saturate-[1.8] ${
          open ? "bg-snow" : "bg-[rgba(250,250,252,0.8)]"
        } ${scrolled && !open ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""}`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-12 max-w-[1100px] items-center justify-between px-5 md:px-6"
        >
          <a href="#top" className="-my-2 flex items-center py-2 text-ink" aria-label={`${profile.name} — home`}>
            <span className="text-[15px] font-semibold uppercase tracking-[0.32em]">{profile.firstName}</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`relative text-[13px] transition-colors duration-300 ${
                    active === n.id ? "text-ink" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {n.label}
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-black md:inline-block"
            >
              Get In Touch
            </a>
            <button
              type="button"
              className="relative -mr-2 grid size-10 place-items-center md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute h-[1.5px] w-[18px] bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-[18px] bg-ink transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-12 overflow-y-auto bg-snow md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <ul className="px-8 pt-6">
              {nav.map((n, i) => (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[28px] font-semibold tracking-tight text-ink"
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
