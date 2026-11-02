import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, BookOpen, GitBranch, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Cybersecurity & Defenses',
      description: 'Fascinated by network protocols, packet inspection with Wireshark, traffic anomaly detection, and secure coding practices that prevent exploits at design time.'
    },
    {
      icon: Cpu,
      title: 'Algorithms & Problem Solving',
      description: 'Strengthening analytical thinking daily with C++ data structures, algorithmic puzzles, and understanding memory and runtime performance trade-offs.'
    },
    {
      icon: BookOpen,
      title: 'Continuous CS Journey',
      description: 'As a first-year BTech student, I treat every course as a springboard—diving deep into operating systems, computer networking, and system architectures.'
    },
    {
      icon: GitBranch,
      title: 'Open Source & Practical Tools',
      description: 'Passionate about building tangible utilities like TraceHawk, experimenting with collaborative codebases, and contributing back to developer tooling.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300 dark:border-charcoal-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brass-500 font-semibold">
              01 • About Astik
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight mt-2">
              Driven by curiosity, grounded in code.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono text-charcoal-500 dark:text-cream-400 max-w-xs">
            BTech CSE &apos;26 • Cybersecurity & Software Engineering
          </p>
        </div>

        {/* Clean Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-sm relative overflow-hidden">
              {/* Subtle watermarked year inspired by video "Let's go back in time • 2026" */}
              <div className="absolute -right-4 -bottom-4 font-editorial font-extrabold text-8xl text-charcoal-900/[0.04] dark:text-cream-100/[0.04] select-none pointer-events-none">
                2026
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal-500 dark:text-cream-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-brass-500" />
                <span>The Student Journey</span>
              </div>

              <p className="font-serif text-xl sm:text-2xl text-charcoal-800 dark:text-cream-100 italic leading-relaxed mb-6">
                &ldquo;I believe the most resilient software is built by developers who understand how systems fail and how attackers think.&rdquo;
              </p>

              <div className="space-y-4 text-sm sm:text-base text-charcoal-600 dark:text-cream-300 leading-relaxed font-sans">
                <p>
                  I&apos;m currently pursuing my first year in <strong className="font-semibold text-charcoal-850 dark:text-cream-100">BTech Computer Science & Engineering</strong>. Rather than sticking solely to lecture slides, I love getting my hands on real systems—analyzing live packet captures, building interactive projects, and writing modular C++ and Python tools.
                </p>
                <p>
                  My primary technical focus is <strong className="font-semibold text-charcoal-850 dark:text-cream-100">Cybersecurity & Defensive Engineering</strong>: exploring how network packets traverse the internet, understanding attack signatures, and turning complex security telemetry into understandable intelligence.
                </p>
                <p>
                  Outside of coding, I focus on algorithmic problem solving, expanding my Linux fluency, and collaborating with fellow learners on open-source initiatives.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-cream-200 dark:border-charcoal-700 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-charcoal-400 dark:text-cream-500">Current Status: </span>
                  <span className="font-semibold text-charcoal-800 dark:text-cream-200">{PERSONAL_INFO.status}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-brass-600 dark:text-brass-400 font-semibold hover:underline"
                >
                  <span>Inquire for internships</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Stats Pill Deck */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-cream-50/70 dark:bg-charcoal-850/70 border border-cream-200 dark:border-charcoal-800 text-center">
                <div className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100">Year 1</div>
                <div className="text-[11px] font-mono text-charcoal-500 dark:text-cream-400 uppercase mt-0.5">BTech CSE</div>
              </div>
              <div className="p-4 rounded-2xl bg-cream-50/70 dark:bg-charcoal-850/70 border border-cream-200 dark:border-charcoal-800 text-center">
                <div className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100">3+</div>
                <div className="text-[11px] font-mono text-charcoal-500 dark:text-cream-400 uppercase mt-0.5">Active Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-cream-50/70 dark:bg-charcoal-850/70 border border-cream-200 dark:border-charcoal-800 text-center">
                <div className="font-editorial text-2xl font-bold text-charcoal-850 dark:text-cream-100">100%</div>
                <div className="text-[11px] font-mono text-charcoal-500 dark:text-cream-400 uppercase mt-0.5">Curiosity Driven</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas / Editorial Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 dark:text-cream-400 mb-4">
              Core Pillars & Intellectual Interests
            </h3>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-cream-50/80 dark:bg-charcoal-850/80 border border-cream-300 dark:border-charcoal-700 hover:border-brass-400/60 dark:hover:border-brass-500/60 transition-colors shadow-sm group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cream-200 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-850 dark:text-cream-100 group-hover:bg-brass-500 group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-editorial text-lg font-bold text-charcoal-850 dark:text-cream-100 tracking-tight">
                          {pillar.title}
                        </h4>
                        <p className="mt-1.5 text-xs sm:text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed font-sans">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

