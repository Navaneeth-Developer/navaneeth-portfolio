import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { FiCpu, FiBarChart2, FiZap } from 'react-icons/fi';
import { getTechIcon } from '../utils/techIcons';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform API",
      description: "A robust backend architecture built to support multi-role access and scalable interactive coding environments. Integrates OpenAI/Gemini for real-time coding assistance.",
      tech: ["Node.js", "Express", "MongoDB", "Kafka", "JWT"],
      isEnterprise: true,
      icon: <FiCpu className="text-pink-400 text-xl" />
    },
    {
      id: 2,
      title: "Virtual Data Mart",
      description: "A high-throughput microservice streamlining cross-dataset accessibility for business intelligence teams, reducing query latency significantly.",
      tech: ["Node.js", "RabbitMQ", "Redis", "PostgreSQL"],
      isEnterprise: true,
      icon: <FiBarChart2 className="text-cyan-400 text-xl" />
    },
    {
      id: 3,
      title: "Task Management Microservice",
      description: "Event-driven architecture for a task manager, allowing asynchronous processing of heavy background jobs ensuring 99.9% uptime.",
      tech: ["TypeScript", "Docker", "RabbitMQ", "React"],
      isEnterprise: true,
      icon: <FiZap className="text-yellow-400 text-xl" />
    }
  ];

  return (
    <section id="projects" className="w-full py-12 px-4 scroll-mt-24">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center md:text-left">
            Professional Work
          </h2>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ScrollReveal 
            key={project.id} 
            direction="up" 
            delay={0.2 + (index * 0.1)} 
            className="h-full"
          >
            <GlassCard className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              
              {/* Project Header */}
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  {project.icon}
                </div>
                
                {project.isEnterprise && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-600/50">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Enterprise</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags with Centralized Icons */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => {
                  const icon = getTechIcon(t);
                  return (
                    <span 
                      key={i} 
                      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-black/30 text-white/80 border border-white/5"
                    >
                      {icon && <span className="text-sm">{icon}</span>}
                      <span>{t}</span>
                    </span>
                  );
                })}
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}