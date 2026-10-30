import { Experience, Project, Skill, Achievement, SocialLink, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Ashish0555',
    icon: 'github',
    label: 'View my code on GitHub',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/ashish-meena-2b6481288',
    icon: 'linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    platform: 'Email',
    url: 'mailto:23je0172@gmail.com',
    icon: 'mail',
    label: 'Send me an email',
  },
  {
    platform: 'Phone',
    url: 'tel:+919680662988',
    icon: 'phone',
    label: 'Call me',
  },
];

export const experiences: Experience[] = [
  {
    id: 'zeru-sde-intern',
    company: 'Zeru',
    role: 'SDE Intern',
    location: 'Remote',
    startDate: 'May 2026',
    endDate: 'July 2026',
    current: false,
    description: [
      'Built backend data processing pipelines handling 100K+ transactions, improving anomaly detection accuracy by 25%.',
      'Optimized FastAPI endpoints and aggregation services for internal dashboards, reducing reporting latency by 40%.',
      'Reduced backend execution time by approximately 30% through query optimization and modular service workflows.',
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'SQLAlchemy'],
    achievements: [
      'Processed 100K+ transactions with 25% improved anomaly detection',
      'Reduced reporting latency by 40% via optimized FastAPI endpoints',
      'Cut execution time by 30% through query optimization',
    ],
    type: 'internship',
  },
];

