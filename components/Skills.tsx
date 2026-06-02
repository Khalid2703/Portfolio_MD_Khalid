import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { Code, Terminal, Eye, Brain, Cog, ShieldCheck } from 'lucide-react';

const SkillsContent: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number | null>(null);

  // Return specific icon corresponding to category
  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Brain;
    if (category.includes('Backend')) return Code;
    if (category.includes('Computer Vision')) return Eye;
    return Cog;
  };

  return (
    <section id="stack" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            CORE CAPABILITIES
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Technical Stack &amp; Concepts
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-sm sm:text-base">
            Proficient in advanced tool-calling agents, NLP classifiers, hybrid vector search architectures, and resilient back-ends. Hover or inspect to view exact sub-capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div 
                key={idx}
                onMouseEnter={() => setActiveCategoryIdx(idx)}
                onMouseLeave={() => setActiveCategoryIdx(null)}
                className="bg-dark-panel/90 border border-dark-border/80 hover:border-accent-teal/40 rounded-xl p-6 shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                style={{
                  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
                }}
              >
                <div>
                  {/* Title Bar styling */}
                  <div className="flex items-center space-x-3 mb-5 pb-3.5 border-b border-dark-border/40 text-left">
                    <div className="p-2 rounded bg-accent-indigo/10 text-accent-indigo group-hover:bg-accent-indigo group-hover:text-dark-bg transition-all">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-sans text-base font-bold text-gray-100 group-hover:text-white transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2 text-left">
                    {cat.skills.map((skill, sIdx) => {
                      return (
                        <div 
                          key={sIdx}
                          className="flex items-center space-x-1.5 px-3 py-1.8 bg-[#060b18] hover:bg-gradient-to-r hover:from-accent-indigo/10 hover:to-accent-teal/10 border border-dark-border group-hover:border-accent-teal/20 text-gray-300 font-mono text-[11px] rounded transition-all cursor-default select-none hover:text-accent-teal"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent-teal" />
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-context description panel matching linear style */}
                <span className="text-[10px] uppercase font-mono text-gray-500 font-semibold tracking-wider text-left mt-6 pt-3 border-t border-dark-border/40 block">
                  SYSTEM READY ACCREDITATION ✅
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsContent;
