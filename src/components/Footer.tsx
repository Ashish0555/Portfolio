'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart, Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t border-border-primary/50 bg-bg-primary/50 backdrop-blur-xl"
      role="contentinfo"
    >
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xl font-display font-bold text-text-primary"
            >
              <span className="text-accent-primary">AM</span>
              <span>Ashish Meena</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-fluid-base max-w-xs"
            >
              Backend Engineer building scalable distributed systems, 
              AI-powered applications, and high-performance architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200 text-sm"
                  aria-label={social.label}
                >
                  {social.icon === 'github' && <Github className="w-4 h-4" />}
                  {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                  {social.icon === 'mail' && <Mail className="w-4 h-4" />}
                  {social.icon === 'phone' && <Phone className="w-4 h-4" />}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fluid-lg font-semibold text-text-primary mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
              aria-label="Footer navigation"
            >
              {['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Contact & Info */}
          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fluid-lg font-semibold text-text-primary mb-4"
            >
              Get In Touch
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="mailto:ashishmeena9785110509@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-accent-primary flex-shrink-0" />
                <span>ashishmeena9785110509@gmail.com</span>
              </a>
              
              <a
                href="tel:+919680662988"
                className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-accent-primary flex-shrink-0" />
                <span>+91 96806 62988</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary">
                <Code className="w-5 h-5 text-accent-tertiary flex-shrink-0" />
                <span>IIT (ISM) Dhanbad — CSE 2027</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20"
            >
              <p className="text-sm text-text-secondary text-center">
                Open to opportunities — 
                <span className="text-accent-primary font-medium">Full-time & Internship roles</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border-primary/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-tertiary text-sm">
            © {currentYear} Ashish Meena. Built with{' '}
            <span className="flex inline-items-center gap-1" aria-hidden="true">
              <Heart className="w-3 h-3 text-accent-error" />
              <Code className="w-3 h-3 text-accent-primary" />
            </span>{' '}
            Next.js, Three.js & Framer Motion
          </p>

          <motion.a
            href="#hero"
            className="p-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
            whileHover={{ scale: 1.1, rotate: -180 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}