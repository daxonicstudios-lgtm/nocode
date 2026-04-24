import type { BlockProps } from "@/blocks/types";
import { CalendarPlus, Users } from "lucide-react";

export default function Cta219(props: BlockProps) {
  const {
    theme,
    heading = "Join our next webinar",
    subheading = "How to 10x Your Productivity with AI — Live on May 5, 2026.",
    buttonText = "Add to Calendar",
    buttonUrl = "#",
    bodyText = "348 people attending",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5" style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}20`, color: theme?.primary ?? "#f59e0b" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }} />
          Upcoming Event
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 text-sm">{subheading}</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm opacity-50">
          <Users className="w-4 h-4" /> {bodyText}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
          <CalendarPlus className="w-4 h-4" /> {buttonText}
        </a>
      </div>
    </section>
  );
}
