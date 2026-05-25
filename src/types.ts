export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'python' | 'uiux';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  details: string[];
  features?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  iconName: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'education' | 'leadership' | 'experience' | 'awards';
  tags?: string[];
}

export interface LegacyMilestone {
  id: string;
  targetYear: string;
  phase: string;
  title: string;
  description: string;
  goals: string[];
  progress: number; // 0 - 100
  status: 'completed' | 'ongoing' | 'future';
}

export interface FAQItem {
  question: string;
  answer: string;
}
