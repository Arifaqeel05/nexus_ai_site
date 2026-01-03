
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 glass">
              <img 
                src="https://picsum.photos/seed/agency/800/1000" 
                alt="Our Creative Studio" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/20 shadow-2xl">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Projects Delivered</div>
            </div>
          </div>
          
          <div>
            <div className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase mb-4">Behind NexusAI</div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">We are pioneers in the <span className="text-gradient">AI creative revolution.</span></h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Founded by a collective of filmmakers and software engineers, NexusAI Studios was born from a simple realization: the tools of creation are changing, but the soul of storytelling remains human.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Human-First AI", desc: "We use AI to amplify creativity, not replace it. Your brand's voice is always the lead." },
                { title: "Bespoke Solutions", desc: "No cookie-cutter templates. Every automation workflow is tailored to your unique business DNA." },
                { title: "Cinematic Quality", desc: "Whether it's an AI-generated short or a high-end edit, our standard is the silver screen." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
