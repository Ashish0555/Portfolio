'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { education, stats } from '@/lib/data';
import { Card, Badge } from '@/components/ui';
import { GraduationCap, Award, Target, BookOpen, Code, Brain, Zap, Server, Sparkles } from 'lucide-react';

export function AboutSection() {
  const aboutItems = [
    {
      icon: Server,
      title: 'Backend & Distributed Systems',
      description: 'Building scalable APIs, event-driven architectures, and distributed systems using FastAPI, PostgreSQL, Kafka, and Redis.',
      color: 'text-accent-primary',
      bgColor: 'bg-accent-primary/10',
    },
    {
      icon: Sparkles,
      title: 'GenAI & Agentic AI',
      description: 'Developing RAG systems, LangGraph agents, vector search with pgvector, and LLM integration for intelligent applications.',
      color: 'text-accent-tertiary',
      bgColor: 'bg-accent-tertiary/10',
    },
    {
      icon: Code,
      title: 'Developer Tools & Automation',
      description: 'Creating AI-powered code review tools, automated document processing, and intelligent workflows that boost productivity.',
      color: 'text-accent-secondary',
      bgColor: 'bg-accent-secondary/10',
    },
    {
      icon: Zap,
      title: 'Performance & Reliability',
      description: 'Query optimization, concurrency control, latency reduction, and system reliability at scale.',
      color: 'text-accent-warning',
      bgColor: 'bg-accent-warning/10',
    },
  ];

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="primary" className="mb-4 inline-block">
            <Code className="w-4 h-4 mr-1" />
            About Me
          </Badge>
          <h2 id="about-title" className="section-title mb-4">
            Software Engineer <br />
            <span className="text-gradient">Building Intelligent Systems</span>
          </h2>
          <p className="section-subtitle mx-auto text-fluid-base">
            I'm a final-year Computer Science student at IIT (ISM) Dhanbad with a deep passion for 
            backend engineering, distributed systems, and GenAI-powered applications. 
            My work spans scalable backend infrastructure, RAG-based AI systems, and intelligent developer tools.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-fluid-xl font-semibold text-text-primary mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-full" />
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aboutItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Card variant="interactive" className="h-full">
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', item.bgColor)}>
                      <item.icon className={cn('w-6 h-6', item.color)} />
                    </div>
                    <h4 className="text-fluid-lg font-semibold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Stats */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-fluid-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-accent-secondary to-accent-tertiary rounded-full" />
                Education
              </h3>
              <Card variant="elevated" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-fluid-xl font-semibold text-text-primary mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-accent-primary font-medium mb-2">{education.institution}</p>
                    <p className="text-text-tertiary text-sm mb-4">{education.location}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" size="sm">{education.currentYear}</Badge>
                      <Badge variant="tertiary" size="sm">Expected {education.expectedGraduation}</Badge>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Relevant coursework: {education.relevantCoursework.slice(0, 5).join(', ')}...
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-fluid-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-accent-tertiary to-accent-warning rounded-full" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card variant="interactive" className="text-center p-6">
                      <div className="text-fluid-2xl sm:fluid-3xl font-display font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-tertiary">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-fluid-xl font-semibold text-text-primary mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-accent-warning to-accent-error rounded-full" />
              Engineering Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Correctness First',
                  desc: 'Type safety, comprehensive testing, and formal verification where it matters. Bugs in production are expensive.',
                  icon: Award,
                },
                {
                  title: 'Observability by Default',
                  desc: 'Structured logging, distributed tracing, and metrics baked in from day one. You can\'t improve what you can\'t measure.',
                  icon: Target,
                },
                {
                  title: 'Continuous Learning',
                  desc: '900+ DSA problems solved, constant exploration of new patterns, and sharing knowledge through open source.',
                  icon: BookOpen,
                },
              ].map((philosophy, i) => (
                <motion.div
                  key={philosophy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card variant="bordered" className="h-full">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                      <philosophy.icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <h4 className="text-fluid-lg font-semibold text-text-primary mb-2">{philosophy.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{philosophy.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}