import Image from "next/image";
import { Languages, MapPin } from "lucide-react";
import { contact, profile } from "@/content/site";
import { GitHubIcon, LinkedInIcon, Reveal, SectionHeading } from "./ui";

export function About() {
  return (
    <section id="about" className="bg-canvas px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-[1.25fr_1fr] md:gap-20">
        <div>
          <SectionHeading
            index="01"
            label="About Me"
            align="left"
            title={
              <>
                Turning ideas into
                <br className="hidden sm:block" /> real, working projects.
              </>
            }
          />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-[17px] leading-[1.7] text-ink-2 md:text-[19px]">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08] text-[17px]">
              <div className="flex items-center gap-4 py-4">
                <MapPin aria-hidden className="size-5 text-ink-3" strokeWidth={1.6} />
                <dt className="w-28 text-ink-2">Location</dt>
                <dd className="font-medium text-ink">{profile.location}</dd>
              </div>
              <div className="flex items-center gap-4 py-4">
                <Languages aria-hidden className="size-5 text-ink-3" strokeWidth={1.6} />
                <dt className="w-28 text-ink-2">Languages</dt>
                <dd className="font-medium text-ink">{profile.languages.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <figure className="relative mx-auto max-w-[380px] overflow-hidden rounded-[var(--radius-tile)] bg-white p-8 text-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04]">
            {/* soft halo behind the portrait */}
            <div
              aria-hidden
              className="absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,102,204,0.16),transparent_70%)] blur-2xl"
            />
            <div className="relative mx-auto size-40 overflow-hidden rounded-full ring-1 ring-black/5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="160px"
                className="object-cover"
                priority={false}
              />
            </div>
            <figcaption className="relative mt-6">
              <p className="text-[24px] font-semibold tracking-tight text-ink">{profile.name}</p>
              <p className="mt-1 text-[15px] text-ink-2">{profile.role}</p>
            </figcaption>
            <div className="relative mt-6 flex justify-center gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full bg-canvas text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <GitHubIcon className="size-[18px]" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full bg-canvas text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <LinkedInIcon className="size-[16px]" />
              </a>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
