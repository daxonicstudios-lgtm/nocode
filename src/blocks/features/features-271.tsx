import type { BlockProps } from "@/blocks/types";
import { Layers, Palette, Gauge, Rocket } from "lucide-react";

const icons = [Layers, Palette, Gauge, Rocket];

export default function Features271(props: BlockProps) {
  const {
    theme,
    heading = "Features Built to Scale",
    subheading = "Everything your team needs to move faster and build better",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Architecture", description: "Compose features from reusable building blocks that snap together." },
      { title: "Custom Themes", description: "Brand every touchpoint with your colors, fonts, and logo." },
      { title: "Performance First", description: "Sub-second load times with intelligent caching and lazy loading." },
      { title: "One-Click Deploy", description: "Push to production in seconds with zero-downtime deployments." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fff", color: "#0f172a" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#ede9fe", color: theme?.primary || "#7c3aed" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
