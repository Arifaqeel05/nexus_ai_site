
import React from 'react';

const services = [
  {
    title: "AI Automation",
    description: "Streamline your business operations with intelligent workflows and custom LLM integrations.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Custom GPT Agents", "Automated Outreach", "Data Workflow Optimization", "API Integrations"]
  },
  {
    title: "Next-Gen Web Dev",
    description: "High-performance, SEO-optimized web applications built with the latest modern frameworks.",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ["React & Next.js Experts", "AI-Integrated Frontends", "E-commerce Solutions", "Cloud-Native Scalability"]
  },
  {
    title: "Intelligent App Dev",
    description: "Native and cross-platform mobile experiences that leverage on-device AI capabilities.",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["iOS & Android", "Flutter & React Native", "AI Feature Integration", "Biometric Security"]
  },
  {
    title: "UI/UX & Product Design",
    description: "Creating intuitive, high-conversion interfaces that blend aesthetics with technical precision.",
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ["Design Systems", "Interactive Prototyping", "User Journey Mapping", "Conversion Rate Optimization"]
  },
  {
    title: "Professional Video Editing",
    description: "Cinematic storytelling designed to capture attention and deliver your message with impact.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Color Grading", "Sound Design", "Narrative Pacing", "Social Media Hooks"]
  },
  {
    title: "AI Video Generation",
    description: "Hyper-personalized video content at scale using cutting-edge generative AI models.",
    icon: (
      <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["AI Avatars", "Multilingual Dubbing", "Dynamic Personalization", "Automated Shorts"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Core Expertise</h2>
          <p className="text-slate-400 max-w-xl">We combine technical automation, high-end development, and artistic vision to help you outpace the competition.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="mb-6 bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
