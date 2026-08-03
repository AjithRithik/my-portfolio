import type { ResumePageData } from "@/types/cms";
import ScrollReveal from "../ScrollReveal";
import TechIcon from "../TechIcon";

interface ExperienceSectionProps {
  data: ResumePageData;
}

const SKILL_ACCENTS = [
  { color: "#4cd7f6", bg: "rgba(76,215,246,0.12)" },
  { color: "#c0c1ff", bg: "rgba(192,193,255,0.12)" },
  { color: "#ffb2b7", bg: "rgba(255,178,183,0.12)" },
];

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const totalSkills = data.skillCategories?.reduce((sum, category) => sum + category.skills.length, 0) ?? 0;

  const stats = [
    { icon: "work_history", value: data.terminalQuote.experience, label: "Experience" },
    { icon: "apartment", value: String(data.experience.length), label: "Organizations" },
    { icon: "code", value: String(totalSkills), label: "Core Skills" },
    { icon: "rocket_launch", value: String(data.personalProjects.length), label: "Personal Projects" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Ambient hero glow */}
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(76,215,246,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(208,188,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-v2-container mx-auto px-6 pt-12 md:pt-20 pb-12 md:pb-24">
        {/* ── Section intro ─────────────────────────────────────────────────────── */}
        <ScrollReveal direction="up" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span
                className="uppercase tracking-widest text-v2-secondary-alt"
                style={{ fontFamily: "var(--font-jetbrains)", fontSize: "14px" }}
              >
                Resume
              </span>
              <h1
                className="text-[36px] md:text-[56px] font-bold text-v2-on-surface mt-2"
                style={{ fontFamily: "var(--font-sora)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
              >
                Experience &amp; Skills
              </h1>
              <div
                className="w-24 h-1 rounded-full mt-5"
                style={{ background: "linear-gradient(to right, #4cd7f6, transparent)" }}
              />
            </div>
            <a
              href={data.downloadResumeUrl}
              download
              className="inline-flex items-center gap-2 py-4 px-7 font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shrink-0 bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] text-[#003640] shadow-[0_20px_40px_rgba(76,215,246,0.2)]"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              {data.labels.downloadResumeLabel}
            </a>
          </div>
          <div className="max-w-3xl mt-8 space-y-3">
            {data.summary?.map((paragraph, i) => (
              <p key={i} className="text-v2-on-surface-variant text-[15px] leading-relaxed font-v2-body">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Quick stats strip ────────────────────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={50} className="mb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon, value, label }) => (
              <div
                key={label}
                className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] rounded-xl p-5 flex items-center gap-4 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-v2-primary-alt bg-[#222a3d] shrink-0">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-v2-on-surface font-v2-display leading-tight truncate">
                    {value}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-v2-on-surface-variant font-v2-mono">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      <div className="space-y-12">
        {/* Experience */}
        <ScrollReveal direction="up" delay={100}>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-v2-primary-alt text-4xl">work</span>
              <div>
                <h2 className="text-[24px] font-semibold font-v2-display leading-[32px]">
                  {data.labels.experienceTitle}
                </h2>
                <div
                  className="w-16 h-0.5 rounded-full mt-2"
                  style={{ background: "linear-gradient(to right, #4cd7f6, transparent)" }}
                />
              </div>
            </div>
            <div className="exp-timeline space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-0 before:w-px before:bg-[rgba(70,69,84,0.3)]">
              {data?.experience?.map((exp, i) => (
                <div key={i} className="relative pl-10 pr-3 py-2 rounded-2xl transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)] group">
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-125"
                    style={{
                      background: "#0b1326",
                      border: exp.isCurrent ? "2px solid #c0c1ff" : "2px solid #908fa0",
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? "bg-[#c0c1ff]" : "bg-[#908fa0]"}`} />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-v2-on-surface">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest"
                        style={{
                          background: "rgba(192,193,255,0.15)",
                          color: "#c0c1ff",
                          fontFamily: "var(--font-jetbrains)",
                        }}
                      >
                        Present
                      </span>
                    )}
                  </div>
                  <p className="text-v2-on-surface-variant text-sm">
                    {exp.company}
                    {exp.employmentType && ` — ${exp.employmentType}`}
                  </p>
                  {exp.location && (
                    <p className="text-[12px] text-[rgba(199,196,215,0.6)] mb-2">{exp.location}</p>
                  )}
                  <span
                    className="text-[12px] mb-4 block"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: exp.isCurrent ? "#4cd7f6" : "#c7c4d7",
                    }}
                  >
                    {exp.period}
                  </span>

                  <div className="space-y-6">
                    {exp.projectGroups?.map((group, gi) => (
                      <div
                        key={gi}
                        className="p-4 rounded-lg"
                        style={{
                          background: "#131b2e",
                          border: "1px solid rgba(70,69,84,0.2)",
                        }}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className="text-[11px] uppercase tracking-widest text-v2-secondary-alt shrink-0"
                            style={{ fontFamily: "var(--font-jetbrains)" }}
                          >
                            {group.label}:
                          </span>
                          {group.chips.map((chip) => (
                            <span
                              key={chip}
                              className="px-2.5 py-1 rounded text-[12px]"
                              style={{
                                background: "rgba(192,193,255,0.1)",
                                color: "#c0c1ff",
                                fontFamily: "var(--font-jetbrains)",
                              }}
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2">
                          {group.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="text-sm leading-relaxed flex gap-2"
                              style={{ color: "rgba(218,226,253,0.8)", fontFamily: "var(--font-manrope)" }}
                            >
                              <span className="material-symbols-outlined text-v2-primary-alt text-[16px] mt-0.5 shrink-0">
                                chevron_right
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Mastery + Education */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-v2-secondary-alt text-4xl">terminal</span>
                <div>
                  <h2 className="text-[24px] font-semibold font-v2-display leading-[32px]">
                    {data.labels.technicalTitle}
                  </h2>
                  <div
                    className="w-16 h-0.5 rounded-full mt-2"
                    style={{ background: "linear-gradient(to right, #c0c1ff, transparent)" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data?.skillCategories?.map((category, index) => {
                  const accent = SKILL_ACCENTS[index % SKILL_ACCENTS.length];
                  return (
                    <ScrollReveal key={category.title} direction="up" delay={(index % 4) * 50}>
                      <div className="w-full h-full bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-6 rounded-xl transition-all duration-300 ease-in-out flex flex-col">
                        <div className="flex items-center gap-3 mb-5">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: accent.bg, color: accent.color }}
                          >
                            <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
                          </div>
                          <h3
                            className="text-sm uppercase text-v2-on-surface"
                            style={{ fontFamily: "var(--font-jetbrains)", letterSpacing: "0.05em" }}
                          >
                            {category.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px]"
                              style={{
                                background: "#222a3d",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "#dae2fd",
                                fontFamily: "var(--font-jetbrains)",
                              }}
                            >
                              <TechIcon label={skill} className="text-[14px] shrink-0" color={accent.color} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-v2-tertiary text-4xl">school</span>
                  <h2 className="text-[24px] font-semibold font-v2-display leading-[32px]">
                    {data.labels.educationTitle}
                  </h2>
                </div>
                <div className="exp-timeline space-y-8 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-0 before:w-px before:bg-[rgba(70,69,84,0.3)]">
                  {data?.education?.map((edu, i) => (
                    <div key={i} className="relative pl-10">
                      <div
                        className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: "#222a3d",
                          border: i === 0 ? "2px solid #ffb2b7" : "2px solid #464554",
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#ffb2b7]" : "bg-[#464554]"}`} />
                      </div>
                      <span
                        className="text-[12px] mb-2 block"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: i === 0 ? "#ffb2b7" : "#c7c4d7",
                        }}
                      >
                        {edu.period}
                      </span>
                      <h3 className="text-base font-bold text-v2-on-surface">{edu.degree}</h3>
                      <p className="text-v2-on-surface-variant text-sm">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Projects */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-v2-primary text-4xl">rocket_launch</span>
                  <h2 className="text-[24px] font-semibold font-v2-display leading-[32px]">
                    {data.labels.personalProjectsTitle}
                  </h2>
                </div>
                <div className="space-y-3">
                  {data?.personalProjects?.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-5 rounded-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-v2-on-surface font-semibold text-[15px] font-v2-display">
                          {project.name}
                        </h3>
                        <span className="material-symbols-outlined text-v2-primary-alt text-[18px] transition-transform group-hover:translate-x-1">
                          arrow_outward
                        </span>
                      </div>
                      <p className="text-[12px] text-v2-on-surface-variant" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        {project.techStack}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Terminal quote */}
        <ScrollReveal direction="up" delay={100} className="max-w-3xl mx-auto w-full">
          <div className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] rounded-xl overflow-hidden border border-[rgba(70,69,84,0.3)]">
            <div className="px-4 py-2 flex items-center gap-2 border-b bg-[#222a3d] border-[rgba(70,69,84,0.3)]">
              <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
              <div className="w-3 h-3 rounded-full bg-[#ffb2b7]" />
              <div className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
              <span className="text-[12px] text-v2-on-surface-variant ml-4 font-v2-mono">
                {data.labels.terminalWindowTitle}
              </span>
            </div>
            <div className="p-6 text-sm leading-relaxed font-v2-mono text-[rgba(76,215,246,0.8)]">
              <p className="mb-2">
                <span className="text-v2-primary-alt">{data.labels.terminalPrompt}</span> {data.labels.terminalCommand}
              </p>
              <p className="text-v2-on-surface ml-4">{"{"}</p>
              <p className="text-v2-on-surface ml-8">&quot;experience&quot;: &quot;{data?.terminalQuote?.experience}&quot;,</p>
              <p className="text-v2-on-surface ml-8">&quot;philosophy&quot;: &quot;{data?.terminalQuote?.philosophy}&quot;,</p>
              <p className="text-v2-on-surface ml-8">&quot;motivation&quot;: &quot;{data?.terminalQuote?.motivation}&quot;,</p>
              <p className="text-v2-on-surface ml-8">&quot;boundaries&quot;: &quot;{data?.terminalQuote?.boundaries}&quot;</p>
              <p className="text-v2-on-surface ml-4">{"}"}</p>
              <p>
                <span className="text-v2-primary-alt">{data.labels.terminalPrompt}</span>{" "}
                <span className="animate-[v2-pulse-dot_1s_ease-in-out_infinite]">_</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </div>
  );
}
