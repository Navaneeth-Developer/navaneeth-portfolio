import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfilePhoto from "./components/ProfilePhoto";
import ProjectsSection from "./components/ProjectsSection";
import ResumeMakerCard from "./components/ResumeMakerCard";
import TechnologiesCard from "./components/TechnologiesCard";
import ScrollReveal from "./components/ScrollReveal"; // Import the wrapper

export default function Home() {
 const technologies: string[] = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Angular", "Java", "MongoDB", 
    "PostgreSQL", "MariaDB", "Redis", "Kafka", 
    "RabbitMQ", "Docker", "CI/CD Pipeline", "Tailwind CSS"
  ];

  return (
    // Added overflow-hidden to prevent scrollbars during slide animations
<main className="min-h-screen p-6 md:p-12 pt-20 md:pt-24 max-w-5xl mx-auto flex flex-col gap-12 overflow-hidden">      {/* 
        UPDATED HERO SECTION: 
        Using flexbox (flex-row on desktop) to guarantee side-by-side alignment.
        items-center ensures they are vertically aligned in the middle. 
      */}
      <section className="mt-16 mb-12 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        
        {/* Hero Text Content (Left Side) - Slides up */}
        <ScrollReveal direction="up" className="flex flex-col gap-4 text-center md:text-left w-full md:max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              NAVANEETH
            </span>
          </h1>
          <p className="text-xl text-white/70 font-medium leading-relaxed">
            Passionate about building scalable systems and crafting seamless user interfaces. Specialized in full-stack JavaScript development.
          </p>
        </ScrollReveal>

        {/* Profile Photo (Right Side) - Slides in from the left with a slight delay */}
        <ScrollReveal direction="left" delay={0.2} className="flex-shrink-0">
          <ProfilePhoto />
        </ScrollReveal>

      </section>

      {/* Grid of Glass Cards - Cards stagger in one after the other */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <ScrollReveal direction="up" delay={0.3} className="h-full">
          <ResumeMakerCard/>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} className="h-full">
          <TechnologiesCard technologies={technologies}/>
        </ScrollReveal>
      </section>

      {/* Section Wrappers - Gently slide up as you scroll to them */}
      <ScrollReveal direction="up" delay={0.1}>
        <ExperienceSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <ProjectsSection/>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <ContactSection />
      </ScrollReveal>
      
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