import type { BlockProps } from "@/blocks/types";
import { Play, Volume2 } from "lucide-react";

export default function Cta075(props: BlockProps) {
  const {
    theme,
    heading = "Watch the keynote",
    subheading = "Our CEO shares the vision for the future of collaborative work.",
    buttonText = "Play Keynote",
    buttonUrl = "#",
    secondaryButtonText = "Listen as Podcast",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e2e8f0" }}>
        <div className="w-full aspect-video flex items-center justify-center relative" style={{ backgroundColor: theme?.muted ?? "#0f172a" }}>
          <a href={buttonUrl} className="w-20 h-20 rounded-full flex items-center justify-center bg-white/90 shadow-xl hover:scale-105 transition-transform">
            <Play className="w-8 h-8 ml-1" style={{ color: theme?.primary ?? "#7c3aed" }} />
          </a>
        </div>
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="mt-1 text-sm opacity-60">{subheading}</p>
          </div>
          <a href={secondaryButtonUrl} className="inline-flex items-center gap-2 text-sm font-medium shrink-0" style={{ color: theme?.primary ?? "#7c3aed" }}>
            <Volume2 className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
