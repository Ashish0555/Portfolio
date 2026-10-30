'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/data';
import { Card, Button, Input, Textarea, Badge } from '@/components/ui';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Code,
  Terminal,
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, always succeed
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'ashishmeena9785110509@gmail.com', href: 'mailto:ashishmeena9785110509@gmail.com', color: 'text-accent-primary' },
                  { icon: Phone, label: 'Phone', value: '+91 96806 62988', href: 'tel:+919680662988', color: 'text-accent-secondary' },
                  { icon: MapPin, label: 'Location', value: 'Dhanbad, Jharkhand, India', href: null, color: 'text-accent-tertiary' },
                ].map((contact, i) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                      {contact.href && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-text-tertiary"
                        >
                          <Code className="w-5 h-5" />
                        </motion.div>
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
                <div className="flex flex-wrap gap-3">
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
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Full-time Roles</Badge>
                  <Badge variant="secondary">Internships</Badge>
                  <Badge variant="tertiary">Open Source</Badge>
                  <Badge variant="warning">Collaborations</Badge>
                </div>
                <p className="text-text-secondary text-sm mt-4">
                  Currently in final year at IIT (ISM) Dhanbad. Available for roles starting mid-2027.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card variant="elevated" className="h-full">
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="text-fluid-xl font-semibold text-text-primary">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      label="Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      disabled={status === 'submitting'}
                      autoComplete="name"
                    />
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      disabled={status === 'submitting'}
                      autoComplete="email"
                    />
                  </div>

                  <Input
                    name="subject"
                    label="Subject"
                    placeholder="Project inquiry, job opportunity, etc."
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    disabled={status === 'submitting'}
                  />

                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="Tell me about your project, role, or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    disabled={status === 'submitting'}
                    rows={5}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' && (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    )}
                    {status !== 'submitting' && (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">Failed to send message. Please try again or email directly.</span>
                    </motion.div>
                  )}

                  <p className="text-xs text-text-tertiary text-center">
                    By submitting this form, you agree to my{' '}
                    <a href="#privacy" className="text-accent-primary hover:underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#terms" className="text-accent-primary hover:underline">Terms of Service</a>
                  </p>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Card variant="bordered" className="overflow-hidden">
            <div className="terminal-header px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
              </div>
              <div className="ml-4 text-xs text-text-tertiary font-mono">contact.sh</div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-text-secondary leading-relaxed"><code>{`$ ./contact.sh --send --to="ashishmeena9785110509@gmail.com"
[✓] Validating email format...
[✓] Checking spam filters...
[✓] Encrypting message (TLS 1.3)...
[✓] Queuing for delivery...
[✓] Message sent successfully!

Response time: ~24-48 hours
Preferred topics: Backend roles, System Design, Distributed Systems, AI/ML`}</code></pre>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}