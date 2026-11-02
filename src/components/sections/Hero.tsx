import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { NotebookCard } from '../hero/NotebookCard';
import { PortraitFrame } from '../hero/PortraitFrame';
import { AvailabilityBadge } from '../common/AvailabilityBadge';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography, Role Card, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-mono text-charcoal-500 dark:text-cream-400 uppercase tracking-widest flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-brass-500" />
                {PERSONAL_INFO.role}
              </span>
              <AvailabilityBadge text={PERSONAL_INFO.status} />
            </motion.div>

            {/* Main Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-charcoal-850 dark:text-cream-100 tracking-tightest leading-[1.05]">
                {PERSONAL_INFO.headline}
              </h1>
              <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-charcoal-500 dark:text-cream-400 font-medium tracking-tight leading-[1.12]">
                I build <span className="font-serif italic font-normal text-charcoal-850 dark:text-cream-100 underline decoration-brass-400/50 decoration-2 underline-offset-4">secure</span> and meaningful digital experiences.
              </p>
            </motion.div>

            {/* Interactive Notebook-Style Flip Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <NotebookCard />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              {/* Primary Pill Button: "Explore My Work" with circular arrow */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 font-sans font-semibold text-sm shadow-md hover:shadow-xl hover:bg-black dark:hover:bg-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <div className="w-6 h-6 rounded-full bg-white/15 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Secondary Ghost Button: "Let's Connect" */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-charcoal-300 dark:border-charcoal-700 hover:border-charcoal-850 dark:hover:border-cream-200 text-charcoal-800 dark:text-cream-200 font-sans font-medium text-sm transition-all hover:bg-black/5 dark:hover:bg-white/5"
              >
                <span>Let&apos;s Connect</span>
              </a>

              {/* Subtle student context badge */}
              <span className="hidden sm:inline-block text-xs font-mono text-charcoal-400 dark:text-cream-500 pl-2 border-l border-cream-300 dark:border-charcoal-700">
                1st Year BTech CS
              </span>
            </motion.div>
          </div>

          {/* Right Column: Professional Portrait Frame with "My ability card" */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <PortraitFrame />
          </div>

        </div>
      </div>

      {/* Bottom Editorial Status Bar — matching the reference video footer line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 pt-6 border-t border-cream-300/70 dark:border-charcoal-800/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-charcoal-500 dark:text-cream-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>AVAILABLE FOR WORK & INTERNSHIPS</span>
          </div>

          <div className="hidden md:block text-charcoal-400 dark:text-cream-500">
            FIRST-YEAR COMPUTER SCIENCE • CYBERSECURITY ENTHUSIAST
          </div>

          <a 
            href="#about"
            className="flex items-center gap-1.5 hover:text-charcoal-900 dark:hover:text-cream-100 transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

