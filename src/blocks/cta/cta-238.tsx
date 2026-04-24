import type { BlockProps } from "@/blocks/types";
import { Shuffle, ChevronRight } from "lucide-react";

export default function Cta238(props: BlockProps) {
  const {
    theme,
    heading = "Your website, reimagined",
    subheading = "We take outdated designs and turn them into modern, conversion-optimized experiences.",
    buttonText = "See Examples",
    buttonUrl = "#",
    secondaryButtonText = "Get a Quote",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-5 gap-6 items-center">
          <div className="sm:col-span-2 rounded-xl p-5 border border-dashed opacity-60" style={{ borderColor: theme?.border ?? "#d1d5db" }}>
            <div className="h-4 w-3/4 rounded mb-3" style={{ backgroundColor: theme?.muted ?? "#e5e7eb" }} />
            <div className="h-3 w-full rounded mb-2" style={{ backgroundColor: theme?.muted ?? "#e5e7eb" }} />
            <div className="h-3 w-2/3 rounded mb-4" style={{ backgroundColor: theme?.muted ?? "#e5e7eb" }} />
            <div className="h-8 w-1/2 rounded" style={{ backgroundColor: theme?.muted ?? "#e5e7eb" }} />
          </div>
          <div className="flex justify-center">
            <Shuffle className="w-8 h-8" style={{ color: theme?.primary ?? "#6366f1" }} />
          </div>
          <div className="sm:col-span-2 rounded-xl p-5 border-2" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
            <div className="h-4 w-3/4 rounded mb-3" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
            <div className="h-3 w-full rounded mb-2" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}30` }} />
            <div className="h-3 w-2/3 rounded mb-4" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}30` }} />
            <div className="h-8 w-1/2 rounded" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60 text-sm">{subheading}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              {buttonText} <ChevronRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-5 py-2.5 rounded-lg text-sm font-medium border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
