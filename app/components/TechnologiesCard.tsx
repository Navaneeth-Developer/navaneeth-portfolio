'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { getTechIcon } from '../utils/techIcons';
import { motion, Variants } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';

export default function TechnologiesCard() {
  const techCategories = [
    {
      title: "Frontend & UI",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Redux", "Redux Toolkit", "React Flow", "Tailwind CSS", "SCSS", "Material UI", "Ant Design"]
    },
    {
      title: "Backend & Core",
      skills: ["Node.js", "Java", "Spring Boot", "Python"]
    },
    {
      title: "Databases & Messaging",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "Redis", "Kafka", "RabbitMQ"]
    },
    {
      title: "DevOps & Architecture",
      skills: ["Docker", "AWS S3", "Cloudflare", "CI/CD Pipeline"]
    }
  ];

  // Helper function to create a perfect "waterfall" sequence index.
  // It calculates exactly how many items (titles + badges) came before the current one.
  const getSequenceIndex = (categoryIndex: number, badgeIndex: number = -1) => {
    let count = 0;
    for (let i = 0; i < categoryIndex; i++) {
      count += 1; // Add 1 for the previous category's title
      count += techCategories[i].skills.length; // Add the amount of previous badges
    }
    // If badgeIndex is -1, we are returning the delay for the Title.
    // Otherwise, add 1 for the current category's title, plus the badge's index.
    return badgeIndex === -1 ? count : count + 1 + badgeIndex;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 } 
  };

  // Titles fade and slide in slightly from the left
  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.05 + 0.1, duration: 0.4 }
    })
  };

  // Badges pop up seamlessly based on their absolute position in the list
  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: index * 0.05 + 0.1 }
    })
  };

  return (
    <GlassCard className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-6 tracking-wide text-white">Core Expertise & Stack</h2>

      {/* Main container simply triggers the "show" state when in view */}
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {techCategories.map((category, idx) => (
          
          <div key={idx} className="flex flex-col gap-3">
            
            {/* Category Subheading - Uses custom prop to calculate delay */}
            <motion.h3 
              custom={getSequenceIndex(idx)}
              variants={titleVariants}
              className="text-xs font-bold text-blue-400/80 uppercase tracking-widest border-b border-white/5 pb-2"
            >
              {category.title}
            </motion.h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((tech, i) => {
                const icon = getTechIcon(tech);
                
                // FIXED: Standard JS comment moved above the return statement!
                // Badges - Uses custom prop to calculate absolute sequence delay
                return (
                  <motion.div 
                    key={i} 
                    custom={getSequenceIndex(idx, i)} 
                    variants={badgeVariants}
                  >
                    <MagneticWrapper pullStrength={0.15}>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 hover:bg-white/10 border border-white/5 text-sm font-medium text-white/80 transition-colors cursor-default">
                        {icon && <span className="text-base">{icon}</span>}
                        <span>{tech}</span>
                      </div>
                    </MagneticWrapper>
                  </motion.div>
                );
              })}
            </div>

          </div>
        ))}
      </motion.div>
    </GlassCard>
  );
}