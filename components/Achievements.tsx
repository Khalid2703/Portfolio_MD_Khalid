import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Award, Anchor, Star } from 'lucide-react';

const AchievementsContent: React.FC = () => {
  // Give distinct icons based on index for variety
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Trophy;
      case 1: return Award;
      case 2: return Anchor;
      default: return Star;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Visual background glow */}
      <div className="absolute top-1/2 left-1/4 h-80 w-80 rounded-full bg-accent-teal/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            RECOGNITIONS &amp; LEADERSHIP
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Honors, Awards &amp; Experience
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
        </div>

        {/* Grid layout cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = getIcon(idx);
            return (
              <div 
                key={idx}
                className="bg-dark-panel/90 border border-dark-border/80 hover:border-accent-pink/40 rounded-xl p-6 shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                style={{
                  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
                }}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className="mb-5 p-2.5 rounded bg-white/5 border border-white/10 text-accent-pink w-fit group-hover:bg-accent-pink group-hover:text-dark-bg transition-all">
                    <Icon size={18} />
                  </div>

                  <h3 className="font-sans text-base font-bold text-gray-100 group-hover:text-white transition-colors text-left leading-snug">
                    {ach.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed text-left mt-4 pt-3 border-t border-white/5">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsContent;
