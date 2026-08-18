'use client';

import { motion, Variants } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ProfilePhoto from "./ProfilePhoto";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const HeroSection = () => {
  // 1. Container variant 
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,  // Waits longer between "Hello" and "NAVANEETH"
        delayChildren: 0.5,    // Waits half a second after page load before starting
      },
    },
  };

  // 2. The masking variant for the big text
  const textVariants: Variants = {
    hidden: { 
      y: "120%", 
      opacity: 0,
      rotateZ: 5 
    },
    visible: { 
      y: "0%", 
      opacity: 1,
      rotateZ: 0,
      transition: { type: "spring", damping: 15, stiffness: 70, duration: 1.2 }
    },
  };

  // 3. Fade in variant for the paragraph text and buttons
  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="mt-16 mb-12 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
    
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

       {/* Fade-in Paragraph with Inline Animated Underline */}
        <motion.div variants={fadeVariants} className="mt-2 text-xl text-white/70 font-medium leading-relaxed">
          Full-Stack Software Engineer with{' '}
          <span className="font-bold text-white relative inline-block">
            over 3.5 years of experience
            {/* The sweeping underline animation pinned strictly under the text */}
            <motion.span 
              className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
            />
          </span>{' '}
          building scalable systems and crafting seamless user interfaces. Specialized in Node.js, Java Spring Boot, and modern frontend architectures.
        </motion.div>

        {/* Social Links Section */}
        <motion.div variants={fadeVariants} className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
          
          {/* GitHub Button */}
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 p-3 md:px-6 md:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm font-semibold text-white/80 hover:text-white hover:-translate-y-1"
          >
            <FiGithub className="text-xl md:text-lg" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 p-3 md:px-6 md:py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 text-sm font-semibold text-blue-400 hover:text-blue-300 hover:-translate-y-1"
          >
            <FiLinkedin className="text-xl md:text-lg" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          {/* Contact Button */}
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 p-3 md:px-6 md:py-2.5 rounded-full bg-transparent hover:bg-white/5 border border-transparent transition-all duration-300 text-sm font-semibold text-white/50 hover:text-white/80"
          >
            <FiMail className="text-xl md:text-lg" />
            <span className="hidden md:inline">Contact</span>
          </a>

        </motion.div>
      </motion.div>

      {/* Profile Photo */}
      <ScrollReveal direction="left" delay={0.6} className="flex-shrink-0">
        <ProfilePhoto />
      </ScrollReveal>
      
    </section>
  );
}

export default HeroSection;