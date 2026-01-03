import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow pointer-events-none -z-10" />
      
      {/* Decorative Data Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Automation & Production
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight mb-8 leading-[1.1]">
          The Future of <br />
          <span className="text-gradient">Content & Automation</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          NexusAI Studios bridges the gap between human creativity and artificial intelligence. We automate your workflows and produce cinematic video content that scales.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 md:mb-24">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.05] hover:bg-white hover:brightness-110 hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] active:scale-95 text-center shadow-xl flex items-center justify-center relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transform hover:scale-[1.02] active:scale-95 text-center backdrop-blur-md hover:backdrop-blur-xl group/btn2"
          >
            <span className="group-hover/btn2:text-blue-400 transition-colors">View Our Services</span>
          </a>
        </div>

        {/* Main Preview Component */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Decorative Glow Behind Container */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.8rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          {/* Floating Workflow Badges */}
          <div className="absolute -top-6 -left-6 z-30 hidden md:block animate-bounce [animation-duration:3s]">
             <div className="glass px-5 py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Automation</div>
                  <div className="text-xs text-white font-bold">Process Active</div>
                </div>
             </div>
          </div>

          <div className="absolute bottom-10 -right-8 z-30 hidden md:block animate-bounce [animation-duration:4s] delay-700">
             <div className="glass px-5 py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Generative</div>
                  <div className="text-xs text-white font-bold">Rendering Node 04</div>
                </div>
             </div>
          </div>
          
          {/* Main Image Container */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass shadow-2xl border border-white/10">
            {/* The Tech Image - High-end Artistic AI Nebula of Data Points */}
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400" 
              alt="Interconnected AI Data Nebula" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-[2s] ease-out group-hover:scale-110"
            />
            
            {/* Cyber Scanning Line Overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute top-0 left-0 animate-[scan_4s_linear_infinite] opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
               {/* Digital Grid Overlay */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};