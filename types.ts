
export interface Program {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  ageRange?: string;
  category: 'academic' | 'support' | 'enrichment' | 'career';
  detailedContent?: {
    objective: string;
    scope: string;
    keyFeatures: string[];
    images?: string[];
  };
}

export interface Center {
  id: string;
  name: string;
  location: string;
  area: string;
  type: string;
  programs: string[];
  city: 'Noida' | 'Bihar';
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface SuccessStory {
  name: string;
  age: number;
  story: string;
  achievement: string;
  imageUrl: string;
}

export interface Testimonial {
  author: string;
  role: string;
  quote: string;
  imageUrl: string;
}
