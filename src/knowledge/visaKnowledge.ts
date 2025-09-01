import type { KnowledgeBase } from './types';

const visaKnowledge: KnowledgeBase = {
  countries: [
    {
      name: "Australia",
      visaTypes: ["Student Visa (500)", "Skilled Worker Visa", "Tourist Visa", "Working Holiday Visa"],
      requirements: [
        "Valid passport",
        "English proficiency test (IELTS/TOEFL/PTE)",
        "Financial proof (AUD 21,041 per year)",
        "Health insurance (OSHC)",
        "Academic transcripts",
        "Statement of Purpose"
      ],
      processingTime: "4-6 weeks",
      fees: "AUD 650 for student visa",
      popularPrograms: ["Engineering", "Business", "Computer Science", "Medicine"],
      documentation: [
        "Passport copy",
        "Academic certificates",
        "IELTS/TOEFL scores",
        "Bank statements",
        "Health insurance",
        "SOP"
      ],
      tips: [
        "Apply early as processing can take time",
        "Ensure you have sufficient funds",
        "Get health insurance before arrival"
      ]
    },
    {
      name: "Canada",
      visaTypes: ["Study Permit", "Work Permit", "Visitor Visa", "Express Entry"],
      requirements: [
        "Letter of acceptance from Canadian institution",
        "Proof of financial support (CAD 10,000+ per year)",
        "English/French proficiency",
        "Valid passport",
        "Medical exam if required",
        "Statement of Purpose"
      ],
      processingTime: "4-12 weeks",
      fees: "CAD 150 for study permit",
      popularPrograms: ["Computer Science", "Engineering", "Business", "Healthcare"],
      documentation: [
        "Passport",
        "Letter of acceptance",
        "Financial proof",
        "Language test results",
        "Academic transcripts"
      ],
      tips: [
        "Apply as soon as you get acceptance letter",
        "Show strong ties to home country",
        "Prepare for possible interview"
      ]
    },
    {
      name: "United Kingdom",
      visaTypes: ["Student Visa (Tier 4)", "Skilled Worker Visa", "Tourist Visa", "Graduate Route"],
      requirements: [
        "CAS from UK institution",
        "Financial proof (£1,334 per month in London, £1,023 outside London)",
        "English proficiency (IELTS Academic)",
        "TB test if from certain countries",
        "Academic qualifications",
        "Personal statement"
      ],
      processingTime: "3-8 weeks",
      fees: "£363 for student visa",
      popularPrograms: ["MBA", "Engineering", "Computer Science", "Medicine"],
      documentation: [
        "Passport",
        "CAS letter",
        "Academic transcripts",
        "IELTS scores",
        "Financial documents",
        "TB test certificate"
      ],
      tips: [
        "Apply 3 months before course start",
        "Keep original documents ready",
        "Biometric appointment required"
      ]
    },
    {
      name: "Sweden",
      visaTypes: ["Study Permit", "Work Permit", "Visitor Visa", "EU Blue Card"],
      requirements: [
        "Letter of admission from Swedish university",
        "Proof of financial support (SEK 96,000 per year)",
        "Valid passport",
        "Academic transcripts",
        "English proficiency",
        "Travel insurance"
      ],
      processingTime: "1-4 months",
      fees: "SEK 1,500 for residence permit",
      popularPrograms: ["Engineering", "Technology", "Business", "Sustainability"],
      documentation: [
        "Passport copy",
        "University admission letter",
        "Bank statements",
        "Academic certificates",
        "CV and motivation letter"
      ],
      tips: [
        "Free education for EU/EEA students",
        "Apply early due to long processing",
        "Learn basic Swedish for better integration"
      ]
    },
    {
      name: "Germany",
      visaTypes: ["Student Visa", "Job Seeker Visa", "EU Blue Card", "Tourist Visa"],
      requirements: [
        "University admission letter",
        "Blocked account (€11,208 per year)",
        "German/English language proficiency",
        "Academic qualifications",
        "Health insurance",
        "Statement of purpose"
      ],
      processingTime: "4-12 weeks",
      fees: "€75 for student visa",
      popularPrograms: ["Engineering", "Computer Science", "Business", "Medicine"],
      documentation: [
        "Passport",
        "University admission",
        "Blocked account proof",
        "Academic transcripts",
        "Language certificates"
      ],
      tips: [
        "Public universities have low/no tuition fees",
        "Strong job market for graduates",
        "Learn German for better opportunities"
      ]
    },
    {
      name: "France",
      visaTypes: ["Student Visa", "Work Visa", "Tourist Visa", "Talent Passport"],
      requirements: [
        "Campus France approval",
        "Proof of financial resources (€615/month)",
        "French/English language proficiency",
        "Academic qualifications",
        "Health insurance",
        "Motivation letter"
      ],
      processingTime: "2-8 weeks",
      fees: "€99 for student visa",
      popularPrograms: ["Business", "Engineering", "Fashion", "Culinary Arts"],
      documentation: [
        "Passport",
        "Campus France attestation",
        "Financial proof",
        "Academic transcripts",
        "Language certificates"
      ],
      tips: [
        "Go through Campus France process",
        "EU students get reduced tuition",
        "Rich cultural experience"
      ]
    }
  ],
  visaCategories: [
    {
      type: "Study Visa",
      description: "For students pursuing education abroad",
      generalRequirements: [
        "Letter of acceptance from recognized institution",
        "Proof of financial support",
        "Academic qualifications",
        "Language proficiency",
        "Valid passport"
      ],
      benefits: [
        "Access to quality education",
        "Cultural exposure",
        "Career opportunities",
        "Pathway to permanent residency in many countries"
      ],
      processingTime: "4-12 weeks depending on country"
    },
    {
      type: "Work Visa",
      description: "For skilled professionals seeking employment abroad",
      generalRequirements: [
        "Job offer from employer",
        "Professional qualifications",
        "Work experience",
        "Language proficiency",
        "Health and character checks"
      ],
      benefits: [
        "Higher earning potential",
        "Professional development",
        "International experience",
        "Pathway to permanent residency"
      ],
      processingTime: "6-16 weeks depending on country and skill level"
    },
    {
      type: "Tourist Visa",
      description: "For temporary visits and tourism",
      generalRequirements: [
        "Valid passport",
        "Proof of financial support",
        "Return ticket",
        "Hotel bookings",
        "Travel itinerary"
      ],
      benefits: [
        "Explore new countries",
        "Cultural experiences",
        "Business meetings",
        "Visit family and friends"
      ],
      processingTime: "1-4 weeks"
    }
  ],
  generalInfo: {
    companyName: "Visago",
    services: [
      "Student Visa Consultation",
      "Work Visa Processing",
      "Tourist Visa Applications",
      "Document Preparation",
      "Interview Preparation",
      "Post-Arrival Support",
      "University Applications",
      "Scholarship Guidance"
    ],
    contactInfo: {
      phone: "+880-1234-567890",
      email: "info@visago.com",
      address: "123 Visa Street, Dhaka, Bangladesh"
    }
  },
  faqs: [
    {
      question: "How long does the visa process take?",
      answer: "Visa processing time varies by country and visa type. Student visas typically take 4-12 weeks, work visas 6-16 weeks, and tourist visas 1-4 weeks. We recommend applying at least 3 months before your intended travel date.",
      category: "processing"
    },
    {
      question: "What documents do I need for a student visa?",
      answer: "Common documents include: valid passport, letter of acceptance from institution, financial proof, academic transcripts, language test scores (IELTS/TOEFL), statement of purpose, and health insurance. Specific requirements vary by country.",
      category: "documents"
    },
    {
      question: "How much money do I need to show for financial proof?",
      answer: "Financial requirements vary by country: Australia (AUD 21,041/year), Canada (CAD 10,000+/year), UK (£1,334/month in London), Germany (€11,208/year), Sweden (SEK 96,000/year). This covers tuition and living expenses.",
      category: "financial"
    },
    {
      question: "Can I work while studying?",
      answer: "Most countries allow international students to work part-time: Australia (48 hours/fortnight), Canada (20 hours/week), UK (20 hours/week), Germany (120 full days or 240 half days/year). Restrictions may apply during studies.",
      category: "work"
    },
    {
      question: "What if my visa application is rejected?",
      answer: "If rejected, you can usually reapply after addressing the rejection reasons. Common reasons include insufficient funds, incomplete documentation, or weak application. We help analyze rejection letters and strengthen reapplications.",
      category: "rejection"
    },
    {
      question: "Do I need health insurance?",
      answer: "Yes, most countries require health insurance. Australia requires OSHC, Germany requires health insurance proof, and many others have similar requirements. We can help you get appropriate coverage.",
      category: "insurance"
    }
  ],
  systemPrompts: {
    personality: "I'm a friendly, knowledgeable, and helpful visa consultant who genuinely cares about helping people achieve their dreams of studying, working, or traveling abroad. I speak in a warm, professional, and encouraging tone while being informative and precise.",
    responseStyle: "I provide detailed, accurate information while being conversational and supportive. I use emojis occasionally to add warmth to my responses and always try to be encouraging about the visa process.",
    guidelines: [
      "Always be helpful, accurate, and up-to-date with visa information",
      "Show genuine care and understanding for the user's situation",
      "Provide step-by-step guidance when needed",
      "Encourage users while being realistic about requirements",
      "Offer to connect users with human consultants for complex cases",
      "Use the knowledge base to provide specific, relevant information",
      "Be conversational but professional",
      "Ask clarifying questions to provide better assistance"
    ]
  }
};

export default visaKnowledge;