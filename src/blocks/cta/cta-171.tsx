import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta171(props: BlockProps) {
  const {
    theme,
    heading = "Transform your workflow today",
    subheading = "Powerful tools designed for modern teams who move fast.",
    buttonText = "Start Building",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#fff" }}>
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#1e293b" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
