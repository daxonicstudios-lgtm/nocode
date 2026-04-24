import type { BlockProps } from "@/blocks/types";
import { Calendar, ArrowRight } from "lucide-react";

export default function Cta216(props: BlockProps) {
  const {
    theme,
    heading = "Book a free consultation",
    subheading = "Pick a date that works for you and we will handle the rest.",
    buttonText = "Schedule Now",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Calendar className="w-10 h-10 mx-auto mb-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 inline-grid grid-cols-7 gap-1 text-xs">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="w-8 h-8 flex items-center justify-center font-semibold opacity-40">{d}</span>
          ))}
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} className="w-8 h-8 flex items-center justify-center rounded-md text-xs" style={i === 14 ? { backgroundColor: theme?.primary ?? "#0ea5e9", color: "#fff" } : { opacity: i < 5 ? 0.3 : 0.7 }}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
