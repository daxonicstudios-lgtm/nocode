import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Star } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Star];

export default function Features126(props: BlockProps) {
  const {
    theme,
    heading = "Feature Highlights",
    subheading = "Discover our most popular capabilities",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quick Deploy", description: "Ship updates in seconds with one-click deploys.", value: "$9/mo" },
      { title: "Firewall Protection", description: "Block threats before they reach your site.", value: "$12/mo" },
      { title: "Smart Analytics", description: "AI-powered insights that surface what matters.", value: "$15/mo", label: "popular" },
      { title: "Multi-Region", description: "Serve visitors from the closest data center.", value: "$10/mo" },
      { title: "Theme Studio", description: "Create and share custom design systems.", value: "$7/mo" },
      { title: "Priority Queue", description: "Your support tickets always go to the front.", value: "$20/mo" },
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
            const isPopular = item.label === "popular";
            return (
              <div key={i} className={`rounded-xl border p-6 relative ${isPopular ? "ring-2" : ""}`} style={{ borderColor: theme?.accent || "#e5e7eb", ...(isPopular ? { boxShadow: `0 0 0 2px ${theme?.primary || "#6366f1"}` } : {}) }}>
                {isPopular && (
                  <span className="absolute -top-3 left-4 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>Most Popular</span>
                )}
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm mb-3">{item.description}</p>
                <span className="text-sm font-bold" style={{ color: theme?.primary || "#6366f1" }}>{item.value}</span>
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
