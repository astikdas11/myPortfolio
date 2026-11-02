import React, { useState, useEffect } from 'react';
import { LampPullCord } from './components/common/LampPullCord';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('astik-portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('astik-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('astik-portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 dark:bg-[#121312] text-charcoal-850 dark:text-cream-100 selection:bg-sage-200 selection:text-charcoal-900 transition-colors duration-500 paper-texture">
      
      {/* Editorial Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Interactive Lamp Pull Cord hanging from the top-right (reference video inspired) */}
      <LampPullCord isDark={isDark} onToggle={toggleTheme} />

      {/* Top Fixed Minimalist Navbar */}
      <Navbar isDark={isDark} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;

