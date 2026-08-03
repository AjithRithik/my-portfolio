"use client";

import { useState } from "react";
import type { ProjectCard, ProjectCategory, WorkPageData } from "@/types/cms";
import ScrollReveal from "../components/ScrollReveal";

interface WorkClientProps {
  hero: { subtitle: string; headline: string; description: string };
  projects: ProjectCard[];
  filters: WorkPageData["filters"];
  caseStudyLabel: string;
  expertise: WorkPageData["expertise"];
}

export default function WorkClient({
  hero,
  projects,
  filters,
  caseStudyLabel,
  expertise,
}: WorkClientProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(filters[0]?.category ?? "All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category?.includes(activeFilter));

  return (
    <>
      {/* Hero */}
      <ScrollReveal direction="up" delay={50} className="mb-16 border-l-4 border-[#c0c1ff] pl-6">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span
            className="uppercase tracking-widest text-v2-secondary-alt"
            style={{ fontFamily: "var(--font-jetbrains)", fontSize: "14px" }}
          >
            {hero.subtitle}
          </span>
          <h1
            className="text-[32px] md:text-[48px] font-bold text-v2-on-surface"
            style={{ fontFamily: "var(--font-sora)", lineHeight: "1.15", letterSpacing: "-0.02em" }}
          >
            {hero.headline}
          </h1>
          <p
            className="text-[16px] text-v2-on-surface-variant leading-relaxed font-v2-body"
          >
            {hero.description}
          </p>
        </div>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal direction="up" delay={100} className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => {
          const isActive = filter.category === activeFilter;
          return (
            <button
              key={filter.category}
              onClick={() => setActiveFilter(filter.category)}
              className="px-6 py-2 rounded-full text-[14px] transition-all duration-200"
              style={{
                fontFamily: "var(--font-jetbrains)",
                background: isActive ? "#c0c1ff" : "#171f33",
                color: isActive ? "#1000a9" : "#c7c4d7",
                border: isActive ? "1px solid #c0c1ff" : "1px solid rgba(70,69,84,0.3)",
                fontWeight: isActive ? "600" : "500",
              }}
            >
              {filter.label}
            </button>
          );
        })}
      </ScrollReveal>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filtered.map((project, index) => {
          const span = project.colSpan ?? 4;
          const colClass =
            span === 8
              ? "md:col-span-8"
              : span === 12
              ? "md:col-span-12"
              : "md:col-span-4";

          return (
            <ScrollReveal
              key={project.slug}
              direction="up"
              delay={(index % 3) * 100}
              className={colClass}
            >
              <article
                className="w-full h-full bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#c0c1ff] hover:shadow-[0_0_30px_rgba(192,193,255,0.15)] hover:-translate-y-[4px] rounded-xl overflow-hidden flex flex-col"
              >
                {project.image && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, #0b1326 0%, transparent 100%)",
                        opacity: 0.6,
                      }}
                    />
                  </div>
                )}
                {!project.image && span >= 8 && (
                  <div
                    className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-[#222a3d]"
                  >
                    <span
                      className="material-symbols-outlined opacity-20"
                      style={{ fontSize: "120px" }}
                    >
                      dashboard
                    </span>
                  </div>
                )}
                <div className="p-8 flex flex-col gap-4 flex-grow">
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <h3
                      className="text-[24px] font-semibold text-v2-on-surface font-v2-display leading-[32px]"
                    >
                      {project.title}
                    </h3>
                    {span >= 8 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.tags?.slice(0, 2).map((tag, i) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded text-[13px]"
                            style={{
                              fontFamily: "var(--font-jetbrains)",
                              background: i % 2 === 0 ? "rgba(192,193,255,0.1)" : "rgba(76,215,246,0.1)",
                              color: i % 2 === 0 ? "#c0c1ff" : "#4cd7f6",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p
                    className="text-v2-on-surface-variant font-v2-body text-[16px]"
                  >
                    {project.description}
                  </p>
                  {span < 8 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded text-[11px]"
                          style={{
                            background: "#2d3449",
                            color: "#908fa0",
                            fontFamily: "var(--font-jetbrains)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.caseStudyUrl && (
                    <div className="mt-auto pt-4" style={{ borderTop: "1px solid rgba(70,69,84,0.15)" }}>
                      <a
                        href={project.caseStudyUrl}
                        className="inline-block py-3 px-6 rounded text-v2-primary-alt transition-all hover:bg-v2-primary-alt hover:text-v2-on-primary-alt"
                        style={{
                          border: "1px solid #c0c1ff",
                          fontFamily: "var(--font-jetbrains)",
                          fontSize: "14px",
                        }}
                      >
                        {caseStudyLabel}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Core Expertise */}
      <ScrollReveal direction="up" className="mt-24 mb-8">
        <h2 className="text-center text-[36px] font-bold mb-12 font-v2-display text-v2-on-surface">
          {expertise.titleStart}{" "}
          <span className="text-[#4cd7f6] transition-all duration-300" style={{ textShadow: "0 0 15px rgba(76, 215, 246, 0.6)" }}>
            {expertise.titleHighlight}
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertise.items.map((item, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 50}
            >
              <div
                className="w-full h-full bg-[rgba(15,23,42,0.4)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.3)] rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.12)] hover:-translate-y-[4px] transition-all duration-300"
              >
                <span className="text-[20px] md:text-[24px] font-bold text-[#4cd7f6] font-v2-display">
                  {item.value}
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#908fa0] font-v2-mono">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </>
  );
}
