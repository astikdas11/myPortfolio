import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { sound } from '../../utils/sound';

interface LampPullCordProps {
  isDark: boolean;
  onToggle: () => void;
}

export const LampPullCord: React.FC<LampPullCordProps> = ({ isDark, onToggle }) => {
  const [isPulling, setIsPulling] = useState(false);
  const controls = useAnimation();

  const handlePull = async () => {
    if (isPulling) return;
    setIsPulling(true);
    sound.cordPull();

    // Pull cord down then snap back with physical elasticity
    await controls.start({
      y: 42,
      transition: { type: 'spring', stiffness: 600, damping: 15 }
    });

    onToggle();

    await controls.start({
      y: 0,
      transition: { type: 'spring', stiffness: 350, damping: 12 }
    });

    setIsPulling(false);
  };

  return (
    <div 
      className="fixed right-6 md:right-12 top-0 z-50 flex flex-col items-center cursor-pointer select-none group"
      onClick={handlePull}
      title={isDark ? "Switch to daylight cream" : "Switch to studio evening"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePull();
        }
      }}
      aria-label="Toggle theme with lamp pull cord"
    >
      {/* Top anchor mount */}
      <div className="w-3 h-1 bg-charcoal-700 dark:bg-cream-300 rounded-b-sm shadow-sm opacity-60" />

      {/* The hanging cord */}
      <motion.div
        animate={controls}
        className="flex flex-col items-center origin-top"
      >
        {/* Cord line */}
        <div className="w-[1.5px] h-20 md:h-24 bg-gradient-to-b from-charcoal-700 via-charcoal-400 to-brass-500 dark:from-cream-400 dark:to-brass-400 opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Golden Brass Tassel / Pull Bell */}
        <motion.div 
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative -mt-1 flex flex-col items-center"
        >
          {/* Brass connector bead */}
          <div className="w-2 h-2 rounded-full bg-brass-400 shadow-sm border border-brass-600" />
          
          {/* Main brass fob/bell */}
          <div className="w-3.5 h-6 rounded-b-full bg-gradient-to-b from-brass-400 via-brass-500 to-brass-600 shadow-md border-t border-brass-300 flex items-center justify-center">
            <div className="w-1 h-3 rounded-full bg-brass-300/40" />
          </div>

          {/* Hover tool tip */}
          <span className="absolute top-8 right-1/2 translate-x-1/2 whitespace-nowrap text-[10px] font-mono uppercase tracking-wider text-charcoal-600 dark:text-cream-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-cream-50 dark:bg-charcoal-800 px-2 py-0.5 rounded shadow border border-cream-200 dark:border-charcoal-700">
            {isDark ? 'Light' : 'Dim'}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

