'use client';

import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';

export default function ContactSection() {
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if all fields are filled
  const isFormValid = 
    formDataState.name.trim() !== '' && 
    formDataState.email.trim() !== '' && 
    formDataState.message.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'ad828e18-a0cc-4026-aa9a-cc25ab472bff');
    
    // Add these fields to customize your email subject and greeting layout
    formData.append('subject', `New Portfolio Message from ${formDataState.name}`);
    formData.append('from_name', formDataState.name); // This replaces the generic sender name

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        setFormDataState({ name: '', email: '', message: '' });
        event.currentTarget.reset();
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResult('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12">
      <GlassCard className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-white">Get In Touch</h2>
          <p className="text-white/60 text-sm mt-1">Have a project in mind or want to connect? Drop a message below.</p>
        </div>

        {/* Direct Contact Info (Email & Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="mailto:navaneeth.softwareengineer@gmail.com" 
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 transition-colors group"
          >
            <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
              <FiMail className="text-lg" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-white/50 font-medium">Email Me</p>
              <p className="text-sm text-white font-medium truncate group-hover:text-blue-400 transition-colors">
                navaneeth.softwareengineer@gmail.com
              </p>
            </div>
          </a>

          <a 
            href="tel:+918438472565" 
            className="flex items-center gap-3 p-3.5 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 transition-colors group"
          >
            <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
              <FiPhone className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-white/50 font-medium">Call Me</p>
              <p className="text-sm text-white font-medium group-hover:text-purple-400 transition-colors">
                +91 84384 72565
              </p>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <FiUser className="absolute left-4 text-white/40 text-lg" />
            <input 
              type="text" 
              name="name"
              value={formDataState.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
            />
          </div>

          <div className="relative flex items-center">
            <FiMail className="absolute left-4 text-white/40 text-lg" />
            <input 
              type="email" 
              name="email"
              value={formDataState.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
            />
          </div>

          <div className="relative flex">
            <FiMessageSquare className="absolute left-4 top-3.5 text-white/40 text-lg" />
            <textarea 
              name="message"
              rows={4}
              value={formDataState.message}
              onChange={handleChange}
              placeholder="Your Message" 
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors resize-none text-sm"
            />
          </div>

          <button 
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              isFormValid && !isSubmitting
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-95 cursor-pointer shadow-lg'
                : 'bg-white/5 text-white/40 border border-white/5 cursor-not-allowed'
            }`}
          >
            <FiSend />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>

          {result && <p className="text-sm text-white/80 text-center mt-2">{result}</p>}
        </form>

        <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/5">
          <a 
            href="https://linkedin.com/in/navaneethl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 text-white/80 hover:text-white transition-colors"
          >
            <SlSocialLinkedin className="text-lg text-blue-400" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-black/20 hover:bg-white/10 border border-white/5 text-white/80 hover:text-white transition-colors"
          >
            <SiGithub className="text-lg text-white" />
          </a>
        </div>
      </GlassCard>
    </section>
  );
}