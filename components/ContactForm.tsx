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
    
    // Target Email
    const CONTACT_EMAIL = 'arifaqeelahmad382@gmail.com';

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not Specified',
      service: formData.service,
      budget: formData.budget === "Custom Amount" ? formData.customBudget : formData.budget,
      message: formData.message,
      _subject: `🚀 NEXUS-AI: New Project Request from ${formData.name}`,
      _template: 'table', // Cleaner email formatting
      _captcha: 'false'   // Can be 'true' if you get spam
    };

    try {
      // Use Ajax endpoint for FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      // FormSubmit returns result.success as a string "true" or boolean true
      if (response.ok && (result.success === "true" || result.success === true)) {
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
        console.error("FormSubmit API Error:", result);
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error("Submission Network/Logic Error:", error);
      setStatus('error');
      // Revert to idle after 6 seconds if there's an error so they can try again
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const isCustomBudget = formData.budget === "Custom Amount";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden grid md:grid-cols-2 shadow-2xl relative border border-white/10">
          
          {/* Left Side: Information */}
          <div className="p-12 md:p-16 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-24 -mb-24 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">Ready to evolve? Let's talk.</h2>
              <p className="text-blue-100 text-lg mb-12 opacity-90">Send your project requirements. We'll respond with a strategic blueprint and cost estimate within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 text-white group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-all group-hover:bg-white/20 group-hover:scale-105 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">WhatsApp / Phone</div>
                    <span className="font-semibold tracking-wide text-lg">+92-3347633480</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-white group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-all group-hover:bg-white/20 group-hover:scale-105 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">HQ Inbox</div>
                    <span className="font-semibold tracking-wide text-lg">arifaqeelahmad382@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Form / Status */}
          <div className="p-12 md:p-16 bg-[#030712]/40 relative min-h-[600px] flex items-center text-left backdrop-blur-xl">
            
            {status === 'submitting' && (
              <div className="w-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="relative mb-8">
                  <div className="w-24 h-24 border-4 border-blue-500/10 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold font-heading text-white mb-3">Syncing...</h3>
                <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">Securing your project parameters and transmitting to our lead specialist.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="w-full flex flex-col items-center justify-center text-center animate-in shake duration-500">
                <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sync Error</h3>
                <p className="text-slate-400 mb-6 text-sm">Make sure you have <strong>activated</strong> the FormSubmit email sent to arifaqeelahmad382@gmail.com.</p>
                <button onClick={() => setStatus('idle')} className="px-6 py-2 bg-white/10 rounded-lg text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all">Try Again</button>
              </div>
            )}

            {status === 'success' && (
              <div className="w-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-150"></div>
                  <div className="relative w-28 h-28 bg-green-500/10 text-green-500 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.2)] animate-in slide-in-from-bottom-6 duration-500 border border-green-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-in zoom-in fade-in delay-300 duration-500">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-4xl font-bold font-heading text-white mb-4 tracking-tight">Protocol Initiated</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm mx-auto">
                  Your inquiry is in our queue. Check your email for a confirmation shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-12 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm uppercase tracking-widest transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  New Message
                </button>
              </div>
            )}

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="w-full space-y-7 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Client Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder-slate-600 font-medium"
                      placeholder="e.g. Arif Ahmad"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder-slate-600 font-medium"
                      placeholder="arif@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Service Interest</label>
                    <select 
                      name="service"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white appearance-none cursor-pointer font-medium"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="bg-[#030712] text-white">{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 bottom-4 pointer-events-none text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Investment Range</label>
                    <select 
                      name="budget"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white appearance-none cursor-pointer font-medium"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      {BUDGET_OPTIONS.map(opt => (
                        <option key={opt} value={opt} className="bg-[#030712] text-white">{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 bottom-4 pointer-events-none text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {isCustomBudget && (
                  <div className="animate-in fade-in slide-in-from-top-3 duration-300">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Custom Amount (USD)</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                      <input 
                        type="text" 
                        name="customBudget"
                        required={isCustomBudget}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder-slate-600 font-medium"
                        placeholder="e.g. 5000"
                        value={formData.customBudget}
                        onChange={e => setFormData({...formData, customBudget: e.target.value.replace(/[^0-9]/g, '')})}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Project Overview</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white resize-none placeholder-slate-600 font-medium leading-relaxed"
                    placeholder="Tell us about your goals and current challenges..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full py-5 bg-white text-[#030712] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-50 transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Send Inquiry
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
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