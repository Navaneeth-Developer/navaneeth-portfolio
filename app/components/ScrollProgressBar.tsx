'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  // Tracks how far the user has scrolled down the page (from 0 to 1)
  const { scrollYProgress } = useScroll();
  
  // Applies a physics-based spring to the progress value so it moves fluidly
  // instead of harshly jumping when the user scrolls quickly
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}