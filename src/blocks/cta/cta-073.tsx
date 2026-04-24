import type { BlockProps } from "@/blocks/types";
import { Play, Clock } from "lucide-react";

export default function Cta073(props: BlockProps) {
  const {
    theme,
    heading = "Product walkthrough",
    subheading = "3 min watch",
    bodyText = "Learn how to set up your first project and invite your team in under 5 minutes.",
    buttonText = "Play Video",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium mb-6">
          <Clock className="w-3 h-3" />
          {subheading}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70 max-w-lg mx-auto">{bodyText}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#0f172a" }}>
          <Play className="w-5 h-5" />
          {buttonText}
        </a>
      </div>
    </section>
  );
}
