import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features146(props: BlockProps) {
  const {
    theme,
    heading = "Feature Spotlight",
    subheading = "A curated look at our most impactful tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Deploys", description: "Ship in seconds with zero-downtime deployments. Built on modern infrastructure that scales automatically with demand." },
      { title: "Smart Security", description: "Every site includes SSL, bot protection, and continuous monitoring. Enterprise customers get WAF and custom rules." },
      { title: "Visual Analytics", description: "Heatmaps, session recordings, and conversion funnels give you deep insight into how visitors interact with your site." },
      { title: "API First", description: "Full REST and GraphQL APIs for headless use cases. Build mobile apps, integrations, or custom workflows." },
      { title: "White Label", description: "Remove our branding and use your own logo, domain, and color scheme for a fully branded client experience." },
      { title: "Priority Support", description: "Dedicated account managers and a private Slack channel for enterprise customers with guaranteed response times." },
    ],
  } = props;

  const featured = items[0];
  const rest = items.slice(1);
  const FeaturedIcon = icons[0];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl p-8 text-white lg:row-span-2 flex flex-col justify-end min-h-[280px]" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            <FeaturedIcon size={32} className="mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">{featured?.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{featured?.description}</p>
          </div>
          {rest.slice(0, 2).map((item, i) => {
            const Icon = icons[(i + 1) % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.slice(2).map((item, i) => {
            const Icon = icons[(i + 3) % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm">{item.description}</p>
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
