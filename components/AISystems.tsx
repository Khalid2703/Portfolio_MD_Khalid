import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, AlertTriangle, FileText, CheckCircle, Database, Server, User, MessageSquare, ShieldCheck, Flame, GitGraph, BookOpen, Clock, Cpu } from 'lucide-react';

interface SystemNode {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  details: string;
  type: 'io' | 'agent' | 'router' | 'database' | 'eval';
}

interface SystemData {
  id: string;
  title: string;
  philosophy: string;
  nodes: SystemNode[];
  techSpec: string[];
  performance: {
    latency: string;
    model: string;
    evalScore: string;
  };
  logs: string[];
}

const SYSTEMS_DATA: SystemData[] = [
  {
    id: 'healthcare-workflow',
    title: 'Healthcare Agent Workflow (MicroHeal)',
    philosophy: 'Uses LangGraph to model patient triage as a stateful, cyclic workflow with human-in-the-loop validation checkpoints before critical booking steps.',
    nodes: [
      { id: 'user', label: 'User', icon: User, type: 'io', details: 'Triggers request via WhatsApp message with health concern or bill image.', },
      { id: 'whatsapp', label: 'WhatsApp API', icon: MessageSquare, type: 'io', details: 'Twilio Gateway receives Webhooks and forwards payload to FastAPI back-end.', },
      { id: 'router', label: 'Agent Router', icon: GitGraph, type: 'router', details: 'Analyzes intent. Determines if query is for symptoms (triage), booking, or prescription OCR.', },
      { id: 'triage', label: 'Symptom Triage', icon: ShieldCheck, type: 'agent', details: 'Executes patient symptom diagnostic queries based on clinical datasets and maps state.', },
      { id: 'booking', label: 'Appointment Booker', icon: BookOpen, type: 'agent', details: 'Accesses medical database to fetch open slots and schedules doctor appointment.', },
      { id: 'ocr', label: 'Prescription OCR', icon: FileText, type: 'agent', details: 'Uses PaddleOCR and Tesseract-based pipeline to digitize prescriptions, reading medications and dosage.', },
      { id: 'cms', label: 'Healthcare CMS', icon: Database, type: 'database', details: 'Stores patient profiles, processed invoices, medical records, and conversation history.', },
      { id: 'generator', label: 'Response Gen', icon: Server, type: 'io', details: 'Formulates comforting, medically validated conversational response in Hindi, Telugu, or English.', },
      { id: 'patient', label: 'Patient Recipient', icon: User, type: 'io', details: 'Receives precise triage report / booking confirmation directly on WhatsApp.', }
    ],
    techSpec: [
      'State Management via LangGraph StateGraph memory checkpoints',
      'Asynchronous webhook handlers powered by FastAPI & Gunicorn',
      'OCR recognition backed by OpenCV preprocessing & PaddleOCR model',
      'Clinically grounded prompting using medical few-shot examples',
      'Dual-layer Guardrails to filter non-medical inputs outright'
    ],
    performance: {
      latency: '340msavg',
      model: 'Llama-3-70B & Gemini-2.5',
      evalScore: '94.2% Triage Accuracy'
    },
    logs: [
      '[SYSTEM] WhatsApp webhook received client_id=wa_7728',
      '[ROUTER] Intent identified: medical_triage + image_upload',
      '[OCR_AGENT] Preprocessing billing slip image with adaptive thresholding',
      '[OCR_AGENT] Extracted: "Amoxicillin 500mg - TDS" (Confidence: 98.4%)',
      '[TRIAGE_AGENT] Running symptom analysis against clinical DB',
      '[TRIAGE_AGENT] Identified high-probability upper-respiratory congestion',
      '[CMS_WRITE] Merged medical file update for uid=wa_7728',
      '[RESPONSE_GEN] Formulating response in Telugu: "మీ ప్రిస్క్రిప్షన్..."',
      '[GATEWAY] Message sent via Twilio. Status: DELIVERED'
    ]
  },
  {
    id: 'regnova-rag',
    title: 'Regnova Knowledge Assistant',
    philosophy: 'A resilient retrieval augmented generation (RAG) assistant designed with advanced evaluation safeguards to nullify hallucinations and guarantee factual groundedness.',
    nodes: [
      { id: 'query', label: 'User Query', icon: User, type: 'io', details: 'Enters complex questions regarding PDF handbooks or regulatory docs.', },
      { id: 'upload', label: 'Doc Ingestion', icon: FileText, type: 'io', details: 'Uploads contract or policy PDF. System runs PyMuPDF extraction.', },
      { id: 'chunker', label: 'Chunking Engine', icon: GitGraph, type: 'router', details: 'Performs token-based sliding window chunking (500 tokens, 10% overlap).', },
      { id: 'vectordb', label: 'Vector Database', icon: Database, type: 'database', details: 'Generates embedding vectors via Text-Embedding-004, saves in FAISS / pgvector.', },
      { id: 'retriever', label: 'Retriever', icon: ShieldCheck, type: 'router', details: 'Executes Hybrid Search (Dense Embeddings + BM25 Sparse Search) with Re-ranking.', },
      { id: 'gemini', label: 'Gemini 1.5 Pro', icon: Server, type: 'agent', details: 'Generates responses grounded strictly on top-k retrieved semantic chunks.', },
      { id: 'eval', label: 'Evaluation Layer', icon: Cpu, type: 'eval', details: 'Independent validation system triggers dual-agent factual metrics checks.', },
      { id: 'hallucination', label: 'Hallucination Unit', icon: AlertTriangle, type: 'eval', details: 'Validates that response statements do not contain unsupported information.', },
      { id: 'groundedness', label: 'Groundedness Test', icon: CheckCircle, type: 'eval', details: 'Checks NLI entailment score of prompt vs source. Rejects if score < 0.85.', },
      { id: 'response', label: 'Final Response', icon: User, type: 'io', details: 'Displays validated, citation-grounded response to the user interface.', }
    ],
    techSpec: [
      'Document chunking with adaptive semantic boundary detection',
      'Hybrid Dense/Sparse retrieval powered by Hugging Face & FAISS',
      'Re-ranking with Cross-Encoder (cohere-rerank layout)',
      'Groundedness metrics computed using G-Eval frameworks',
      'Self-correction logic: Re-retrieves if hallucination risk detected'
    ],
    performance: {
      latency: '480msavg',
      model: 'Gemini-1.5-Pro',
      evalScore: '< 0.2% Hallucination Rate'
    },
    logs: [
      '[USER] Query: "Compare liability constraints in Clause 8.2 vs 9.4"',
      '[CHUNKS] Retrieving dense representation vectors...',
      '[RETRIEVER] Top-3 relevant document nodes retrieved from FAISS space',
      '[RETRIEVER] Cross-Encoder re-rank scores: [0.93, 0.84, 0.76]',
      '[MODEL_CALL] Initiated prompt context schema to Gemini 1.5 Pro',
      '[EVALUATOR] Triggering Groundedness check...',
      '[EVAL_GROUNDEDNESS] Sentence 1 entials source page 12 (Score: 0.99)',
      '[EVAL_GROUNDEDNESS] Sentence 2 entails source page 14 (Score: 0.97)',
      '[HALLUCINATION_DETECTOR] No unsubstantiated claims discovered',
      '[RESULT] Response validated. Delivered with [12, 14] page citations.'
    ]
  },
  {
    id: 'eval-framework',
    title: 'AI Evaluation Framework',
    philosophy: 'A pipeline designed around LLM-as-a-Judge concepts to quantitatively score conversational safety, intent correctness, and system dependability.',
    nodes: [
      { id: 'input', label: 'System Input', icon: User, type: 'io', details: 'The raw user conversation or system-prompt configuration input.', },
      { id: 'output', label: 'LLM Output', icon: Server, type: 'io', details: 'The raw candidate output text generated by the production model.', },
      { id: 'scoring', label: 'Confidence Score', icon: Cpu, type: 'eval', details: 'Calibrates probability metrics of response logits to score output assurance.', },
      { id: 'groundtruth', label: 'Ground Truth Comp', icon: Database, type: 'database', details: 'Compares output to standard reference answers using BLEU, ROUGE, and BERTScore.', },
      { id: 'consistency', label: 'Consistency Val', icon: ShieldCheck, type: 'eval', details: 'Runs self-consistency tests across 3 separate temperature=0.7 outputs.', },
      { id: 'safety', label: 'Safety Checks', icon: AlertTriangle, type: 'eval', details: 'Ensures no hate-speech, toxic statements, prompt injection, or PII leaks occur.', },
      { id: 'human-trigger', label: 'Human Review', icon: Flame, type: 'router', details: 'Launches Human-in-the-Loop flag if confidence < 75% or safety checks trigger warnings.', },
      { id: 'final', label: 'Final Decision', icon: CheckCircle, type: 'io', details: 'Response is either approved for output or routed to clinical queue for intervention.', }
    ],
    techSpec: [
      'Automated semantic evaluation metrics comparing to dataset vaults',
      'Self-consistency voting framework to detect erratic model behavior',
      'Llama-Guard 3 safety checks parsing system and user messages',
      'WebSocket notification service to awake active Human reviews',
      'Continuous telemetry pipelines storing evaluation charts'
    ],
    performance: {
      latency: '290msavg',
      model: 'Llama-Guard 3 & GPT-4o',
      evalScore: '100% Guardrail Coverage'
    },
    logs: [
      '[EVAL_PIPE] Input telemetry received.',
      '[EVAL_PIPE] Candidate response: "Based on your clinical record..."',
      '[CONFIDENCE_CALCULATOR] Token logits average confidence: 95.8%',
      '[GROUND_TRUTH] BERTScore semantic match to guidelines: 0.892',
      '[CONSISTENCY] Run 3 iterations. Discrepancy metric: 0.03 (Very High Similarity)',
      '[LLAMA_GUARD] Checking safety. Output category: SAFE',
      '[PII_CHECK] Regex matching + NER completed. No PII leaks.',
      '[ROUTER] Confidence above threshold. Bypassing human review queue.',
      '[SYSTEM_OUT] Output approved and archived.'
    ]
  },
  {
    id: 'agentic-automation',
    title: 'Agentic Healthcare Automation',
    philosophy: 'A multi-agent design where specializing agents collaborate via shared state to plan, pick tools, invoke external APIs, and reflect on their solutions.',
    nodes: [
      { id: 'patient-req', label: 'Patient Request', icon: User, type: 'io', details: 'Patient sends "I need to check if my prescription is compatible with blood pressure pills."', },
      { id: 'planner', label: 'Planner Agent', icon: Cpu, type: 'agent', details: 'Deconstructs request into multiple distinct sub-tasks: extract medication, fetch interactions, evaluate.', },
      { id: 'tool-selector', label: 'Tool Selector', icon: GitGraph, type: 'router', details: 'Checks tool registry. Decides to call "RxNav Interaction API" & "Patient EHR DB".', },
      { id: 'api-layer', label: 'Medical API Lyr', icon: Server, type: 'database', details: 'Executes requests to FDA databases and medical interaction catalogs.', },
      { id: 'reasoning', label: 'Reasoning Agent', icon: ShieldCheck, type: 'agent', details: 'Consolidates patient EHR and FDA interaction data to synthesize a clinical explanation.', },
      { id: 'memory', label: 'Memory Layer', icon: Database, type: 'database', details: 'Saves conversation context and interaction results to localized thread memory state.', },
      { id: 'evaluator-agent', label: 'Evaluator Agent', icon: Cpu, type: 'eval', details: 'Double checks the medical dosage statements and interaction severity grades.', },
      { id: 'response-auto', label: 'Final Output', icon: CheckCircle, type: 'io', details: 'Returns fully structured medical advisory with interaction warn details.', }
    ],
    techSpec: [
      'Multi-Agent orchestration built upon LangGraph Send and Receive nodes',
      'Dynamic Tool calling using structured Pydantic schemas in Python',
      'Integrated RxNav and clinical API gateways with rate-limiting wrappers',
      'Dual memory system: Short-term thread State & Long-term semantic profile storage',
      'Self-correction Loop: Triage restarts if Evaluator spots diagnostic gaps'
    ],
    performance: {
      latency: '510msavg',
      model: 'Claude 3.5 Sonnet',
      evalScore: '97.1% Correct Tool Calling'
    },
    logs: [
      '[PATIENT] "Is Metformin compatible with Lisinopril?"',
      '[PLANNER] Generating execution plan node sequence: [EHR, Interactions, Synthesize]',
      '[TOOL_SELECT] Selected: fetch_patient_ehr(uid=9) + query_rxnav_interaction("Metformin", "Lisinopril")',
      '[API_CALL] Requesting RxNav API gateway...',
      '[API_RESPONSE] Extracting payload: 1 interaction found (Mild. Risk of hypotension)',
      '[REASONING] Synthesizing summary: "Yes, both can be taken, but monitor BP..."',
      '[DB_WRITE] Saved thread state checkpoint under thread_id=med_8893',
      '[EVALUATOR] Verification check against FDA guidelines: APPROVED',
      '[RESPONSE] Rendering fully formatted markdown warning table.'
    ]
  }
];

