
import React, { useState } from 'react';
import { LegalModal, LegalType } from './LegalModal';

export const Footer: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);

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

  const openLegal = (e: React.MouseEvent, type: LegalType) => {
    e.preventDefault();
    setActiveLegal(type);
  };

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('Link clicked - placeholder only');
  };

  const socialLinks = [
    {
      name: 'Twitter',
      path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      viewBox: "0 0 24 24"
    },
    {
      name: 'LinkedIn',
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      viewBox: "0 0 24 24"
    },
    {
      name: 'Instagram',
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.199-4.359-2.62-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      viewBox: "0 0 24 24"
    }
  ];

  return (
    <>
      <footer className="pt-20 pb-10 border-t border-white/5 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div 
                className="flex items-center gap-2 cursor-pointer group" 
                onClick={(e) => scrollToSection(e, 'home')}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl italic shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">N</div>
                <span className="text-xl font-bold tracking-tight font-heading">Nexus<span className="text-blue-500">AI</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bridging the gap between human creativity and artificial intelligence. Premium automation, software engineering, and cinematic production.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={`#${social.name}`} 
                    onClick={handlePlaceholderClick}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all group"
                    title={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg width="18" height="18" viewBox={social.viewBox} fill="currentColor" className="transition-transform group-hover:scale-110">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-blue-400 transition-colors">The Protocol</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-400 transition-colors">Our Story</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">AI Automation</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">Web & App Dev</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">Video Production</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-heading">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/>
                  </svg>
                  hello@nexusai-studios.com
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all hover:border-white/30">
                    Request a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
              <a href="#privacy" onClick={(e) => openLegal(e, 'privacy')} className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" onClick={(e) => openLegal(e, 'terms')} className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#careers" onClick={(e) => openLegal(e, 'careers')} className="hover:text-white transition-colors">Careers</a>
            </div>
            <div className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} NexusAI Studios. Crafted with intelligence.
            </div>
          </div>
        </div>
      </footer>
      <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} />
    </>
  );
};
