import type { BlockProps } from "@/blocks/types";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function Cta160(props: BlockProps) {
  const {
    theme,
    heading = "Track your progress in real time",
    subheading = "See how far you have come and what milestones are next.",
    buttonText = "View Dashboard",
    buttonUrl = "#",
  } = props;

  const milestones = [
    { label: "Onboarding", pct: 100 },
    { label: "Setup", pct: 100 },
    { label: "Launch", pct: 65 },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-6 h-6" style={{ color: theme?.primary ?? "#2563eb" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <p className="opacity-70 mb-6">{subheading}</p>
        <div className="space-y-4 mb-8">
          {milestones.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{m.label}</span>
                <span className="opacity-60">{m.pct}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.pct}%`, backgroundColor: theme?.primary ?? "#2563eb" }} />
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
