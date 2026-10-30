'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/data';
import { Card, Badge, Button } from '@/components/ui';
import { 
  Github, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Database,
  Zap,
  Brain,
  Server,
  Code,
  ArrowRight,
  Check,
  X,
} from 'lucide-react';

type FilterValue = 'all' | 'backend' | 'ai-ml';

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterValue>('all');

  const categories: { value: FilterValue; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: projects.length },
    { value: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { value: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categoryIcons = {
    backend: Database,
    'ai-ml': Brain,
    fullstack: Code,
    infrastructure: Server,
    tooling: Code,
  };

  const categoryColors = {
    backend: 'text-accent-primary',
    'ai-ml': 'text-accent-tertiary',
    fullstack: 'text-accent-secondary',
    infrastructure: 'text-accent-warning',
    tooling: 'text-accent-secondary',
  };

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <Badge variant="tertiary" className="mb-4 inline-block">
                <Code className="w-4 h-4 mr-1" />
                Projects
              </Badge>
              <h2 id="projects-title" className="section-title mb-4">
                Featured <br />
                <span className="text-gradient">Work</span>
              </h2>
              <p className="section-subtitle">
                Production-ready systems showcasing backend expertise, distributed architectures, and AI integration.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  role="tab"
                  aria-selected={filter === cat.value}
                  aria-controls={`panel-${cat.value}`}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-accent-primary/50',
                    filter === cat.value
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary shadow-glow-sm'
                      : 'bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary hover:border-border-secondary'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.label}
                  <span className="ml-2 px-2 py-0.5 text-xs bg-bg-primary/50 rounded-full">
                    {cat.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedProject === project.id}
                onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                CategoryIcon={categoryIcons[project.category] || Code}
                categoryColor={categoryColors[project.category] || 'text-accent-primary'}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expanded Project Detail */}
        <AnimatePresence>
          {expandedProject && (
            <ProjectDetail
              project={projects.find(p => p.id === expandedProject)!}
              onClose={() => setExpandedProject(null)}
              CategoryIcon={categoryIcons[projects.find(p => p.id === expandedProject)!.category] || Code}
              categoryColor={categoryColors[projects.find(p => p.id === expandedProject)!.category] || 'text-accent-primary'}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index, 
  isExpanded, 
  onToggle, 
  CategoryIcon, 
  categoryColor 
}: {
  project: typeof projects[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  CategoryIcon: React.ComponentType<{ className?: string }>;
  categoryColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      layout
    >
      <Card 
        variant="interactive" 
        onClick={onToggle}
        className="h-full flex flex-col"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(); }}
        aria-expanded={isExpanded}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', `${categoryColor}/10 bg-[${categoryColor}]/10`)}>
              <CategoryIcon className={cn('w-6 h-6', categoryColor)} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-fluid-lg font-semibold text-text-primary truncate">{project.name}</h3>
                {project.featured && (
                  <Badge variant="warning" size="sm">Featured</Badge>
                )}
              </div>
              <p className="text-text-tertiary text-sm truncate">{project.description}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn('p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary transition-colors', categoryColor)}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 6).map((tech, i) => (
            <Badge key={tech} variant="secondary" size="sm" className="grow-0">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 6 && (
            <Badge variant="tertiary" size="sm">+{project.technologies.length - 6} more</Badge>
          )}
        </div>

        {/* Impact highlights */}
        <div className="space-y-2 mb-4 border-t border-border-primary/50 pt-4">
          {project.impact.slice(0, 3).map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <Check className={cn('w-4 h-4 flex-shrink-0 mt-0.5', categoryColor)} />
              <span className="leading-relaxed">{impact}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border-primary/50 mt-auto">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                aria-label={`View ${project.name} on GitHub`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-200"
                aria-label={`View ${project.name} live demo`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <span className="text-xs text-text-tertiary flex items-center gap-1">
            <ArrowRight className="w-3 h-3" />
            Click to expand
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

function ProjectDetail({ 
  project, 
  onClose, 
  CategoryIcon, 
  categoryColor 
}: {
  project: typeof projects[0];
  onClose: () => void;
  CategoryIcon: React.ComponentType<{ className?: string }>;
  categoryColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/95 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card shadow-glow-lg"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 flex-1">
              <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0', `${categoryColor}/10 bg-[${categoryColor}]/10`)}>
                <CategoryIcon className={cn('w-7 h-7', categoryColor)} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 id="project-detail-title" className="text-fluid-2xl font-semibold text-text-primary">{project.name}</h3>
                  {project.featured && <Badge variant="warning">Featured</Badge>}
                </div>
                <p className="text-text-secondary">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Problem Statement</h4>
            <p className="text-text-secondary leading-relaxed">{project.problem}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Solution</h4>
            <p className="text-text-secondary leading-relaxed">{project.solution}</p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div className="mb-8 code-block">
              <div className="flex items-center gap-2 mb-3 text-text-tertiary">
                <Server className="w-4 h-4" />
                <span className="font-mono text-sm">Architecture</span>
              </div>
              <p className="font-mono text-sm text-text-secondary">{project.architecture}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-warning" />
              Impact & Results
            </h4>
            <ul className="space-y-2">
              {project.impact.map((impact, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <Check className={cn('w-5 h-5 flex-shrink-0 mt-0.5', categoryColor)} />
                  <span className="leading-relaxed">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-accent-tertiary" />
                Technical Challenges
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-accent-tertiary" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-accent-secondary" />
                Key Learnings
              </h4>
              <ul className="space-y-2">
                {project.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-accent-secondary" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-border-primary/50">
            {project.githubUrl && (
              <Button variant="primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View Source Code
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="outline" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Zap className="w-5 h-5" />
                Demo Video
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}