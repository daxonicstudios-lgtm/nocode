import type { BlockProps } from "@/blocks/types";
import { Target, Compass, Map, Flag } from "lucide-react";

const icons = [Target, Compass, Map, Flag];

export default function Features272(props: BlockProps) {
  const {
    theme,
    heading = "Navigate With Confidence",
    subheading = "Clear direction for every stage of your growth journey",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Goal Tracking", description: "Set OKRs and track progress with visual dashboards the whole team can see." },
      { title: "Strategic Planning", description: "Map quarterly plans and align resources with company objectives." },
      { title: "Roadmap Views", description: "Interactive timeline views show what's coming and what's shipped." },
      { title: "Milestone Alerts", description: "Celebrate wins with automatic milestone notifications and reports." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground || "#f9fafb" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}40` : "#374151", backgroundColor: "transparent" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ color: theme?.primary || "#60a5fa" }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium border" style={{ borderColor: theme?.primary || "#60a5fa", color: theme?.primary || "#60a5fa" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
