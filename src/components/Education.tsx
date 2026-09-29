import { education } from "@/content/site";
import { Reveal } from "./ui";

/** Deterministic constellation of points + lines for the dark backdrop. */
function Network() {
  const pts: [number, number][] = [];
  for (let i = 0; i < 46; i++) {
    const x = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const y = (Math.sin(i * 78.233) * 12345.678) % 1;
    pts.push([Math.round(Math.abs(x) * 1000), Math.round(Math.abs(y) * 600)]);
  }
  const lines: [number, number][] = [];
  pts.forEach((a, i) =>
    pts.forEach((b, j) => {
      if (j <= i) return;
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      if (d < 150) lines.push([i, j]);
    }),
  );
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-[0.22]"
      aria-hidden="true"
    >
      <g stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.5">
        {lines.map(([i, j]) => (
          <line key={`${i}-${j}`} x1={pts[i][0]} y1={pts[i][1]} x2={pts[j][0]} y2={pts[j][1]} />
        ))}
      </g>
      <g fill="#ffffff">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 2.4 : 1.4} />
        ))}
      </g>
    </svg>
  );
}

const ARC = "M 70 60 C 170 -10, 330 -10, 430 60";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-night px-6 py-24 text-white md:py-36">
      <Network />
      {/* keep the constellation on the edges so it never crosses the copy */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_55%,#000_35%,rgba(0,0,0,0.6)_65%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="text-center">
          <p className="eyebrow text-white/55">
            — <span className="text-link-dark">04</span> · Education —
          </p>
          <h2 className="display text-gradient-dark mt-4 text-[44px] md:text-[64px]">My Journey</h2>
          <p className="mt-3 text-[21px] font-light italic text-white/60 md:text-[24px]">From Classroom to Code</p>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting arcs (desktop) */}
          <svg
            className="pointer-events-none absolute left-[16.66%] top-0 hidden h-[80px] w-[66.66%] md:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
              <path id="edu-arc-1" d={ARC} />
              <path id="edu-arc-2" d={ARC} transform="translate(500 0)" />
            </g>
          </svg>
          <svg
            className="pointer-events-none absolute left-[16.66%] top-0 hidden h-[80px] w-[66.66%] md:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle r="4" fill="#2997ff">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 70 60 C 170 -10, 330 -10, 430 60 M 570 60 C 670 -10, 830 -10, 930 60" />
            </circle>
          </svg>

          <ol className="relative grid gap-16 md:grid-cols-3 md:gap-8">
          {education.map((e, i) => (
            <li key={e.title} className="relative text-center">
              <Reveal delay={i * 0.12}>
                <div className="relative mx-auto grid size-20 place-items-center rounded-full border border-white/10 bg-[linear-gradient(145deg,#1c1c1e,#050505)] shadow-[0_0_60px_rgba(255,255,255,0.08)]">
                  <span className="text-gradient-dark text-[30px] font-semibold tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-7 inline-block rounded-full border border-white/12 px-3 py-1 text-[12px] text-white/60">
                  {e.period}
                </p>
                <h3 className="mt-4 text-[22px] font-semibold tracking-tight text-white md:text-[24px]">{e.title}</h3>
                <p className="mt-1 text-[15px] text-link-dark">{e.place}</p>
                <p className="mx-auto mt-4 max-w-[320px] text-[15px] leading-[1.65] text-white/60">{e.description}</p>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
