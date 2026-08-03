import type { ContactPageData } from "@/types/cms";
import V2ContactForm from "../V2ContactForm";
import ScrollReveal from "../ScrollReveal";

interface ContactSectionProps {
  data: ContactPageData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <div className="pt-8 pb-12 md:pb-32 px-6 max-w-v2-container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ── Left: Contact Info ──────────────────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <ScrollReveal direction="up" delay={50}>
            <header>
              {/* Availability badge */}
              {data?.availability?.available && (
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{
                    background: "rgba(192,193,255,0.1)",
                    border: "1px solid rgba(192,193,255,0.2)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full bg-v2-primary-alt animate-[v2-pulse-dot_2s_ease-in-out_infinite]"
                  />
                  <span
                    className="text-v2-primary-alt text-[12px] uppercase tracking-widest font-v2-mono"
                  >
                    {data.availability.label}
                  </span>
                </div>
              )}
              <h1
                className="text-[32px] md:text-[48px] font-bold text-v2-on-surface mb-4"
                style={{
                  fontFamily: "var(--font-sora)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                }}
              >
                {data?.headline}
              </h1>
              <p
                className="text-v2-on-surface-variant max-w-md"
                style={{ fontFamily: "var(--font-manrope)", fontSize: "16px", lineHeight: "1.6" }}
              >
                {data?.description}
              </p>
            </header>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="grid gap-4">
            {[
              { icon: "smartphone", label: data.contactLabels.phone, value: data?.phone, accent: "#c0c1ff" },
              { icon: "mail", label: data.contactLabels.email, value: data?.email, accent: "#4cd7f6" },
              { icon: "location_on", label: data.contactLabels.location, value: data?.location, accent: "#ffb2b7" },
            ].map(({ icon, label, value, accent }, index) => (
              <ScrollReveal
                key={label}
                direction="up"
                delay={100 + index * 50}
              >
                <div
                  className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-6 rounded-xl flex items-start gap-4 transition-all duration-300 group cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "#2d3449", color: accent }}
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <p
                      className="text-v2-outline-alt text-[12px] mb-1 font-v2-mono"
                    >
                      {label}
                    </p>
                    <p
                      className="text-v2-on-surface font-semibold break-all"
                      style={{ fontFamily: "var(--font-sora)", fontSize: "18px", lineHeight: "1.3" }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Social icons */}
          <ScrollReveal direction="up" delay={250} className="flex gap-4">
            {data?.social?.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[rgba(70,69,84,0.6)] text-[#c7c4d7] hover:bg-[#c0c1ff] hover:text-[#1000a9] hover:border-[#c0c1ff] bg-transparent"
              >
                <span className="material-symbols-outlined">{s.icon}</span>
              </a>
            ))}
          </ScrollReveal>
        </div>

        {/* ── Right: Contact Form ──────────────────────────────────────────── */}
        <ScrollReveal direction="left" delay={150} className="lg:col-span-7">
          <div
            className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            {/* Background decorations */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(192,193,255,0.1) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(76,215,246,0.1) 0%, transparent 70%)" }}
            />

            <V2ContactForm copy={data.form} />

            {/* Terminal motivation */}
            <div
              className="mt-12 p-4 rounded-lg"
              style={{
                background: "#060e20",
                border: "1px solid rgba(70,69,84,0.3)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "13px",
              }}
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                <span className="w-3 h-3 rounded-full bg-[#ffb2b7]" />
                <span className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
              </div>
              <div style={{ color: "#c7c4d7" }}>
                <p>
                  <span className="text-v2-primary-alt">{data.terminalUser}</span>@{data.terminalHost}:~${" "}
                  <span className="text-v2-secondary-alt">{data.terminalCommand}</span> {data.terminalFile}
                </p>
                <p className="mt-2 text-v2-outline-alt italic">
                  &ldquo;{data?.terminalMotivation}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Location Visual ──────────────────────────────────────────────────── */}
      <ScrollReveal direction="up" delay={100} className="mt-24 w-full">
        <div
          className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.5)] hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] rounded-2xl h-[300px] relative overflow-hidden transition-all duration-1000 group grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
        >
          <img
            src={data.mapImage}
            alt={data.mapImageAlt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #0b1326 0%, transparent 60%)",
            }}
          />
          <div className="absolute bottom-8 left-8">
            <div
              className="flex items-center gap-3 px-6 py-4 rounded-xl"
              style={{
                background: "rgba(34,42,61,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(192,193,255,0.3)",
              }}
            >
              <span
                className="material-symbols-outlined text-v2-primary-alt"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                location_on
              </span>
              <div>
                <h3
                  className="text-v2-on-surface font-semibold"
                  style={{ fontFamily: "var(--font-sora)", fontSize: "18px" }}
                >
                  {data.mapTitle}
                </h3>
                <p
                  className="text-v2-on-surface-variant"
                  style={{ fontFamily: "var(--font-manrope)", fontSize: "14px" }}
                >
                  {data.mapLocation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
