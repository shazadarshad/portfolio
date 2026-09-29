import { aiTools, certifications, contact, education, profile, projects, skills, stack } from "./site";

export const seo = {
  url: "https://www.shazadarshad.com",
  title: "Shazad Arshad — Software Developer in Colombo, Sri Lanka",
  description:
    "Shazad Arshad is a self-taught software developer from Colombo, Sri Lanka building web apps with Next.js, TypeScript, Python and AI. See projects like Neurativo, Openhand and TalentHub, plus skills and certifications.",
  shortDescription:
    "Self-taught software developer from Colombo, Sri Lanka building web apps with Next.js, Python and AI.",
  keywords: [
    "Shazad Arshad",
    "Shazad",
    "Shazad Arshad portfolio",
    "Shazad Arshad developer",
    "software developer Sri Lanka",
    "web developer Colombo",
    "junior developer Sri Lanka",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Python developer",
    "Flask",
    "AI developer",
    "Neurativo",
    "Openhand",
    "TalentHub",
    "portfolio",
  ],
};

const personId = `${seo.url}/#person`;
const websiteId = `${seo.url}/#website`;

/** schema.org structured data so Google understands who this site is about. */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      givenName: "Shazad",
      familyName: "Arshad",
      url: seo.url,
      image: `${seo.url}${profile.photo}`,
      email: `mailto:${contact.email}`,
      jobTitle: "Software Developer",
      description: seo.shortDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      nationality: { "@type": "Country", name: "Sri Lanka" },
      knowsLanguage: profile.languages,
      knowsAbout: [...skills.map((s) => s.name), ...stack.map((s) => s.name), ...aiTools.map((s) => s.name)],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: education[0].place,
      },
      hasCredential: certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.title,
        credentialCategory: "certificate",
        url: c.url,
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
      sameAs: [contact.github, contact.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: seo.url,
      name: profile.name,
      description: seo.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${seo.url}/#profilepage`,
      url: seo.url,
      name: seo.title,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      about: { "@id": personId },
    },
    {
      "@type": "ItemList",
      "@id": `${seo.url}/#projects`,
      name: "Projects by Shazad Arshad",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: `${p.name} — ${p.tagline}`,
          description: p.description,
          keywords: p.tags.join(", "),
          ...(p.code ? { codeRepository: p.code } : {}),
          ...(p.live || p.code ? { url: p.live ?? p.code } : {}),
          author: { "@id": personId },
        },
      })),
    },
  ],
};
