'use client';

import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      /* CHANGED: Removed the justify-self classes. Flexbox handles it now! */
      className="relative group"
    >
      {/* The Glass Frame */}
      <div 
        className={`
          relative
          w-48 h-48 md:w-56 md:h-56
          rounded-[32px] 
          border-2 border-white/10 
          bg-white/5 
          backdrop-blur-sm 
          shadow-[0_16px_40px_-12px_rgba(31,38,135,0.25)]
          p-3
          overflow-hidden
        `}
      >
        <img 
          src="/my-profile.jpg" 
          alt="Navaneeth"
          className="w-full h-full object-cover rounded-[24px] scale-105 group-hover:scale-110 transition-transform duration-500 ease-in-out" 
        />
        <div className="absolute inset-3 bg-black/20 opacity-0 group-hover:opacity-100 rounded-[24px] transition-opacity duration-300 pointer-events-none" />
      </div>
      
      <div className="absolute -inset-10 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl rounded-full -z-10" />
    </motion.div>
  );
}