import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Terminal, Shield, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return Code;
      case 'Web Development':
        return Globe;
      case 'Tools & Environments':
        return Terminal;
      case 'Cybersecurity':
        return Shield;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300 dark:border-charcoal-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brass-500 font-semibold">
              03 • Technical Competencies
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight mt-2">
              Skills & Domain Knowledge
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-charcoal-500 dark:text-cream-400 max-w-sm">
            Practical skills acquired through academic study, CTF labs, and project building. No arbitrary percentage bars.
          </p>
        </div>

        {/* 4 Clean Editorial Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            const Icon = getCategoryIcon(cat.title);
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: catIdx * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Top Category Chrome */}
                <div className="flex items-start justify-between mb-6 pb-4 border-b border-cream-200 dark:border-charcoal-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-850 dark:text-cream-100">
                      <Icon className="w-5 h-5 text-brass-600 dark:text-brass-400" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-mono text-charcoal-500 dark:text-cream-400 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500">
                    0{catIdx + 1}
                  </span>
                </div>

                {/* Skills List within Category */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-cream-100/70 dark:bg-charcoal-800/60 border border-cream-200/80 dark:border-charcoal-700 hover:border-brass-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans font-semibold text-sm text-charcoal-850 dark:text-cream-100 flex items-center gap-2">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brass-500" />
                          )}
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-brass-600 dark:text-brass-400 bg-brass-400/10 px-2 py-0.5 rounded-full">
                            Core Focus
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="mt-1 text-xs text-charcoal-600 dark:text-cream-400 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Note Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-200/50 dark:bg-charcoal-800/50 border border-cream-300 dark:border-charcoal-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-charcoal-700 dark:text-cream-300 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Honest Engineering: Every skill listed reflects active hands-on code and lab practice.</span>
          </div>
          <span className="text-charcoal-400 dark:text-cream-500 text-[11px] whitespace-nowrap">
            Updated for 2026 Academic Year
          </span>
        </div>

      </div>
    </section>
  );
};

