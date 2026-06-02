import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceContent: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Visual background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-indigo/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            PROFESSIONAL HISTORY
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-dark-border/80 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            return (
              <div key={idx} className="relative group text-left">
                
                {/* Glowing Dot on timeline */}
                <div className="absolute -left-[31px] md:-left-[39px] mt-1.5 w-4 h-4 bg-dark-bg border-2 border-accent-teal rounded-full group-hover:scale-125 group-hover:bg-accent-teal transition-all duration-300 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                
                {/* Content Box */}
                <div 
                  className="bg-dark-panel/90 border border-dark-border/80 hover:border-accent-teal/40 rounded-xl p-6 shadow-xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
                  }}
                >
                  {/* Top Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-mono text-accent-teal font-medium">
                        <span className="flex items-center">
                          <Briefcase size={12} className="mr-1" />
                          {exp.company}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center text-gray-400">
                          <Calendar size={12} className="mr-1" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Descriptions bullets */}
                  <div className="space-y-3 mt-2">
                    {exp.description.map((desc, dIdx) => (
                      <div key={dIdx} className="flex items-start text-sm text-gray-300 leading-relaxed">
                        <span className="text-accent-teal/80 mr-2.5 mt-1 filter drop-shadow">
                          <CheckCircle size={14} className="min-w-[14px]" />
                        </span>
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceContent;
