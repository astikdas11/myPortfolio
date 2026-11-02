import React from 'react';

interface AvailabilityBadgeProps {
  text?: string;
  className?: string;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ 
  text = 'Open to opportunities',
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/80 dark:bg-charcoal-800/80 border border-cream-300 dark:border-charcoal-700 shadow-sm backdrop-blur-sm text-xs font-mono text-charcoal-700 dark:text-cream-200 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="tracking-wide">{text}</span>
    </div>
  );
};

