'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, scrollToSection } from '@/lib/utils';
import { navItems, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sun,
  Moon,
} from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-primary/50 shadow-glow-sm'
            : 'bg-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-xl font-display font-bold text-text-primary"
              aria-label="Go to home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-accent-primary">AM</span>
              <span className="hidden sm:block">Ashish Meena</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200',
                    'hover:text-accent-primary hover:bg-accent-primary/5',
                    activeSection === item.href.slice(1)
                      ? 'text-accent-primary bg-accent-primary/10'
                      : 'text-text-secondary'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                >
                  {item.label}
                  <AnimatePresence>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-accent-primary rounded-full"
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary hover:border-border-secondary transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Social links - desktop */}
              <div className="hidden lg:flex items-center gap-1">
                {socialLinks.slice(0, 2).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon === 'github' && <Github className="w-5 h-5" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border-primary/50"
            >
              <div className="container-custom py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      scrollToSection(item.href.slice(1));
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      'w-full px-4 py-3 text-left text-base font-medium rounded-xl transition-all duration-200',
                      activeSection === item.href.slice(1)
                        ? 'text-accent-primary bg-accent-primary/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                    )}
                    layout
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <div className="pt-4 border-t border-border-primary/50 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                    >
                      {social.icon === 'github' && <Github className="w-5 h-5" />}
                      {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                      {social.icon === 'mail' && <Mail className="w-5 h-5" />}
                      {social.icon === 'phone' && <Phone className="w-5 h-5" />}
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary z-50 origin-left"
        style={{ transformOrigin: 'left center' }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </>
  );
}