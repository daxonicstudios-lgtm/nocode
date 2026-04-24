import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Cta020(props: BlockProps) {
  const {
    theme,
    heading = "The future of collaboration",
    subheading = "Real-time editing, seamless sharing, and powerful integrations.",
    buttonText = "Try It Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Video",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${theme?.primary ?? "#059669"} 0%, ${theme?.accent ?? "#0d9488"} 100%)`,
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-1 px-8 py-4 rounded-full bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#059669" }}>
            {buttonText} <ChevronRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-4 rounded-full font-medium text-sm border border-white/30 hover:bg-white/10 transition-colors text-center">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
