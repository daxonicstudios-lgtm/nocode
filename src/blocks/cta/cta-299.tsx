import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Cpu } from "lucide-react";

export default function Cta299(props: BlockProps) {
  const {
    theme,
    heading = "Enter the Future",
    subheading = "AI-powered tools for the next generation of creators.",
    buttonText = "Access Now",
    buttonUrl = "#",
  } = props;

  const neon = theme?.primary ?? "#00ff88";

  return (
    <section className="px-4 py-24 sm:py-32" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      <div className="max-w-2xl mx-auto text-center">
        <Cpu className="w-10 h-10 mx-auto mb-4" style={{ color: neon, filter: `drop-shadow(0 0 8px ${neon})` }} />
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight" style={{ textShadow: `0 0 40px ${neon}33` }}>
          {heading}
        </h2>
        <p className="mt-4 text-lg opacity-50">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border"
          style={{ borderColor: neon, color: neon, boxShadow: `0 0 20px ${neon}33, inset 0 0 20px ${neon}11` }}
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
        <div className="mt-4 h-px w-40 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${neon}, transparent)` }} />
      </div>
    </section>
  );
}
