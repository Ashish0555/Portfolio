export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  achievements: string[];
  type: 'internship' | 'full-time' | 'contract' | 'freelance';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  category: 'backend' | 'fullstack' | 'ai-ml' | 'infrastructure' | 'tooling';
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  featured: boolean;
  images: string[];
  architecture?: string;
  challenges: string[];
  learnings: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'language' | 'backend' | 'database' | 'infrastructure' | 'frontend' | 'ai-ml' | 'tools' | 'cs-fundamentals';
  proficiency: number; // 1-100
  yearsOfExperience: number;
  description?: string;
  icon?: string;
  color?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization: string;
  category: 'competition' | 'certification' | 'award' | 'publication' | 'leadership' | 'selection';
  icon: string;
  color: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}