'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { experiences } from '@/lib/data';
import { Card, Badge } from '@/components/ui';
import { Briefcase, Building2, Calendar, CheckCircle, ArrowRight, Code, Database, Server, Zap } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative section-padding overflow-hidden"
      aria-labelledby="experience-title"
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
            <Briefcase className="w-4 h-4 mr-1" />
            Experience
          </Badge>
          <h2 id="experience-title" className="section-title mb-4">
            Professional <br />
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building production systems, optimizing performance, and solving complex engineering challenges.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-20 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                  className="w-8 h-8 rounded-full border-4 border-bg-primary flex items-center justify-center z-10"
                  style={{
                    background: 'linear-gradient(135deg, #00d4aa, #06b6d4)',
                    boxShadow: '0 0 20px rgba(0, 212, 170, 0.5)',
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-bg-primary" />
                </motion.div>
              </div>

              {/* Experience Card */}
              <Card variant="interactive" className="relative overflow-hidden">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="text-fluid-xl font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-accent-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-tertiary flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} – {exp.endDate || 'Present'}
                    </span>
                    <Badge variant={exp.type === 'internship' ? 'secondary' : 'primary'} size="sm">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.05 }}
                      className="text-text-secondary leading-relaxed relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent-primary/60"
                    >
                      {desc}
                    </motion.p>
                  ))}
                </div>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent-warning" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-text-secondary relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-warning"
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent-secondary" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 + i * 0.03 }}
                        className="tag tag-primary group-hover:tag-secondary transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Education timeline item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: experiences.length * 0.2, duration: 0.6 }}
            className="relative pl-20 pt-8"
          >
            <div className="absolute left-4 top-10">
              <div className="w-8 h-8 rounded-full border-4 border-bg-primary flex items-center justify-center z-10 bg-gradient-to-br from-accent-tertiary to-accent-secondary">
                <Server className="w-5 h-5 text-bg-primary" />
              </div>
            </div>

            <Card variant="bordered">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-tertiary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-accent-tertiary" />
                </div>
                <div>
                  <h3 className="text-fluid-lg font-semibold text-text-primary">B.Tech Computer Science & Engineering</h3>
                  <p className="text-accent-tertiary font-medium">IIT (ISM) Dhanbad</p>
                  <p className="text-text-tertiary text-sm">Expected May 2027 • Dhanbad, Jharkhand</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}