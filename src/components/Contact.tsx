import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { GitHubIcon, LinkedInIcon, Reveal } from "./ui";

const channels = [
  { label: "Email", value: contact.email.replace("@", "@\u200B"), href: `mailto:${contact.email}`, Icon: Mail, external: false },
  { label: "Phone", value: contact.phone, href: contact.phoneHref, Icon: Phone, external: false },
  { label: "LinkedIn", value: "in/shazadarshad", href: contact.linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "@shazadarshad", href: contact.github, Icon: GitHubIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night px-6 py-28 text-white md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(41,151,255,0.16),transparent_65%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-[1000px] text-center">
        <Reveal>
          <p className="eyebrow text-white/55">
            <span className="text-link-dark">06</span>
            <span className="mx-2 opacity-50">—</span>Contact
          </p>
          <h2 className="display text-gradient-dark mt-4 text-[56px] sm:text-[72px] md:text-[96px]">Get In Touch.</h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[19px] leading-[1.6] text-white/65 md:text-[21px]">
            {contact.blurb}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[17px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(41,151,255,0.55)]"
          >
            Say Hello
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <ul className="mt-16 grid gap-3 text-left sm:grid-cols-2">
          {channels.map(({ label, value, href, Icon, external }, i) => (
            <li key={label} className="min-w-0">
              <Reveal delay={i * 0.06}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-dark group flex items-center gap-3 rounded-[var(--radius-card)] p-4 min-[360px]:gap-4 min-[360px]:p-5 transition-colors duration-300 hover:bg-white/[0.09]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.08] min-[360px]:size-11">
                    <Icon aria-hidden className="size-5 text-white" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] text-white/50">{label}</span>
                    <span className="block text-[14px] font-medium text-white [overflow-wrap:break-word] min-[360px]:text-[15px] min-[400px]:text-[17px]">{value}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="hidden size-5 shrink-0 text-white/40 transition-all min-[360px]:block duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
