import { getHomeData } from "@/lib/cms";
import type { HomePageData } from "@/types/cms";
import ScrollReveal from "./components/ScrollReveal";

export default async function V2Home() {
  const data: HomePageData = await getHomeData();
  const { hero, profile, coreTools, services } = data;

  return (
    <>
      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-12 pb-12 md:pt-20 md:pb-28 max-w-v2-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <ScrollReveal direction="up" delay={50} className="lg:col-span-7 space-y-8">
            {/* Availability badge */}
            {hero?.available && (
              <div
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[rgba(76,215,246,0.1)] border border-[rgba(76,215,246,0.2)]"
              >
                <span
                  className="w-2 h-2 rounded-full bg-v2-primary animate-[v2-pulse-dot_2s_ease-in-out_infinite]"
                />
                <span
                  className="text-v2-primary text-[14px] font-v2-mono tracking-widest"
                >
                  {hero.availableText || "Available for New Projects"}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1
              className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold text-v2-on-background font-v2-display tracking-tight"
            >
              {hero?.headline}{" "}
              <span className="bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] bg-clip-text text-transparent">{hero?.headlineHighlight}</span>{" "}
              {hero?.headlineEnd}
            </h1>

            {/* Bio */}
            <p
              className="text-[18px] leading-relaxed text-v2-on-surface-variant max-w-2xl font-v2-body"
            >
              {hero?.bio?.split(hero?.yearsExperience || "9.5").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-v2-primary font-bold">{hero.yearsExperience} years</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/v2/my-work"
                className="px-8 py-4 font-bold rounded-lg shadow-xl flex items-center gap-2 hover:scale-105 transition-transform bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] text-[#003640] shadow-[0_20px_40px_rgba(76,215,246,0.25)]"
              >
                {hero?.ctaPrimary || "Explore My Work"}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a
                href={data.downloadCvUrl || "#"}
                download
                className="px-8 py-4 font-bold rounded-lg flex items-center gap-2 hover:border-v2-primary transition-colors bg-transparent border border-[rgba(255,255,255,0.1)] text-[#dae2fd] backdrop-blur-sm"
              >
                {hero?.ctaSecondary || "Download Resume"}
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right column – profile photo */}
          <ScrollReveal direction="left" delay={200} className="lg:col-span-5 relative">
            <div className="aspect-square relative z-10 p-4 bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] rounded-[2rem] overflow-hidden">
              <img
                src="/profile-image.png"
                alt="Ajith Kumar Susai A"
                className="w-full h-full object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative blurs */}
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(208,188,255,0.2)_0%,transparent_70%)]"
            />
            <div
              className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(76,215,246,0.2)_0%,transparent_70%)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Profile Bento Grid ───────────────────────────────────────────────── */}
      <section className="px-6 pb-12 md:pb-28 max-w-v2-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Identity Hub */}
          <ScrollReveal direction="up" delay={100} className="md:col-span-2 bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl space-y-6">
            <h3
              className="text-[24px] font-semibold text-v2-primary font-v2-display"
            >
              Identity Hub
            </h3>
            <div className="grid grid-cols-2 gap-y-6">
              {[
                { icon: "phone", label: "Phone", value: profile?.phone },
                { icon: "location_on", label: "Location", value: profile?.location },
                { icon: "mail", label: "Email", value: profile?.email?.slice(0, 16) + "..." },
                { icon: "cake", label: "Birthday", value: profile?.birthday },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-lg text-v2-primary bg-[#222a3d]"
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-[12px] font-semibold text-v2-on-surface-variant uppercase tracking-wide font-v2-body"
                    >
                      {label}
                    </p>
                    <p
                      className="text-[14px] font-v2-mono tracking-widest"
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience stat */}
          <ScrollReveal direction="up" delay={200} className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
            <span
              className="text-6xl font-extrabold bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] bg-clip-text text-transparent font-v2-display"
            >
              {hero?.yearsExperience || "9.5+"}
            </span>
            <p
              className="text-[12px] font-semibold tracking-widest uppercase text-v2-on-surface-variant font-v2-body"
            >
              Years Experience
            </p>
            <p className="text-[12px] text-[rgba(188,201,205,0.6)]">
              Enterprise Grade Solutions
            </p>
          </ScrollReveal>

          {/* Core Toolkit */}
          <ScrollReveal direction="up" delay={300} className="bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl flex flex-col justify-between">
            <h4
              className="text-[12px] font-semibold text-v2-on-surface-variant uppercase tracking-widest font-v2-body"
            >
              Core Toolkit
            </h4>
            <div className="flex flex-wrap gap-2 mt-4">
              {coreTools?.map((tool) => (
                <span
                  key={tool.label}
                  className="px-3 py-1 rounded text-[14px]"
                  style={{
                    background: "#222a3d",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: tool.accent === "primary" ? "#4cd7f6" : "#d0bcff",
                    fontFamily: "var(--font-jetbrains)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tool.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-12 md:pb-28 max-w-v2-container mx-auto">
        <ScrollReveal direction="up" className="mb-16">
          <h2
            className="text-[40px] font-semibold mb-4 font-v2-display leading-[1.2]"
          >
            What <span className="text-v2-primary">I Do!</span>
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{
              background: "linear-gradient(to right, #4cd7f6, transparent)",
            }}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => {
            const isPrimary = service.accent === "primary";
            const color = isPrimary ? "#4cd7f6" : "#d0bcff";
            const bgColor = isPrimary ? "rgba(76,215,246,0.1)" : "rgba(208,188,255,0.1)";
            const hoverBorderClass = isPrimary
              ? "hover:!border-[rgba(76,215,246,0.5)]"
              : "hover:!border-[rgba(208,188,255,0.5)]";
            return (
              <ScrollReveal
                key={service.title}
                direction="up"
                delay={index * 100}
                className={`bg-[rgba(30,41,59,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_0.5px_0_0_rgba(255,255,255,0.1)] p-8 rounded-2xl group transition-all duration-300 cursor-default ${hoverBorderClass}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 bg-[var(--bg-color)] text-[var(--color)]" style={{ "--bg-color": bgColor, "--color": color } as React.CSSProperties}
                >
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3
                  className="text-[24px] font-semibold mb-4 font-v2-display leading-[1.3]"
                >
                  {service.title}
                </h3>
                <p
                  className="text-v2-on-surface-variant mb-6 leading-relaxed font-v2-body text-[16px]"
                >
                  {service.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {service.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-[13px] bg-[#171f33] font-v2-mono text-[#bcc9cd]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
