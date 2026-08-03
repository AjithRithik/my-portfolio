import type { WorkPageData } from "@/types/cms";
import ScrollReveal from "../ScrollReveal";

interface CoreExpertiseProps {
  expertise: WorkPageData["expertise"];
  className?: string;
}

export default function CoreExpertise({ expertise, className = "" }: CoreExpertiseProps) {
  return (
    <ScrollReveal direction="up" className={className}>
      <h2 className="text-center text-[36px] font-bold mb-12 font-v2-display text-v2-on-surface">
        {expertise.titleStart}{" "}
        <span className="text-[#4cd7f6] transition-all duration-300" style={{ textShadow: "0 0 15px rgba(76, 215, 246, 0.6)" }}>
          {expertise.titleHighlight}
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {expertise.items.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 50}>
            <div className="w-full h-full bg-[rgba(15,23,42,0.4)] backdrop-blur-[12px] border border-[rgba(30,41,59,0.3)] rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center gap-2 hover:border-[#c0c1ff] hover:shadow-[0_0_20px_rgba(192,193,255,0.12)] hover:-translate-y-[4px] transition-all duration-300">
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
  );
}
