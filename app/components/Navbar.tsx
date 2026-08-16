'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // 1. Changed <nav> to <motion.nav>
    // 2. Added initial, animate, and transition props for the slide-down effect
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex justify-center mt-4 pointer-events-none"
    >
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-wider hover:text-blue-400 transition-colors">
          NAVANEETH<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium opacity-70 hover:opacity-100 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/navaneeth_resume.pdf" 
            download
            className="px-5 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 text-sm font-semibold transition-all duration-300"
          >
            Resume
          </a>
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

      {/* Mobile Menu Dropdown */}
     {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          // CHANGED: Removed bg-black/60. Used bg-white/5 with backdrop-blur-3xl for a heavy, premium glass effect
          className="absolute top-20 left-6 right-6 p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] pointer-events-auto md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white font-medium p-2 text-lg transition-colors"
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
    </motion.nav>
  );
}