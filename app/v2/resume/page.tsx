import { getResumeData } from "@/lib/cms";
import type { ResumePageData } from "@/types/cms";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Ajith Kumar | Technical Resume",
  description: "9.5+ years of enterprise frontend experience — React, Angular, Next.js, TypeScript.",
};

export default async function ResumePage() {
  const data: ResumePageData = await getResumeData();

  return (
    <div className="max-w-v2-container mx-auto px-6 pt-8 pb-12 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* ── Left Sidebar ──────────────────────────────────────────────────────── */}
      <ScrollReveal direction="up" delay={50} className="lg:col-span-4 space-y-8">
        <div
          className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] rounded-xl p-8 lg:sticky top-[6rem]"
        >
          {/* Profile photo */}
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden p-2 border-2 border-[rgba(192,193,255,0.2)]"
          >
            <img
              src={data?.profileImage || "/profile-image.png"}
              alt={data?.name || "Ajith Kumar"}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Name & role */}
          <div className="text-center mb-8">
            <h1
              className="text-[32px] font-bold text-v2-on-surface mb-2 font-v2-display leading-[40px]"
            >
              {data?.name || "Ajith Kumar Susai A"}
            </h1>
            <p
              className="text-[12px] uppercase tracking-widest text-v2-secondary-alt font-v2-mono"
            >
              {data?.role || "Specialist Software Engineer"}
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: "call", label: "Phone", value: data?.phone },
              { icon: "mail", label: "Email", value: data?.email },
              { icon: "location_on", label: "Location", value: data?.location },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-v2-primary-alt transition-colors group-hover:text-[#1000a9] bg-[#222a3d] group-hover:bg-[#c0c1ff]"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div>
                  <p
                    className="text-[10px] text-v2-on-surface-variant font-v2-mono"
                  >
                    {label}
                  </p>
                  <p className="text-sm font-medium text-v2-on-surface">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div
            className="mt-10 pt-8 flex justify-center gap-4 border-t border-[rgba(70,69,84,0.3)]"
          >
            {data?.social?.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="p-2 text-v2-on-surface-variant hover:text-v2-primary-alt transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <span className="material-symbols-outlined">{s.icon}</span>
              </a>
            ))}
          </div>

          {/* Download Resume */}
          <a
            href={data?.downloadResumeUrl || "#"}
            download
            className="w-full mt-8 flex items-center justify-center gap-2 py-4 rounded-lg transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "#c0c1ff",
              color: "#1000a9",
              fontFamily: "var(--font-jetbrains)",
              fontWeight: "500",
              letterSpacing: "0.05em",
              fontSize: "14px",
            }}
          >
            <span className="material-symbols-outlined">download</span>
            DOWNLOAD RESUME
          </a>
        </div>
      </ScrollReveal>

      {/* ── Right Content ──────────────────────────────────────────────────────── */}
      <section className="lg:col-span-8 space-y-12">
        {/* Experience + Education */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-col md:flex-row gap-8">
          {/* Experience */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-v2-primary-alt text-4xl">work</span>
              <h2
                className="text-[24px] font-semibold font-v2-display leading-[32px]"
              >
                Professional Journey
              </h2>
            </div>
            <div
              className="space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-0 before:w-px before:bg-[rgba(70,69,84,0.3)]"
            >
              <style>{`
                .exp-timeline::before { background: rgba(70,69,84,0.3); }
              `}</style>
              <div className="exp-timeline space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-0 before:w-px before:bg-[rgba(70,69,84,0.3)]">
                {data?.experience?.map((exp, i) => (
                  <div key={i} className="relative pl-10 group">
                    <div
                      className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-125"
                      style={{
                        background: "#0b1326",
                        border: exp.isCurrent
                          ? "2px solid #c0c1ff"
                          : "2px solid #908fa0",
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${exp.isCurrent ? "bg-[#c0c1ff]" : "bg-[#908fa0]"}`}
                      />
                    </div>
                    <span
                      className="text-[12px] mb-2 block"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        color: exp.isCurrent ? "#4cd7f6" : "#c7c4d7",
                      }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-v2-on-surface">{exp.role}</h3>
                    <p className="text-v2-on-surface-variant text-sm mb-4">{exp.company}</p>
                    {exp.description && (
                      <div
                        className="p-4 rounded-lg text-sm leading-relaxed"
                        style={{
                          background: "#131b2e",
                          border: "1px solid rgba(70,69,84,0.2)",
                          color: "rgba(218,226,253,0.8)",
                          fontFamily: "var(--font-manrope)",
                        }}
                      >
                        {exp.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-v2-tertiary text-4xl">school</span>
              <h2
                className="text-[24px] font-semibold font-v2-display leading-[32px]"
              >
                Education
              </h2>
            </div>
            <div className="exp-timeline space-y-12 relative before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-0 before:w-px before:bg-[rgba(70,69,84,0.3)]">
              {data?.education?.map((edu, i) => (
                <div key={i} className="relative pl-10">
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: "#222a3d",
                      border: i === 0 ? "2px solid #ffb2b7" : "2px solid #464554",
                    }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#ffb2b7]" : "bg-[#464554]"}`}
                    />
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
                  <h3 className="text-lg font-bold text-v2-on-surface">{edu.degree}</h3>
                  <p className="text-v2-on-surface-variant text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* Technical Mastery */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-v2-secondary-alt text-4xl">terminal</span>
            <h2
              className="text-[24px] font-semibold font-v2-display leading-[32px]"
            >
              Technical Mastery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.skillGroups?.map((group, index) => {
              const colors = {
                primary: "#c0c1ff",
                secondary: "#4cd7f6",
                tertiary: "#ffb2b7",
              };
              const color = colors[group.accent as keyof typeof colors] || "#c0c1ff";
              return (
                <ScrollReveal
                  key={group.title}
                  direction="up"
                  delay={(index % 3) * 50}
                  className={group.skills.length === 2 ? "md:col-span-2" : ""}
                >
                  <div
                    className="w-full h-full bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-6 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] hover:!border-[#c0c1ff] flex flex-col"
                  >
                  <div className="flex items-center justify-between mb-6">
                    <h3
                      className="text-sm uppercase"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {group.title}
                    </h3>
                    <span
                      className="material-symbols-outlined"
                      style={{ color: `${color}66` }}
                    >
                      {group.icon}
                    </span>
                  </div>
                  <div
                    className={`flex-1 gap-4 ${
                      group.skills.length > 3 ? "grid grid-cols-2 gap-x-8" : "space-y-4"
                    }`}
                  >
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div
                          className="flex justify-between text-[13px] font-v2-mono"
                        >
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div
                          className="h-1 rounded-full overflow-hidden bg-[#2d3449]"
                        >
                          <div
                            className="h-full rounded-full transition-[width] duration-[1200ms] ease-in-out"
                            style={{ width: `${skill.level}%`, background: color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* DevOps tools chips */}
            <ScrollReveal
              direction="up"
              delay={200}
              className="lg:col-span-3"
            >
              <div className="w-full h-full bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-6 rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] hover:!border-[#c0c1ff]">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-sm uppercase"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "#ffb2b7",
                    letterSpacing: "0.05em",
                  }}
                >
                  DevOps &amp; Ecosystem
                </h3>
                <span className="material-symbols-outlined text-[rgba(255,178,183,0.4)]">
                  settings_suggest
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {data?.devopsTools?.map((tool) => {
                  const colors = { primary: "#c0c1ff", secondary: "#4cd7f6", tertiary: "#ffb2b7" };
                  const c = colors[tool.accent as keyof typeof colors] || "#c0c1ff";
                  return (
                    <span
                      key={tool.label}
                      className="px-3 py-1 rounded-full text-[11px]"
                      style={{
                        background: `${c}1a`,
                        color: c,
                        border: `1px solid ${c}33`,
                        fontFamily: "var(--font-jetbrains)",
                      }}
                    >
                      {tool.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

        {/* Terminal quote */}
        <ScrollReveal direction="up" delay={100}>
          <div
            className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] rounded-xl overflow-hidden border border-[rgba(70,69,84,0.3)]"
          >
          <div
            className="px-4 py-2 flex items-center gap-2 border-b bg-[#222a3d] border-[rgba(70,69,84,0.3)]"
          >
            <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
            <div className="w-3 h-3 rounded-full bg-[#ffb2b7]" />
            <div className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
            <span
              className="text-[12px] text-v2-on-surface-variant ml-4 font-v2-mono"
            >
              career-summary.sh
            </span>
          </div>
          <div
            className="p-6 text-sm leading-relaxed font-v2-mono text-[rgba(76,215,246,0.8)]"
          >
            <p className="mb-2">
              <span className="text-v2-primary-alt">$</span> cat personality.json
            </p>
            <p className="text-v2-on-surface ml-4">{"{"}</p>
            <p className="text-v2-on-surface ml-8">&quot;experience&quot;: &quot;{data?.terminalQuote?.experience}&quot;,</p>
            <p className="text-v2-on-surface ml-8">&quot;philosophy&quot;: &quot;{data?.terminalQuote?.philosophy}&quot;,</p>
            <p className="text-v2-on-surface ml-8">&quot;motivation&quot;: &quot;{data?.terminalQuote?.motivation}&quot;,</p>
            <p className="text-v2-on-surface ml-8">&quot;boundaries&quot;: &quot;{data?.terminalQuote?.boundaries}&quot;</p>
            <p className="text-v2-on-surface ml-4">{"}"}</p>
            <p>
              <span className="text-v2-primary-alt">$</span>{" "}
              <span className="animate-[v2-pulse-dot_1s_ease-in-out_infinite]">_</span>
            </p>
          </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
