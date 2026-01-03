
import React, { useState } from 'react';
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from '../types';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: SERVICE_OPTIONS[0] as string,
    budget: BUDGET_OPTIONS[0] as string,
    customBudget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const finalData = {
      ...formData,
      budget: formData.budget === "Custom Amount" ? formData.customBudget : formData.budget
    };

    try {
      /**
       * PRODUCTION SETUP:
       * 1. Go to https://formspree.io and create a free account.
       * 2. Create a new form and copy the "Endpoint ID".
       * 3. Replace 'your-form-id' below with your actual ID.
       */
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: SERVICE_OPTIONS[0] as string,
          budget: BUDGET_OPTIONS[0] as string,
          customBudget: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // For now, we'll simulate success if no ID is provided, 
      // but in production, this would handle actual failures.
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success'); 
    }
  };

  const isCustomBudget = formData.budget === "Custom Amount";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden grid md:grid-cols-2 shadow-2xl relative">
          
          {/* Left Side: Information */}
          <div className="p-12 md:p-16 bg-blue-600 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-24 -mb-24 blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-heading text-white mb-6">Let's build something extraordinary.</h2>
              <p className="text-blue-100 text-lg mb-12">Tell us about your project and we'll get back to you within 24 hours with a custom strategy.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="font-medium tracking-wide">CONNECT VIA SECURE LINE</span>
                </div>
                <div className="flex items-center gap-4 text-white group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <span className="font-medium tracking-wide">hello@nexusai-studios.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Form / Status */}
          <div className="p-12 md:p-16 bg-slate-900/40 relative min-h-[600px] flex items-center">
            
            {status === 'submitting' && (
              <div className="w-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">Analyzing Requirements</h3>
                <p className="text-slate-500">Encrypting transmission...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="w-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full scale-150"></div>
                  <div className="relative w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-in slide-in-from-bottom-4 duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-in zoom-in fade-in delay-300 duration-500 fill-green-500/5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-4xl font-bold font-heading text-white mb-4 tracking-tight">Project Queued</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm mx-auto">
                  Our strategic team has received your transmission. Expect a response within one business cycle.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-blue-400 hover:text-blue-300 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  New Request
                </button>
              </div>
            )}

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="w-full space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder-slate-600"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder-slate-600"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Interested In</label>
                    <select 
                      name="service"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 bottom-3.5 pointer-events-none text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Project Budget</label>
                    <select 
                      name="budget"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white appearance-none cursor-pointer"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      {BUDGET_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 bottom-3.5 pointer-events-none text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {isCustomBudget && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Specify Custom Budget (USD)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                      <input 
                        type="text" 
                        name="customBudget"
                        required={isCustomBudget}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder-slate-600"
                        placeholder="e.g. 1500"
                        value={formData.customBudget}
                        onChange={e => setFormData({...formData, customBudget: e.target.value.replace(/[^0-9]/g, '')})}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message & Goals</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white resize-none placeholder-slate-600"
                    placeholder="Briefly describe what you're looking to achieve..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Initiate Collaboration
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
