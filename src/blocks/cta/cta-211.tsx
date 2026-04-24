import type { BlockProps } from "@/blocks/types";
import { Play, Headphones } from "lucide-react";

export default function Cta211(props: BlockProps) {
  const {
    theme,
    heading = "Listen to our latest episode",
    subheading = "The future of remote work — a conversation with industry leaders.",
    buttonText = "Play Episode",
    buttonUrl = "#",
    secondaryButtonText = "All Episodes",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15` }}>
          <Headphones className="w-8 h-8" style={{ color: theme?.primary ?? "#8b5cf6" }} />
        </div>
        <p className="text-xs font-semibold tracking-widest uppercase opacity-50 mb-2">Podcast</p>
        <h2 className="text-2xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
            <Play className="w-4 h-4" /> {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
