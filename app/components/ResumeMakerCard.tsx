'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { FiFileText, FiCheckCircle } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';

const ResumeMakerCard = () => {
  const plannedFeatures = [
    "AI-Powered Formatting",
    "ATS-Optimized Templates",
    "One-Click PDF Export"
  ];

  // 1. Container variant to control the stagger timing
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // 2. Item variant to make each bullet point slide in from the left
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  };

  return (
    <GlassCard className="flex flex-col h-full hover:bg-white/10 transition-all duration-300">
      
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 text-xl flex-shrink-0">
        <FiFileText />
      </div>

      <h2 className="text-2xl font-bold mb-3 tracking-wide text-white">Resume Maker</h2>
      <p className="text-white/60 leading-relaxed pr-4 mb-6">
        An intuitive platform to easily craft and export professional resumes. Currently in development and launching soon!
      </p>

      {/* Planned Features List - Now beautifully animated! */}
      <motion.div 
        className="flex flex-col gap-3 mb-6"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {plannedFeatures.map((feature, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="flex items-center gap-3 text-white/70"
          >
            <FiCheckCircle className="text-blue-500/70 text-sm flex-shrink-0" />
            <span className="text-sm font-medium">{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Abstract Resume Mockup UI */}
      <div className="flex-1 w-full bg-gradient-to-b from-white/[0.05] to-transparent rounded-xl border border-white/10 p-5 flex flex-col gap-4 relative overflow-hidden">
        
        {/* Animated Laser Scanner Effect */}
        <motion.div
          animate={{ top: ["0%", "98%", "0%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-blue-400/60 shadow-[0_0_15px_#60a5fa] z-10"
        />

        {/* Mockup Profile Header */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
          <div className="flex flex-col gap-2 w-full">
            <div className="h-2 w-1/3 bg-white/20 rounded-full" />
            <div className="h-2 w-1/4 bg-white/10 rounded-full" />
          </div>
        </div>

        {/* Mockup Body Lines */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-1.5 w-full bg-white/5 rounded-full" />
          <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
          <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
        </div>

        {/* Mockup Bottom Sections */}
        <div className="flex gap-4 mt-auto pt-4">
          <div className="flex-1 flex flex-col gap-2">
             <div className="h-2 w-1/2 bg-white/10 rounded-full" />
             <div className="h-8 w-full bg-white/5 rounded-lg" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
             <div className="h-2 w-1/2 bg-white/10 rounded-full" />
             <div className="h-8 w-full bg-white/5 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Button fixed strictly to the bottom */}
      <button 
        disabled 
        className="mt-6 self-start px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide opacity-50 cursor-not-allowed flex-shrink-0"
      >
        Coming Soon
      </button>
      
    </GlassCard>
  )
}

export default ResumeMakerCard;