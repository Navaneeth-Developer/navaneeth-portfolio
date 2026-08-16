import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Associate Software Developer",
      company: "TOPGREP",
      project: "AIVAGAM",
      date: "June 2025 - March 2026",
      details: [
        "Architected an AI-driven e-learning platform utilizing React.js, Node.js, and MongoDB, successfully supporting multi-role access and scalable interactive coding environments.",
        "Orchestrated the architectural migration from a legacy monolithic system to a decoupled microservices infrastructure, leveraging Kafka for robust inter-service messaging.",
        "Spearheaded Third-party API Integrations (Generative AI: Gemini/OpenAI), delivering real-time coding assistance and adaptive learning features to end-users.",
        "Designed and secured RESTful APIs with JWT and Role-Based Access Control (RBAC), ensuring strict data privacy and system compliance."
      ]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "SCENAI DATA SCIENCE",
      project: "TARVAH & ORBIT",
      date: "October 2022 - January 2025",
      details: [
        "Engineered highly available microservices and REST APIs, improving overall system reliability for 200+ users.",
        "Optimized database query performance and slashed application load times by 25% through strategic Redis caching and MongoDB indexing.",
        "Architected high-throughput data pipelines using RabbitMQ for asynchronous messaging, accelerating data delivery speeds with 99.9% integrity.",
        "Developed a Node.js-based 'Virtual Data Mart' microservice, streamlining cross-dataset accessibility by 30% for business intelligence teams."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full py-12 px-4 scroll-mt-24">
      <ScrollReveal direction="up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center md:text-left text-white">
          Experience
        </h2>
      </ScrollReveal>
      
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.id} direction="up" delay={index * 0.2}>
            <GlassCard className="flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-white/10 transition-all duration-300">
              
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold self-start border border-blue-500/20">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold mt-2 text-white">{exp.role}</h3>
                <p className="text-lg font-medium text-white/80">{exp.company}</p>
                {exp.project && (
                  <p className="text-sm text-white/50 italic">Project: {exp.project}</p>
                )}
              </div>

              <div className="md:w-2/3">
                <ul className="flex flex-col gap-3">
                  {exp.details.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-white/70 leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}