import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { FeaturedNeurativo } from "@/components/FeaturedNeurativo";
import { FeaturedOpenhand } from "@/components/FeaturedOpenhand";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectTiles } from "@/components/ProjectTiles";
import { Skills } from "@/components/Skills";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Skills />
        <FeaturedNeurativo />
        <FeaturedOpenhand />
        <ProjectTiles />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
