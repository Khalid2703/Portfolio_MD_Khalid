import React from 'react';
import { Code, HeartPulse, Trophy, Cpu } from 'lucide-react';

const Metrics: React.FC = () => {
  const metricsData = [
    {
      value: "10+",
      label: "Production APIs Delivered",
      description: "Scalable backend routes and gateway controllers deployed across Python, FastAPI, Flask, and Clever Cloud platforms with strict auth (OAuth, OIDC, SSO) protocols.",
      icon: Code,
      accent: "from-blue-500/20 to-accent-indigo/10 text-accent-indigo border-accent-indigo/20",
      glow: "rgba(99,102,241,0.15)"
    },
    {
      value: "3",
      label: "AI Healthcare Systems Built",
      description: "State-of-the-art diagnostic help, multilingual WhatsApp patient triage bots, and PDF medical OCR document processing pipelines with human-in-the-loop validation.",
      icon: HeartPulse,
      accent: "from-cyan-500/20 to-accent-teal/10 text-accent-teal border-accent-teal/20",
      glow: "rgba(14,165,233,0.15)"
    },
    {
      value: "2",
      label: "Hackathon Wins",
      description: "Distinguished 1st Runner-up at the prestigious NephroPlus national dialysis tech hackathon, and 2nd Prize winner at the University of Hyderabad Data Science Challenge.",
      icon: Trophy,
      accent: "from-fuchsia-500/20 to-accent-pink/10 text-accent-pink border-accent-pink/20",
      glow: "rgba(217,70,239,0.15)"
    },
    {
      value: "Active",
      label: "LangGraph / Agents Engineer",
      description: "Highly skilled in designing cyclic multi-agent graph topologies, state recovery checks, tool execution pipelines, and automated RAG hallucination evaluator suites.",
      icon: Cpu,
      accent: "from-emerald-500/20 to-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
      glow: "rgba(16,185,129,0.15)"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0f19_1px,transparent_1px),linear-gradient(to_bottom,#0c0f19_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none select-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            METRICS &amp; CAPABILITIES
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Proven AI Solutions, Not Prototypes
          </p>
          <div className="h-1 w-12 bg-accent-teal mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {metricsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-xl border bg-gradient-to-br ${item.accent} backdrop-blur-md hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between`}
                style={{
                  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
                }}
              >
                <div>
                  {/* Top Row with Icon and Big Value */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white group-hover:text-accent-teal transition-colors">
                      {item.value}
                    </span>
                    <div className="p-2 rounded bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Stat Title */}
                  <h3 className="font-sans text-lg font-bold text-gray-100 mb-2 tracking-tight group-hover:text-white">
                    {item.label}
                  </h3>
                </div>

                {/* Stat Description */}
                <p className="text-sm text-gray-400 font-normal leading-relaxed mt-2 pt-2 border-t border-white/5">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
