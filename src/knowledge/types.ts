// Knowledge base types
export interface CountryInfo {
  name: string;
  visaTypes: string[];
  requirements: string[];
  processingTime: string;
  fees: string;
  popularPrograms?: string[];
  documentation: string[];
  tips: string[];
}

export interface VisaCategory {
  type: string;
  description: string;
  generalRequirements: string[];
  benefits: string[];
  processingTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface KnowledgeBase {
  countries: CountryInfo[];
  visaCategories: VisaCategory[];
  generalInfo: {
    companyName: string;
    services: string[];
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
  };
  faqs: FAQ[];
  systemPrompts: {
    personality: string;
    responseStyle: string;
    guidelines: string[];
  };
}