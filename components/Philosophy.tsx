import React from 'react';
import { GitLoop, ShieldCheck, HeartPulse, HardDrive, Cpu, Radio, GitMerge, UserCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
  const points = [
    {
      title: "Agent Orchestration (Cyclic Graphs)",
      description: "Moving past linear chain-of-thought prompting. I design stateful cyclic architectures using LangGraph where specialized agents reason, call APIs, reflect, and correct their own errors iteratively.",
      icon: GitMerge,
      accent: "text-accent-teal border-accent-teal/20"
    },
    {
      title: "Automated Evaluation Frameworks",
      description: "Raw LLM outputs are unsafe. I implement strict G-Eval, BERTScore, and NLI entailment assessors to construct custom validation layers that detect hallucinations and gauge prompt compliance instantly.",
      icon: Cpu,
      accent: "text-accent-pink border-accent-pink/20"
    },
    {
      title: "Human-In-The-Loop Checkpoints",
      description: "Critical actions (like doctor appointment writes, or prescriptions OCR verification) require validation. I design active state-recovery queues that trigger secure human assessment when confidence drops.",
      icon: UserCheck,
      accent: "text-accent-indigo border-accent-indigo/20"
    },
    {
      title: "Production Infrastructure & Scaling",
      description: "AI is only as good as the back-end around it. I write resilient FastAPI routes, configure container deployments, manage SQL transactional tables, and implement industry-standard OAuth/SSO systems.",
      icon: HardDrive,
      accent: "text-accent-emerald border-accent-emerald/20"
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Background visual element */}
      <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-accent-indigo/5 blur-[150px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            ENGINEERING PRINCIPLES
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            My Engineering Philosophy
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
          
          <p className="text-gray-400 mt-6 leading-relaxed max-w-2xl text-sm sm:text-base">
            "Most engineers focus on generating responses. I focus on evaluation, reliability, and decision-making. I evaluate outputs scientifically rather than manually 'vibe checking' prompts."
          </p>
        </div>

        {/* Bento Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="bg-dark-panel/90 border border-dark-border/80 hover:border-text-light/25 rounded-xl p-6 shadow-xl transition-all duration-300 relative group flex flex-col justify-between text-left"
                style={{
                  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
                }}
              >
                <div>
                  {/* Icon Panel */}
                  <div className={`p-2.5 rounded bg-white/5 border w-fit mb-5 transition-all text-white group-hover:bg-white/10`}>
                    <Icon size={18} />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
                    {pt.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 font-normal leading-relaxed mt-2 pt-3 border-t border-white/5">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
