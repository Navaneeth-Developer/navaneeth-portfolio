'use client';

import React from 'react';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { motion, Variants } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi'; // Imported map pin icon

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Associate Software Developer",
      company: "TOPGREP TECH",
      location: "Bengaluru, India",
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
      location: "Bengaluru, India",
      project: "TARVAH & ORBIT",
      date: "October 2022 - January 2025",
      details: [
        "Engineered highly available microservices and REST APIs, improving overall system reliability for 200+ users.",
        "Optimized database query performance and slashed application load times by 25% through strategic Redis caching and MongoDB indexing.",
        "Architected high-throughput data pipelines using RabbitMQ for asynchronous messaging, accelerating data delivery speeds with 99.9% integrity.",
        "Developed a Node.js-based 'Virtual Data Mart' microservice, streamlining cross-dataset accessibility by 30% for business intelligence teams."
      ]
    },
    {
      id: 3,
      role: "NodeJS Trainee",
      company: "APP INNOVATION TECHNOLOGIES",
      location: "Coimbatore, India",
      project: "",
      date: "May 2022 - August 2022",
      details: [
        "Completed intensive hands-on training in Node.js backend development, asynchronous programming, and core JavaScript concepts.",
        "Assisted in the architecture and testing of basic RESTful APIs to support web applications.",
        "Gained foundational exposure to database integration and version control workflows utilizing Git."
      ]
    }
  ];

  // Variants for the unordered list (controls the staggering)
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each bullet point appearing
        delayChildren: 0.2     // Brief pause before the bullets start animating in
      }
    }
  };

  // Variants for each individual bullet point
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 }, // Starts slightly to the left and invisible
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="experience" className="w-full py-12 scroll-mt-24">
      {/* Note: Removed px-4 here to inherit standard padding from Home layout */}
      <ScrollReveal direction="up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-center md:text-left text-white">
          Experience
        </h2>
      </ScrollReveal>
      
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.id} direction="up" delay={index * 0.2}>
            <GlassCard className="flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-300">
              
              {/* Left Column: Role, Company, Location & Dates */}
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold self-start border border-blue-500/20 mb-1">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">{exp.role}</h3>
                
                <div className="flex flex-col gap-1 mt-1">
                  <p className="text-lg font-medium text-white/80">{exp.company}</p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-white/60 mb-1">
                    <FiMapPin className="text-blue-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.project && (
                  <p className="text-sm text-white/50 italic mt-1">Project: {exp.project}</p>
                )}
              </div>

              {/* Right Column: Staggered Bullet Points */}
              <div className="md:w-2/3">
                <motion.ul 
                  className="flex flex-col gap-3"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }} // Triggers just as it comes into view
                >
                  {exp.details.map((point, pointIndex) => (
                    <motion.li 
                      key={pointIndex} 
                      variants={itemVariants}
                      className="text-white/70 leading-relaxed flex items-start"
                    >
                      <span className="text-blue-400 mr-3 mt-1">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}