import type { BlockProps } from "@/blocks/types";
import { Tag, Plus, Bug, Sparkles } from "lucide-react";

const typeMap: Record<string, { icon: typeof Tag; color: string; label: string }> = {
  feature: { icon: Sparkles, color: "#6366f1", label: "Feature" },
  fix: { icon: Bug, color: "#ef4444", label: "Fix" },
  improvement: { icon: Plus, color: "#22c55e", label: "Improvement" },
};

export default function Features343(props: BlockProps) {
  const {
    theme,
    heading = "Changelog",
    subheading = "What's new in the latest release",
    items = [
      { title: "Custom Dashboard Widgets", description: "Drag and drop widgets to build your perfect overview screen.", value: "feature", label: "v3.2.0" },
      { title: "Faster Export Pipeline", description: "CSV and PDF exports now complete 5x faster for large datasets.", value: "improvement", label: "v3.2.0" },
      { title: "Fixed Date Picker Timezone", description: "Resolved an issue where dates shifted in non-UTC timezones.", value: "fix", label: "v3.1.2" },
      { title: "AI Content Suggestions", description: "Get smart content recommendations based on your audience data.", value: "feature", label: "v3.1.0" },
      { title: "Improved Mobile Navigation", description: "Bottom navigation bar with swipe gestures for faster access.", value: "improvement", label: "v3.1.0" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const t = typeMap[item.value || "feature"] || typeMap.feature;
            const Icon = t.icon;
            return (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: `${t.color}06` }}>
                <Icon size={16} style={{ color: t.color }} className="mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${t.color}15`, color: t.color }}>{t.label}</span>
                    <span className="text-[10px] font-mono opacity-30">{item.label}</span>
                  </div>
                  <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
