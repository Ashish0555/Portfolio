'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowDown, Terminal, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui';
import { FloatingCodeSnippets } from '@/components/background/BackgroundEffects';

export function HeroSection() {
  const roles = [
    'Backend Engineer',
    'Distributed Systems Enthusiast',
    'AI/ML Engineer',
    'Competitive Programmer',
    'Open Source Contributor',
  ];

  const stats = [
    { value: '100K+', label: 'Transactions Processed' },
    { value: '25%', label: 'Anomaly Detection ↑' },
    { value: '40%', label: 'Latency Reduction ↓' },
    { value: '900+', label: 'DSA Problems Solved' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Floating code snippets */}
      <FloatingCodeSnippets />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Terminal-style header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="terminal-window max-w-xs"
            >
              <div className="terminal-header">
                <div className="flex items-center gap-1.5">
                  <span className="terminal-dot bg-red-500" />
                  <span className="terminal-dot bg-yellow-500" />
                  <span className="terminal-dot bg-green-500" />
                </div>
                <div className="ml-4 text-xs text-text-tertiary font-mono">~/portfolio</div>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-text-tertiary mb-2">
                  <span className="text-accent-primary">$</span>
                  <span className="text-accent-secondary">whoami</span>
                </div>
                <div className="text-text-primary ml-6">ashish_meena@iitism</div>
                <div className="flex items-center gap-2 text-text-tertiary mt-3 mb-2">
                  <span className="text-accent-primary">$</span>
                  <span className="text-accent-secondary">cat role.txt</span>
                </div>
                <div className="ml-6 min-h-[60px]">
                  <TypeAnimation
                    sequence={[
                      'Backend Engineer', 2000, 1000,
                      'Distributed Systems Enthusiast', 2000, 1000,
                      'AI/ML Engineer', 2000, 1000,
                      'Competitive Programmer', 2000, 1000,
                      'Open Source Contributor', 2000, 1000,
                    ]}
                    wrapper="span"
                    className="text-accent-primary font-medium"
                    cursor={true}
                  />
                </div>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="space-y-4"
            >
              <h1
                id="hero-title"
                className="text-fluid-4xl sm:fluid-5xl lg:fluid-6xl font-display font-extrabold tracking-tight leading-tight"
              >
                <span className="text-text-primary">Building</span>{' '}
                <span className="text-gradient">Scalable Backend Systems</span>{' '}
                <span className="text-text-primary">& AI Products</span>
              </h1>

              <p className="text-fluid-lg sm:fluid-xl text-text-secondary max-w-xl leading-relaxed">
                SDE Intern at Zeru • IIT (ISM) Dhanbad CSE '27 • 
                Crafting high-performance APIs, event-driven architectures, 
                and intelligent systems that scale.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" href="#projects">
                View Projects
                <Code className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Get In Touch
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-4 border-t border-border-primary/50"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-fluid-2xl sm:fluid-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-tertiary mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-bg-tertiary/50 border border-border-primary/50 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon === 'github' && <Github className="w-6 h-6" />}
                  {social.icon === 'linkedin' && <Linkedin className="w-6 h-6" />}
                  {social.icon === 'mail' && <Mail className="w-6 h-6" />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="relative"
            >
              {/* Terminal window showcase */}
              <div className="terminal-window glass-card-hover shadow-glow-lg max-w-2xl mx-auto">
                <div className="terminal-header">
                  <div className="flex items-center gap-1.5">
                    <span className="terminal-dot bg-red-500" />
                    <span className="terminal-dot bg-yellow-500" />
                    <span className="terminal-dot bg-green-500" />
                  </div>
                  <div className="ml-4 flex-1 text-xs text-text-tertiary font-mono text-center">
                    shopscale-backend / main.py
                  </div>
                  <div className="flex items-center gap-1 text-xs text-text-tertiary">
                    <Zap className="w-3 h-3 text-accent-warning" />
                    <span>FastAPI</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto max-h-[500px]">
                  <pre className="text-text-primary leading-relaxed"><code>{`from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from kafka import KafkaProducer
import asyncio

app = FastAPI(title="ShopScale API")

# Dependency injection
async def get_db() -> AsyncSession:
    async with SessionLocal() as session:
        yield session

# Concurrency-safe inventory reservation
@app.post("/orders", status_code=201)
async def create_order(
    order: OrderCreate,
    db: AsyncSession = Depends(get_db)
):
    async with db.begin():
        # Atomic reservation with row locking
        result = await db.execute(
            select(Product)
            .where(Product.id == order.product_id)
            .with_for_update(nowait=True)
        )
        product = result.scalar_one_or_none()
        
        if not product or product.stock < order.quantity:
            raise HTTPException(409, "Insufficient inventory")
        
        product.stock -= order.quantity
        order_obj = Order(**order.model_dump())
        db.add(order_obj)
        await db.flush()
        
        # Transactional Outbox Pattern
        outbox_event = OutboxEvent(
            aggregate_id=order_obj.id,
            event_type="ORDER_CREATED",
            payload=order_obj.model_dump_json()
        )
        db.add(outbox_event)
    
    # Async Kafka publish (after commit)
    await publish_event(outbox_event)
    return order_obj

# Event-driven order processing
async def publish_event(event: OutboxEvent):
    producer = KafkaProducer(
        bootstrap_servers="kafka:9092",
        value_serializer=lambda v: v.encode()
    )
    future = producer.send(
        "orders",
        key=str(event.aggregate_id).encode(),
        value=event.payload
    )
    await asyncio.wrap_future(future)
    event.published = True`}</code></pre>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 hidden lg:block">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-card p-3 shadow-glow-sm transform-gpu rotate-3"
                >
                  <div className="flex items-center gap-2 text-accent-primary">
                    <Terminal className="w-5 h-5" />
                    <span className="font-mono text-sm">FastAPI</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-4 hidden lg:block">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="glass-card p-3 shadow-glow-sm transform-gpu -rotate-2"
                >
                  <div className="flex items-center gap-2 text-accent-secondary">
                    <Code className="w-5 h-5" />
                    <span className="font-mono text-sm">PostgreSQL + Kafka</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute top-1/2 right-0 hidden lg:block">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="glass-card p-4 shadow-glow-md"
                >
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-gradient">25%</div>
                    <div className="text-xs text-text-tertiary">Anomaly Detection Boost</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}