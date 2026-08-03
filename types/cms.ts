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

export interface SkillCategory {
  title: string;
  icon: string; // material-symbol name, used as the category-card fallback icon
  skills: string[];
}

export interface ProjectGroup {
  label: string; // e.g. "Projects" or "Sports Projects"
  chips: string[]; // project name pills
  bullets: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  employmentType?: string;
  location?: string;
  isCurrent?: boolean;
  projectGroups?: ProjectGroup[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface PersonalProject {
  name: string;
  url: string;
  techStack: string;
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
  explore: {
    titleStart: string;
    titleHighlight: string;
    description: string;
    experienceCta: string;
    projectsCta: string;
    contactCta: string;
  };
}

// ─── Resume Page ─────────────────────────────────────────────────────────────
export interface ResumePageData {
  metadata: MetadataContent;
  name: string;
  role: string;
  techLine: string;
  phone: string;
  email: string;
  location: string;
  portfolioUrl: string;
  profileImage: string;
  downloadResumeUrl: string;
  social: SocialLink[];
  summary: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  personalProjects: PersonalProject[];
  labels: {
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    downloadResumeLabel: string;
    experienceTitle: string;
    educationTitle: string;
    technicalTitle: string;
    personalProjectsTitle: string;
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
