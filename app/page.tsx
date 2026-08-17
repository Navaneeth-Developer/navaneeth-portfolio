'use client';

import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfilePhoto from "./components/ProfilePhoto";
import ProjectsSection from "./components/ProjectsSection";
import ResumeMakerCard from "./components/ResumeMakerCard";
import TechnologiesCard from "./components/TechnologiesCard";
import ScrollReveal from "./components/ScrollReveal";
import { motion, Variants } from "framer-motion"; // <-- Imported Variants here

export default function Home() {

 // 1. Container variant 
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,  // Increased: waits longer between "Hello" and "NAVANEETH"
        delayChildren: 0.5,    // Increased: waits half a second after page load before starting
      },
    },
  };

  // 2. The masking variant for the big text
  const textVariants: Variants = {
    hidden: { 
      y: "120%", 
      opacity: 0,
      rotateZ: 5 // Increased tilt slightly so the unfurling is more obvious
    },
    visible: { 
      y: "0%", 
      opacity: 1,
      rotateZ: 0,
      // Slowed down the spring so the slide is buttery smooth and deliberate
      transition: { type: "spring", damping: 15, stiffness: 70, duration: 1.2 }
    },
  };

  // 3. Fade in variant for the paragraph text
  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <main id="home" className="min-h-screen p-6 md:p-12 pt-20 md:pt-24 max-w-5xl mx-auto flex flex-col gap-8 overflow-hidden">     
      <section className="mt-16 mb-12 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        
        {/* Hero Text Content */}
        <motion.div 
          className="flex flex-col gap-4 text-center md:text-left w-full md:max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-1">
            {/* Masked Box 1 */}
            <div className="overflow-hidden pb-2">
              <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Hello, I'm
              </motion.h2>
            </div>
            
            {/* Masked Box 2 */}
            <div className="overflow-hidden pb-4">
              <motion.h1 
                variants={textVariants} 
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                NAVANEETH
              </motion.h1>
            </div>
          </div>

          {/* Fade-in Paragraph */}
          <motion.div variants={fadeVariants} className="mt-2">
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              Passionate about building scalable systems and crafting seamless user interfaces. Specialized in full-stack JavaScript development.
            </p>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <ScrollReveal direction="left" delay={0.6} className="flex-shrink-0">
          <ProfilePhoto />
        </ScrollReveal>

      </section>

      {/* Grid of Glass Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <ScrollReveal direction="up" delay={0.3} className="h-full">
          <ResumeMakerCard/>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4} className="h-full">
          <TechnologiesCard />
        </ScrollReveal>
      </section>

      {/* Section Wrappers */}
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