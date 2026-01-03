
import React, { useEffect, useState } from 'react';

const sectionMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: "NexusAI Studios | Future of Content & Automation",
    description: "The premier AI agency for automation, video generation, and next-gen development."
  },
  services: {
    title: "Premium AI Services | NexusAI Studios",
    description: "Explore our specialized services: AI automation, professional video editing, and custom software development."
  },
  process: {
    title: "The Nexus Protocol | Our AI Workflow",
    description: "Our proven 4-step framework for transforming business operations through intelligent technology."
  },
  about: {
    title: "Our Story | Pioneering AI Creativity",
    description: "Meet the filmmakers and engineers bridging the gap between human creativity and artificial intelligence."
  },
  contact: {
    title: "Get Started | Contact NexusAI",
    description: "Reach out today to start your digital transformation with our AI experts."
  }
};

const BASE_KEYWORDS = "AI automation, video editing, AI video generation, NexusAI, web development, app development, UI/UX design, generative AI, automation agency";

export const SEOHelmet: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const current = sectionMeta[activeSection] || sectionMeta.home;
    
    // Update Document Title
    document.title = current.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', current.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', current.description);
      document.head.appendChild(metaDescription);
    }

    // Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const sectionSpecificKeywords = activeSection !== 'home' ? `, ${activeSection}` : "";
    
    if (metaKeywords) {
      metaKeywords.setAttribute('content', `${BASE_KEYWORDS}${sectionSpecificKeywords}`);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', `${BASE_KEYWORDS}${sectionSpecificKeywords}`);
      document.head.appendChild(metaKeywords);
    }
  }, [activeSection]);

  return null;
};
