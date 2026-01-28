export type Language = 'fr' | 'en';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  logo: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  header: {
    role: string;
    description: string;
    availability: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  sectionTitles: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    contact: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: { language: string; level: string }[];
  contact: {
    email: string;
    location: string;
    cta: string;
  };
}