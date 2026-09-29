import type { ReactNode } from "react";
import { projects, projectsFootnote, type Project } from "@/content/site";
import { PortfolioArt, ShoplyArt, SniplinkArt, TalentHubArt } from "./TileArt";
import { ArrowLink, Reveal } from "./ui";

type Tone = "light" | "dark";

const tiles: { slug: string; tone: Tone; bg: string; art: ReactNode }[] = [
  { slug: "talenthub", tone: "light", bg: "bg-canvas", art: <TalentHubArt /> },
  { slug: "shoply", tone: "dark", bg: "bg-[linear-gradient(160deg,#18181b,#000)]", art: <ShoplyArt /> },
  {
    slug: "sniplink",
    tone: "dark",
    bg: "bg-[radial-gradient(120%_90%_at_20%_100%,#ff7a59_0%,transparent_55%),radial-gradient(90%_80%_at_90%_80%,#b44cff_0%,transparent_60%),linear-gradient(180deg,#1b1f5e_0%,#3b3fb5_55%,#6a54d8_100%)]",
    art: <SniplinkArt />,
  },
  { slug: "portfolio", tone: "light", bg: "bg-[linear-gradient(180deg,#fbfbfd,#ececf0)]", art: <PortfolioArt /> },
];

function Tile({ project, tone, bg, art, delay }: { project: Project; tone: Tone; bg: string; art: ReactNode; delay: number }) {
  const dark = tone === "dark";
  return (
    <Reveal delay={delay} y={40} className="h-full">
      <article
        className={`relative flex h-full min-h-[640px] flex-col overflow-hidden rounded-[var(--radius-tile)] md:min-h-[720px] ${bg}`}
      >
        <div className="relative z-10 px-8 pt-12 text-center md:pt-14">
          {project.featured && (
            <p className={`eyebrow mb-3 ${dark ? "text-[#ffb36b]" : "text-[#d45d00]"}`}>Featured</p>
          )}
          <h3 className={`display text-[36px] md:text-[44px] ${dark ? "text-[#f5f5f7]" : "text-ink"}`}>{project.name}</h3>
          <p className={`mt-1.5 text-[19px] font-light md:text-[21px] ${dark ? "text-[#f5f5f7]" : "text-ink"}`}>
            {project.tags.join(". ")}.
          </p>
          <div className="mt-3 flex justify-center gap-6">
            {project.code && (
              <ArrowLink href={project.code} tone={dark ? "dark" : "light"}>
                Code
              </ArrowLink>
            )}
            {project.live && (
              <ArrowLink href={project.live} tone={dark ? "dark" : "light"}>
                Live
              </ArrowLink>
            )}
          </div>
          <p
            className={`mx-auto mt-5 max-w-[440px] text-[14px] leading-[1.6] ${dark ? "text-white/70" : "text-ink-2"}`}
          >
            <span className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>{project.tagline}. </span>
            {project.description}
          </p>
        </div>
        <div className="relative min-h-[380px] flex-1">{art}</div>
      </article>
    </Reveal>
  );
}

export function ProjectTiles() {
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
  return (
    <section aria-labelledby="more-work" className="bg-white px-3 pb-3">
      <h2 id="more-work" className="sr-only">
        More projects
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {tiles.map((t, i) => (
          <Tile key={t.slug} project={bySlug[t.slug]} tone={t.tone} bg={t.bg} art={t.art} delay={(i % 2) * 0.08} />
        ))}
      </div>
      <p className="py-14 text-center text-[17px] text-ink-2">{projectsFootnote}</p>
    </section>
  );
}
