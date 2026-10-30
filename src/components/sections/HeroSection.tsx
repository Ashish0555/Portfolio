'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowDown, Code, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';
import { FloatingCodeSnippets } from '@/components/background/BackgroundEffects';

export function HeroSection() {
  const roles = [
    'Software Engineer',
    'GenAI Developer',
    'Backend & Distributed Systems Developer',
    'Agentic AI Developer',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Effects - subtle */}
      <FloatingCodeSnippets />

      {/* Hero overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/98 via-bg-primary/95 to-bg-primary/90 backdrop-blur-md z-0" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Desktop: Two-column layout | Mobile: Single column */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          
          {/* LEFT SIDE - Content (55-60%) */}
          <div className="space-y-8 relative z-10 max-w-2xl mx-auto lg:mx-0">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
                <Sparkles className="w-3 h-3" />
                Hi, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <h1 id="hero-title" className="text-fluid-4xl sm:fluid-5xl lg:fluid-6xl font-display font-extrabold tracking-tight leading-tight text-text-primary">
                Ashish Meena
              </h1>
            </motion.div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="space-y-2"
            >
              <div className="min-h-[60px]">
                <TypeAnimation
                  sequence={roles.flatMap(r => [r, 2500, 1000])}
                  wrapper="span"
                  className="text-fluid-lg sm:fluid-xl font-medium text-accent-primary"
                  cursor={true}
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <p className="text-fluid-lg sm:fluid-xl text-text-secondary max-w-2xl leading-relaxed">
                Building Intelligent Applications & Scalable Systems
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <p className="text-fluid-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
                Final-year Computer Science student at IIT (ISM) Dhanbad and former SDE Intern at Zeru.
                I build reliable backend systems, AI-powered applications, and intelligent developer tools.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" href="#projects" className="h-12 min-w-[160px] flex items-center justify-center gap-2 px-6 w-full sm:w-auto">
                View Projects
                <Code className="w-5 h-5 flex-shrink-0" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact" className="h-12 min-w-[160px] flex items-center justify-center gap-2 px-6 w-full sm:w-auto">
                Get In Touch
                <Mail className="w-5 h-5 flex-shrink-0" />
              </Button>
              <Button variant="ghost" size="lg" href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="h-12 min-w-[160px] flex items-center justify-center gap-2 px-6 w-full sm:w-auto">
                Download Resume
                <FileText className="w-5 h-5 flex-shrink-0" />
              </Button>
            </motion.div>

            {/* Social links - minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <a
                href={socialLinks.find(s => s.platform === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.find(s => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.find(s => s.platform === 'Email')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Professional Portrait (40-45%) */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              {/* Subtle glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-tertiary/10 rounded-3xl blur-3xl -z-10" aria-hidden="true" />
              
              {/* Portrait container */}
              <div className="relative aspect-[4/5] max-w-[350px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 shadow-2xl shadow-accent-primary/10">
                <img
                  src="/portrait.png"
                  alt="Ashish Meena - Software Engineer & GenAI Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 border border-accent-primary/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Minimal tech badges - only 2, positioned at corners, not overlapping face */}
              <div className="absolute -bottom-3 -left-3 hidden lg:block" style={{ zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="glass-card px-3 py-1.5 rounded-lg shadow-glow-sm"
                >
                  <div className="flex items-center gap-1.5 text-accent-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs">RAG + LangGraph</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -bottom-3 -right-3 hidden lg:block" style={{ zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="glass-card px-3 py-1.5 rounded-lg shadow-glow-sm"
                >
                  <div className="flex items-center gap-1.5 text-accent-secondary">
                    <Code className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs">FastAPI + Kafka</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - properly centered */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-tertiary"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}