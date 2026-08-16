'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  
  // Define the starting position based on the direction prop
  const fadeAndSlide = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8, // Smooth, slow duration
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // This exact cubic-bezier curve gives that premium "Apple" feel
      },
    },
  };

  return (
    <motion.div
      variants={fadeAndSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Triggers slightly before scrolling fully into view. 'once: true' means it won't repeat if they scroll up and down.
      className={className}
    >
      {children}
    </motion.div>
  );
}