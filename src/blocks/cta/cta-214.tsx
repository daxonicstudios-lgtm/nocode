import type { BlockProps } from "@/blocks/types";
import { Radio, ArrowRight } from "lucide-react";

export default function Cta214(props: BlockProps) {
  const {
    theme,
    heading = "Live audio every Thursday",
    subheading = "Join our weekly live sessions with experts in design, tech, and business.",
    buttonText = "Join Live Now",
    buttonUrl = "#",
    secondaryButtonText = "Set Reminder",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-8 items-center">
        <div className="shrink-0 relative">
          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}15` }}>
            <Radio className="w-10 h-10" style={{ color: theme?.primary ?? "#ef4444" }} />
          </div>
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
            <span className="relative inline-flex rounded-full h-4 w-4" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
          </span>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: theme?.primary ?? "#ef4444" }}>Live</p>
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60 text-sm">{subheading}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
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
