import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];
const ribbonColors = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899"];
const ribbonLabels = ["New", "Popular", "Essential", "Updated", "Beta", "Hot"];

export default function Features147(props: BlockProps) {
  const {
    theme,
    heading = "What's New",
    subheading = "Feature cards with status badges",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI Page Builder", description: "Describe your page in plain language and watch it come to life.", label: "New" },
      { title: "Drag-and-Drop Editor", description: "Build any layout with intuitive visual controls.", label: "Popular" },
      { title: "Free SSL", description: "Automatic HTTPS for every site, renewed automatically.", label: "Essential" },
      { title: "Analytics v3", description: "Redesigned dashboard with funnel tracking and cohort analysis.", label: "Updated" },
      { title: "Edge Compute", description: "Run server-side logic at the edge for instant responses.", label: "Beta" },
      { title: "Social Sharing", description: "Auto-generate Open Graph images for every page.", label: "Hot" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const badgeIdx = ribbonLabels.indexOf(item.label || "");
            const badgeColor = badgeIdx >= 0 ? ribbonColors[badgeIdx] : theme?.primary || "#6366f1";
            return (
              <div key={i} className="rounded-xl border p-6 relative overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                {item.label && (
                  <div className="absolute top-0 right-0">
                    <div className="text-white text-xs font-bold px-3 py-1 rounded-bl-lg" style={{ backgroundColor: badgeColor }}>
                      {item.label}
                    </div>
                  </div>
                )}
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
