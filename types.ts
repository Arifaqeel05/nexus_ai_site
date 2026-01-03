
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export const SERVICE_OPTIONS = [
  "AI Automation",
  "Next-Gen Web Dev",
  "Intelligent App Dev",
  "UI/UX & Product Design",
  "Professional Video Editing",
  "AI Video Generation",
  "Full Hybrid Package"
] as const;

export const BUDGET_OPTIONS = [
  "Select a budget range",
  "$500 - $2,500",
  "$2,500 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Custom Amount"
] as const;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: typeof SERVICE_OPTIONS[number];
  budget: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
