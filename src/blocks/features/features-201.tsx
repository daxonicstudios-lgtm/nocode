import type { BlockProps } from "@/blocks/types";
import { Layers, Globe, TrendingUp } from "lucide-react";

const icons = [Layers, Globe, TrendingUp];

export default function Features201(props: BlockProps) {
  const {
    theme,
    heading = "Built for Modern Teams",
    subheading = "Tools that streamline your workflow and amplify results",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unified Dashboard", description: "Manage every project, team, and deadline from a single intuitive interface." },
      { title: "Global Reach", description: "Deploy to 40+ regions worldwide with automatic failover and low latency." },
      { title: "Growth Tracking", description: "Visualize revenue, retention, and engagement trends in real time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-2xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-8 text-center" style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#e5e7eb" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f3f4f6", color: theme?.primary || "#6366f1" }}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-7 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
