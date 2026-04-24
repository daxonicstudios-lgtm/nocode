import type { BlockProps } from "@/blocks/types";
import { Server, Paintbrush, FileCode, Shield, Truck, Headphones } from "lucide-react";

const icons = [Server, Paintbrush, FileCode, Shield, Truck, Headphones];
const categories = ["Infrastructure", "Design", "Development", "Security", "Delivery", "Support"];

export default function Features215(props: BlockProps) {
  const {
    theme,
    heading = "Complete Toolkit",
    subheading = "Organized by category so you can find exactly what you need",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Auto-Scaling Servers", description: "Scale from 10 to 10 million users automatically.", label: "Infrastructure" },
      { title: "Theme Studio", description: "Create consistent brand visuals with design tokens.", label: "Design" },
      { title: "Code Generation", description: "Scaffold projects in seconds with smart templates.", label: "Development" },
      { title: "Threat Detection", description: "AI-powered monitoring catches anomalies in real time.", label: "Security" },
      { title: "CI/CD Pipelines", description: "Ship confidently with automated build and deploy.", label: "Delivery" },
      { title: "Live Chat Widget", description: "Engage visitors with embedded messaging.", label: "Support" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const cat = item.label || categories[i % categories.length];
            return (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#f3f4f6" }}>
                <Icon size={20} className="mt-0.5 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: theme?.accent ? `${theme.accent}20` : "#fef3c7", color: theme?.accent || "#92400e" }}>{cat}</span>
                  </div>
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
