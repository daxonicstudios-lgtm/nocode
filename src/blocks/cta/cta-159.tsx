import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta159(props: BlockProps) {
  const {
    theme,
    heading = "Challenge progress: Day 18 of 30",
    subheading = "Join the 30-day growth challenge and transform your workflow.",
    buttonText = "Start the Challenge",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: theme?.primary ?? "#f59e0b" }}>30-Day Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
            {buttonText}
          </a>
        </div>
        <div className="w-full md:w-48 shrink-0">
          <div className="text-4xl font-black text-center" style={{ color: theme?.primary ?? "#f59e0b" }}>60%</div>
          <div className="mt-2 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "60%", backgroundColor: theme?.primary ?? "#f59e0b" }} />
          </div>
          <p className="text-center text-xs mt-1 opacity-60">18 of 30 days</p>
        </div>
      </div>
    </section>
  );
}
