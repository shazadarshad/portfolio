import { certifications } from "@/content/site";
import { ArrowLink, Reveal, SectionHeading } from "./ui";

const issuerStyle: Record<string, string> = {
  IBM: "font-black tracking-[0.12em]",
  Meta: "font-semibold",
  BrightCHAMPS: "font-extrabold text-[11px]",
};

export function Certifications() {
  return (
    <section id="certifications" className="bg-canvas px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Always learning."
          subtitle="Verified credentials from IBM, Meta and BrightCHAMPS."
        />

        <ul className="mt-14 flex flex-wrap justify-center gap-4">
          {certifications.map((c, i) => (
            <li key={c.url} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <Reveal
                delay={(i % 3) * 0.08}
                className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-11 min-w-11 place-items-center rounded-xl bg-ink px-2.5 text-[13px] text-white ${
                      issuerStyle[c.issuer] ?? ""
                    }`}
                  >
                    {c.issuer}
                  </span>
                  <span className="text-[13px] text-ink-2">{c.issued}</span>
                </div>
                <h3 className="mt-6 text-[19px] font-semibold leading-snug tracking-tight text-ink">{c.title}</h3>
                <p className="mt-1.5 text-[14px] text-ink-2">
                  {[c.issuer, c.platform].filter(Boolean).join(" · ")} · Issued {c.issued}
                </p>
                <div className="mt-auto pt-6">
                  <ArrowLink href={c.url} size="sm">
                    View credential
                  </ArrowLink>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
