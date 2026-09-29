import { Reveal } from "./ui";

/** Text wordmarks of the organisations behind Shazad's certifications. */
const marks = [
  { name: "IBM", className: "font-black tracking-[0.22em] text-[21px] min-[360px]:text-[24px] sm:text-[30px]" },
  { name: "Meta", className: "font-semibold tracking-[-0.02em] text-[21px] min-[360px]:text-[24px] sm:text-[30px]" },
  { name: "coursera", className: "font-bold tracking-[-0.03em] text-[19px] min-[360px]:text-[22px] sm:text-[28px]" },
  { name: "BrightCHAMPS", className: "font-extrabold tracking-[-0.01em] text-[15px] min-[360px]:text-[18px] sm:text-[24px]" },
];

export function TrustStrip() {
  return (
    <section aria-label="Certified by" className="border-t border-black/[0.04] bg-white px-6 py-16 md:py-20">
      <Reveal>
        <p className="eyebrow text-center text-ink-2">Learning backed by</p>
        <ul className="mx-auto mt-9 grid max-w-[900px] grid-cols-2 place-items-center gap-x-4 gap-y-8 md:grid-cols-4">
          {marks.map((m) => (
            <li
              key={m.name}
              className={`select-none text-[#a1a1a6] transition-colors duration-500 hover:text-ink ${m.className}`}
            >
              {m.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
