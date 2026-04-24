import type { BlockProps } from "@/blocks/types";
import { Flame, Star, Minus } from "lucide-react";

export default function Features217(props: BlockProps) {
  const {
    theme,
    heading = "Feature Roadmap",
    subheading = "What we prioritize and why it matters for your business",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Real-Time Collaboration", description: "Edit documents simultaneously with conflict-free syncing.", label: "high" },
      { title: "Advanced Permissions", description: "Granular access controls at the folder and file level.", label: "high" },
      { title: "Custom Integrations", description: "Connect with 500+ third-party tools via our API.", label: "medium" },
      { title: "Offline Mode", description: "Keep working without an internet connection — changes sync when you reconnect.", label: "medium" },
      { title: "White-Label Option", description: "Remove our branding and use your own custom domain.", label: "low" },
    ],
  } = props;

  const priorityConfig: Record<string, { icon: typeof Flame; color: string; text: string }> = {
    high: { icon: Flame, color: "#ef4444", text: "High" },
    medium: { icon: Star, color: theme?.accent || "#f59e0b", text: "Medium" },
    low: { icon: Minus, color: "#6b7280", text: "Low" },
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const priority = priorityConfig[item.label || "medium"] || priorityConfig.medium;
            const PIcon = priority.icon;
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#f3f4f6" }}>
                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                  <PIcon size={14} style={{ color: priority.color }} />
                  <span className="text-xs font-medium" style={{ color: priority.color }}>{priority.text}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
