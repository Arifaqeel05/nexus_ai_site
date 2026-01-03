
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-2xl border-white/10 bg-slate-900/80' : 'border-transparent'}`}>
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl italic shadow-lg shadow-blue-500/20">N</div>
            <span className="text-xl font-bold tracking-tight font-heading">Nexus<span className="text-blue-500">AI</span></span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-400">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors">Home</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Services</a>
            <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-white transition-colors">Process</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">Who We Are</a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <line x1="18" y1="6" x2="6" y2="18" />
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 p-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass rounded-[2rem] p-8 flex flex-col gap-6 shadow-2xl bg-slate-900/90 border-white/10">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl font-bold text-white py-2">Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-xl font-bold text-white py-2">Services</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="text-xl font-bold text-white py-2">Process</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-xl font-bold text-white py-2">Who We Are</a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="w-full py-4 text-center rounded-2xl bg-blue-600 text-white font-bold text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};
