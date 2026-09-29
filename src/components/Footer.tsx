import { contact, nav, profile } from "@/content/site";
import { SMark } from "./SMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-canvas px-6 text-[13px] text-ink-2">
      <div className="mx-auto max-w-[1100px] py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#top" className="flex items-center gap-3 text-ink" aria-label="Back to top">
            <span className="grid size-10 place-items-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              <SMark variant="flat" className="size-4" />
            </span>
            <span className="text-[14px] font-semibold uppercase tracking-[0.3em]">{profile.firstName}</span>
          </a>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/[0.08] pt-6 md:flex-row">
          <p>
            © {year} {profile.name}. Designed &amp; built in {profile.location.split(",")[0]}.
          </p>
          <div className="flex gap-6">
            <a href={`mailto:${contact.email}`} className="hover:text-ink">
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
