import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features136(props: BlockProps) {
  const {
    theme,
    heading = "Discover More",
    subheading = "Hover over each card to see the details",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Deploy", description: "Push changes live in one click.", value: "Zero-downtime deployments with automatic rollback if anything goes wrong." },
      { title: "Access Control", description: "Role-based permissions for your team.", value: "Admin, editor, and viewer roles with granular page-level access." },
      { title: "Smart Reports", description: "Automated insights delivered weekly.", value: "AI-generated summaries highlight trends and anomalies in your data." },
      { title: "Multi-Region", description: "Serve visitors from 50+ locations.", value: "Automatic geo-routing ensures every visitor gets sub-second response times." },
      { title: "Custom Themes", description: "Design systems that match your brand.", value: "Define color palettes, fonts, and spacing once and reuse everywhere." },
      { title: "Webhooks", description: "Trigger actions on any event.", value: "Send data to Slack, Zapier, or your own API on form submissions and more." },
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
              <div key={i} className="group relative rounded-xl border p-6 overflow-hidden h-48" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <Icon size={28} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{item.value}</p>
                </div>
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
