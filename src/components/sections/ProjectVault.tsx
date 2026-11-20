import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Shield, 
  Code, 
  Terminal, 
  X,
  DoorOpen
} from 'lucide-react';
import { sound } from '../../utils/sound';

export const ProjectVault: React.FC = () => {
  // Starts with null: all 3 doors are closed on load.
  // Clicking any door swings it open in 3D and pops up the details directly OVER the doors.
  const [openDoorId, setOpenDoorId] = useState<string | null>(null);

  const activeProject: Project | null = openDoorId 
    ? (PROJECTS.find((p) => p.id === openDoorId) || null) 
    : null;

  // Door designs matching the user's reference picture with rich color saturation in both bright & dark modes
  const doorDesigns: Record<
    string, 
    { 
      color: string; 
      ringColor: string; 
      nameplate: string; 
      icon: typeof Shield;
      portalBg: string;
      innerGlow: string;
    }
  > = {
    'tracehawk': {
      color: 'from-[#17253B] via-[#0F1B2B] to-[#070D17]',
      ringColor: 'ring-brass-500/90',
      nameplate: 'TRACEHAWK',
      icon: Shield,
      portalBg: 'from-[#0B1329] via-[#0D1F38] to-[#020617]',
      innerGlow: 'rgba(56, 189, 248, 0.45)',
    },
    'codehaters': {
      color: 'from-[#11382C] via-[#0B281F] to-[#04140F]',
      ringColor: 'ring-emerald-500/90',
      nameplate: 'CODEHATERS',
      icon: Code,
      portalBg: 'from-[#05281D] via-[#08382A] to-[#02130E]',
      innerGlow: 'rgba(52, 211, 153, 0.45)',
    },
    'dsa-journey': {
      color: 'from-[#38261F] via-[#261A15] to-[#140D0A]',
      ringColor: 'ring-amber-500/90',
      nameplate: 'DSA JOURNEY',
      icon: Terminal,
      portalBg: 'from-[#2B1B12] via-[#382216] to-[#120B07]',
      innerGlow: 'rgba(251, 191, 36, 0.45)',
    },
  };

  const handleDoorClick = (projectId: string) => {
    if (openDoorId === projectId) {
      sound.doorClose();
      setOpenDoorId(null);
    } else {
      sound.doorOpen();
      setOpenDoorId(projectId);
    }
  };

  const handleClose = () => {
    sound.doorClose();
    setOpenDoorId(null);
  };

  // Close on Escape key press
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openDoorId) {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openDoorId]);

  return (
    <div className="mb-20 sm:mb-28">
      {/* Editorial Header - High-contrast & crisp in both Bright Mode and Evening Mode */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/90 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-xs font-sans font-semibold text-charcoal-700 dark:text-cream-200 mb-3.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brass-600 dark:text-brass-400" />
          <span>Interactive Vault</span>
        </div>
        <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 dark:text-cream-100 tracking-tight">
          Magic happens behind the doors
        </h3>
        <p className="mt-2.5 text-xs sm:text-sm font-sans text-charcoal-600 dark:text-cream-300 font-medium">
          Select a project door below to unlock its architectural story and implementation details.
        </p>
      </div>

      {/* Main Vault Stage - Tightly defines the exact physical boundary of the doors */}
      <div className="relative w-fit max-w-full mx-auto flex items-center justify-center">

        {/* The 3 Arched Doors Grid - High contrast and crisp visibility in Bright Mode */}
        <div className="grid grid-cols-3 gap-8 sm:gap-14 md:gap-16 lg:gap-20 justify-items-center items-end px-4 sm:px-8 py-3">
          {PROJECTS.map((project) => {
            const isOpen = project.id === openDoorId;
            const design = doorDesigns[project.id] || doorDesigns['tracehawk'];
            const Icon = design.icon;

            return (
              <div
                key={project.id}
                onClick={() => handleDoorClick(project.id)}
                className="w-full flex flex-col items-center cursor-pointer group select-none relative"
                role="button"
                tabIndex={0}
                aria-label={`Open door for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDoorClick(project.id);
                  }
                }}
              >
                {/* Soft atmospheric backlight halo */}
                <div 
                  className="absolute -inset-4 rounded-t-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: design.innerGlow }}
                />

                {/* Outer arch frame casing: Beautiful architectural limestone in Bright Mode, dark granite in Evening Mode */}
                <div
                  style={{ perspective: '1200px' }}
                  className={`relative w-28 sm:w-36 md:w-52 h-48 sm:h-64 md:h-[370px] rounded-t-full p-2.5 transition-all duration-300 ${isOpen
                    ? `ring-4 ${design.ringColor} shadow-[0_20px_45px_rgba(30,20,10,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.65)] -translate-y-2`
                    : 'ring-1 ring-[#C8BDA6] dark:ring-charcoal-700 shadow-[0_12px_28px_rgba(40,30,15,0.16)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] opacity-95 group-hover:opacity-100 group-hover:-translate-y-1.5'
                    } bg-gradient-to-b from-[#EBE5D8] via-[#DDD5C5] to-[#E6DFD1] dark:from-charcoal-800 dark:via-charcoal-850 dark:to-charcoal-900 border border-[#C5BBA7] dark:border-white/10`}
                >
                  {/* Classical Architectural Keystone at Arch Peak */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 w-5 sm:w-6 h-3 sm:h-3.5 rounded-b-md bg-gradient-to-b from-brass-300 via-brass-500 to-brass-700 shadow-[0_2px_4px_rgba(0,0,0,0.25)] border-b border-x border-brass-400 flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 h-1 rounded-sm bg-black/30" />
                  </div>

                  {/* Ornate Arch Rivets along Arch Crown */}
                  <div className="absolute inset-x-5 top-2 flex justify-between pointer-events-none z-10 px-1 opacity-75">
                    <div className="w-1.5 h-1.5 rounded-full bg-brass-400 shadow-[0_1px_2px_rgba(0,0,0,0.5)] border border-brass-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brass-400 shadow-[0_1px_2px_rgba(0,0,0,0.5)] border border-brass-200 -mt-1" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brass-400 shadow-[0_1px_2px_rgba(0,0,0,0.5)] border border-brass-200" />
                  </div>

                  {/* Inside Doorway Chamber (revealed when door leaf swings open) */}
                  <div
                    className={`w-full h-full rounded-t-full bg-gradient-to-b ${design.portalBg} border-2 border-brass-400/30 dark:border-white/10 flex flex-col items-center justify-center p-3 relative overflow-hidden shadow-inner`}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${design.innerGlow}, transparent 70%)`
                      }}
                    />
                    <div className="z-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm animate-pulse">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-brass-300" />
                    </div>
                  </div>

                  {/* The Physical Door Leaf (Swings open from closed position when clicked!) */}
                  <motion.div
                    animate={{
                      rotateY: isOpen ? -110 : 0,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      transformOrigin: 'left center',
                      transformStyle: 'preserve-3d',
                      boxShadow: isOpen
                        ? '-16px 14px 32px rgba(0,0,0,0.65)'
                        : '0 8px 20px rgba(0,0,0,0.3)',
                    }}
                    className={`absolute inset-2 z-20 rounded-t-full bg-gradient-to-b ${design.color} border-2 border-brass-400/40 dark:border-white/10 flex flex-col items-center justify-between p-3 overflow-hidden shadow-inner`}
                  >
                    {/* Inset Beveled Dual Architectural Panels */}
                    <div className="absolute inset-x-2.5 inset-y-4 flex gap-1.5 pointer-events-none opacity-40">
                      <div className="flex-1 h-full rounded-t-lg border border-white/30 dark:border-white/25 bg-black/30 dark:bg-black/25 shadow-inner" />
                      <div className="flex-1 h-full rounded-t-lg border border-white/30 dark:border-white/25 bg-black/30 dark:bg-black/25 shadow-inner" />
                    </div>

                    {/* Embossed Brass Nameplate with Corner Screw Rivets */}
                    <div className="mt-5 sm:mt-6 z-10 px-3 py-1 rounded-sm bg-gradient-to-r from-brass-600 via-brass-300 to-brass-600 shadow-md border border-brass-200 text-charcoal-900 font-sans text-[9px] sm:text-[11px] font-bold tracking-widest text-center select-none relative">
                      {/* 4 corner screw accents */}
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-charcoal-900/60" />
                      <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-charcoal-900/60" />
                      <div className="absolute bottom-0.5 left-0.5 w-1 h-1 rounded-full bg-charcoal-900/60" />
                      <div className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-charcoal-900/60" />
                      <span>{design.nameplate}</span>
                    </div>

                    {/* Ornate Medallion Center Badge */}
                    <div className="z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-tr from-black/40 via-white/10 to-transparent backdrop-blur-sm border-2 border-brass-400/80 ring-1 ring-brass-300/50 shadow-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-brass-300 drop-shadow" />
                    </div>

                    {/* Antique Brass Escutcheon Backplate & Lever Handle */}
                    <div className="mb-6 sm:mb-8 z-10 self-end mr-1.5 flex flex-col items-center">
                      <div className="w-3.5 sm:w-4 h-9 sm:h-10 rounded-sm bg-gradient-to-b from-brass-600 via-brass-400 to-brass-700 border border-brass-300 shadow-md flex flex-col items-center justify-between py-1 relative">
                        <div className="w-1 h-1 rounded-full bg-black/60" />
                        {/* Turned Handle Lever */}
                        <div className="w-5 sm:w-6 h-1.5 -ml-2.5 rounded-sm bg-gradient-to-r from-brass-300 to-brass-500 shadow-sm" />
                        {/* Keyhole */}
                        <div className="w-1.5 h-2 rounded-full bg-black/85 flex flex-col items-center justify-center">
                          <div className="w-0.5 h-1 bg-brass-400/50" />
                        </div>
                        <div className="w-1 h-1 rounded-full bg-black/60" />
                      </div>
                    </div>

                    {/* Decorative Bottom Brass Kickplate Line */}
                    <div className="absolute inset-x-2 bottom-11 h-1 bg-gradient-to-r from-brass-600/40 via-brass-300/60 to-brass-600/40 border-t border-b border-brass-400/40 pointer-events-none" />

                    {/* Pill at bottom of door */}
                    <div className={`z-10 py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-full text-[9px] sm:text-[11px] font-sans font-medium tracking-wide transition-all duration-200 select-none ${isOpen
                      ? 'bg-cream-100 text-charcoal-900 font-bold shadow-md'
                      : 'bg-black/60 text-white group-hover:bg-cream-100 group-hover:text-charcoal-900 shadow-sm'
                      }`}>
                      {isOpen ? 'Active Room' : 'Click to inspect'}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom label: High contrast in both Bright Mode and Evening Mode */}
                <div className="mt-3.5 text-center">
                  <span className={`text-sm sm:text-base font-sans font-bold tracking-wide transition-colors ${isOpen ? 'text-charcoal-950 dark:text-cream-100 underline decoration-brass-500/60' : 'text-charcoal-800 dark:text-cream-300 group-hover:text-charcoal-950 dark:group-hover:text-white'
                    }`}>
                    {project.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          Details Card: Popped up STRICTLY OVER THE DOORS.
          - High-contrast card in Bright Mode (pure white glass) and Evening Mode (deep charcoal glass).
          - Locked to `inset-0` of the doors stage.
          - Realistic 3D twisting spring bloom.
        */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{
                opacity: 0,
                scale: 0.86,
                rotateZ: -3.5,
                rotateY: -7,
                y: 14,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateZ: 0,
                rotateY: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.86,
                rotateZ: 3.5,
                rotateY: 7,
                y: -10,
              }}
              transition={{
                type: 'spring',
                damping: 24,
                stiffness: 300,
                mass: 0.8,
              }}
              style={{ transformPerspective: 1200 }}
              className="absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-3xl bg-white/98 dark:bg-[#0c1017]/98 border border-cream-300 dark:border-charcoal-700/80 shadow-[0_20px_50px_rgba(30,20,10,0.25)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden pointer-events-auto"
            >
              {/* Subtle colored accent glow matching the opened door */}
              <div
                className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-20"
                style={{ background: doorDesigns[activeProject.id]?.innerGlow || 'rgba(56, 189, 248, 0.4)' }}
              />

              {/* Top Header Bar with integrated action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-cream-200 dark:border-charcoal-800 relative z-10 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-brass-500/15 border border-brass-500/30 flex items-center justify-center text-brass-600 dark:text-brass-400">
                    <DoorOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brass-600 dark:text-brass-400 block leading-tight">
                      {doorDesigns[activeProject.id]?.nameplate} Vault
                    </span>
                    <span className="text-[11px] font-sans font-semibold text-charcoal-600 dark:text-cream-300 leading-tight">
                      {activeProject.category} • Status: {activeProject.status}
                    </span>
                  </div>
                </div>

                {/* Header Actions: Repository, Demo & Close Door */}
                <div className="flex items-center gap-2">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-900 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 text-xs font-sans font-bold hover:bg-black dark:hover:bg-white transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>

                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-charcoal-300 dark:border-charcoal-600 hover:border-charcoal-900 dark:hover:border-cream-100 text-charcoal-900 dark:text-cream-100 text-xs font-sans font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={handleClose}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream-200 dark:bg-charcoal-800 hover:bg-cream-300 dark:hover:bg-charcoal-700 text-charcoal-900 dark:text-cream-100 border border-cream-300/80 dark:border-charcoal-700 font-sans font-semibold text-xs transition-colors shadow-sm"
                    aria-label="Close Door"
                  >
                    <span>Close Door</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Content Body: 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative z-10 flex-1 overflow-y-auto sm:overflow-visible">

                {/* Left Column: Title, Tagline, Description, Capabilities, Tech Stack */}
                <div className="md:col-span-7 space-y-2">
                  <div>
                    <h4 className="font-sans text-xl sm:text-2xl font-extrabold text-charcoal-900 dark:text-cream-100 tracking-tight leading-tight">
                      {activeProject.title}
                    </h4>
                    <p className="font-sans text-xs text-charcoal-700 dark:text-cream-300 font-semibold mt-0.5">
                      {activeProject.tagline}
                    </p>
                  </div>

                  <p className="text-[11px] sm:text-xs text-charcoal-700 dark:text-cream-300 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none font-medium">
                    {activeProject.longDescription || activeProject.description}
                  </p>

                  {/* Key Capabilities (2x2 Grid) */}
                  <div className="pt-0.5">
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                      Key Capabilities & Architecture
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {activeProject.featuredPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-charcoal-800 dark:text-cream-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 mt-0.5 shrink-0" />
                          <span className="leading-snug text-[10px] sm:text-[11px] font-medium">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-0.5">
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 dark:text-cream-400 mb-1">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-cream-100 dark:bg-charcoal-800/90 text-[10px] font-sans font-semibold text-charcoal-800 dark:text-cream-200 border border-cream-300 dark:border-charcoal-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Screen: Interactive Terminal Frame (Stays dark CLI with high contrast in both modes) */}
                <div className="md:col-span-5">
                  <div className="rounded-2xl bg-charcoal-950 text-white p-3.5 font-mono text-xs shadow-xl border border-charcoal-700">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-charcoal-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[9px] text-charcoal-400 font-sans">
                        {activeProject.id}.spec • terminal
                      </span>
                    </div>

                    {activeProject.id === 'tracehawk' && (
                      <div className="space-y-1 text-[10px] leading-relaxed text-charcoal-300">
                        <div className="text-emerald-400 font-semibold">$ tracehawk --analyze capture.pcap</div>
                        <div>[✓] Raw packet stream parsed (14,280 frames)</div>
                        <div>[✓] TCP handshakes & SYN scans mapped</div>
                        <div className="text-amber-400">[!] Reconstructed: Port traverse alert</div>
                        <div>[✓] Attack timeline story exported</div>
                        <div className="mt-1.5 text-brass-400 text-[9px] font-sans">
                          Turns complex packet traces into clear tactical security timelines.
                        </div>
                      </div>
                    )}

                    {activeProject.id === 'codehaters' && (
                      <div className="space-y-1 text-[10px] leading-relaxed text-charcoal-300">
                        <div className="text-emerald-400 font-semibold">$ uvicorn app.main:app & next dev</div>
                        <div>[✓] FastAPI server running on :8000</div>
                        <div>[✓] Models synced: Users, Groups, AuditLogs</div>
                        <div className="text-cyan-400">[✓] Constraint: STRICT ONE STUDENT = ONE GROUP</div>
                        <div>[✓] Next.js 16 App Router UI connected</div>
                        <div className="mt-1.5 text-brass-400 text-[9px] font-sans">
                          Student team allocation platform with JWT security guards.
                        </div>
                      </div>
                    )}

                    {activeProject.id === 'dsa-journey' && (
                      <div className="space-y-1 text-[10px] leading-relaxed text-charcoal-300">
                        <div className="text-emerald-400 font-semibold">$ g++ -O3 -std=c++20 solution.cpp</div>
                        <div>[✓] Test suite running on 10^5 randomized inputs</div>
                        <div>[✓] Binary search runtime: O(log N) verified</div>
                        <div>[✓] Heap sort & two-pointer window pass</div>
                        <div className="text-emerald-400">Status: All edge cases covered (0ms runtime)</div>
                        <div className="mt-1.5 text-brass-400 text-[9px] font-sans">
                          Curated algorithmic practice repository tracking daily CS growth.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
