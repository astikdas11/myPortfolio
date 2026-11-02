import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface PortraitFrameProps {
  onOpenCard?: () => void;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = () => {
  const [usePhoto, setUsePhoto] = useState(true);
  const [showAbilityModal, setShowAbilityModal] = useState(false);

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Outer framing wrapper with subtle tilt and paper shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative group"
      >
        {/* Soft atmospheric backlight halo */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-sage-200/40 via-cream-300/30 to-brass-400/20 dark:from-sage-700/20 dark:via-charcoal-700/30 dark:to-brass-600/10 rounded-[32px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Editorial Frame Container */}
        <div className="relative w-[280px] sm:w-[330px] md:w-[360px] lg:w-[390px] h-[390px] sm:h-[460px] md:h-[500px] rounded-[28px] overflow-hidden bg-cream-200 dark:bg-charcoal-800 border-2 border-cream-300/80 dark:border-charcoal-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          {/* Portrait Image or Editorial Vector */}
          {usePhoto ? (
            <img
              src="/astik-portrait-opt.jpg"
              alt="Astik Das — Cybersecurity Enthusiast & Software Developer"
              className="w-full h-full object-cover object-[center_30%] filter contrast-[1.02] transition-all duration-700 group-hover:scale-105"
              onError={() => setUsePhoto(false)}
            />
          ) : (
            <img
              src="/portrait-placeholder.svg"
              alt="Astik Das Portrait Placeholder"
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Vignette & subtle gradient shadow at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/10 to-transparent pointer-events-none" />

          {/* Top subtle photo status pill */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Astik Das</span>
          </div>

          {/* The signature "My ability card" button floating on portrait — as in reference video */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[85%]">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAbilityModal(true)}
              className="w-full py-2.5 px-4 rounded-full bg-charcoal-900/85 hover:bg-black text-white text-xs font-mono tracking-wider flex items-center justify-between shadow-lg backdrop-blur-md border border-white/15 transition-all group/btn"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brass-400" />
                <span>My ability card</span>
              </span>
              <span className="text-[10px] text-white/60 group-hover/btn:text-white transition-colors">
                View specs →
              </span>
            </motion.button>
          </div>
        </div>

        {/* Small photo toggle pill underneath frame for user convenience */}
        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-charcoal-400 dark:text-cream-400">
          <span>Displaying {usePhoto ? 'actual portrait' : 'vector silhouette'}</span>
          <button
            onClick={() => setUsePhoto(!usePhoto)}
            className="underline hover:text-charcoal-850 dark:hover:text-cream-100 transition-colors"
          >
            Switch to {usePhoto ? 'silhouette' : 'photo'}
          </button>
        </div>
      </motion.div>

      {/* Mini Ability Card Modal / Specs Overlay */}
      {showAbilityModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAbilityModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-4 border-b border-cream-200 dark:border-charcoal-700">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-charcoal-850 dark:bg-cream-100 flex items-center justify-center text-cream-100 dark:text-charcoal-900 font-bold font-editorial">
                  AD
                </div>
                <div>
                  <h3 className="font-editorial text-lg font-bold text-charcoal-850 dark:text-cream-100">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-charcoal-500 dark:text-cream-400">
                    BTech CS • 1st Year
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAbilityModal(false)}
                className="w-7 h-7 rounded-full bg-cream-200 dark:bg-charcoal-700 flex items-center justify-center text-xs text-charcoal-600 dark:text-cream-300 hover:bg-cream-300"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3.5">
              <div className="p-3.5 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-700 dark:text-cream-200">
                    Primary Specialization
                  </h4>
                  <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-0.5">
                    Cybersecurity, network traffic analysis, packet story reconstruction (TraceHawk), and defensive foundations.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700 flex items-start gap-3">
                <Code className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-700 dark:text-cream-200">
                    Languages & Systems
                  </h4>
                  <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-0.5">
                    C++ for algorithms & data structures; Python for automation & network packet tools; JavaScript for UI.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700 flex items-start gap-3">
                <Terminal className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-700 dark:text-cream-200">
                    Work Environment
                  </h4>
                  <p className="text-xs text-charcoal-500 dark:text-cream-400 mt-0.5">
                    Linux CLI, Wireshark, Git/GitHub atomic workflows, VS Code.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200 dark:border-charcoal-700 flex justify-between items-center text-xs font-mono">
              <span className="text-charcoal-500 dark:text-cream-400">Status: {PERSONAL_INFO.status}</span>
              <a
                href="#contact"
                onClick={() => setShowAbilityModal(false)}
                className="px-3.5 py-1.5 rounded-full bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 font-semibold hover:opacity-90 transition-opacity"
              >
                Let&apos;s Connect →
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

