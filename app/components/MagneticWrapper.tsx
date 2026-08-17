'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  pullStrength?: number; // Allows you to adjust how strong the magnet is
}

export default function MagneticWrapper({ 
  children, 
  className = '',
  pullStrength = 0.2 // 0.2 means it moves 20% of the distance towards the mouse
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Get the exact dimensions and position of the button on the screen
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate the distance from the exact center of the button to the mouse cursor
    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);
    
    // Move the button a fraction of that distance
    setPosition({ x: middleX * pullStrength, y: middleY * pullStrength });
  };

  const reset = () => {
    // Snap back to original position when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15, 
        mass: 0.1 
      }}
      className={`w-fit inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}