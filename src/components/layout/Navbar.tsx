import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live formatted clock matching the video: "Local time 2:00pm • 31 October, 2026"
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();
      const dateStr = now.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
      setCurrentTime(`Local time ${timeStr} • ${dateStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/90 dark:bg-charcoal-900/90 backdrop-blur-md py-3 border-b border-cream-200 dark:border-charcoal-800 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-xl bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 flex items-center justify-center font-bold text-xs font-editorial shadow-sm group-hover:scale-105 transition-transform">
            AD
          </div>
          <div className="hidden sm:block">
            <span className="font-editorial font-bold text-sm text-charcoal-850 dark:text-cream-100 tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[10px] font-mono text-charcoal-400 dark:text-cream-500 uppercase tracking-wider -mt-0.5">
              Portfolio &apos;26
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider text-charcoal-600 dark:text-cream-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-charcoal-900 dark:hover:text-cream-100 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-charcoal-850 dark:after:bg-cream-100 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Live Local Time widget & Connect Pill */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono pr-12">
          <div className="px-3 py-1 rounded-full bg-cream-200/60 dark:bg-charcoal-800/60 border border-cream-300/80 dark:border-charcoal-700 text-charcoal-500 dark:text-cream-400 text-[11px] select-none">
            {currentTime || 'Local time 2:00pm • 2026'}
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 font-semibold text-xs hover:opacity-90 transition-opacity"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex items-center md:hidden pr-12">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal-700 dark:text-cream-200 hover:bg-cream-200 dark:hover:bg-charcoal-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/98 dark:bg-charcoal-900/98 border-b border-cream-200 dark:border-charcoal-800 px-6 py-6 shadow-xl backdrop-blur-lg">
          <div className="flex flex-col gap-4 text-sm font-mono">
            <div className="pb-3 border-b border-cream-200 dark:border-charcoal-800 text-[11px] text-charcoal-400 dark:text-cream-500">
              {currentTime}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-charcoal-800 dark:text-cream-200 hover:text-brass-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-charcoal-850 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 font-semibold text-xs"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

