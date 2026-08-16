'use client';

import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative group"
    >
      {/* The Glass Frame */}
      <div 
        className={`
          relative
          w-48 h-48 md:w-56 md:h-56
          rounded-[32px] 
          border border-white/10 
          bg-white/5 
          backdrop-blur-2xl 
          /* THE DEPTH TRICK: 
             1. inset_0_1px_1px_rgba(255,255,255,0.15) for the top edge light reflection
             2. 0_8px_32px_0_rgba(0,0,0,0.4) for the deep, floating ambient shadow
          */
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.4)]
          p-3
          overflow-hidden
        `}
      >
        <img 
          src="/my-profile.jpg" 
          alt="Navaneeth"
          className="w-full h-full object-cover rounded-[20px] scale-105 group-hover:scale-110 transition-transform duration-500 ease-in-out" 
        />
      </div>
      
      {/* Background Glow */}
      <div className="absolute -inset-10 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl rounded-[40px] -z-10" />
    </motion.div>
  );
}