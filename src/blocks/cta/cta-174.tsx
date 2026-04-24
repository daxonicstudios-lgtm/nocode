import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta174(props: BlockProps) {
  const {
    theme,
    heading = "Accelerate your growth",
    subheading = "Tools that help you ship faster and iterate smarter.",
    buttonText = "Start Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ backgroundColor: "#0f172a", color: "#fff" }}>
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 70% 0, 40% 100%, 0 100%)", backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.15 }} />
      <div className="absolute inset-0" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 20% 100%)", backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.08 }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <Zap className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#60a5fa" }} />
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
