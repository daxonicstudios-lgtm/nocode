import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features121(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Features",
    subheading = "Every tool you need at a price you can afford",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed Optimization", description: "Automatic image compression and lazy loading.", value: "$5/mo" },
      { title: "Security Suite", description: "SSL, DDoS protection, and daily backups.", value: "$8/mo" },
      { title: "Analytics Pro", description: "Real-time visitor tracking and conversion funnels.", value: "$12/mo" },
      { title: "Global CDN", description: "Content delivered from 50+ edge locations.", value: "$6/mo" },
      { title: "Design System", description: "Brand kit with fonts, colors, and templates.", value: "$4/mo" },
      { title: "Notifications", description: "Email, SMS, and push notification campaigns.", value: "$10/mo" },
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
            return (
              <div key={i} className="rounded-xl border p-6 relative" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  Starting at {item.value || "$5/mo"}
                </span>
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
