import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { sound } from '../../utils/sound';

interface LampPullCordProps {
  isDark: boolean;
  onToggle: () => void;
}

export const LampPullCord: React.FC<LampPullCordProps> = ({ isDark, onToggle }) => {
  const [isPulling, setIsPulling] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // pullY represents the dynamic downward pull displacement in pixels
  const pullY = useMotionValue(0);
  
  // pendulum angle sway (in degrees) when cord rebounds
  const rotateSway = useMotionValue(0);

  // The base relaxed length of the thick rope (in pixels)
  const BASE_ROPE_HEIGHT = 100;

  // The rope height dynamically elongates from the top eyelet ring down to the finial:
  // It NEVER detaches from the ceiling ring because its top is anchored inside the eyelet!
  const ropeHeight = useTransform(pullY, (latest) => BASE_ROPE_HEIGHT + latest);

  // Helical braided spirals scroll through the ring as the rope is pulled down
  const ropeTexturePos = useTransform(pullY, (latest) => `${latest * 0.8}px`);

  // Trigger realistic pull-down and spring-rebound sequence on click
  const handleCordClick = async () => {
    if (isPulling) return;
    setIsPulling(true);
    sound.cordPull();

    // 1. Fast weighted pull-down stroke (stretching the rope down by 50px)
    await animate(pullY, 52, {
      type: 'spring',
      stiffness: 450,
      damping: 18,
      mass: 0.8,
    });

    // Toggle theme at maximum pull extension
    onToggle();

    // 2. Secondary pendulum sway as the heavy weighted tassel snaps back
    animate(rotateSway, [0, -4.5, 4, -2.5, 1.2, 0], {
      duration: 1.2,
      ease: 'easeOut',
    });

    // 3. Snappy elastic rebound back to ceiling with authentic spring overshoot
    await animate(pullY, 0, {
      type: 'spring',
      stiffness: 320,
      damping: 12,
      mass: 1.1,
    });

    setIsPulling(false);
  };

  return (
    <div 
      className="fixed right-6 md:right-12 top-0 z-50 flex flex-col items-center select-none pointer-events-auto"
      title={isDark ? "Pull rope to switch to daylight cream" : "Pull rope to switch to studio evening"}
      aria-label="Curtain pull rope theme toggle"
    >
      {/* 1. Heavy Brass Ceiling Mount & Rosette Ring Eyelet (Fixed at top: 0, z-30) */}
      <div className="z-30 flex flex-col items-center pointer-events-none">
        {/* Architectural escutcheon plate attached to the ceiling */}
        <div className="w-8 h-2.5 rounded-b-md bg-gradient-to-r from-brass-600 via-brass-300 to-brass-600 shadow-[0_2px_5px_rgba(0,0,0,0.4)] border-b border-brass-400" />
        
        {/* Brass Eyelet Ring through which the thick rope is threaded */}
        <div className="relative w-5 h-4 -mt-1 rounded-full border-[2.5px] border-brass-400 bg-black/50 flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 rounded-full border border-brass-200/50 pointer-events-none" />
          <div className="w-2 h-2 rounded-full bg-[#1A1408] shadow-inner" />
        </div>
      </div>

      {/* 2. Pendulum Motion Wrapper - Pivots exactly from the eyelet ring at top center */}
      <motion.div
        style={{
          rotate: rotateSway,
          transformOrigin: 'top center',
        }}
        className="relative -mt-2 z-20 flex flex-col items-center cursor-grab active:cursor-grabbing"
      >
        {/* 
          THICK BRAIDED CURTAIN PULL ROPE
          - Top is anchored deep inside the brass ring eyelet.
          - Height elongates dynamically with pullY.
          - The rope NEVER detaches from the top!
        */}
        <motion.div
          style={{
            height: ropeHeight,
            backgroundPositionY: ropeTexturePos,
          }}
          className="relative w-3 md:w-3.5 shadow-[inset_2px_0_2.5px_rgba(255,255,255,0.55),inset_-2px_0_3px_rgba(0,0,0,0.65),0_4px_10px_rgba(0,0,0,0.35)] overflow-hidden"
        >
          {/* 3-Ply Twisted Helical Braided Rope Pattern */}
          <div 
            className="w-full h-full"
            style={{
              background: `repeating-linear-gradient(
                135deg,
                #694713 0px,
                #694713 3.5px,
                #AD8334 3.5px,
                #AD8334 7px,
                #F2D78E 7px,
                #F2D78E 10px,
                #AD8334 10px,
                #694713 14px
              )`,
            }}
          />
          {/* Specular longitudinal highlight */}
          <div className="absolute inset-y-0 left-0.5 w-[1px] bg-white/45 pointer-events-none" />
          {/* Shadow along right edge */}
          <div className="absolute inset-y-0 right-0 w-[1.5px] bg-black/45 pointer-events-none" />
        </motion.div>

        {/* 
          WEIGHTED BRASS FINIAL & SILKEN TASSEL ASSEMBLY
          - Sits seamlessly attached to the bottom of the rope.
          - Draggable downward and clickable.
        */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleCordClick}
          onPan={(_, info) => {
            const clamped = Math.max(0, Math.min(65, info.offset.y));
            pullY.set(clamped);

            if (clamped > 38 && !hasTriggered) {
              setHasTriggered(true);
              sound.cordPull();
              onToggle();
            }
          }}
          onPanEnd={async (_, info) => {
            setHasTriggered(false);
            if (info.offset.y > 38) {
              animate(rotateSway, [0, -5.5, 4.5, -2.5, 1, 0], {
                duration: 1.3,
                ease: 'easeOut',
              });
            } else if (info.offset.y > 8) {
              animate(rotateSway, [0, -2.5, 2, 0], { duration: 0.6 });
            }

            // Snap rope back to base height with physical spring
            await animate(pullY, 0, {
              type: 'spring',
              stiffness: 350,
              damping: 12,
              mass: 1.1,
            });
          }}
          className="relative -mt-0.5 flex flex-col items-center filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCordClick();
            }
          }}
        >
          {/* Upper Brass Collar Sleeve connecting to rope */}
          <div className="w-4 h-2 rounded-t-sm bg-gradient-to-r from-brass-600 via-brass-300 to-brass-600 border border-brass-400 shadow-sm" />

          {/* Carved Drapery Brass Bell Finial */}
          <div className="relative w-6 md:w-7 h-9 md:h-10 rounded-b-2xl bg-gradient-to-r from-brass-600 via-brass-400 to-brass-700 border-t border-brass-300 shadow-[inset_2.5px_0_3.5px_rgba(255,255,255,0.55),inset_-2.5px_0_4.5px_rgba(0,0,0,0.65)] flex flex-col items-center justify-between p-1 overflow-hidden">
            {/* Curved center specular highlight */}
            <div className="absolute inset-y-0 left-2 w-1.5 bg-gradient-to-r from-white/60 to-transparent pointer-events-none blur-[0.5px]" />
            
            {/* Decorative engraved horizontal rings */}
            <div className="w-full h-[1px] bg-white/35 my-0.5" />
            <div className="w-4.5 h-1 rounded-full bg-brass-800/40 shadow-inner" />
            <div className="w-full h-[1.5px] bg-black/45 mt-auto" />
          </div>

          {/* Turk's Head Woven Cord Collar Knot */}
          <div 
            className="w-5.5 h-2.5 -mt-0.5 rounded-full border border-brass-700/60 shadow-sm"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                #644413 0px,
                #644413 2px,
                #D8B66C 2px,
                #D8B66C 4.5px
              )`,
            }}
          />

          {/* Hanging Silken Fringe Tassel Skirt (11 Strands) */}
          <div className="flex justify-center items-start gap-[1.5px] -mt-0.5 px-0.5 pointer-events-none">
            {[18, 22, 26, 28, 30, 29, 27, 25, 23, 20, 17].map((height, i) => (
              <div
                key={i}
                style={{ height: `${height}px` }}
                className="w-[1.5px] rounded-b-full bg-gradient-to-b from-brass-400 via-brass-500 to-brass-700 shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
              />
            ))}
          </div>

          {/* Hover Tooltip Pill */}
          <div className="absolute top-14 right-1/2 translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="px-3 py-1 rounded-full bg-charcoal-900/90 dark:bg-cream-100/95 text-cream-100 dark:text-charcoal-900 shadow-xl border border-white/10 dark:border-charcoal-300 text-[11px] font-sans font-medium flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brass-400 animate-ping" />
              <span>Pull for {isDark ? 'Daylight' : 'Evening'}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
