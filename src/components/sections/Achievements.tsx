import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, GitCommit, Target, Edit3 } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return Award;
      case 'Hackathon':
        return Trophy;
      case 'Open Source':
        return GitCommit;
      case 'DSA Progress':
      default:
        return Target;
    }
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300 dark:border-charcoal-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brass-500 font-semibold">
              04 • Milestones & Progress
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight mt-2">
              Achievements & Growth
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-charcoal-500 dark:text-cream-400 max-w-sm">
            Milestones across labs, coding sprints, open-source explorations, and algorithmic consistency.
          </p>
        </div>

        {/* Minimal Editorial Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm hover:shadow-md hover:border-brass-400/60 dark:hover:border-brass-500/60 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-850 dark:text-cream-100 group-hover:bg-brass-500 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 dark:text-cream-500">
                      {item.badgeText}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-editorial text-lg font-bold text-charcoal-850 dark:text-cream-100 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-brass-600 dark:text-brass-400 mt-1">
                    {item.issuerOrEvent}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs text-charcoal-600 dark:text-cream-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Footer with date status & editable indicator */}
                <div className="mt-6 pt-4 border-t border-cream-200 dark:border-charcoal-700 flex items-center justify-between text-[11px] font-mono text-charcoal-400 dark:text-cream-500">
                  <span>{item.dateOrStatus}</span>
                  {item.isPlaceholder && (
                    <span 
                      className="inline-flex items-center gap-1 text-[10px] text-charcoal-400 dark:text-cream-500 hover:text-brass-600 dark:hover:text-brass-400 cursor-pointer"
                      title="Placeholder item: edit in src/data/portfolioData.ts"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Editable</span>
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean note on updating achievements */}
        <div className="mt-10 p-5 rounded-2xl bg-cream-100/60 dark:bg-charcoal-800/40 border border-dashed border-cream-300 dark:border-charcoal-700 flex items-center justify-between text-xs font-mono text-charcoal-500 dark:text-cream-400">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-brass-500 shrink-0" />
            <span>Ready to add your new certifications or hackathon wins? Update them anytime in <code className="text-charcoal-800 dark:text-cream-200 font-semibold">src/data/portfolioData.ts</code>.</span>
          </div>
          <a
            href="https://github.com/astikdas11"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-brass-600 dark:text-brass-400 hover:underline shrink-0"
          >
            GitHub Activity →
          </a>
        </div>

      </div>
    </section>
  );
};

