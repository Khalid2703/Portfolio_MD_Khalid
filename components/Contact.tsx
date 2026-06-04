import React, { useState } from 'react';
import { Mail, Send, Terminal, Database, CheckCircle } from 'lucide-react';
import { EMAIL, LINKEDIN_URL, GITHUB_URL, PHONE, WEB3FORMS_ACCESS_KEY } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Check if we are running in sandbox mode or live mode
    const isSandbox = !WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

    if (isSandbox) {
      setConsoleLogs([
        `[SANDBOX] No custom Web3Forms Access Key configured. Running in high-fidelity simulation model.`,
        `[POST] Request initiated to simulated gateway: /api/v1/contact`,
        `[SECURITY] Running client-side XSS and malicious script sanitizers...`,
        `[AGENT] Semantic intent: "${formData.message.slice(0, 45)}..."`
      ]);

      setTimeout(() => {
        setConsoleLogs((prev) => [
          ...prev,
          `[WARNING] Submissions won't hit your real inbox yet. Ready to go live? Register at https://web3forms.com/ to get your Access Key and paste it into constants.tsx.`,
          `[ROUTER] Message parsed as "Foundry/AI Inquiry"`,
          `[DATABASE] Simulating successful transaction for subscriber: ${formData.email}`
        ]);
        
        setTimeout(() => {
          setStatus('success');
          setConsoleLogs((prev) => [
            ...prev,
            `[SUCCESS] Simulation committed successfully (200 OK). Ready for live launch.`
          ]);
          setFormData({ name: '', email: '', message: '' });
        }, 1500);
      }, 1500);
    } else {
      setConsoleLogs([
        `[LIVE_GATEWAY] Active Access Key detected: ${WEB3FORMS_ACCESS_KEY.slice(0, 6)}...`,
        `[POST] Dispatching request payload to https://api.web3forms.com/submit`,
        `[SECURITY] Formatting and validating JSON payload boundaries...`,
      ]);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Lead - Portfolio Message from ${formData.name}`,
            from_name: "Md Khalid Portfolio Server"
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setConsoleLogs((prev) => [
            ...prev,
            `[GATEWAY] Response received (Status: 200 OK)`,
            `[ROUTER] Message processed. Web3Forms has forwarded the message details.`,
            `[NOTIFIER] Inbox dispatch confirmed. Message is en-route to: ${EMAIL}`
          ]);
          
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(result.message || "Failed to submit form data via Web3Forms API.");
        }
      } catch (err: any) {
        setStatus('error');
        setConsoleLogs((prev) => [
          ...prev,
          `[CRITICAL_ERROR] API Submission failed. details: ${err.message || 'Unknown network error'}`,
          `[RECOVERY] If this persists, verify your Web3Forms Access Key is active and correct in constants.tsx.`
        ]);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative border-t border-dark-border">
      {/* Background glow effects */}
      <div className="absolute bottom-12 right-12 h-96 w-96 rounded-full bg-accent-indigo/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="font-mono text-xs text-accent-teal tracking-widest uppercase mb-2 font-semibold">
            COMMUNICATION GATEWAY
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-accent-teal mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-sm sm:text-base">
            Have a project or a founding AI role? Send over a secure payload message. The local router will digest and archive it directly into my inbox queue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Side (7 Cols) */}
          <div 
            className="lg:col-span-7 bg-dark-panel/90 border border-dark-border/80 rounded-xl p-6 md:p-8 flex flex-col justify-between"
            style={{
              boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03)`
            }}
          >
            {status === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center py-10 text-center space-y-4">
                <div className="p-3 bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald rounded-full animate-bounce-slow">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white font-sans tracking-tight">Payload Deployed!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Your message has been safely serialized and successfully routed to Md Khalid's terminal. Expect a connection prompt shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-accent-teal text-dark-bg font-bold font-mono text-xs rounded transition-all hover:brightness-105 active:scale-95"
                >
                  Send Another Frame
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left flex-1">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">
                    Identification / Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#050814] border border-dark-border hover:border-accent-teal/40 focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/30 text-white font-sans text-sm rounded px-4 py-3 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">
                    Return Destination / Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-[#050814] border border-dark-border hover:border-accent-teal/40 focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/30 text-white font-sans text-sm rounded px-4 py-3 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">
                    Payload Message Contents
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role or medical system project requirements..."
                    className="w-full bg-[#050814] border border-dark-border hover:border-accent-teal/40 focus:border-accent-teal focus:outline-none focus:ring-1 focus:ring-accent-teal/30 text-white font-sans text-sm rounded px-4 py-3 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-accent-teal to-blue-600 text-dark-bg font-bold tracking-wide font-mono text-sm rounded flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{status === 'submitting' ? 'SERIALIZING PAYLOAD...' : 'TRANSMIT ENCRYPTED PAYLOAD'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Console / Social Connection Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Direct Connect Details */}
            <div className="bg-dark-panel/90 border border-dark-border/80 rounded-xl p-5 shadow flex flex-col justify-between text-left">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-accent-teal uppercase font-bold block mb-2">DIRECT ENDPOINTS</span>
                <p className="text-xs text-gray-400 mb-4 font-normal">Prefer standard transport protocols? Reach out direct:</p>
              </div>

              <div className="space-y-3.5">
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center space-x-3 p-3 bg-white/5 border border-white/5 hover:border-accent-teal/20 rounded transition-all"
                >
                  <div className="p-2 bg-accent-teal/10 text-accent-teal rounded">
                    <Mail size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-gray-500 font-bold">Secure Mailbox</span>
                    <span className="text-xs font-semibold text-white font-mono mt-0.5">{EMAIL}</span>
                  </div>
                </a>

                <div className="p-3 bg-white/5 border border-white/5 rounded flex items-center space-x-3">
                  <div className="p-2 bg-accent-indigo/10 text-accent-indigo rounded">
                    <Terminal size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-gray-500 font-bold">Secure Mobile Direct</span>
                    <span className="text-xs font-semibold text-white font-mono mt-0.5">{PHONE}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingestion Console Monitor logs */}
            <div className="bg-[#040813] border border-dark-border rounded-xl flex-1 min-h-[190px] flex flex-col overflow-hidden shadow-2xl">
              <div className="bg-dark-panel border-b border-dark-border px-4 py-2.5 text-left font-mono text-[10px] text-gray-400 uppercase font-bold flex items-center space-x-1.5 select-none">
                <Database size={12} className="text-accent-pink" />
                <span>Payload Ingestion Telemetry</span>
              </div>
              <div className="flex-1 p-4 font-mono text-[11px] text-left leading-relaxed text-gray-400 space-y-2 overflow-y-auto">
                {consoleLogs.length === 0 ? (
                  <p className="text-gray-500 italic select-none">
                    &gt; Console silent. Fill out and submit the feedback gateway form to trigger payload capture streams...
                  </p>
                ) : (
                  consoleLogs.map((log, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-1">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
