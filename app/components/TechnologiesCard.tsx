import React from 'react';
import GlassCard from './GlassCard';
import { getTechIcon } from '../utils/techIcons';

export default function TechnologiesCard() {
  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Angular", "Java", "Spring Boot", "MongoDB", 
    "PostgreSQL", "MariaDB", "Redis", "Kafka", "Python",
    "RabbitMQ", "Docker", "CI/CD Pipeline", "Tailwind CSS"
  ];

  return (
    <GlassCard className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-6 tracking-wide text-white">Core Expertise & Stack</h2>
      
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, i) => {
          const icon = getTechIcon(tech);
          return (
            <div 
              key={i} 
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 text-sm font-medium text-white/80 transition-colors cursor-default"
            >
              {icon && <span className="text-base">{icon}</span>}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}