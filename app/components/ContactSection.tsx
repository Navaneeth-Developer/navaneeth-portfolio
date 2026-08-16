'use client';

import React from 'react';
import GlassCard from './GlassCard';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message feature coming soon! Please use the email or phone link instead.");
  };

  return (
    <section id="contact" className="w-full py-12 px-4 scroll-mt-24 mb-20">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-white/70 max-w-2xl">
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      {/* CHANGED: items-start to items-stretch ensures both columns match heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* Left Column: Contact Info */}
        {/* CHANGED: Added h-full to the wrapper */}
        <div className="flex flex-col h-full gap-4">

          {/* Email */}
          {/* CHANGED: Added flex-1 to all 4 cards so they evenly fill the column height */}
          <GlassCard className="flex items-center gap-5 hover:bg-white/10 transition-colors py-5 px-6 flex-1">
            <div className="min-w-[48px] h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl border border-blue-500/20 shadow-inner">
              📧
            </div>
            <div className="overflow-hidden">
              <p className="text-sm text-white/50 font-medium mb-1">Email</p>
              <a href="mailto:navaneeth.softwareengineer@gmail.com" className="text-base font-semibold hover:text-blue-400 transition-colors break-all">
                navaneeth.softwareengineer@gmail.com
              </a>
            </div>
          </GlassCard>

          {/* Phone */}
          <GlassCard className="flex items-center gap-5 hover:bg-white/10 transition-colors py-5 px-6 flex-1">
            <div className="min-w-[48px] h-12 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center text-xl border border-green-500/20 shadow-inner">
              📞
            </div>
            <div>
              <p className="text-sm text-white/50 font-medium mb-1">Phone</p>
              <a href="tel:+918438472565" className="text-base font-semibold hover:text-green-400 transition-colors">
                +91 8438472565
              </a>
            </div>
          </GlassCard>

          {/* Location */}
          <GlassCard className="flex items-center gap-5 hover:bg-white/10 transition-colors py-5 px-6 flex-1">
            <div className="min-w-[48px] h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl border border-purple-500/20 shadow-inner">
              📍
            </div>
            <div>
              <p className="text-sm text-white/50 font-medium mb-1">Location</p>
              <p className="text-base font-semibold">Bengaluru, India</p>
            </div>
          </GlassCard>

          {/* LinkedIn */}
          <GlassCard className="flex items-center gap-5 hover:bg-white/10 transition-colors py-5 px-6 flex-1">
            <div className="min-w-[48px] h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-xl border border-sky-500/20 shadow-inner">
              💼
            </div>
            <div className="overflow-hidden">
              <p className="text-sm text-white/50 font-medium mb-1">LinkedIn</p>
              <a href="https://linkedin.com/in/navaneethl" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-sky-400 transition-colors break-all">
                linkedin.com/in/navaneethl
              </a>
            </div>
          </GlassCard>

        </div>

        {/* Right Column: Contact Form */}
        <GlassCard className="h-full flex flex-col">
          <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </GlassCard>

      </div>
    </section>
  );
}