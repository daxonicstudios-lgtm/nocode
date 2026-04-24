import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Globe, Cpu, Users, BarChart3, Lock, Cloud, Rocket, Layers, Bell, Settings } from "lucide-react";

const icons = [Zap, Shield, Globe, Cpu, Users, BarChart3, Lock, Cloud, Rocket, Layers, Bell, Settings];

export default function Features300(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "A comprehensive feature set that covers every use case",
    bodyText,
    buttonText = "View All Features",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Fast Performance", description: "Sub-100ms response times." },
      { title: "Built-In Security", description: "Enterprise-grade by default." },
      { title: "Global CDN", description: "200+ edge locations." },
      { title: "AI Powered", description: "Smart automation built in." },
      { title: "Team Workspace", description: "Real-time collaboration." },
      { title: "Analytics", description: "Insights that drive action." },
      { title: "Access Control", description: "Granular role permissions." },
      { title: "Cloud Native", description: "Scales automatically." },
      { title: "Quick Deploy", description: "Ship in one click." },
      { title: "Modular Design", description: "Compose what you need." },
      { title: "Smart Alerts", description: "Never miss what matters." },
      { title: "Full Control", description: "Customize everything." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-lg border p-4 text-center" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#e5e7eb" }}>
                <Icon size={20} className="mx-auto mb-2" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                <p className="text-xs opacity-50">{item.description}</p>
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
