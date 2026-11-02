import { Project, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Astik Das',
  role: 'Cybersecurity Enthusiast & Software Developer',
  headline: "Hi, I'm Astik.",
  subheadline: 'I build secure and meaningful digital experiences.',
  tagline: 'First-Year BTech Computer Science Student',
  status: 'Open to opportunities',
  availability: 'Available for internships & collaborations',
  location: 'India • Remote-Friendly',
  bio: `I'm a first-year BTech Computer Science student deeply fascinated by the intersection of offensive security, software engineering, and defensive architecture. My journey is built on curiosity: understanding how computers converse across networks, discovering how software fails, and writing resilient code that protects users and systems.`,
  shortBio: `Focused on cybersecurity, systems programming, and algorithmic problem solving. Always experimenting with packet captures, secure APIs, and clean modern interfaces.`,
  notebookTitles: [
    {
      title: 'Cybersecurity\n& Software\nDeveloper',
      subtitle: 'Defensive thinking & resilient code',
      tag: '01 / 04',
      pill: 'Security & Core'
    },
    {
      title: 'Packet Storyteller\n& Traffic\nAnalyst',
      subtitle: 'TraceHawk & Network forensics',
      tag: '02 / 04',
      pill: 'TraceHawk'
    },
    {
      title: 'C++ & Python\nAlgorithmic\nBuilder',
      subtitle: 'Data structures & problem solving',
      tag: '03 / 04',
      pill: 'DSA & Systems'
    },
    {
      title: 'Open Source\n& Creative\nDeveloper',
      subtitle: 'Building intuitive digital experiences',
      tag: '04 / 04',
      pill: 'Exploration'
    }
  ],
  socials: {
    github: 'https://github.com/astikdas11',
    linkedin: 'https://www.linkedin.com/in/astik-das-253145310/',
    email: 'astik.das.dev@example.com' // Placeholder email as requested
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'tracehawk',
    title: 'TraceHawk',
    tagline: 'Turning raw network traffic into understandable attack stories',
    description: 'A cybersecurity analysis tool designed to inspect raw network packet dumps, filter suspicious anomalies, and reconstruct coherent attack narratives for security enthusiasts and analysts.',
    longDescription: 'TraceHawk bridges the gap between massive, noisy Wireshark packet captures and human-readable threat intelligence. By parsing protocol flows and mapping signature indicators, it highlights where reconnaissance begins, how exploitation attempts unfold, and where abnormal payloads traverse.',
    technologies: ['Python', 'Wireshark', 'PCAP Analysis', 'Network Protocols', 'Scapy / Socket'],
    githubUrl: 'https://github.com/astikdas11/tracehawk', // Placeholder or repo
    liveUrl: undefined, // No fake live URL
    category: 'Cybersecurity',
    accentColor: '#3B82F6',
    doorColor: 'bg-[#1E293B]',
    status: 'In Progress',
    featuredPoints: [
      'Automated PCAP flow grouping & protocol identification',
      'Anomaly detection heuristics for port scans & suspicious payloads',
      'Chronological attack timeline visualization',
      'Designed with privacy-conscious local processing'
    ]
  },
  {
    id: 'codehaters',
    title: 'CodeHaters',
    tagline: 'Full-Stack Student Group Allocation & Governance Platform',
    description: 'A production-grade full-stack platform built with Next.js 16, React 19, FastAPI, and SQLAlchemy. Automates peer project allocations with strict governance constraints, JWT authentication, and an executive administrative audit console.',
    longDescription: 'CodeHaters resolves the chaos of manual university team registrations by strictly enforcing the "One Student = One Group" constraint at both the frontend boundary and transactional database levels. Features real-time request tracking, dedicated admin review queues, seat quota locks, and an immutable audit trail.',
    technologies: ['Next.js 16', 'React 19', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL / SQLite', 'Tailwind CSS', 'PyJWT'],
    githubUrl: 'https://github.com/astikdas11/CodeHaters',
    liveUrl: undefined,
    category: 'Web Development',
    accentColor: '#10B981',
    doorColor: 'bg-[#1E3A2F]',
    status: 'Completed',
    featuredPoints: [
      'Strict One Student = One Group relational database constraint enforcement',
      'Asynchronous FastAPI REST backend with Pydantic v2 & SQLAlchemy ORM',
      'Next.js 16 App Router interface with responsive student & admin dashboards',
      'Role-based JWT security guards & comprehensive administrative audit logs'
    ]
  },
  {
    id: 'dsa-journey',
    title: 'DSA Journey',
    tagline: 'Rigorous problem solving & algorithmic solutions in C++',
    description: 'A structured repository of foundational data structures, algorithmic implementations, and competitive programming solutions developed throughout my first year in Computer Science.',
    longDescription: 'A systematic daily archive of algorithmic practice focused on time/space complexity optimization. Covers arrays, linked lists, stacks, queues, recursion, sorting, search algorithms, and introductory dynamic programming.',
    technologies: ['C++', 'Algorithms', 'Data Structures', 'Time Complexity Analysis', 'STL'],
    githubUrl: 'https://github.com/astikdas11/dsa-journey',
    liveUrl: undefined,
    category: 'Problem Solving',
    accentColor: '#F59E0B',
    doorColor: 'bg-[#3E3228]',
    status: 'Active Journey',
    featuredPoints: [
      'Comprehensive solutions in modern idiomatic C++',
      'Documented approach notes & edge-case test suites',
      'Consistent practice on platforms like LeetCode & HackerRank',
      'Focus on memory bounds and cache-friendly data structures'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    subtitle: 'Core languages for logic, systems, and automation',
    skills: [
      { name: 'C++', highlight: true, description: 'Object-oriented programming, STL, memory awareness, algorithmic problem solving.' },
      { name: 'Python', highlight: true, description: 'Scripting, packet parsing, security tool development, automation.' },
      { name: 'JavaScript', highlight: false, description: 'Interactive browser logic, event models, asynchronous workflows.' }
    ]
  },
  {
    title: 'Web Development',
    subtitle: 'Semantic structure and expressive visual styling',
    skills: [
      { name: 'HTML', highlight: false, description: 'Accessible markup, semantic document hierarchies, SEO best practices.' },
      { name: 'CSS', highlight: false, description: 'Modern responsive layouts, Flexbox, Grid, transitions, micro-interactions.' }
    ]
  },
  {
    title: 'Tools & Environments',
    subtitle: 'Everyday developer workflow and command-line mastery',
    skills: [
      { name: 'Linux', highlight: true, description: 'Bash scripting, system permissions, process management, security utilities.' },
      { name: 'Git', highlight: false, description: 'Version control, atomic commits, branch workflows, rebasing.' },
      { name: 'GitHub', highlight: false, description: 'Remote repository management, issue tracking, open-source workflow.' }
    ]
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Foundations of offensive analysis and defensive engineering',
    skills: [
      { name: 'Networking Fundamentals', highlight: true, description: 'TCP/IP stack, OSI model, DNS, DHCP, routing, subnets, handshake mechanics.' },
      { name: 'Wireshark', highlight: true, description: 'Deep packet inspection, protocol filtering, PCAP flow dissection, anomaly analysis.' },
      { name: 'Ethical Hacking Fundamentals', highlight: false, description: 'Reconnaissance, attack vectors, privilege concepts, security lab practice.' },
      { name: 'Web Application Security', highlight: false, description: 'OWASP Top 10 awareness, input validation, authentication hygiene, CSRF/XSS.' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    category: 'Cybersecurity',
    title: 'Network Security Fundamentals & Labs',
    issuerOrEvent: 'TryHackMe & Practical Labs',
    dateOrStatus: 'Ongoing / 2026',
    description: 'Hands-on practice completing capture-the-flag (CTF) rooms, network enumeration exercises, and Wireshark traffic analysis challenges.',
    badgeText: 'Cybersecurity Labs',
    isPlaceholder: true
  },
  {
    id: 'ach-2',
    category: 'Hackathon',
    title: 'College Tech Ideathon & Hackathon',
    issuerOrEvent: 'BTech Computer Science Society',
    dateOrStatus: '2026 Participation',
    description: 'Collaborated with peers to design and prototype technology solutions under strict time constraints, honing rapid prototyping and team problem-solving skills.',
    badgeText: 'Hackathon Participant',
    isPlaceholder: true
  },
  {
    id: 'ach-3',
    category: 'Open Source',
    title: 'Open Source Community Contributions',
    issuerOrEvent: 'GitHub Open Source',
    dateOrStatus: 'Active Explorer',
    description: 'Actively exploring developer tooling, triaging issues, submitting documentation improvements, and learning open-source collaborative workflows.',
    badgeText: 'Open Source',
    isPlaceholder: true
  },
  {
    id: 'ach-4',
    category: 'DSA Progress',
    title: 'Algorithmic Problem Solving Milestone',
    issuerOrEvent: 'Competitive Programming / DSA Journey',
    dateOrStatus: '50+ Problems Solved',
    description: 'Continuous daily practice in C++ covering fundamental linear structures, binary search algorithms, recursion trees, and sorting techniques.',
    badgeText: 'DSA Milestone',
    isPlaceholder: true
  }
];

