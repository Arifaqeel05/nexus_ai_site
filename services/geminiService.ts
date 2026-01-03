
import { GoogleGenAI } from "@google/genai";

export const getAIConsultation = async (userMessage: string, history: { role: string, parts: { text: string }[] }[]) => {
  // Always use the required initialization pattern
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `You are Nexus, an AI automation and full-stack development specialist for NexusAI Studios. 
        Your goal is to help visitors understand how our hybrid approach can transform their business:
        1. AI Automation (custom agents, workflow optimization)
        2. Web Development (Next.js, high-performance web apps with AI features)
        3. App Development (Mobile first solutions, Flutter, React Native)
        4. UI/UX & Product Design (Design systems, conversion-focused interfaces)
        5. Video Production (Professional editing and Generative AI video)
        
        Be professional, visionary, and concise. 
        
        Pricing guidelines:
        - Automation: Starts at $2,000
        - Web Development: Starts at $3,500
        - App Development: Starts at $5,000
        - UI/UX Design: Starts at $1,500
        - Video Editing: Starts at $500 per project
        
        Always encourage them to fill out the contact form for a detailed technical proposal.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or use our contact form!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error. Please reach out to our human team via the contact form!";
  }
};
