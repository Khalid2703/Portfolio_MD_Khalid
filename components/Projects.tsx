import React, { useState } from 'react';
import { Eye, Code, CheckCircle, ShieldCheck, Database, HardDrive, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { GITHUB_URL } from '../constants';

interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  specLogsTitle: string;
  specLogs: string[];
  metrics: { label: string; value: string }[];
}

const PROJECTS_LIST: ProjectDetail[] = [
  {
    title: "1. MicroHeal Healthcare Agents",
    subtitle: "Stateful Multilingual Healthcare Automation on WhatsApp",
    description: "Architected and engineered a cyclic multi-agent medical triage and booking application. It automatically handles multilingual queries (Hindi, Telugu, English), transcribes and processes medical invoice images using OCR, and manages calendar states via automated schedules.",
    highlights: [
      "Built resilient LangGraph workflows for cyclic patient health evaluation and appointment scheduling.",
      "Integrated FastAPI asynchronous background processes and Webhooks to handle heavy WhatsApp traffic via Twilio.",
      "Engineered automated patient triage categorization based on proprietary dataset parameters.",
      "Built full-pipeline OCR invoice parser that automatically extracts medicine names, dosages, and costs."
    ],
    techStack: ["LangGraph", "FastAPI", "Python", "Twilio API", "PaddleOCR", "PostgreSQL", "Docker"],
    githubUrl: GITHUB_URL,
    specLogsTitle: "LANGGRAPH AGENT SUB-STATE EVAL",
    specLogs: [
      `{ "state": "triage_complete", "confidence": "0.981" }`,
      `{ "extracted_drugs": ["Paracetamol", "Amlodipine"] }`,
      `{ "action": "auto_schedule", "doctor": "Dr. Verma", "session": "15:30 UTC" }`
    ],
    metrics: [
      { label: "OCR Accuracy", value: "98.4%" },
      { label: "Triage Success", value: "95.2%" },
      { label: "API Throttling", value: "0% loss" }
    ]
  },
  {
    title: "2. Regnova",
    subtitle: "Strictly Grounded PDF Knowledge & Retrieval Assistant",
    description: "Designed a production-ready Question-Answering system capable of translating complex PDFs into highly precise grounded answers. The system completely mitigates model hallucinations by verifying answers against document source contexts using advanced G-eval models.",
    highlights: [
      "Configured FAISS Dense Vector retrieval indexes combined with BM25 sparse search for optimal recall results.",
      "Crafted automated Hallucination Detection units to evaluate NLI entailment of response structures against original chunks.",
      "Optimized document processing pipelines using sliding window chunking to preserve absolute semantic boundaries.",
      "Engineered an evaluation dashboard mockup showing live Faithfulness and Answer Relevance grades."
    ],
    techStack: ["FAISS", "Gemini API", "Python", "LangChain", "G-Eval", "TypeScript", "React"],
    githubUrl: GITHUB_URL,
    specLogsTitle: "REGNOVA RETRIEVAL & GROUNDEDNESS REPORT",
    specLogs: [
      `{ "retrieved_nodes": [2, 11], "rerank_score": "0.94" }`,
      `{ "eval": { "faithfulness": "0.99", "context_recall": "0.97" } }`,
      `{ "hallucination_detected": false, "groundedness_score": "0.985" }`
    ],
    metrics: [
      { label: "Faithfulness", value: "0.99" },
      { label: "Rerank Score", value: "0.94" },
      { label: "Processing", value: "3.2s avg" }
    ]
  },
  {
    title: "3. NephroConnect",
    subtitle: "AI-Assisted Dialysis Report Analyzer & Human Triage",
    description: "Developed a medical intelligence pipeline that digitizes raw medical records and renal reports, calculates medical telemetry values, performs risk triage, and routes urgent clinical files directly to a high-priority physician review loop.",
    highlights: [
      "Engineered an advanced computer vision OCR pipeline utilizing OpenCV filters to clean and process medical scans.",
      "Constructed a Llama-3-based diagnostic agent that labels critical indicators (Creatinine, GFR, Potassium).",
      "Created a robust confidence-scoring threshold classifier that separates low-risk files from high-risk medical alerts.",
      "Implemented a Human-in-the-Loop review system allowing clinicians to correct and approve structured outputs easily."
    ],
    techStack: ["Llama 3", "OpenCV", "PyTesseract", "FastAPI", "React", "PostgreSQL"],
    githubUrl: GITHUB_URL,
    specLogsTitle: "NEPHRO DIAGNOSTIC CLASSIFIER LOGS",
    specLogs: [
      `{ "biomarkers": { "creatinine": "3.2 mg/dL", "gfr": "18" } }`,
      `{ "risk_profile": "Stage-4 RF", "confidence_index": "0.963" }`,
      `{ "route": "human_escalation", "assigned_doc_id": "908" }`
    ],
    metrics: [
      { label: "CV Extraction", value: "96.5%" },
      { label: "Classification", value: "98.9%" },
      { label: "Review Speed", value: "+45% fast" }
    ]
  },
  {
    title: "4. MediFitMate",
    subtitle: "Unified Multi-Agent Assistant & Clinical API Gateway",
    description: "Created an autonomous healthcare agent capable of orchestrating complex reasoning tasks such as multi-tiered symptom diagnosis, matching active ingredients, determining potential drug-drug interactions, and formatting medical advice.",
    highlights: [
      "Created highly modular multi-step tool-calling agents using Pydantic validation decorators in Python.",
      "Connected system to RxNav and FDA open databases to perform safe medication and side-effect screening.",
      "Orchestrated sub-state execution graphs to let independent agents collaborate on specialized medical queries.",
      "Designed a clean high-contrast dashboard detailing current action loops and active agent workflows."
    ],
    techStack: ["Python", "FastAPI", "RxNav API", "OpenFDA", "LangGraph", "Docker", "Vercel"],
    githubUrl: GITHUB_URL,
    specLogsTitle: "MULTI-AGENT CLINICAL TOOL RECONCILER",
    specLogs: [
      `[TOOL_CALL] invoke_rxnav_interaction { "drug_a": "aspirin", "drug_b": "warfarin" }`,
      `[REASONING] Warning detected: Elevated bleeding risk (Severe).`,
      `[EVALUATOR] Verification response matches FDA guideline ID: CTR_998`
    ],
    metrics: [
      { label: "Tool Call Accuracy", value: "99.1%" },
      { label: "Response Delay", value: "410ms" },
      { label: "DB Synced", value: "100%" }
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProj, setSelectedProj] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-dark-bg relative border-t border-dark-border">
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent-teal/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent-indigo/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            DEVELOPED PRODUCTS
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Production-Grade AI Projects
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 leading-relaxed max-w-2xl text-sm sm:text-base">
            These systems represent the execution of strict engineering standards. Each product leverages advanced API architectures, rigid safety filters, and stateful multi-agent pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_LIST.map((proj, idx) => (
            <div 
              key={idx}
              className="bg-dark-panel/90 border border-dark-border/80 hover:border-accent-teal/40 rounded-xl p-5 md:p-6 shadow-xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
              }}
            >
              {/* Card top banner decoration */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-indigo via-accent-teal to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Title & Subtitle */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-light font-sans tracking-tight group-hover:text-accent-teal transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent-teal font-medium mt-1">
                      {proj.subtitle}
                    </p>
                  </div>

                  <a 
                    href={proj.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-1.8 bg-white/5 border border-white/10 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all shadow"
                    aria-label="View Code repository"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-normal mb-5">
                  {proj.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((hlt, hIdx) => (
                    <div key={hIdx} className="flex items-start text-xs text-gray-300 leading-normal">
                      <span className="text-accent-indigo mr-2 font-bold select-none">•</span>
                      <span>{hlt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metrics boxes inside projects */}
                <div className="grid grid-cols-3 gap-2 py-3.5 border-t border-b border-dark-border/40 mb-5 text-left">
                  {proj.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[9px] uppercase font-mono text-gray-500 font-bold">{metric.label}</span>
                      <span className="text-sm font-semibold font-mono text-text-light mt-0.5">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-[10px] rounded hover:border-accent-teal/40 hover:text-accent-teal transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Simulated Telemetry Log Button */}
                <button
                  onClick={() => setSelectedProj(idx)}
                  className="w-full mt-4 py-2.5 bg-[#050814] hover:bg-accent-indigo hover:text-dark-bg text-accent-indigo border border-accent-indigo/20 text-xs font-mono font-bold uppercase rounded tracking-wider flex items-center justify-center space-x-1.5 transition-all duration-300 shadow"
                >
                  <Terminal size={12} />
                  <span>Inspect System Logs &amp; Metrics</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LOGS MONITOR MODAL / DRAWER */}
        {selectedProj !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md animate-fade-in p-4"
            onClick={() => setSelectedProj(null)}
          >
            <div 
              className="bg-[#040813] border border-dark-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Title Header */}
              <div className="bg-dark-panel border-b border-dark-border px-5 py-4 flex items-center justify-between text-left">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="font-mono text-xs text-gray-300 font-bold pl-2 truncate max-w-sm sm:max-w-md">
                    {PROJECTS_LIST[selectedProj].title} - Telemetry
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProj(null)}
                  className="text-gray-400 hover:text-white font-mono text-xs bg-white/5 border border-white/10 hover:bg-white/10 px-2 py-1 rounded"
                >
                  ESC
                </button>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 p-5 overflow-y-auto text-left space-y-4 font-mono text-xs">
                <div>
                  <span className="text-gray-500 font-bold block mb-1"># SYSTEM OBJECT TITLE:</span>
                  <p className="text-white text-sm font-semibold">{PROJECTS_LIST[selectedProj].title}</p>
                </div>

                <div>
                  <span className="text-gray-500 font-bold block mb-1"># RECOVERY METRICS &amp; EVALUATION STANDARDS:</span>
                  <div className="grid grid-cols-3 gap-3">
                    {PROJECTS_LIST[selectedProj].metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-md">
                        <span className="text-[10px] text-gray-500 block uppercase font-bold">{m.label}</span>
                        <span className="text-white text-sm font-bold mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 font-bold block mb-1 uppercase"># {PROJECTS_LIST[selectedProj].specLogsTitle}:</span>
                  <div className="bg-[#080d21] border border-dark-border/80 p-4 rounded text-accent-teal leading-relaxed select-all">
                    {PROJECTS_LIST[selectedProj].specLogs.map((log, idx) => (
                      <div key={idx} className="pb-1.5 border-b border-white/5 mb-1.5 last:border-0 last:mb-0">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 font-bold block mb-1"># PRODUCTION DEPLOYMENT PLATFORM:</span>
                  <p className="text-gray-200">
                    Deployed as fully isolated containers. CI/CD configured through GitHub workflows. Server nodes are balanced using Gunicorn instances in Render/Vercel edge functions.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-dark-panel border-t border-dark-border p-4 flex justify-end">
                <button
                  onClick={() => setSelectedProj(null)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-accent-teal text-dark-bg font-bold font-mono text-xs rounded transition-all hover:brightness-105 active:scale-95"
                >
                  Dismiss Logs
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
