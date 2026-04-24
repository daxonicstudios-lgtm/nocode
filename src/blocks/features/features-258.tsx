import type { BlockProps } from "@/blocks/types";
import { Cloud, Server, Database, HardDrive } from "lucide-react";

const icons = [Cloud, Server, Database, HardDrive];

export default function Features258(props: BlockProps) {
  const {
    theme,
    heading = "Cloud Infrastructure You Can Trust",
    subheading = "Scalable, resilient, and managed so you can focus on building",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Global CDN", description: "Content delivered from 200+ edge locations for sub-50ms latency worldwide." },
      { title: "Auto-Scaling", description: "Servers scale up instantly during traffic spikes and down to save costs." },
      { title: "Managed Databases", description: "Automated backups, failover, and point-in-time recovery included." },
      { title: "99.99% Uptime", description: "Multi-region redundancy ensures your app stays online, always." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f0f9ff", color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.background || "#fff" }}>
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme?.primary || "#0ea5e9"}, ${theme?.accent || "#6366f1"})` }}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
