// ─── CMS Content Types for Portfolio V2 ─────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // material-symbol name
}

export interface MetadataContent {
  title: string;
  description: string;
}

export interface SiteMetadataContent extends MetadataContent {
  siteUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export interface SitePageData {
  brandName: string;
  profileImage: string;
  profileImageAlt: string;
  headerCtaLabel: string;
  headerCtaUrl: string;
  mobileMenuLabel: string;
  navLinks: NavigationItem[];
  footer: {
    brandName: string;
    copyrightName: string;
    builtWithText: string;
  };
  social: SocialLink[];
  metadata: SiteMetadataContent;
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
  metadata: MetadataContent;
  hero: {
    available: boolean;
    availableText: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    bio: string;
    bioHighlight: string;
    yearsExperience: string;
    ctaPrimary: string;
    ctaSecondary: string;
    profileImage: string;
    profileImageAlt: string;
  };
  profile: ProfileCard;
  sections: {
    identityTitle: string;
    phoneLabel: string;
    locationLabel: string;
    emailLabel: string;
    birthdayLabel: string;
    experienceLabel: string;
    experienceDescription: string;
    toolkitTitle: string;
    servicesTitleStart: string;
    servicesTitleHighlight: string;
  };
  coreTools: CoreTool[];
  services: Service[];
  social: SocialLink[];
  downloadCvUrl: string;
}

// ─── Resume Page ─────────────────────────────────────────────────────────────
export interface ResumePageData {
  metadata: MetadataContent;
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
  labels: {
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    downloadResumeLabel: string;
    experienceTitle: string;
    educationTitle: string;
    technicalTitle: string;
    devopsTitle: string;
    terminalWindowTitle: string;
    terminalCommand: string;
    terminalPrompt: string;
    terminalExperienceKey: string;
    terminalPhilosophyKey: string;
    terminalMotivationKey: string;
    terminalBoundariesKey: string;
  };
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
  metadata: MetadataContent;
  hero: {
    subtitle: string;
    headline: string;
    description: string;
  };
  filters: {
    label: string;
    category: ProjectCategory;
  }[];
  caseStudyLabel: string;
  expertise: {
    titleStart: string;
    titleHighlight: string;
    items: {
      value: string;
      label: string;
    }[];
  };
  projects: ProjectCard[];
}

// ─── Contact Page ────────────────────────────────────────────────────────────
export interface ContactPageData {
  metadata: MetadataContent;
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
  mapImageAlt: string;
  mapTitle: string;
  mapLocation: string;
  contactLabels: {
    phone: string;
    email: string;
    location: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    defaultErrorMessage: string;
    networkErrorMessage: string;
  };
  terminalUser: string;
  terminalHost: string;
  terminalCommand: string;
  terminalFile: string;
  terminalMotivation: string;
}
