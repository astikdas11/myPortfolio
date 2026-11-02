import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-cream-300 dark:border-charcoal-800 bg-cream-50/50 dark:bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Year */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 flex items-center justify-center font-bold text-xs font-editorial">
              AD
            </div>
            <div>
              <div className="font-editorial font-bold text-sm text-charcoal-850 dark:text-cream-100">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] font-mono text-charcoal-500 dark:text-cream-400">
                Cybersecurity & Software Developer • &copy; {new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Center Note */}
          <div className="text-xs font-mono text-charcoal-500 dark:text-cream-400 flex items-center gap-1.5 text-center">
            <span>Built with precision & passion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>• First-Year BTech CS</span>
          </div>

          {/* Right Actions: Back to top */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-charcoal-400 dark:text-cream-500">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero tracking cookies</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 dark:bg-charcoal-800 hover:bg-cream-300 dark:hover:bg-charcoal-700 text-charcoal-850 dark:text-cream-100 text-xs font-mono transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

