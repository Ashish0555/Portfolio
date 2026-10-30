'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { skills } from '@/lib/data';
import { Card, Badge } from '@/components/ui';
import { 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Brain, 
  Wrench, 
  GraduationCap,
  BarChart,
} from 'lucide-react';

export function SkillsSection() {
  const categories = [
    { key: 'language', label: 'Languages', icon: Code, color: 'text-accent-primary' },
    { key: 'backend', label: 'Backend', icon: Cpu, color: 'text-accent-secondary' },
    { key: 'database', label: 'Databases', icon: Database, color: 'text-accent-tertiary' },
    { key: 'infrastructure', label: 'Infrastructure', icon: Server, color: 'text-accent-warning' },
    { key: 'frontend', label: 'Frontend', icon: Code, color: 'text-accent-secondary' },
    { key: 'ai-ml', label: 'AI/ML', icon: Brain, color: 'text-accent-tertiary' },
    { key: 'tools', label: 'Tools', icon: Wrench, color: 'text-accent-primary' },
    { key: 'cs-fundamentals', label: 'CS Fundamentals', icon: GraduationCap, color: 'text-accent-warning' },
  ];

  const getCategorySkills = (categoryKey: string) => 
    skills.filter(s => s.category === categoryKey).sort((a, b) => b.proficiency - a.proficiency);

  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden"
      aria-labelledby="skills-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="tertiary" className="mb-4 inline-block">
            <Cpu className="w-4 h-4 mr-1" />
            Technical Skills
          </Badge>
          <h2 id="skills-title" className="section-title mb-4">
            Tech Stack & <br />
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Deep proficiency across the full backend stack, with growing expertise in AI/ML and distributed systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => {
            const catSkills = getCategorySkills(cat.key);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: catIndex * 0.08 }}
              >
                <Card variant="bordered" className="h-full overflow-hidden">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 p-6 pb-0">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', `${cat.color}/10 bg-[${cat.color}]/10`)}>
                      <cat.icon className={cn('w-5 h-5', cat.color)} />
                    </div>
                    <div>
                      <h3 className="text-fluid-lg font-semibold text-text-primary">{cat.label}</h3>
                      <p className="text-text-tertiary text-sm">{catSkills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="px-6 pb-6 space-y-4">
                    {catSkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.08 + skillIndex * 0.03 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                            {skill.yearsOfExperience > 0 && (
                              <Badge variant="secondary" size="sm" className="text-xs">
                                {skill.yearsOfExperience}yr
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm font-mono text-text-tertiary">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: catIndex * 0.08 + skillIndex * 0.03 + 0.3 }}
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color || 'var(--accent-primary)'}, ${cat.color.replace('text-', '')})`,
                              boxShadow: `0 0 10px ${skill.color || 'var(--accent-primary)'}`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: categories.length * 0.08 }}
          className="mt-12"
        >
          <Card variant="bordered">
            <div className="p-6">
              <h3 className="text-fluid-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-accent-primary" />
                Proficiency Scale
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { range: '90-100%', label: 'Expert', desc: 'Production architecture & optimization', color: 'text-accent-primary' },
                  { range: '75-89%', label: 'Advanced', desc: 'Complex features & system design', color: 'text-accent-secondary' },
                  { range: '60-74%', label: 'Proficient', desc: 'Independent development & debugging', color: 'text-accent-tertiary' },
                  { range: '40-59%', label: 'Intermediate', desc: 'Guided development & learning', color: 'text-accent-warning' },
                  { range: '0-39%', label: 'Beginner', desc: 'Exploring & experimenting', color: 'text-text-tertiary' },
                ].map((level) => (
                  <div key={level.label} className="text-center p-4 rounded-xl bg-bg-tertiary/30">
                    <div className="text-fluid-xl font-display font-bold mb-1" style={{ color: level.color }}>{level.range}</div>
                    <div className="text-sm font-medium text-text-primary mb-1">{level.label}</div>
                    <div className="text-xs text-text-tertiary">{level.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}