'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect if the device is a touch screen (we don't want custom cursors on mobile)
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Basic mobile/touch detection
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect if we are hovering over anything clickable
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the element or its parent is an anchor (link) or button
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Don't render anything if on a phone/tablet
  if (isTouchDevice) return null;

  return (
    <>
      {/* 1. The small leading dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6, // Offset by half the width/height to center it
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1, // Shrink to nothing when hovering over a link
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* 2. The trailing glowing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-blue-400 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1, // Expand heavily over links
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.15)" : "transparent",
          opacity: isVisible ? 1 : 0
        }}
        // The spring transition gives it that physical, drag-behind feeling
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.2 }}
      />
    </>
  );
}