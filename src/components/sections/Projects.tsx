import React from 'react';
import { motion } from 'framer-motion';
import { Github, Shield, Code, Terminal, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectVault } from './ProjectVault';

export const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return Shield;
      case 'Web Development':
        return Code;
      case 'Problem Solving':
      default:
        return Terminal;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300 dark:border-charcoal-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brass-500 font-semibold">
              02 • Selected Works
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight mt-2">
              Featured Projects & Systems
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-charcoal-500 dark:text-cream-400 max-w-sm">
            Practical implementations across network security, browser engineering, and algorithmic foundations.
          </p>
        </div>

        {/* The Interactive "Behind the doors" Project Vault */}
        <ProjectVault />

        {/* Editorial Project Showcase Cards Grid */}
        <div className="mt-16 space-y-12">
          <div className="flex items-center justify-between pb-4 border-b border-cream-200 dark:border-charcoal-800">
            <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 dark:text-cream-400">
              Detailed Project Index
            </h3>
            <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500">
              03 Projects Cataloged
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => {
              const Icon = getIcon(project.category);
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col justify-between p-8 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm hover:shadow-xl hover:border-brass-400/80 dark:hover:border-brass-500/80 transition-all duration-300 group"
                >
                  <div>
                    {/* Top Card Bar: Number, Category & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-800 dark:text-cream-200 group-hover:bg-charcoal-850 group-hover:text-cream-100 dark:group-hover:bg-cream-100 dark:group-hover:text-charcoal-900 transition-colors">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-[11px] font-mono text-charcoal-500 dark:text-cream-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight group-hover:text-brass-600 dark:group-hover:text-brass-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="font-serif text-sm text-charcoal-600 dark:text-cream-300 italic mt-1">
                      {project.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="mt-4 text-xs sm:text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-cream-200/60 dark:bg-charcoal-800 text-[11px] font-mono text-charcoal-700 dark:text-cream-300 border border-cream-300/70 dark:border-charcoal-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Action Links */}
                  <div className="mt-8 pt-5 border-t border-cream-200 dark:border-charcoal-700 flex items-center justify-between text-xs font-mono">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-charcoal-800 dark:text-cream-200 hover:text-charcoal-950 dark:hover:text-white font-medium transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brass-600 dark:text-brass-400 hover:underline font-semibold"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-charcoal-400 dark:text-cream-500 italic">
                        Repo only
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
