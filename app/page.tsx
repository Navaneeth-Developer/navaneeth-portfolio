'use client';

import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeMakerCard from "./components/ResumeMakerCard";
import TechnologiesCard from "./components/TechnologiesCard";
import ScrollReveal from "./components/ScrollReveal";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main id="home" className="w-full min-h-screen p-6 md:p-12 pt-20 md:pt-24 max-w-5xl mx-auto flex flex-col gap-8 overflow-hidden">     
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Overview & Highlights (Grid of Glass Cards) */}
      <div className="w-full pt-8" id="expertise">
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center md:text-left text-white">
           Featured Tool & Expertise
          </h2>
        </ScrollReveal>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ScrollReveal direction="up" delay={0.3} className="h-full">
            <ResumeMakerCard/>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4} className="h-full">
            <TechnologiesCard />
          </ScrollReveal>
        </section>
      </div>

      {/* 3. Experience */}
      <ScrollReveal direction="up" delay={0.1}>
        <ExperienceSection />
      </ScrollReveal>
      
      {/* 4. Projects */}
      <ScrollReveal direction="up" delay={0.1}>
        <ProjectsSection/>
      </ScrollReveal>
      
      {/* 5. Contact */}
      <ScrollReveal direction="up" delay={0.1}>
        <ContactSection />
      </ScrollReveal>
      
      {/* Footer */}
      <ScrollReveal direction="up" delay={0.1}>
        <footer className="w-full py-6 text-center border-t border-white/10 mt-auto">
          <p className="text-white/50 text-sm font-medium">
            © {new Date().getFullYear()} Navaneeth L. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </ScrollReveal>

    </main>
  );
}