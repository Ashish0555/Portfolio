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
  Sparkles,
  GraduationCap,
  Terminal,
} from 'lucide-react';

// Helper to convert hex to rgb for gradients
const hexToRgb = (hex: string | undefined) => {
  if (!hex) return { r: 0, g: 212, b: 170 };
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 212, b: 170 };
};

const getSkillGradient = (color: string | undefined) => {
  const { r, g, b } = hexToRgb(color);
  return `linear-gradient(135deg, rgba(${r},${g},${b},0.25) 0%, rgba(${r},${g},${b},0.1) 50%, transparent 100%)`;
};

const getSkillGlow = (color: string | undefined) => {
  const { r, g, b } = hexToRgb(color);
  return `0 4px 20px rgba(${r},${g},${b},0.3), 0 0 0 1px rgba(${r},${g},${b},0.4)`;
};

export function SkillsSection() {
  // Define category order - main grid categories (2-column layout)
  const gridCategories = [
    { 
      key: 'language', 
      label: 'Programming Languages', 
      icon: Code, 
      color: '#00d4aa', 
      bgColor: 'bg-accent-primary/10',
    },
    { 
      key: 'ai-ml', 
      label: 'GenAI & Agentic AI', 
      icon: Sparkles, 
      color: '#a855f7', 
      bgColor: 'bg-accent-tertiary/10',
    },
    { 
      key: 'backend', 
      label: 'Backend & Databases', 
      icon: Server, 
      color: '#f97316', 
      bgColor: 'bg-accent-secondary/10',
    },
    { 
      key: 'database', 
      label: 'Database & Infrastructure', 
      icon: Database, 
      color: '#eab308', 
      bgColor: 'bg-accent-warning/10',
    },
  ];

  // Horizontal row categories (full width)
  const horizontalCategories = [
    { 
      key: 'cs-fundamentals', 
      label: 'CS Fundamentals', 
      icon: GraduationCap, 
      color: '#00d4aa', 
      bgColor: 'bg-accent-primary/10',
    },
    { 
      key: 'ai-apis', 
      label: 'AI APIs & Tools', 
      icon: Terminal, 
      color: '#f97316', 
      bgColor: 'bg-accent-secondary/10',
    },
  ];

  const getCategorySkills = (categoryKey: string) => {
    if (categoryKey === 'ai-apis') {
      const aiApiSkillIds = ['openai-api', 'gemini', 'nemotron', 'claude-code', 'codex'];
      return skills.filter(s => aiApiSkillIds.includes(s.id)).sort((a, b) => b.proficiency - a.proficiency);
    }
    return skills
      .filter(s => s.category === categoryKey)
      .sort((a, b) => b.proficiency - a.proficiency);
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
            Technologies and frameworks I use to build scalable systems and intelligent applications.
          </p>
        </motion.div>

        {/* Main Skills Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
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
              >
                <Card variant="bordered" className="h-full p-5 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5 relative overflow-hidden">
                  {/* Subtle category background gradient */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, ${cat.color}10, transparent)` }} />
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}05)` }}>
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cat.color}30, transparent)` }} />
                      <cat.icon className="w-4.5 h-4.5 relative" style={{ color: cat.color }} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-fluid-base font-semibold text-text-primary truncate">{cat.label}</h3>
                      <p className="text-text-tertiary text-xs">{catSkills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills as Compact Badges/Pills - COLORFUL VERSION */}
                  <div className="flex flex-wrap gap-2 relative z-10">
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
                            'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default',
                            'hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]'
                          )}
                          style={{
                            background: getSkillGradient(skill.color),
                            border: `1px solid ${skill.color}66`,
                            color: skill.color,
                            boxShadow: `0 2px 8px ${skill.color}33`,
                          }}
                        >
                          {/* Skill color indicator dot */}
                          <span 
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
                          />
                          <span className="text-text-primary font-medium">{skill.name}</span>
                          {/* Experience indicator */}
                          <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full" style={{ 
                            backgroundColor: `${skill.color}20`, 
                            color: skill.color,
                            border: `1px solid ${skill.color}40`
                          }}>
                            {skill.yearsOfExperience}yr
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

        {/* Horizontal Rows - CS Fundamentals & AI APIs & Tools */}
        <div className="space-y-6">
          {horizontalCategories.map((cat, catIndex) => {
            const catSkills = getCategorySkills(cat.key);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: gridCategories.length * 0.06 + catIndex * 0.1, duration: 0.4 }}
              >
                <Card variant="bordered" className="p-5 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5 relative overflow-hidden">
                  {/* Subtle category background gradient */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(90deg, ${cat.color}10, transparent)` }} />
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}05)` }}>
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${cat.color}30, transparent)` }} />
                      <cat.icon className="w-4.5 h-4.5 relative" style={{ color: cat.color }} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-fluid-base font-semibold text-text-primary truncate">{cat.label}</h3>
                      <p className="text-text-tertiary text-xs">{catSkills.length} technologies</p>
                    </div>
                  </div>

                  {/* Horizontal skill pills with dot separators - COLORFUL */}
                  <div className="flex flex-wrap items-center gap-2 relative z-10">
                    {catSkills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gridCategories.length * 0.06 + catIndex * 0.1 + skillIndex * 0.02, duration: 0.3 }}
                        className="flex items-center gap-1"
                      >
                        {skillIndex > 0 && (
                          <span className="text-text-tertiary/50 mx-1 select-none">•</span>
                        )}
                        <span 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                          style={{
                            background: getSkillGradient(skill.color),
                            border: `1px solid ${skill.color}66`,
                            color: skill.color,
                            boxShadow: `0 2px 8px ${skill.color}33`,
                          }}
                        >
                          <span className="text-text-primary font-medium">{skill.name}</span>
                          <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full" style={{ 
                            backgroundColor: `${skill.color}20`, 
                            color: skill.color,
                            border: `1px solid ${skill.color}40`
                          }}>
                            {skill.yearsOfExperience}yr
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
      </div>
    </section>
  );
}