export const projects: Project[] = [
  {
    id: 'stacklens',
    name: 'StackLens',
    description: 'AI-powered document Q&A platform with automated code review for local changes and GitHub pull requests.',
    longDescription: 'StackLens is an AI-powered platform where users upload documents, ask questions, and receive cited answers. It also provides automated reviews of local code changes and GitHub pull requests with an AI code reviewer that flags potential bugs and security issues with severity ratings, suggested fixes, and guardrails that validate findings before optional GitHub inline comments.',
    problem: 'Developers and teams struggle with knowledge retrieval from large document sets and lack automated, intelligent code review that catches bugs and security issues before they reach production.',
    solution: 'Implemented RAG with LangGraph, OpenAI embeddings, and PostgreSQL/pgvector combining vector and keyword search for relevant content retrieval and citation verification. Built FastAPI services with account-isolated ingestion, Redis sessions, Kafka-based event-driven jobs, and observability for latency, token usage, and estimated API costs.',
    impact: [
      'RAG-powered document Q&A with cited answers using hybrid vector + keyword search',
      'AI code reviewer detecting bugs and security issues with severity ratings and suggested fixes',
      'Guardrails validating findings before optional GitHub inline comments',
      'Account-isolated document ingestion with event-driven processing via Kafka',
      'Full observability for latency, token usage, and API cost estimation',
    ],
    technologies: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'PostgreSQL', 'pgvector', 'Redis', 'Kafka', 'Docker'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/Ashish0555/StackLens',
    featured: true,
    images: [],
    architecture: 'AI-enhanced full-stack application with LangGraph agents, vector search, and event-driven architecture',
    challenges: [
      'Building accurate hybrid search combining vector and keyword retrieval',
      'Implementing guardrails for AI code review validation',
      'Account-isolated multi-tenant document ingestion pipeline',
      'Real-time observability for LLM token usage and cost tracking',
    ],
    learnings: [
      'LangGraph for building controllable AI agent workflows',
      'Hybrid search strategies with pgvector and full-text search',
      'Event-driven architecture with Kafka for async AI processing',
      'Cost-aware LLM application design with token observability',
    ],
  },
  {
    id: 'shopscale',
    name: 'ShopScale',
    description: 'Scalable e-commerce backend with concurrent inventory management, event-driven architecture, and reliable order processing.',
    longDescription: 'ShopScale is a production-ready e-commerce backend system built with Python/FastAPI that handles the complete order lifecycle from cart to fulfillment. It implements advanced concurrency control patterns to prevent overselling, uses the Transactional Outbox Pattern for reliable event processing, and features a robust state machine for order management.',
    problem: 'E-commerce systems face critical challenges with concurrent inventory reservation, reliable event processing during payment retries, and maintaining data consistency across distributed operations.',
    solution: 'Built a scalable FastAPI backend with PostgreSQL and SQLAlchemy implementing REST APIs, database transactions, and order state machines. Engineered concurrency-safe inventory reservation using atomic PostgreSQL updates and transactional rollback. Implemented reliable event processing using Kafka and the Transactional Outbox Pattern.',
    impact: [
      'Prevented overselling during concurrent purchases with atomic inventory reservation',
      'Guaranteed exactly-once event delivery using Transactional Outbox Pattern',
      'Automatic inventory restoration on order cancellation',
      'Handles payment retries safely without duplicate events',
    ],
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Kafka', 'Socket.IO', 'Docker'],
    category: 'backend',
    githubUrl: 'https://github.com/Ashish0555/ShopScale',
    featured: true,
    images: [],
    architecture: 'Microservices-ready modular monolith with event-driven architecture',
    challenges: [
      'Implementing lock-free concurrent inventory reservation',
      'Ensuring exactly-once semantics for payment events',
      'Designing idempotent order state transitions',
    ],
    learnings: [
      'Advanced PostgreSQL locking mechanisms and isolation levels',
      'Kafka producer/consumer patterns with idempotency',
      'Transactional Outbox Pattern for reliable messaging',
    ],
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { id: 'python', name: 'Python', category: 'language', proficiency: 95, yearsOfExperience: 3, color: '#3776AB' },
  { id: 'cpp', name: 'C++', category: 'language', proficiency: 90, yearsOfExperience: 4, color: '#00599C' },
  { id: 'javascript', name: 'JavaScript', category: 'language', proficiency: 80, yearsOfExperience: 2, color: '#F7DF1E' },
  { id: 'sql', name: 'SQL', category: 'language', proficiency: 90, yearsOfExperience: 3, color: '#4479A1' },

  // GenAI & Agentic AI
  { id: 'rag', name: 'RAG', category: 'ai-ml', proficiency: 90, yearsOfExperience: 2, color: '#8E44AD' },
  { id: 'langchain', name: 'LangChain', category: 'ai-ml', proficiency: 85, yearsOfExperience: 2, color: '#1C3C6E' },
  { id: 'langgraph', name: 'LangGraph', category: 'ai-ml', proficiency: 85, yearsOfExperience: 2, color: '#1C3C6E' },
  { id: 'tool-calling', name: 'Tool Calling', category: 'ai-ml', proficiency: 80, yearsOfExperience: 2, color: '#8E44AD' },
  { id: 'structured-outputs', name: 'Structured Outputs', category: 'ai-ml', proficiency: 80, yearsOfExperience: 2, color: '#8E44AD' },
  { id: 'prompt-engineering', name: 'Prompt Engineering', category: 'ai-ml', proficiency: 85, yearsOfExperience: 2, color: '#8E44AD' },
  { id: 'llms', name: 'LLMs', category: 'ai-ml', proficiency: 85, yearsOfExperience: 2, color: '#8E44AD' },

  // Backend & Databases
  { id: 'fastapi', name: 'FastAPI', category: 'backend', proficiency: 95, yearsOfExperience: 2, color: '#009688' },
  { id: 'rest-api', name: 'REST APIs', category: 'backend', proficiency: 90, yearsOfExperience: 3, color: '#FF6C37' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiency: 90, yearsOfExperience: 3, color: '#336791' },
  { id: 'pgvector', name: 'pgvector', category: 'database', proficiency: 80, yearsOfExperience: 2, color: '#336791' },
  { id: 'redis', name: 'Redis', category: 'database', proficiency: 85, yearsOfExperience: 2, color: '#DC382D' },
  { id: 'kafka', name: 'Kafka', category: 'infrastructure', proficiency: 80, yearsOfExperience: 2, color: '#231F20' },

  // CS Fundamentals
  { id: 'dsa', name: 'DSA', category: 'cs-fundamentals', proficiency: 95, yearsOfExperience: 4, color: '#E74C3C' },
  { id: 'oops', name: 'OOP', category: 'cs-fundamentals', proficiency: 90, yearsOfExperience: 4, color: '#F39C12' },
  { id: 'dbms', name: 'DBMS', category: 'cs-fundamentals', proficiency: 90, yearsOfExperience: 3, color: '#3498DB' },
  { id: 'os', name: 'Operating Systems', category: 'cs-fundamentals', proficiency: 85, yearsOfExperience: 3, color: '#2ECC71' },
  { id: 'cn', name: 'Computer Networks', category: 'cs-fundamentals', proficiency: 85, yearsOfExperience: 3, color: '#9B59B6' },
  { id: 'system-design', name: 'System Design', category: 'cs-fundamentals', proficiency: 80, yearsOfExperience: 2, color: '#1ABC9C' },
  { id: 'cloud', name: 'Cloud Computing', category: 'cs-fundamentals', proficiency: 75, yearsOfExperience: 2, color: '#FF9900' },

  // AI APIs & Tools (also appear in horizontal AI APIs & Tools row)
  { id: 'openai-api', name: 'OpenAI API', category: 'ai-apis', proficiency: 85, yearsOfExperience: 2, color: '#412991' },
  { id: 'gemini', name: 'Gemini API', category: 'ai-apis', proficiency: 80, yearsOfExperience: 2, color: '#4285F4' },
  { id: 'nemotron', name: 'NVIDIA Nemotron API', category: 'ai-apis', proficiency: 75, yearsOfExperience: 2, color: '#76B900' },
  { id: 'claude-code', name: 'Claude Code', category: 'ai-apis', proficiency: 75, yearsOfExperience: 2, color: '#D97757' },
  { id: 'codex', name: 'Codex', category: 'ai-apis', proficiency: 75, yearsOfExperience: 2, color: '#10A37F' },
];

export const achievements: Achievement[] = [
  // Competitive Programming
  {
    id: 'meta-hackercup',
    title: 'Meta HackerCup 2025 Round 2',
    description: 'Achieved global rank 3256 in Meta HackerCup 2025 Round 2',
    date: '2025',
    organization: 'Meta',
    category: 'competition',
    icon: 'trophy',
    color: '#1877F2',
  },
  {
    id: 'codeforces-rank',
    title: 'Codeforces Round 1055 (Div. 2)',
    description: 'Secured global rank 2678 in Codeforces Round 1055 (Div. 2) Contest',
    date: '2024',
    organization: 'Codeforces',
    category: 'competition',
    icon: 'code',
    color: '#FF6B35',
  },
  {
    id: 'hackerrank-5star',
    title: 'HackerRank 5-Star Problem Solving',
    description: 'Earned 5-Star badge in Problem Solving on HackerRank',
    date: '2024',
    organization: 'HackerRank',
    category: 'award',
    icon: 'star',
    color: '#2EC866',
  },
  {
    id: 'dsa-problems',
    title: '900+ DSA Problems Solved',
    description: 'Solved 900+ DSA problems across Codeforces, LeetCode, and GeeksforGeeks',
    date: '2024',
    organization: 'Competitive Programming',
    category: 'competition',
    icon: 'trophy',
    color: '#E74C3C',
  },

  // Selections & Programs
  {
    id: 'walmart-internship',
    title: 'Walmart Global Tech Summer Internship',
    description: 'Cleared all technical and coding rounds and the interview stage for Summer Internship',
    date: '2025',
    organization: 'Walmart Global Tech',
    category: 'selection',
    icon: 'briefcase',
    color: '#0071CE',
  },
  {
    id: 'google-launchpad',
    title: "Google India's Student Upskilling Launchpad Program",
    description: 'Selected for Google India\'s Student Upskilling Launchpad Program',
    date: '2024',
    organization: 'Google India',
    category: 'selection',
    icon: 'graduation-cap',
    color: '#4285F4',
  },

  // Hackathons
  {
    id: 'hackathon-runnerup',
    title: 'First Runner-Up — Agglomeration 2.0 Hackathon',
    description: 'First Runner-Up at Agglomeration 2.0 Hackathon, CSE Department, IIT (ISM) Dhanbad',
    date: '2024',
    organization: 'IIT (ISM) Dhanbad',
    category: 'competition',
    icon: 'medal',
    color: '#F59E0B',
  },

  // Leadership
  {
    id: 'concetto-organizer',
    title: 'Organiser — Concetto\'25 Annual Tech Fest',
    description: 'Organiser for Concetto\'25, Annual Tech Fest of IIT (ISM) Dhanbad',
    date: '2024-2025',
    organization: 'IIT (ISM) Dhanbad',
    category: 'leadership',
    icon: 'users',
    color: '#8B5CF6',
  },
  {
    id: 'fotomela-organizer',
    title: 'Organiser — FotoMela Photography Fest & Bloodline',
    description: 'Organiser for FotoMela Photography Fest & Bloodline (FastForward India NGO)',
    date: '2023-2024',
    organization: 'FastForward India NGO',
    category: 'leadership',
    icon: 'camera',
    color: '#EC4899',
  },
  {
    id: 'fotofreaks-member',
    title: 'Member — FotoFreaks Photography Club',
    description: 'Member of FotoFreaks, Photography Club of IIT (ISM) Dhanbad',
    date: '2023-2024',
    organization: 'IIT (ISM) Dhanbad',
    category: 'leadership',
    icon: 'users',
    color: '#6366F1',
  },
];

export const education = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  institution: 'Indian Institute of Technology (Indian School of Mines)',
  location: 'Dhanbad, Jharkhand',
  expectedGraduation: 'May 2027',
  currentYear: '3rd Year',
  cgpa: '8.5+',
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Object Oriented Programming',
    'System Design',
    'Cloud Computing',
    'Machine Learning',
  ],
};

export const stats = [
  { value: '100K+', label: 'Transactions Processed', icon: 'database' },
  { value: '25%', label: 'Anomaly Detection Improvement', icon: 'trending-up' },
  { value: '40%', label: 'Latency Reduction', icon: 'zap' },
  { value: '900+', label: 'DSA Problems Solved', icon: 'code' },
  { value: '3256', label: 'Meta HackerCup Global Rank', icon: 'trophy' },
  { value: '5★', label: 'HackerRank Problem Solving', icon: 'star' },
];