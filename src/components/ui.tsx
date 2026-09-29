"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode, SVGProps } from "react";

/** Fade-and-rise on first view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Apple-style text link with a chevron: "Learn more ›" */
export function ArrowLink({
  href,
  children,
  tone = "light",
  size = "md",
  external = true,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}) {
  const color = tone === "light" ? "text-link" : "text-link-dark";
  const sizes = { sm: "text-[15px]", md: "text-[17px]", lg: "text-[19px] md:text-[21px]" };
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group -my-2 inline-flex items-center gap-0.5 py-2 ${color} ${sizes[size]} font-normal hover:underline underline-offset-4 decoration-1`}
    >
      {children}
      <ChevronRight
        aria-hidden
        className="size-[1em] translate-y-[1px] transition-transform duration-300 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </a>
  );
}

/** Section heading block used across light and dark sections. */
export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  tone = "light",
  align = "center",
}: {
  index?: string;
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <p className={`eyebrow ${dark ? "text-white/55" : "text-ink-2"}`}>
        {index && <span className={dark ? "text-link-dark" : "text-link"}>{index}</span>}
        {index && <span className="mx-2 opacity-50">—</span>}
        {label}
      </p>
      <h2
        className={`display mt-3 text-[40px] sm:text-[48px] md:text-[56px] ${dark ? "text-gradient-dark" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[19px] md:text-[21px] leading-snug ${dark ? "text-white/65" : "text-ink-2"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
