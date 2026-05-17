// ─── CMS Content Types for Portfolio V2 ─────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // material-symbol name
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent: "primary" | "secondary";
}

export interface SkillBar {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  title: string;
  icon: string;
  accent: "primary" | "secondary" | "tertiary";
  skills: SkillBar[];
}

export interface ToolChip {
  label: string;
  accent: "primary" | "secondary" | "tertiary";
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description?: string;
  isCurrent?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface CoreTool {
  label: string;
  accent: "primary" | "secondary";
}

export interface ProfileCard {
  phone: string;
  location: string;
  email: string;
  birthday: string;
}

// ─── Home Page ───────────────────────────────────────────────────────────────
export interface HomePageData {
  hero: {
    available: boolean;
    availableText: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    bio: string;
    yearsExperience: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  profile: ProfileCard;
  coreTools: CoreTool[];
  services: Service[];
  social: SocialLink[];
  downloadCvUrl: string;
}

// ─── Resume Page ─────────────────────────────────────────────────────────────
export interface ResumePageData {
  name: string;
  role: string;
  phone: string;
  email: string;
  location: string;
  profileImage: string;
  downloadResumeUrl: string;
  social: SocialLink[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
  devopsTools: ToolChip[];
  terminalQuote: {
    experience: string;
    philosophy: string;
    motivation: string;
    boundaries: string;
  };
}

// ─── Work / Projects Page ────────────────────────────────────────────────────
export type ProjectCategory = "All" | "React / Next.js" | "Angular" | "Backend / API" | "CMS / Headless";

export interface ProjectCard {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: ProjectCategory[];
  colSpan: 4 | 8 | 12; // out of 12
  featured: boolean;
  techIcons?: string[];
  caseStudyUrl?: string;
}

export interface WorkPageData {
  hero: {
    subtitle: string;
    headline: string;
    description: string;
  };
  projects: ProjectCard[];
}

// ─── Contact Page ────────────────────────────────────────────────────────────
export interface ContactPageData {
  availability: {
    available: boolean;
    label: string;
  };
  headline: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  social: SocialLink[];
  mapImage?: string;
  terminalMotivation: string;
}
