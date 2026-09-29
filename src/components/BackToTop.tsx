"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-black/[0.06] bg-[rgba(250,250,252,0.8)] text-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-[20px] backdrop-saturate-[1.8] transition-colors hover:bg-white"
        >
          <ArrowUp aria-hidden className="size-4" strokeWidth={2} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
