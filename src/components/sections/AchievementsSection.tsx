'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { achievements } from '@/lib/data';
import { Card, Badge } from '@/components/ui';
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Users,
  Sparkles,
} from 'lucide-react';

export function AchievementsSection() {
  const categoryConfig = {
    competition: { icon: Trophy, label: 'Competitions', color: 'text-accent-warning', bg: 'bg-accent-warning/10' },
    award: { icon: Award, label: 'Awards', color: 'text-accent-primary', bg: 'bg-accent-primary/10' },
    selection: { icon: Sparkles, label: 'Selections', color: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
    leadership: { icon: Users, label: 'Leadership', color: 'text-accent-tertiary', bg: 'bg-accent-tertiary/10' },
    certification: { icon: Star, label: 'Certifications', color: 'text-accent-primary', bg: 'bg-accent-primary/10' },
    publication: { icon: Code, label: 'Publications', color: 'text-accent-tertiary', bg: 'bg-accent-tertiary/10' },
  };

  const categories = Object.keys(categoryConfig) as (keyof typeof categoryConfig)[];

  return (
    <section
      id="achievements"
      className="relative section-padding overflow-hidden"
      aria-labelledby="achievements-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="warning" className="mb-4 inline-block">
            <Trophy className="w-4 h-4 mr-1" />
            Achievements
          </Badge>
          <h2 id="achievements-title" className="section-title mb-4">
            Recognition & <br />
            <span className="text-gradient">Accomplishments</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Competitive programming rankings, hackathon wins, leadership roles, and selective program admissions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {categories.map((cat) => {
              const config = categoryConfig[cat];
              const count = achievements.filter(a => a.category === cat).length;
              const Icon = config.icon;
              return (
                <button
                  key={cat}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2',
                    'focus:outline-none focus:ring-2 focus:ring-accent-primary/50',
                    'bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary hover:border-border-secondary'
                  )}
                  role="tab"
                  aria-label={`${config.label} (${count})`}
                >
                  <Icon className={cn('w-4 h-4', config.color)} />
                  {config.label}
                  <span className="px-2 py-0.5 text-xs bg-bg-primary/50 rounded-full">{count}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const config = categoryConfig[achievement.category];
            const Icon = config.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <Card variant="interactive" className="h-full relative overflow-hidden group">
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" size="sm" className={cn(config.bg)}>
                      <Icon className={cn('w-3 h-3 mr-1', config.color)} />
                      {config.label}
                    </Badge>
                  </div>

                  <div className="p-6">
                    {/* Icon & Date */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0', config.bg)}>
                        <Icon className={cn('w-7 h-7', config.color)} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-text-tertiary font-mono">{achievement.date}</div>
                        <div className="text-xs text-text-tertiary">{achievement.organization}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-fluid-lg font-semibold text-text-primary mb-2">{achievement.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{achievement.description}</p>

                    {/* Link */}
                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group-hover:gap-3"
                        style={{ color: config.color }}
                      >
                        View Details
                        <Sparkles className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 1.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-accent-primary/10 group-hover:via-transparent group-hover:to-transparent rounded-2xl pointer-events-none"
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Card variant="elevated">
            <div className="p-8">
              <h3 className="text-fluid-xl font-semibold text-text-primary mb-6 text-center flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-accent-warning" />
                Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatItem
                  icon={Trophy}
                  value={achievements.filter(a => a.category === 'competition').length}
                  label="Competitions"
                  color="text-accent-warning"
                />
                <StatItem
                  icon={Sparkles}
                  value={achievements.filter(a => a.category === 'selection').length}
                  label="Selective Programs"
                  color="text-accent-secondary"
                />
                <StatItem
                  icon={Users}
                  value={achievements.filter(a => a.category === 'leadership').length}
                  label="Leadership Roles"
                  color="text-accent-tertiary"
                />
                <StatItem
                  icon={Award}
                  value={achievements.filter(a => a.category === 'award').length}
                  label="Awards & Honors"
                  color="text-accent-primary"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, label, color }: { 
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3', `${color}/10 bg-[${color}]/10`)}>
        <Icon className={cn('w-6 h-6', color)} />
      </div>
      <div className={cn('text-fluid-3xl font-display font-bold', color)}>{value}+</div>
      <div className="text-sm text-text-tertiary mt-1">{label}</div>
    </motion.div>
  );
}