import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export const NotebookCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = PERSONAL_INFO.notebookTitles;

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.pageFlip();
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.pageFlip();
    setCurrentIndex((prev) => (prev - 1 + titles.length) % titles.length);
  };

  const current = titles[currentIndex];

  // Number of spiral rings along the top edge
  const ringCount = 11;

  return (
    <div className="relative inline-block select-none my-6 group">
      {/* Background stacked paper layers for physical editorial depth */}
      <div 
        className="absolute inset-0 bg-[#E8E4D8] dark:bg-[#252824] rounded-2xl transform rotate-2 translate-y-3 translate-x-2 shadow-sm pointer-events-none transition-transform duration-300 group-hover:rotate-3 group-hover:translate-y-4" 
      />
      <div 
        className="absolute inset-0 bg-[#F0ECE1] dark:bg-[#1E201D] rounded-2xl transform -rotate-1 translate-y-1.5 translate-x-1 shadow-sm pointer-events-none transition-transform duration-300 group-hover:-rotate-2 group-hover:translate-y-2" 
      />

      {/* Main interactive notebook card */}
      <motion.div
        whileHover={{ rotate: 0, y: -4 }}
        whileTap={{ scale: 0.985 }}
        onClick={() => handleNext()}
        className="relative z-10 w-[300px] sm:w-[360px] md:w-[420px] bg-[#FAF8F2] dark:bg-[#1A1C19] border border-[#DDD7C8] dark:border-[#353832] rounded-2xl p-6 sm:p-8 pt-8 sm:pt-9 shadow-notebook hover:shadow-notebook-hover transition-all duration-300 cursor-pointer -rotate-1.5"
        role="button"
        tabIndex={0}
        aria-label="Notebook role card: click to flip page"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNext();
          }
        }}
      >
        {/* Top spiral rings row */}
        <div className="absolute -top-3.5 left-0 right-0 px-6 sm:px-8 flex justify-between items-center pointer-events-none">
          {Array.from({ length: ringCount }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Metallic ring coil loop */}
              <div className="w-2.5 h-6 rounded-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 dark:from-gray-600 dark:via-gray-400 dark:to-gray-700 shadow-[0_2px_4px_rgba(0,0,0,0.25)] border-[0.5px] border-black/20" />
              {/* Punched hole in paper */}
              <div className="w-2 h-2 -mt-1 rounded-full bg-[#1B1B1B]/15 dark:bg-black/60 shadow-inner" />
            </div>
          ))}
        </div>

        {/* Paper top ruling and mini pill indicator */}
        <div className="flex items-center justify-between mb-4 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brass-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 dark:text-cream-400">
              {current.pill}
            </span>
          </div>
          <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3.5 h-3.5 text-brass-500" />
            <span className="text-[10px] font-mono text-charcoal-400 dark:text-cream-500">Click to flip</span>
          </div>
        </div>

        {/* Content with animated flipping transition */}
        <div className="min-h-[110px] sm:min-h-[125px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateX: -30, y: 15 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 30, y: -15 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] leading-[1.12] font-bold text-charcoal-850 dark:text-cream-100 whitespace-pre-line tracking-tight">
                {current.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-sans text-charcoal-500 dark:text-cream-400">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom card footer: Page index & manual navigation pills */}
        <div className="mt-6 pt-3 border-t border-[#EAE5D7] dark:border-[#2C2F29] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-charcoal-600 dark:text-cream-300 transition-colors"
              aria-label="Previous role title"
              title="Previous card"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-1">
              {titles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.pageFlip();
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-5 bg-charcoal-850 dark:bg-cream-100'
                      : 'bg-charcoal-300 dark:bg-charcoal-700 hover:bg-charcoal-400'
                  }`}
                  aria-label={`Jump to title ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-charcoal-600 dark:text-cream-300 transition-colors"
              aria-label="Next role title"
              title="Next card"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-charcoal-500 dark:text-cream-400 font-mono tracking-wider text-[11px]">
            {current.tag}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

