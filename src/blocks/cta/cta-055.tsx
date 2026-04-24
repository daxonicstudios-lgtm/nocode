import type { BlockProps } from "@/blocks/types";
import { Rocket, ChevronRight } from "lucide-react";

export default function Cta055(props: BlockProps) {
  const {
    theme,
    heading = "Launch your next project in days, not months",
    subheading = "Pre-built templates and AI assistance get you from concept to launch at record speed.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#ffffff" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 mb-6">
            <Rocket className="w-3 h-3" /> New Launch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 text-base opacity-70">{subheading}</p>
          <a href={buttonUrl} className="inline-flex items-center gap-1 mt-8 px-7 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: theme?.accent ?? "#f59e0b", color: "#000" }}>
            {buttonText}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full rounded-xl" />
          ) : (
            <div className="w-full aspect-[4/3] rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Rocket className="w-16 h-16 opacity-20" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
