import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Cpu } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Cpu];
const tiers = ["Free", "Starter", "Pro"];
const tierColors = ["#22c55e", "#3b82f6", "#8b5cf6"];

export default function Features128(props: BlockProps) {
  const {
    theme,
    heading = "Features by Tier",
    subheading = "Organized from free essentials to premium power tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Basic Editor", description: "Simple page builder with essential blocks.", label: "Free" },
      { title: "Templates", description: "Access 50+ professionally designed templates.", label: "Free" },
      { title: "Custom Domain", description: "Connect your own domain name.", label: "Starter" },
      { title: "Form Builder", description: "Create contact forms and surveys.", label: "Starter" },
      { title: "Advanced Analytics", description: "Conversion funnels and heatmaps.", label: "Pro" },
      { title: "AI Copilot", description: "Generate content and layouts with AI.", label: "Pro" },
    ],
  } = props;

  const grouped = tiers.map((tier, ti) => ({
    tier,
    color: tierColors[ti],
    features: items.filter((item) => item.label === tier),
  }));

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-8">
          {grouped.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="text-lg font-bold">{group.tier} Tier</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.features.map((item, i) => {
                  const Icon = icons[(gi * 2 + i) % icons.length];
                  return (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-4" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                      <Icon size={20} style={{ color: group.color }} />
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="opacity-60 text-xs">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
