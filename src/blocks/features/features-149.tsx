import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features149(props: BlockProps) {
  const {
    theme,
    heading = "Feature Mosaic",
    subheading = "A dynamic layout showcasing our full toolkit",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Publishing", description: "Deploy updates in seconds without any build steps or manual processes." },
      { title: "Threat Detection", description: "AI scans traffic patterns to block malicious requests in real time." },
      { title: "Conversion Funnels", description: "Visualize user journeys and identify drop-off points." },
      { title: "CDN Delivery", description: "Assets served from the nearest location to every visitor." },
      { title: "Brand Manager", description: "Centralize logos, colors, and fonts for consistent identity." },
      { title: "Alert System", description: "Custom notifications via email, SMS, or Slack." },
    ],
  } = props;

  const spanClasses = [
    "sm:col-span-2 sm:row-span-1",
    "sm:col-span-1 sm:row-span-1",
    "sm:col-span-1 sm:row-span-2",
    "sm:col-span-1 sm:row-span-1",
    "sm:col-span-1 sm:row-span-1",
    "sm:col-span-2 sm:row-span-1",
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-auto">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`rounded-xl border p-6 ${spanClasses[i % spanClasses.length]}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
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