const AISystems: React.FC = () => {
  const [activeSysId, setActiveSysId] = useState('healthcare-workflow');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeNodeIdx, setActiveNodeIdx] = useState<number | null>(null);
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const logTerminalRef = useRef<HTMLDivElement>(null);

  const activeSystem = SYSTEMS_DATA.find((s) => s.id === activeSysId)!;

  useEffect(() => {
    // Reset simulation states when changing system
    setIsSimulating(false);
    setActiveNodeIdx(null);
    setSimLogs([`[INFO] Loaded ${activeSystem.title} Architecture Outline.`, '[INFO] Press "Run Emulation" to trigger data flow through the graph.']);
  }, [activeSysId]);

  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [simLogs]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveNodeIdx(0);
    setSimLogs([`[EXECUTION START] Initializing state flow simulation...`]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < activeSystem.nodes.length) {
        const node = activeSystem.nodes[step];
        setActiveNodeIdx(step);

        // Find logs that relate to this step or add customized logs
        const logLinesToAdd: string[] = [];
        if (step === 0) {
          logLinesToAdd.push(`[INIT] Tracing step ${step + 1}: Entered node "${node.label}"...`);
        } else {
          logLinesToAdd.push(`[TRANSITION] Activating state node ${step + 1}: [${node.label}]`);
        }

        // Pull corresponding realistic log from system data
        const correspondingLogIndex = Math.min(step, activeSystem.logs.length - 1);
        logLinesToAdd.push(activeSystem.logs[correspondingLogIndex]);

        setSimLogs((prev) => [...prev, ...logLinesToAdd]);
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveNodeIdx(null);
        setSimLogs((prev) => [
          ...prev,
          `[SUCCESS] Simulation completed. Graph reached final terminal nodes.`,
          `[EVAL RESULT] Model: ${activeSystem.performance.model} | Latency: ${activeSystem.performance.latency} | Score: ${activeSystem.performance.evalScore}`
        ]);
      }
    }, 1800);
  };

  const getStyleForNodeType = (type: string, isActive: boolean) => {
    if (isActive) {
      return 'border-accent-pink bg-accent-pink/10 ring-4 ring-accent-pink/20 animate-pulse text-white';
    }
    switch (type) {
      case 'io':
        return 'border-accent-teal/40 bg-accent-teal/5 text-accent-teal hover:border-accent-teal';
      case 'agent':
        return 'border-accent-indigo/40 bg-accent-indigo/5 text-accent-indigo hover:border-accent-indigo';
      case 'router':
        return 'border-yellow-500/40 bg-yellow-500/5 text-yellow-500 hover:border-yellow-500';
      case 'database':
        return 'border-emerald-500/40 bg-emerald-500/5 text-accent-emerald hover:border-accent-emerald';
      case 'eval':
        return 'border-red-500/40 bg-red-500/5 text-red-400 hover:border-red-400';
      default:
        return 'border-dark-border bg-white/5 text-gray-400';
    }
  };

  return (
    <section id="systems" className="py-24 bg-dark-bg border-t border-dark-border relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090d1c]/40 to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            ENGINEERING SCHEMATICS
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-light font-sans tracking-tight">
            AI Systems I've Built
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
          
          <blockquote className="mt-6 border-l-2 border-accent-indigo/40 pl-4 text-gray-400 italic text-sm md:text-base max-w-2xl font-sans">
            "Most portfolios show what was built. This section shows how I think. I enjoy designing systems where AI agents reason, evaluate, retrieve information, use tools, maintain context, and make reliable decisions in production environments."
          </blockquote>
        </div>

        {/* System Tab Selectors */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-dark-border/40 pb-6">
          {SYSTEMS_DATA.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveSysId(sys.id)}
              className={`px-4 sm:px-5 py-2.5 rounded font-mono text-xs sm:text-sm tracking-wide transition-all ${
                activeSysId === sys.id
                  ? 'bg-gradient-to-r from-accent-indigo to-accent-teal text-dark-bg font-bold shadow-lg'
                  : 'bg-white/5 border border-dark-border text-gray-400 hover:text-text-light hover:bg-white/10'
              }`}
            >
              {sys.title.split(' ')[0]} {sys.title.split(' ').slice(1).join(' ')}
            </button>
          ))}
        </div>

        {/* Interactive Layout Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Interactive Node Flow Diagram (7 cols) */}
          <div className="lg:col-span-8 bg-dark-panel/85 border border-dark-border rounded-xl p-5 md:p-6 w-full shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-grid opacity-5 pointer-events-none select-none z-0" />
            
            {/* Title & Core Philosophy */}
            <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 border-b border-dark-border/80 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{activeSystem.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed mt-1 max-w-xl">
                  {activeSystem.philosophy}
                </p>
              </div>

              {/* Simulation triggers */}
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.8 font-mono text-xs rounded transition-all shadow-md ${
                  isSimulating
                    ? 'bg-transparent border border-accent-pink/30 text-accent-pink cursor-not-allowed'
                    : 'bg-accent-teal hover:bg-accent-teal/90 text-dark-bg font-bold animate-pulse'
                }`}
              >
                {isSimulating ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-ping mr-1" />
                    <span>Emulating State...</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="fill-dark-bg" />
                    <span>Run Emulation</span>
                  </>
                )}
              </button>
            </div>

            {/* FLOW DIAGRAM CONTAINER */}
            <div className="relative z-10 py-6 px-1 flex flex-col items-center justify-center min-h-[380px]">
              
              {/* Responsive Node Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4 w-full relative">
                
                {activeSystem.nodes.map((node, index) => {
                  const NodeIcon = node.icon;
                  const isNodeActive = activeNodeIdx === index;
                  
                  return (
                    <div 
                      key={node.id}
                      className="flex flex-col items-center group relative cursor-pointer"
                      title="Click to inspect node"
                    >
                      {/* Connection arrow - rendered horizontally or vertically */}
                      {index < activeSystem.nodes.length - 1 && (
                        <div className="hidden md:block absolute top-[28px] left-[70%] w-[60%] h-[2px] z-0 pointer-events-none">
                          {/* SVG paths with dynamic glowing dashes */}
                          <svg className="w-full h-[6px] overflow-visible">
                            <line 
                              x1="0" 
                              y1="3" 
                              x2="100%" 
                              y2="3" 
                              stroke="rgba(30, 41, 59, 0.8)" 
                              strokeWidth="2" 
                            />
                            {isSimulating && activeNodeIdx !== null && activeNodeIdx >= index && (
                              <line 
                                x1="0" 
                                y1="3" 
                                x2="100%" 
                                y2="3" 
                                stroke="#d946ef" 
                                strokeWidth="2.5" 
                                className="animate-dash" 
                              />
                            )}
                          </svg>
                        </div>
                      )}

                      {/* Icon Container Card */}
                      <div className={`z-10 w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-300 ${getStyleForNodeType(node.type, isNodeActive)}`}>
                        <NodeIcon size={22} className={isNodeActive ? "text-white" : "opacity-80"} />
                      </div>

                      {/* Label */}
                      <span className={`mt-2 font-mono text-[11px] font-semibold text-center transition-colors px-1 rounded ${
                        isNodeActive ? 'text-accent-pink bg-accent-pink/5' : 'text-gray-300'
                      }`}>
                        {node.label}
                      </span>

                      {/* Hover Node details card tooltips */}
                      <div className="absolute bottom-[75px] w-48 bg-dark-panel border border-dark-border p-2.5 rounded shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30 text-left">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-accent-teal font-extrabold block mb-1">
                          Node: {node.id}
                        </span>
                        <p className="text-[11px] text-gray-300 leading-normal font-sans">
                          {node.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Vertical flow path indicators specialized for Mobile views */}
              <div className="md:hidden mt-6 text-center text-[10px] text-accent-teal/70 font-mono animate-bounce-slow">
                ↳ Data moves sequentially through each node system ↳
              </div>
            </div>

            {/* Spec tags detail */}
            <div className="border-t border-dark-border/80 pt-5 mt-6 relative z-10 text-left">
              <h4 className="font-mono text-xs text-accent-teal uppercase tracking-wider mb-2.5 font-bold">System Specifications &amp; Design Criteria</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
                {activeSystem.techSpec.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL: Evaluation Log Monitor Console (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 w-full h-full">
            
            {/* Live Performance Stats */}
            <div className="bg-dark-panel/90 border border-dark-border rounded-xl p-5 shadow-lg text-left">
              <span className="font-mono text-[10px] tracking-widest text-accent-teal uppercase font-bold block mb-3">TELEMETRY SCORES</span>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white/5 border border-dark-border rounded flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-mono text-gray-500">Latency</span>
                  <span className="text-sm font-bold text-white font-mono flex items-center mt-1">
                    <Clock size={12} className="text-accent-teal mr-1" />
                    {activeSystem.performance.latency.replace('avg', '')}
                  </span>
                </div>
                <div className="p-3 bg-white/5 border border-dark-border rounded flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-mono text-gray-500">Judge Model</span>
                  <span className="text-xs font-bold text-white font-mono mt-1 break-all select-none">
                    {activeSystem.performance.model.split(' ')[0]}
                  </span>
                </div>
                <div className="p-3 bg-white/5 border border-dark-border rounded flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-mono text-gray-500">EVAL Score</span>
                  <span className="text-sm font-bold text-accent-emerald font-mono mt-1">
                    {activeSystem.performance.evalScore.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Execution Console Logs */}
            <div className="bg-[#040813] border border-dark-border rounded-xl flex flex-col h-[350px] overflow-hidden shadow-2xl">
              
              {/* Header */}
              <div className="bg-dark-panel border-b border-dark-border px-4 py-2.5 flex items-center justify-between text-left">
                <span className="text-xs font-mono font-bold text-gray-400 flex items-center space-x-1.5 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-ping" />
                  <span>Execution Log Monitor</span>
                </span>
                <span className="text-[9px] font-mono bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/30 px-2 py-0.5 rounded font-bold uppercase select-none">
                  Live Stream
                </span>
              </div>

              {/* Logs */}
              <div 
                ref={logTerminalRef}
                className="flex-1 p-4 font-mono text-[11px] leading-relaxed text-left overflow-y-auto space-y-2.5 scrollbar-none"
              >
                {simLogs.map((log, lIdx) => {
                  let colorClass = "text-gray-400";
                  if (log.startsWith('[EXECUTION') || log.startsWith('[SUCCESS')) {
                    colorClass = "text-accent-pink font-bold";
                  } else if (log.startsWith('✓') || log.includes('Status: DELIVERED') || log.includes('APPROVED')) {
                    colorClass = "text-accent-emerald font-semibold";
                  } else if (log.includes('Confidence:')) {
                    colorClass = "text-yellow-400";
                  } else if (log.startsWith('[INFO]')) {
                    colorClass = "text-gray-500";
                  } else if (log.startsWith('[SYSTEM') || log.startsWith('[USER')) {
                    colorClass = "text-white font-medium";
                  }

                  return (
                    <div key={lIdx} className={`border-b border-white/5 pb-1 ${colorClass}`}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AISystems;
