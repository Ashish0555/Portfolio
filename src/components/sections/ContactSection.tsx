'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/data';
import { Card, Badge } from '@/components/ui';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 inline-block">
            <Mail className="w-4 h-4 mr-1" />
            Get In Touch
          </Badge>
          <h2 id="contact-title" className="section-title mb-4">
            Let's Build <br />
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to full-time opportunities, internships, and interesting collaborations. 
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: '23je0172@gmail.com', 
                  href: 'mailto:23je0172@gmail.com', 
                  color: 'text-accent-primary',
                  copyable: true
                },
                { 
                  icon: Phone, 
                  label: 'Phone', 
                  value: '+91 96806 62988', 
                  href: 'tel:+919680662988', 
                  color: 'text-accent-secondary',
                  copyable: true
                },
                { 
                  icon: MapPin, 
                  label: 'Location', 
                  value: 'Dhanbad, Jharkhand, India', 
                  href: null, 
                  color: 'text-accent-tertiary',
                  copyable: true
                },
              ].map((contact, i) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <a
                    href={contact.href || '#'}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl glass-card-hover group relative overflow-hidden',
                      contact.href ? 'cursor-pointer' : 'cursor-default'
                    )}
                    onClick={(e) => { if (!contact.href) e.preventDefault(); }}
                  >
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', `${contact.color}/10 bg-[${contact.color}]/10`)}>
                      <contact.icon className={cn('w-6 h-6', contact.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider">{contact.label}</div>
                      <div className="text-text-primary truncate">{contact.value}</div>
                    </div>
                    {contact.copyable && (
                      <button
                        onClick={() => copyToClipboard(contact.value, contact.label)}
                        className="p-2 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                        aria-label={`Copy ${contact.label}`}
                      >
                        {copiedField === contact.label ? (
                          <Check className="w-5 h-5 text-accent-primary" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-primary" />
                Connect Online
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card-hover"
                    aria-label={social.label}
                  >
                    {social.icon === 'github' && <Github className="w-5 h-5 text-accent-primary" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-5 h-5 text-accent-secondary" />}
                    {social.icon === 'mail' && <Mail className="w-5 h-5 text-accent-tertiary" />}
                    {social.icon === 'phone' && <Phone className="w-5 h-5 text-accent-warning" />}
                    <span className="text-sm font-medium text-text-secondary">{social.platform}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card variant="bordered" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-fluid-lg font-semibold text-text-primary">Availability</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="primary">Full-time Roles</Badge>
                <Badge variant="secondary">Internships</Badge>
                <Badge variant="tertiary">Open Source</Badge>
                <Badge variant="warning">Collaborations</Badge>
              </div>
              <p className="text-text-secondary text-sm mt-4 text-center">
                Currently in final year at IIT (ISM) Dhanbad. Available for roles starting mid-2027.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Card variant="bordered" className="overflow-hidden max-w-2xl mx-auto">
            <div className="terminal-header px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
              </div>
              <div className="ml-4 text-xs text-text-tertiary font-mono">contact.sh</div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto text-center">
              <pre className="text-text-secondary leading-relaxed"><code>{`$ ./contact.sh --send --to="23je0172@gmail.com"
[✓] Validating email format...
[✓] Checking spam filters...
[✓] Encrypting message (TLS 1.3)...
[✓] Opening default email client...
[✓] Message queued for delivery!

Response time: ~24-48 hours
Preferred topics: Backend roles, GenAI, System Design, Distributed Systems`}</code></pre>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}