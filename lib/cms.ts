import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  HomePageData,
  ResumePageData,
  WorkPageData,
  ContactPageData,
  ProjectCard,
} from "@/types/cms";

const CONTENT_DIR = path.join(process.cwd(), "public", "admin", "content");

function readFile(filePath: string): { data: Record<string, unknown>; content: string } {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { data, content };
  } catch {
    return { data: {}, content: "" };
  }
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export function getHomeData(): HomePageData {
  const { data } = readFile(path.join(CONTENT_DIR, "home.md"));
  return data as unknown as HomePageData;
}

// ─── Resume ───────────────────────────────────────────────────────────────────
export function getResumeData(): ResumePageData {
  const { data } = readFile(path.join(CONTENT_DIR, "resume.md"));
  return data as unknown as ResumePageData;
}

// ─── Work / Projects ──────────────────────────────────────────────────────────
export function getWorkData(): WorkPageData {
  const heroFile = readFile(path.join(CONTENT_DIR, "work-hero.md"));

  const workDir = path.join(CONTENT_DIR, "work");
  let projects: ProjectCard[] = [];

  if (fs.existsSync(workDir)) {
    const files = fs.readdirSync(workDir).filter((f) => f.endsWith(".md"));
    projects = files
      .map((file) => {
        const { data } = readFile(path.join(workDir, file));
        return {
          slug: file.replace(".md", ""),
          ...data,
        } as unknown as ProjectCard;
      })
      .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
  }

  return {
    hero: (heroFile.data.hero || heroFile.data) as unknown as WorkPageData["hero"],
    projects,
  };
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export function getContactData(): ContactPageData {
  const { data } = readFile(path.join(CONTENT_DIR, "contact.md"));
  return data as unknown as ContactPageData;
}
