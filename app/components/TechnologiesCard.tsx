'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { getTechIcon } from '../utils/techIcons';
import { motion, Variants } from 'framer-motion'; // <-- Imported Variants here

export default function TechnologiesCard() {
  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Angular", "Java", "Spring Boot", "MongoDB", 
    "PostgreSQL", "MariaDB", "Redis", "Kafka", "Python",
    "RabbitMQ", "Docker", "CI/CD Pipeline", "Tailwind CSS"
  ];

  // Added ": Variants" to strictly type the container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
        delayChildren: 0.1,    
      }
    }
  };

  // Added ": Variants" to strictly type the items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <GlassCard className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-6 tracking-wide text-white">Core Expertise & Stack</h2>
      
      <motion.div 
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }} 
      >
        {technologies.map((tech, i) => {
          const icon = getTechIcon(tech);
          return (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 text-sm font-medium text-white/80 transition-colors cursor-default"
            >
              {icon && <span className="text-base">{icon}</span>}
              <span>{tech}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </GlassCard>
  );
}