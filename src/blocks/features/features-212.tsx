import type { BlockProps } from "@/blocks/types";
import { Shield, Zap, BarChart3, Clock } from "lucide-react";

const icons = [Shield, Zap, BarChart3, Clock];

export default function Features212(props: BlockProps) {
  const {
    theme,
    heading = "Why Industry Leaders Choose Us",
    subheading = "Trusted infrastructure for mission-critical applications",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Enterprise Security", description: "SOC 2, GDPR, and HIPAA compliance out of the box." },
      { title: "Lightning Fast", description: "99.99% uptime backed by our service level agreement." },
      { title: "Actionable Analytics", description: "Custom dashboards for every stakeholder in your organization." },
      { title: "24/7 Support", description: "Dedicated account managers and priority response times." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 mb-6">{subheading}</p>
          {buttonText && (
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText}
            </a>
          )}
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}06` : "#f9fafb" }}>
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
