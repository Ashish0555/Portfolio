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
} from 'lucide-react';

export function SkillsSection() {
  // Categories for the 2-column grid (excluding CS Fundamentals which is horizontal)
  const gridCategories = [
    { 
      key: 'language', 
      label: 'Languages', 
      icon: Code, 
      color: 'text-accent-primary', 
      bgColor: 'bg-accent-primary/10',
      colSpan: 'md:col-span-1'
    },
    { 
      key: 'backend', 
      label: 'Backend & Systems', 
      icon: Cpu, 
      color: 'text-accent-secondary', 
      bgColor: 'bg-accent-secondary/10',
      colSpan: 'md:col-span-1'
    },
    { 
      key: 'database', 
      label: 'Databases & Storage', 
      icon: Database, 
      color: 'text-accent-tertiary', 
      bgColor: 'bg-accent-tertiary/10',
      colSpan: 'md:col-span-1'
    },
    { 
      key: 'infrastructure', 
      label: 'Infrastructure & DevOps', 
      icon: Server, 
      color: 'text-accent-warning', 
      bgColor: 'bg-accent-warning/10',
      colSpan: 'md:col-span-1'
    },
    { 
      key: 'frontend', 
      label: 'Frontend', 
      icon: Code, 
      color: 'text-accent-secondary', 
      bgColor: 'bg-accent-secondary/10',
      colSpan: 'md:col-span-1'
    },
    { 
      key: 'ai-ml', 
      label: 'AI/ML & Vector Search', 
      icon: Brain, 
      color: 'text-accent-tertiary', 
      bgColor: 'bg-accent-tertiary/10',
      colSpan: 'md:col-span-2'
    },
  ];

  // CS Fundamentals - horizontal row at bottom
  const csFundamentals = skills
    .filter(s => s.category === 'cs-fundamentals')
    .sort((a, b) => b.proficiency - a.proficiency);

  const getCategorySkills = (categoryKey: string) => 
    skills
      .filter(s => s.category === categoryKey)
      .sort((a, b) => b.proficiency - a.proficiency);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-accent-primary border-accent-primary/30 bg-accent-primary/10';
      case 'Advanced': return 'text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10';
      case 'Proficient': return 'text-accent-tertiary border-accent-tertiary/30 bg-accent-tertiary/10';
      case 'Intermediate': return 'text-accent-warning border-accent-warning/30 bg-accent-warning/10';
      default: return 'text-text-tertiary border-border-secondary bg-bg-tertiary/30';
    }
  };

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
          className="text-center max-w-3xl mx-auto mb-12"
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

        {/* Main Skills Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {gridCategories.map((cat, catIndex) => {
            const catSkills = getCategorySkills(cat.key);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: catIndex * 0.06, duration: 0.4 }}
                className={cn(cat.colSpan)}
              >
                <Card variant="bordered" className="h-full p-5 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0', cat.bgColor)}>
                      <cat.icon className={cn('w-4.5 h-4.5', cat.color)} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-fluid-base font-semibold text-text-primary truncate">{cat.label}</h3>
                      <p className="text-text-tertiary text-xs">{catSkills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills as Compact Badges/Pills */}
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.06 + skillIndex * 0.02, duration: 0.3 }}
                      >
                        <span 
                          className={cn(
                            'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default',
                            'hover:shadow-md hover:-translate-y-0.5',
                            `border ${getLevelColor(skill.level)}`
                          )}
                          style={{ borderColor: skill.color }}
                        >
                          {/* Skill Color Dot */}
                          <span 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span className="text-text-primary">{skill.name}</span>
                          {/* Experience Badge */}
                          <span className={cn(
                            'px-1.5 py-0.5 rounded text-[10px] font-mono font-medium',
                            skill.level === 'Expert' && 'bg-accent-primary/20 text-accent-primary',
                            skill.level === 'Advanced' && 'bg-accent-secondary/20 text-accent-secondary',
                            skill.level !== 'Expert' && skill.level !== 'Advanced' && 'bg-bg-tertiary text-text-tertiary'
                          )}>
                            {skill.yearsOfExperience}yr
                          </span>
                          {/* Level Tag */}
                          <span className={cn(
                            'px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider',
                            getLevelColor(skill.level)
                          )}>
                            {skill.level}
                          </span>
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CS Fundamentals - Full Width Horizontal Row */}
        {csFundamentals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: gridCategories.length * 0.06, duration: 0.4 }}
            className="w-full"
          >
            <Card variant="bordered" className="p-5 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-warning/10">
                  <GraduationCap className="w-4.5 h-4.5 text-accent-warning" />
                </div>
                <div>
                  <h3 className="text-fluid-base font-semibold text-text-primary">CS Fundamentals</h3>
                  <p className="text-text-tertiary text-xs">{csFundamentals.length} core concepts</p>
                </div>
              </div>

              {/* Horizontal Skill Pills with Dot Dividers */}
              <div className="flex flex-wrap items-center gap-2">
                {csFundamentals.map((skill, index) => (
                  <motion.span
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gridCategories.length * 0.06 + index * 0.02, duration: 0.3 }}
                    className="flex items-center gap-1"
                  >
                    {index > 0 && (
                      <span className="text-text-tertiary/50 mx-1 select-none">•</span>
                    )}
                    <span 
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default',
                        'hover:shadow-md hover:-translate-y-0.5',
                        `border ${getLevelColor(skill.level)}`
                      )}
                      style={{ borderColor: skill.color }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-text-primary">{skill.name}</span>
                      <span className={cn(
                        'px-1.5 py-0.5 rounded text-[10px] font-mono font-medium',
                        skill.level === 'Expert' && 'bg-accent-primary/20 text-accent-primary',
                        skill.level === 'Advanced' && 'bg-accent-secondary/20 text-accent-secondary',
                        skill.level !== 'Expert' && skill.level !== 'Advanced' && 'bg-bg-tertiary text-text-tertiary'
                      )}>
                        {skill.yearsOfExperience}yr
                      </span>
                      <span className={cn(
                        'px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider',
                        getLevelColor(skill.level)
                      )}>
                        {skill.level}
                      </span>
                    </span>
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}