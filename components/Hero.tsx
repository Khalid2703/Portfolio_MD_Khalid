import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, FileText, Bot, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';

interface HeroProps {
  onNavClick: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }[] = [];

    // Create particles representing agent nodes and signal flows
    const colors = ['rgba(14, 165, 233, 0.4)', 'rgba(99, 102, 241, 0.4)', 'rgba(217, 70, 239, 0.3)'];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw agentic grid graph connections
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.3)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 160)})`;
            ctx.stroke();
          }
        }
      }

      // Draw and update active flow agents
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing light on some particles
        if (Math.random() > 0.99) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace('0.4', '0.1').replace('0.3', '0.1');
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background canvas of agent graph */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-indigo/10 blur-[130px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-teal/10 blur-[150px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-accent-teal/10 hover:from-accent-indigo/20 hover:to-accent-teal/20 transition-all border border-accent-indigo/20 rounded-full px-4 py-1.5 w-fit">
              <Bot size={14} className="text-accent-teal animate-pulse" />
              <span className="font-mono text-xs text-accent-teaser text-gray-300 font-semibold tracking-wider uppercase">
                LangGraph &amp; AI Agents Systems
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <span className="font-mono text-xs text-accent-teal tracking-widest block uppercase mb-1 font-semibold">
                APPLIED AI &amp; BACKEND ENGINEER
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight text-white leading-tight">
                Md Khalid
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-gray-200">
                Building AI Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-indigo to-accent-pink">Think, Evaluate</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-teal">Act</span>.
              </h2>
            </div>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-xl">
              AI Software Engineer specializing in building enterprise-grade agentic workflows, dynamic LangGraph architectures, thorough LLM Evaluation suites, RAG optimization, and highly resilient production backends.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavClick('systems')}
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-accent-teal hover:from-accent-teal hover:to-blue-600 text-dark-bg font-semibold px-6 py-3.5 rounded shadow-lg transition-all duration-300 transform active:scale-95"
              >
                <span>Explore Built Systems</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavClick('projects')}
                className="px-6 py-3.5 border border-dark-border hover:border-accent-teal bg-white/5 hover:bg-white/10 text-text-light font-medium rounded transition-all active:scale-95 flex items-center space-x-2"
              >
                <span>View Projects</span>
              </button>

              {/* Secure Download resume */}
              <a
                href="https://drive.google.com/file/d/1X6Gqj-R0mYpxG0l17zI96iZ6rC5M-1-b/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 border border-transparent text-gray-400 hover:text-accent-teal transition-all flex items-center space-x-2"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick social integrations */}
            <div className="flex items-center space-x-6 pt-6 text-gray-500 border-t border-dark-border/40 max-w-md">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold">CONNECT:</span>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-accent-teal transition-colors"
                aria-label="GitHub Account"
              >
                <Github size={20} />
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-accent-teal transition-colors"
                aria-label="LinkedIn Account"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mdkhalid2702@gmail.com" 
                className="hover:text-accent-teal transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side Agent Interactive Visual Terminal */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/10 to-accent-pink/10 rounded-2xl blur-lg pointer-events-none" />
            <div className="h-full w-full bg-[#070b19]/90 border border-dark-border rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col font-mono text-xs overflow-hidden relative">
              
              {/* Terminal Frame Controls */}
              <div className="flex items-center justify-between border-b border-dark-border/80 pb-3 mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] text-gray-500 font-semibold tracking-wider flex items-center space-x-1.5">
                  <Terminal size={12} className="text-accent-teal" />
                  <span>langgraph_agent_runtime.py</span>
                </div>
              </div>

              {/* Running logs output console */}
              <div className="flex-1 space-y-3.5 overflow-y-auto text-left leading-normal scrollbar-none">
                <p className="text-gray-500">&gt; npx langgraph-cli dev --port 3000</p>
                <p className="text-accent-emerald">[OK] LangGraph server started at localhost:3000</p>
                <p className="text-gray-400">[INIT] Initializing Multi-Agent Orchestrator...</p>
                
                <p className="text-gray-300">
                  <span className="text-accent-indigo">system_router:</span> Received incoming query: <span className="text-yellow-400">"Patient requires symptom triage and scheduling..."</span>
                </p>

                <div className="pl-4 border-l border-accent-indigo/40 space-y-1.5">
                  <p className="text-gray-400">
                    ↳ <span className="text-accent-teal">[Agent: Router]</span> Analyzing topic... 
                  </p>
                  <p className="text-gray-400">
                    ↳ <span className="text-accent-teal">[Router Output]</span> State transition to: <span className="text-accent-pink">"triage_symptoms"</span> (Confidence: 0.99)
                  </p>
                  <p className="text-gray-400">
                    ↳ <span className="text-accent-pink">[Agent: Triage]</span> Executing symptom validation agent check...
                  </p>
                </div>

                <p className="text-gray-300">
                  <span className="text-accent-indigo">evaluation_layer:</span> Testing output groundedness...
                </p>

                <div className="pl-4 border-l border-emerald-500/40 space-y-1">
                  <p className="text-accent-emerald">[OK] Faithfulness Score: 0.982</p>
                  <p className="text-accent-emerald">[OK] Context Recall: 0.965</p>
                  <p className="text-accent-emerald">[OK] Hallucination Risk: Nill (No hallucinations detected)</p>
                </div>

                <p className="text-accent-teal animate-pulse">● Awaiting human review trigger...</p>
                
                <p className="text-gray-500 text-[10px] select-none pt-4 border-t border-dark-border/40">
                  Latency: 124ms | Tokens: 489/1024 | Model: gemini-2.5-flash
                </p>
              </div>

              {/* Decorative faint grid graph in terminal background */}
              <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none select-none">
                <Bot size={130} className="text-accent-teal" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
