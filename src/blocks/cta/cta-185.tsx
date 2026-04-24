import type { BlockProps } from "@/blocks/types";
import { Flag, ArrowRight } from "lucide-react";

export default function Cta185(props: BlockProps) {
  const {
    theme,
    heading = "Milestones that matter",
    subheading = "We are building the future of no-code — and you are invited.",
    buttonText = "Join Early Access",
    buttonUrl = "#",
  } = props;

  const milestones = [
    { year: "2024", text: "Platform launched", active: true },
    { year: "2025", text: "100K users", active: true },
    { year: "2026", text: "AI v2 release", active: false },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Flag className="w-7 h-7 mb-3" style={{ color: theme?.primary ?? "#2563eb" }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="space-y-4 shrink-0">
          {milestones.map((m) => (
            <div key={m.year} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: m.active ? (theme?.primary ?? "#2563eb") : "#d1d5db" }} />
              <span className="text-sm font-bold w-12">{m.year}</span>
              <span className={`text-sm ${m.active ? "font-medium" : "opacity-50"}`}>{m.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
