import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { AIAdvisor } from './components/AIAdvisor';
import { Footer } from './components/Footer';
import { SEOHelmet } from './components/SEOHelmet';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712]">
      <SEOHelmet />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <div className="py-12 border-y border-blue-500/10 overflow-hidden bg-blue-500/[0.02]">
          <div className="container mx-auto px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-blue-500/60 mb-10 font-bold">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-opacity duration-500">
              {['TECHCORE', 'LUMINATE', 'AVANT', 'VERTEX', 'MODERNA'].map(brand => (
                <span 
                  key={brand} 
                  className="text-2xl font-black font-heading tracking-widest text-slate-700 hover:text-blue-500/80 transition-colors duration-300 cursor-default select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Services />
        
        {/* Process Section */}
        <section id="process" className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">The Nexus Protocol</h2>
              <p className="text-slate-400 text-lg">Our proven 4-step framework for transforming business operations and creative output.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Deep dive into your brand goals, pain points, and current tech stack." },
                { step: "02", title: "Nexus Blueprint", desc: "Custom-mapped AI integration and high-impact content strategy." },
                { step: "03", title: "Rapid Build", desc: "Rigorous execution phase with iterative updates and pilot testing." },
                { step: "04", title: "Launch & Scale", desc: "Seamless handover followed by continuous performance scaling." }
              ].map((item, i) => (
                <div key={i} className="group relative p-8 rounded-[2.5rem] glass hover:border-blue-500/40 transition-all duration-500">
                  <div className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600/40 mb-6 font-heading transition-colors">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <ContactForm />
      </main>

      <Footer />
      <AIAdvisor />
    </div>
  );
};

export default App;