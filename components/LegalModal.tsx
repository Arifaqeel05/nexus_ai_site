
import React, { useEffect } from 'react';

export type LegalType = 'privacy' | 'terms' | 'careers' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [type]);

  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "NexusAI Studios Data Protection Protocol",
      body: (
        <div className="space-y-6 text-slate-300">
          <section>
            <h4 className="text-white font-bold mb-2">1. Data Collection</h4>
            <p>We collect information necessary to provide our AI automation and video production services. This includes contact details and project specifications provided via our consultation forms.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2">2. Use of Information</h4>
            <p>Your data is used exclusively to tailor our AI models and service delivery to your specific business needs. We never sell your data to third parties.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2">3. Security</h4>
            <p>NexusAI utilizes industry-standard encryption for all data transmissions. Our AI agents operate within secured environments to ensure your intellectual property remains private.</p>
          </section>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      subtitle: "The Legal Framework of the Nexus",
      body: (
        <div className="space-y-6 text-slate-300">
          <section>
            <h4 className="text-white font-bold mb-2">1. Service Delivery</h4>
            <p>NexusAI Studios provides AI-augmented creative and technical services. Project timelines are estimates based on the complexity of the "Nexus Protocol" requested.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2">2. Intellectual Property</h4>
            <p>Upon full payment, clients retain ownership of the final deliverables. NexusAI retains the right to use non-confidential elements of the work for our professional portfolio.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2">3. Limitation of Liability</h4>
            <p>While our AI solutions are cutting-edge, NexusAI is not responsible for external changes in third-party AI platform APIs or algorithms that may affect long-term automation performance.</p>
          </section>
        </div>
      )
    },
    careers: {
      title: "Careers",
      subtitle: "Join the Creative Revolution",
      body: (
        <div className="space-y-6 text-slate-300">
          <p className="text-lg text-blue-400 font-medium italic">"The future isn't automated; it's co-created."</p>
          <p>We are always looking for visionary engineers and artistic storytellers who want to push the boundaries of what's possible with Generative AI.</p>
          <div className="space-y-4">
            <h4 className="text-white font-bold border-b border-white/10 pb-2">Current Openings</h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center group cursor-pointer hover:border-blue-500/50 transition-colors">
              <div>
                <div className="text-white font-bold">AI Prompt Engineer / Director</div>
                <div className="text-sm text-slate-500">Remote • Full-time</div>
              </div>
              <div className="text-blue-500 group-hover:translate-x-1 transition-transform">→</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center group cursor-pointer hover:border-blue-500/50 transition-colors">
              <div>
                <div className="text-white font-bold">Senior Full-Stack Engineer (Next.js)</div>
                <div className="text-sm text-slate-500">Hybrid (NY/LDN) • Full-time</div>
              </div>
              <div className="text-blue-500 group-hover:translate-x-1 transition-transform">→</div>
            </div>
          </div>
          <p className="text-sm">Don't see your role? Send your portfolio to <span className="text-white font-bold">talent@nexusai-studios.com</span></p>
        </div>
      )
    }
  };

  const current = content[type];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden glass rounded-[2.5rem] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
        <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-black font-heading text-white mb-2">{current.title}</h2>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">{current.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-slate-800">
          {current.body}
        </div>
        
        <div className="p-8 border-t border-white/5 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all transform active:scale-95"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
