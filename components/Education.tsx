import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationContent: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-indigo/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            ACADEMIC INTEGRITY
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Qualifications &amp; Education
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
        </div>

        {/* Education Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-dark-panel/95 border border-dark-border/80 hover:border-accent-teal/40 rounded-xl p-6 shadow-xl transition-all duration-300 relative group flex flex-col justify-between text-left"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
              }}
            >
              <div>
                {/* Degree Title row */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-accent-teal group-hover:bg-accent-teal group-hover:text-dark-bg transition-all">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="font-sans text-base font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-sm font-mono text-accent-teal/80 font-medium leading-normal">
                  {edu.institution}
                </p>
              </div>

              {/* Meta Info */}
              <div className="mt-8 pt-3.5 border-t border-white/5 flex items-center justify-between font-mono text-xs text-gray-400">
                <span className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {edu.duration}
                </span>

                <span className="flex items-center text-accent-emerald font-bold">
                  <Award size={12} className="mr-1 text-accent-emerald" />
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationContent;
