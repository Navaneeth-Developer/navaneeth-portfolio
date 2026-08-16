import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div 
      className={`
        bg-white/10 
        backdrop-blur-xl 
        border border-white/20 
        rounded-[32px] 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        p-8 
        ${className}
      `}
    >
      {children}
    </div>
  );
}