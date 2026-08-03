import type { ResumePageData, WorkPageData, ContactPageData, HomePageData } from "@/types/cms";
import ScrollReveal from "../ScrollReveal";
import TechIcon from "../TechIcon";

interface ExploreSectionsProps {
  explore: HomePageData["explore"];
  resume: ResumePageData;
  work: WorkPageData;
  contact: ContactPageData;
}

export default function ExploreSections({ explore, resume, work, contact }: ExploreSectionsProps) {
  const topSkills = resume.skillCategories.flatMap((category) => category.skills).slice(0, 6);
  const featuredProjects = work.projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="px-6 pb-12 md:pb-28 max-w-v2-container mx-auto">
      <ScrollReveal direction="up" className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-[40px] font-semibold mb-4 font-v2-display leading-[1.2]">
          {explore.titleStart} <span className="text-v2-primary">{explore.titleHighlight}</span>
        </h2>
        <p className="text-v2-on-surface-variant font-v2-body text-[16px]">{explore.description}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Experience card */}
        <ScrollReveal direction="up" delay={0} className="h-full">
          <a
            href="/v2/experience"
            className="group flex flex-col h-full bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl transition-all duration-300 hover:!border-[rgba(76,215,246,0.5)]"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[rgba(76,215,246,0.1)] text-v2-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">work_history</span>
            </div>
            <h3 className="text-[22px] font-semibold mb-3 font-v2-display leading-[1.3]">
              {resume.labels.experienceTitle}
            </h3>
            <p className="text-v2-on-surface-variant mb-6 leading-relaxed font-v2-body text-[15px]">
              {resume.experience.length} roles across {resume.terminalQuote.experience.toLowerCase()} of enterprise
              frontend engineering.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#222a3d] text-v2-primary"
                  title={skill}
                >
                  <TechIcon label={skill} className="text-[16px]" />
                </span>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-v2-primary font-semibold text-[14px] transition-all group-hover:gap-3">
              {explore.experienceCta}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </ScrollReveal>

        {/* Projects card */}
        <ScrollReveal direction="up" delay={100} className="h-full">
          <a
            href="/v2/projects"
            className="group flex flex-col h-full bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl transition-all duration-300 hover:!border-[rgba(208,188,255,0.5)]"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[rgba(208,188,255,0.1)] text-v2-secondary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">business_center</span>
            </div>
            <h3 className="text-[22px] font-semibold mb-3 font-v2-display leading-[1.3]">Selected Work</h3>
            <p className="text-v2-on-surface-variant mb-6 leading-relaxed font-v2-body text-[15px]">
              {work.projects.length} shipped projects spanning enterprise platforms, e-commerce, and headless CMS.
            </p>
            <div className="flex mb-8">
              {featuredProjects.map((project, i) => (
                <div
                  key={project.slug}
                  className="w-10 h-10 rounded-lg overflow-hidden border-2 border-[#1e2942] bg-[#222a3d]"
                  style={{ marginLeft: i === 0 ? 0 : -12, zIndex: featuredProjects.length - i }}
                  title={project.title}
                >
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-v2-secondary font-semibold text-[14px] transition-all group-hover:gap-3">
              {explore.projectsCta}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </ScrollReveal>

        {/* Contact card */}
        <ScrollReveal direction="up" delay={200} className="h-full">
          <a
            href="/v2/contact"
            className="group flex flex-col h-full bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl transition-all duration-300 hover:!border-[rgba(255,178,183,0.5)]"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[rgba(255,178,183,0.1)] text-v2-tertiary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">alternate_email</span>
            </div>
            <h3 className="text-[22px] font-semibold mb-3 font-v2-display leading-[1.3]">{contact.headline}</h3>
            <div className="mb-6 space-y-2">
              {contact.availability?.available && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,178,183,0.1)] border border-[rgba(255,178,183,0.2)] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-v2-tertiary animate-[v2-pulse-dot_2s_ease-in-out_infinite]" />
                  <span className="text-v2-tertiary text-[11px] font-v2-mono tracking-widest uppercase">
                    {contact.availability.label}
                  </span>
                </div>
              )}
              <p className="text-v2-on-surface-variant leading-relaxed font-v2-body text-[15px]">{contact.email}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-v2-tertiary font-semibold text-[14px] transition-all group-hover:gap-3">
              {explore.contactCta}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
