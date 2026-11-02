export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Cybersecurity' | 'Web Development' | 'Problem Solving';
  accentColor: string;
  doorColor: string;
  status: 'Completed' | 'In Progress' | 'Active Journey';
  featuredPoints: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    iconName?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface Achievement {
  id: string;
  category: 'Cybersecurity' | 'Hackathon' | 'Open Source' | 'DSA Progress';
  title: string;
  issuerOrEvent: string;
  dateOrStatus: string;
  description: string;
  badgeText: string;
  isPlaceholder?: boolean;
}

