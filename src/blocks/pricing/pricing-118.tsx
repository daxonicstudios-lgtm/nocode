import type { BlockProps } from "@/blocks/types";
import { Activity } from "lucide-react";

export default function Pricing118(props: BlockProps) {
  const {
    theme,
    heading = "API Pricing",
    subheading = "Metered billing based on API calls",
    bodyText,
    buttonText = "View Docs",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hobby", value: "Free", label: "15", description: "1,000 calls/day" },
      { title: "Developer", value: "$19/mo", label: "45", description: "50,000 calls/day" },
      { title: "Production", value: "$99/mo", label: "85", description: "1M calls/day" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Activity className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary }} />
          <h2 className="text-3xl font-bold mb-2">{heading}</h2>
          <p className="opacity-60 text-sm">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const pct = parseInt(item.label || "0", 10);
            return (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.accent }}>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-xs opacity-60 mb-4">{item.description}</p>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" stroke={theme?.background || "#e5e7eb"} strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke={theme?.primary || "#3b82f6"} strokeWidth="3" strokeDasharray={`${pct} ${100 - pct}`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{pct}%</span>
                </div>
                <p className="text-2xl font-bold mb-4" style={{ color: theme?.primary }}>{item.value}</p>
                <a href={buttonUrl} className="text-sm font-medium underline" style={{ color: theme?.primary }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
