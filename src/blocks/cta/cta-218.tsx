import type { BlockProps } from "@/blocks/types";
import { CalendarDays, ChevronRight } from "lucide-react";

export default function Cta218(props: BlockProps) {
  const {
    theme,
    heading = "Schedule a demo with our team",
    subheading = "See how our platform can transform your workflow in 30 minutes.",
    buttonText = "Pick a Date",
    buttonUrl = "#",
    secondaryButtonText = "Contact Sales",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 items-center p-6 sm:p-10 rounded-2xl" style={{ backgroundColor: theme?.muted ?? "#f0fdf4" }}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-3 text-sm opacity-70">{subheading}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#16a34a" }}>
                <CalendarDays className="w-4 h-4" /> {buttonText}
              </a>
              <a href={secondaryButtonUrl} className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-sm font-medium" style={{ color: theme?.primary ?? "#16a34a" }}>
                {secondaryButtonText} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }}>
            <div className="text-center font-semibold text-sm mb-3">April 2026</div>
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <span key={d} className="py-1 opacity-40 font-medium">{d}</span>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <span key={i} className="py-1.5 rounded" style={[14, 15, 16].includes(i) ? { backgroundColor: `${theme?.primary ?? "#16a34a"}20`, color: theme?.primary ?? "#16a34a", fontWeight: 600 } : { opacity: 0.6 }}>
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
