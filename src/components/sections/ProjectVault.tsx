import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { Github, ExternalLink, Sparkles, CheckCircle2, Shield, Code, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ProjectVault: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);
  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const doorDesigns: Record<string, { color: string; ringColor: string; nameplate: string; icon: typeof Shield }> = {
    'tracehawk': {
      color: 'from-[#1E293B] to-[#0F172A]',
      ringColor: '#38BDF8',
      nameplate: 'TRACEHAWK',
      icon: Shield,
    },
    'codehaters': {
      color: 'from-[#133E31] to-[#0A261E]',
      ringColor: '#34D399',
      nameplate: 'CODEHATERS',
      icon: Code,
    },
    'dsa-journey': {
      color: 'from-[#3D2C24] to-[#261B16]',
      ringColor: '#FBBF24',
      nameplate: 'DSA JOURNEY',
      icon: Terminal,
    },
  };

  const handleSelect = (project: Project) => {
    sound.pageFlip();
    setActiveProjectId(project.id);
  };

  return (
    <div className="mb-20">
      {/* Editorial Header inspired directly by reference video: "Magic happens behind the doors" */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200/80 dark:bg-charcoal-800 border border-cream-300 dark:border-charcoal-700 text-xs font-mono text-charcoal-600 dark:text-cream-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brass-500" />
          <span>Interactive Vault</span>
        </div>
        <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight">
          Magic happens behind the doors
        </h3>
        <p className="mt-2 text-xs sm:text-sm font-mono text-charcoal-500 dark:text-cream-400">
          Select a project door below to unlock its architectural story and implementation details.
        </p>
      </div>

      {/* The 3 Arched Doors Grid */}
      <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-10 pb-8">
        {PROJECTS.map((project) => {
          const isActive = project.id === activeProjectId;
          const design = doorDesigns[project.id] || doorDesigns['tracehawk'];
          const Icon = design.icon;

          return (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(project)}
              className="flex flex-col items-center cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label={`Open door for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(project);
                }
              }}
            >
              {/* Outer arch frame */}
              <div 
                className={`relative w-28 sm:w-36 md:w-44 h-44 sm:h-56 md:h-64 rounded-t-full p-2 transition-all duration-300 ${
                  isActive 
                    ? 'ring-4 ring-brass-500/80 shadow-2xl translate-y-[-8px]' 
                    : 'ring-1 ring-cream-300 dark:ring-charcoal-700 shadow-md opacity-85 group-hover:opacity-100'
                } bg-cream-300/40 dark:bg-charcoal-800/80`}
              >
                {/* The Door Leaf itself */}
                <div 
                  className={`w-full h-full rounded-t-full bg-gradient-to-b ${design.color} border-2 border-white/10 flex flex-col items-center justify-between p-3 relative shadow-inner overflow-hidden`}
                >
                  {/* Vertical door panel grooves */}
                  <div className="absolute inset-x-3 inset-y-6 flex justify-between pointer-events-none opacity-20">
                    <div className="w-[1px] h-full bg-white/40" />
                    <div className="w-[1px] h-full bg-white/40" />
                    <div className="w-[1px] h-full bg-white/40" />
                  </div>

                  {/* Brass Nameplate at top */}
                  <div className="mt-6 z-10 px-2 py-1 rounded bg-gradient-to-r from-brass-500 via-brass-400 to-brass-600 shadow-md border border-brass-300 text-charcoal-900 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-center">
                    {design.nameplate}
                  </div>

                  {/* Icon badge in center */}
                  <div className="z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Brass Door Handle & Keyhole */}
                  <div className="mb-8 z-10 self-end mr-2 flex flex-col items-center">
                    {/* Horizontal handle lever */}
                    <div className="w-4 h-1.5 rounded-sm bg-gradient-to-r from-brass-300 to-brass-500 shadow" />
                    {/* Keyhole escutcheon */}
                    <div className="w-2.5 h-3.5 rounded-b-sm bg-brass-600 flex items-center justify-center -mt-0.5">
                      <div className="w-1 h-1.5 rounded-full bg-black/60" />
                    </div>
                  </div>

                  {/* Click to Enter Pill overlay */}
                  <div className={`z-10 py-1 px-2.5 rounded-full text-[9px] font-mono tracking-wider transition-all duration-200 ${
                    isActive 
                      ? 'bg-cream-100 text-charcoal-900 font-bold shadow' 
                      : 'bg-black/50 text-white/80 group-hover:bg-cream-100 group-hover:text-charcoal-900'
                  }`}>
                    {isActive ? 'Active Room' : 'Click to inspect'}
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-3 text-center">
                <span className={`text-xs font-mono tracking-wider ${
                  isActive ? 'font-bold text-charcoal-900 dark:text-cream-100' : 'text-charcoal-500 dark:text-cream-400'
                }`}>
                  {project.title}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Project Unlocked Room Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="mt-8 p-6 sm:p-10 rounded-3xl bg-cream-50 dark:bg-charcoal-850 border border-cream-300 dark:border-charcoal-700 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Specs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cream-200 dark:bg-charcoal-800 text-xs font-mono uppercase tracking-wider text-charcoal-700 dark:text-cream-200 border border-cream-300 dark:border-charcoal-700">
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500">
                  Status: {activeProject.status}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-850 dark:text-cream-100 tracking-tight">
                {activeProject.title}
              </h3>

              <p className="font-serif text-lg text-charcoal-700 dark:text-cream-200 italic">
                {activeProject.tagline}
              </p>

              <p className="text-sm text-charcoal-600 dark:text-cream-300 leading-relaxed font-sans">
                {activeProject.longDescription || activeProject.description}
              </p>

              {/* Architectural Highlights */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 dark:text-cream-400 mb-2">
                  Key Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.featuredPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700 dark:text-cream-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 dark:text-cream-400 mb-2">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-cream-200/70 dark:bg-charcoal-800 text-xs font-mono text-charcoal-800 dark:text-cream-200 border border-cream-300 dark:border-charcoal-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repository & Demo Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 text-xs font-mono tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-charcoal-400 dark:border-charcoal-600 hover:border-charcoal-850 dark:hover:border-cream-100 text-charcoal-850 dark:text-cream-100 text-xs font-mono tracking-wider transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-charcoal-400 dark:text-cream-500 italic">
                    (Live deployment available upon request)
                  </span>
                )}
              </div>
            </div>

            {/* Right Screen Mockup / Telemetry Terminal Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-charcoal-900 text-white p-5 font-mono text-xs shadow-2xl border border-charcoal-700">
                {/* Terminal top chrome */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] text-charcoal-400">
                    {activeProject.id}.spec • terminal
                  </span>
                </div>

                {/* Simulated Telemetry / Code View */}
                {activeProject.id === 'tracehawk' && (
                  <div className="space-y-2 text-[11px] leading-relaxed text-charcoal-300">
                    <div className="text-emerald-400 font-semibold">$ tracehawk --analyze capture.pcap</div>
                    <div>[✓] Loading raw packet stream (14,280 frames)...</div>
                    <div>[✓] Aggregating TCP handshakes & SYN scan attempts...</div>
                    <div className="text-amber-400">[!] Reconstructed alert: Suspicious port traverse from 192.168.1.45</div>
                    <div>[✓] Attack story exported: reconnaissance → probe → payload</div>
                    <div className="mt-3 text-brass-400 text-[10px]">
                      TraceHawk turns complex packet traces into clear tactical security timelines.
                    </div>
                  </div>
                )}

                {activeProject.id === 'codehaters' && (
                  <div className="space-y-2 text-[11px] leading-relaxed text-charcoal-300">
                    <div className="text-emerald-400 font-semibold">$ uvicorn app.main:app --port 8000 & next dev</div>
                    <div>[✓] FastAPI server running on http://localhost:8000</div>
                    <div>[✓] SQLAlchemy models synced: Users, Groups, AuditLogs</div>
                    <div className="text-cyan-400">[✓] Constraint: STRICT ONE STUDENT = ONE GROUP ACTIVE</div>
                    <div>[✓] Next.js 16 App Router UI connected on port 3000</div>
                    <div className="mt-3 text-brass-400 text-[10px]">
                      Student group allocation platform with JWT security guards & admin audit console.
                    </div>
                  </div>
                )}

                {activeProject.id === 'dsa-journey' && (
                  <div className="space-y-2 text-[11px] leading-relaxed text-charcoal-300">
                    <div className="text-emerald-400 font-semibold">$ g++ -O3 -std=c++20 solution.cpp</div>
                    <div>[✓] Test suite running on 10^5 randomized inputs...</div>
                    <div>[✓] Binary search runtime: O(log N) verified</div>
                    <div>[✓] Heap sort & two-pointer window routines pass</div>
                    <div className="text-emerald-400">Status: All edge cases covered (0ms execution time)</div>
                    <div className="mt-3 text-brass-400 text-[10px]">
                      Curated algorithmic practice repository tracking daily CS growth.
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

