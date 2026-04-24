import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Heart, Rocket } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Heart, Rocket];

export default function Features081(props: BlockProps) {
  const {
    theme,
    heading = "Core Features",
    subheading = "Hover over any feature to see the pulse effect",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed", description: "Optimized for the fastest possible page loads on any network." },
      { title: "Security", description: "Enterprise-grade protection with automatic threat detection." },
      { title: "Analytics", description: "Deep insights into user behavior and business performance." },
      { title: "Global CDN", description: "Content served from edge servers closest to your visitors." },
      { title: "Support", description: "Dedicated customer success team available around the clock." },
      { title: "Growth Tools", description: "Built-in SEO, email capture, and social sharing features." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes pulse081 {
          0% { box-shadow: 0 0 0 0 currentColor; }
          70% { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        .pulse-icon-081:hover { animation: pulse081 1s ease-out; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center group cursor-pointer">
                <div className="pulse-icon-081 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15`, color: `${theme?.primary || "#6366f1"}44` }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="opacity-60 text-xs leading-relaxed">{item.description}</p>
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
