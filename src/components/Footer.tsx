import Image from "next/image";
import { contact, nav, profile } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-canvas px-6 text-[13px] text-ink-2">
      <div className="mx-auto max-w-[1100px] pb-24 pt-12 md:py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#top" className="flex items-center gap-3 text-ink" title="Back to top">
            <Image
              src={profile.photo}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover shadow-[0_2px_10px_rgba(0,0,0,0.08)] ring-2 ring-white"
            />
            <span className="text-[14px] font-semibold uppercase tracking-[0.3em]">{profile.firstName}</span>
          </a>
          <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-x-4">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="inline-block px-2 py-2.5 hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/[0.08] pt-6 md:flex-row">
          <p className="text-center md:text-left">
            © {year} {profile.name}. Designed &amp; built in {profile.location.split(",")[0]}.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href={`mailto:${contact.email}`} className="inline-block py-2 hover:text-ink">
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block py-2 hover:text-ink">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-block py-2 hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
