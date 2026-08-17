import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`
      relative overflow-hidden rounded-[32px] 
      bg-white/5 
      border border-white/10 
      backdrop-blur-xl 
      /* THE DEPTH TRICK: 
         1. inset_0_1px_1px_rgba(255,255,255,0.15) creates a crisp white highlight on the top inner edge 
         2. 0_8px_32px_0_rgba(0,0,0,0.4) creates a deep, soft ambient shadow underneath
      */
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.4)]
      p-6 md:p-8 
      
      /* THE HOVER EFFECT:
         Smooth transition adding a brighter background, a more visible border, 
         and a soft blue glow combined with your original depth shadow 
      */
      transition-all duration-500 ease-out
      hover:bg-white/[0.08] 
      hover:border-white/20 
      hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_0_rgba(0,0,0,0.4),0_0_40px_-10px_rgba(59,130,246,0.25)]
      
      ${className}
    `}>
      {children}
    </div>
  );
}