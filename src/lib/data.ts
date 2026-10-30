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
    url: 'mailto:ashishmeena9785110509@gmail.com',
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
      'Engineered scalable backend data processing pipelines handling 100K+ transactions, improving anomaly detection accuracy by 25%.',
      'Designed and optimized backend aggregation services and FastAPI endpoints powering internal dashboards, reducing reporting latency by 40%.',
      'Improved system efficiency through optimized queries and modular backend workflows, reducing execution time by 30% and enhancing reliability.',
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
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Kafka', 'Socket.IO', 'Docker', 'Next.js'],
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
  {
    id: 'codesage',
    name: 'CodeSage',
    description: 'AI-powered DSA and interview coaching platform with coding practice, AI hints, concept tutoring, and mock interviews.',
    longDescription: 'CodeSage is an intelligent learning platform that combines competitive programming practice with AI-powered personalized coaching. It features sandboxed code execution with hidden tests, RAG-based contextual tutoring using Gemini and pgvector, and real-time streaming responses for interactive learning.',
    problem: 'Existing coding platforms lack personalized AI guidance, contextual explanations, and adaptive learning paths. Students struggle with understanding concepts, not just solving problems.',
    solution: 'Developed Python/FastAPI services with PostgreSQL, JWT authentication, RBAC, and sandboxed code execution with hidden tests and automated verdict generation. Implemented AI-powered tutoring using Gemini, RAG, pgvector, and SSE streaming for contextual and interactive learning.',
    impact: [
      'Sandboxed code execution with hidden test cases and automated verdicts',
      'RAG-powered AI tutoring with contextual code explanations',
      'Real-time SSE streaming for interactive learning experience',
      'Role-based access control for different user tiers',
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Gemini', 'pgvector', 'React', 'JWT', 'RBAC', 'SSE'],
    category: 'ai-ml',
    githubUrl: 'https://github.com/Ashish0555/CodeSage',
    featured: true,
    images: [],
    architecture: 'AI-enhanced full-stack application with vector search and streaming responses',
    challenges: [
      'Secure sandboxed code execution environment',
      'Low-latency vector similarity search with pgvector',
      'Streaming AI responses with Server-Sent Events',
    ],
    learnings: [
      'RAG implementation with pgvector for semantic search',
      'Gemini API optimization for educational use cases',
      'Secure code execution isolation strategies',
    ],
  },
];

export const skills: Skill[] = [
  // Languages
  { id: 'cpp', name: 'C++', category: 'language', proficiency: 90, yearsOfExperience: 4, color: '#00599C' },
  { id: 'c', name: 'C', category: 'language', proficiency: 85, yearsOfExperience: 4, color: '#A8B9CC' },
  { id: 'python', name: 'Python', category: 'language', proficiency: 95, yearsOfExperience: 3, color: '#3776AB' },
  { id: 'javascript', name: 'JavaScript', category: 'language', proficiency: 80, yearsOfExperience: 2, color: '#F7DF1E' },
  { id: 'sql', name: 'SQL', category: 'language', proficiency: 90, yearsOfExperience: 3, color: '#4479A1' },

  // Backend
  { id: 'fastapi', name: 'FastAPI', category: 'backend', proficiency: 95, yearsOfExperience: 2, color: '#009688' },
  { id: 'rest-api', name: 'REST APIs', category: 'backend', proficiency: 90, yearsOfExperience: 3, color: '#FF6C37' },
  { id: 'sqlalchemy', name: 'SQLAlchemy', category: 'backend', proficiency: 85, yearsOfExperience: 2, color: '#D71F00' },

  // Database & Infrastructure
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiency: 90, yearsOfExperience: 3, color: '#336791' },
  { id: 'redis', name: 'Redis', category: 'database', proficiency: 85, yearsOfExperience: 2, color: '#DC382D' },
  { id: 'kafka', name: 'Kafka', category: 'infrastructure', proficiency: 80, yearsOfExperience: 1, color: '#231F20' },
  { id: 'docker', name: 'Docker', category: 'infrastructure', proficiency: 85, yearsOfExperience: 2, color: '#2496ED' },

  // Frontend
  { id: 'react', name: 'React.js', category: 'frontend', proficiency: 80, yearsOfExperience: 2, color: '#61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', proficiency: 75, yearsOfExperience: 1, color: '#000000' },

  // AI/ML
  { id: 'gemini', name: 'Gemini API', category: 'ai-ml', proficiency: 80, yearsOfExperience: 1, color: '#4285F4' },
  { id: 'rag', name: 'RAG', category: 'ai-ml', proficiency: 85, yearsOfExperience: 1, color: '#8E44AD' },
  { id: 'pgvector', name: 'pgvector', category: 'ai-ml', proficiency: 80, yearsOfExperience: 1, color: '#336791' },

  // CS Fundamentals
  { id: 'dsa', name: 'DSA', category: 'cs-fundamentals', proficiency: 95, yearsOfExperience: 4, color: '#E74C3C' },
  { id: 'oops', name: 'OOP', category: 'cs-fundamentals', proficiency: 90, yearsOfExperience: 4, color: '#F39C12' },
  { id: 'os', name: 'Operating Systems', category: 'cs-fundamentals', proficiency: 85, yearsOfExperience: 3, color: '#2ECC71' },
  { id: 'dbms', name: 'DBMS', category: 'cs-fundamentals', proficiency: 90, yearsOfExperience: 3, color: '#3498DB' },
  { id: 'cn', name: 'Computer Networks', category: 'cs-fundamentals', proficiency: 85, yearsOfExperience: 3, color: '#9B59B6' },
  { id: 'system-design', name: 'System Design', category: 'cs-fundamentals', proficiency: 80, yearsOfExperience: 2, color: '#1ABC9C' },
  { id: 'cloud', name: 'Cloud Computing', category: 'cs-fundamentals', proficiency: 75, yearsOfExperience: 1, color: '#FF9900' },
];

export const achievements: Achievement[] = [
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
    title: 'Codeforces Round 1055 (Div 2)',
    description: 'Secured global rank 2678 in Codeforces Round 1055 (Div 2) Contest',
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
];

export const education = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  institution: 'Indian Institute of Technology (Indian School of Mines)',
  location: 'Dhanbad, Jharkhand',
  expectedGraduation: 'May 2027',
  currentYear: '3rd Year',
  cgpa: '8.5+', // placeholder
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