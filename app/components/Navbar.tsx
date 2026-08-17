'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper'; // <-- Imported the new component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Smooth scroll handler function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 110; // The exact space you want above the section (Navbar height + breathing room)

      // 1. Initial scroll to get the page moving and trigger your ScrollReveal animations
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });

      // 2. Automatically recalculate and adjust the scroll exactly when the animations expand the layout
      // 400ms happens mid-scroll, so the user won't even notice the browser correcting itself!
      setTimeout(() => {
        const newPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: newPosition - offset, behavior: 'smooth' });
      }, 400); 
    }
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex justify-center mt-4 pointer-events-none"
    >
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')} 
          className="text-xl font-bold tracking-wider hover:text-blue-400 transition-colors cursor-pointer"
        >
          NAVANEETH<span className="text-blue-500">.</span>DEV
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Wrapped the Resume button in the MagneticWrapper */}
          <MagneticWrapper pullStrength={0.25}>
            <a 
              href="/navaneeth_resume.pdf" 
              download
              className="block px-5 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 text-sm font-semibold transition-all duration-300"
            >
              Resume
            </a>
          </MagneticWrapper>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-current">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with AnimatePresence for smooth entry AND exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-20 left-6 right-6 p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] pointer-events-auto md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)} 
                className="text-white/80 hover:text-white font-medium p-2 text-lg transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/navaneeth_resume.pdf" 
              download 
              className="text-center w-full px-5 py-3 mt-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold hover:bg-blue-500/30 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}