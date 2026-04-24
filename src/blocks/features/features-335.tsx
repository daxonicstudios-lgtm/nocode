import type { BlockProps } from "@/blocks/types";
import { ExternalLink, Eye } from "lucide-react";

export default function Features335(props: BlockProps) {
  const {
    theme,
    heading = "Selected Work",
    subheading = "Features showcased through real projects",
    buttonText = "View Project",
    buttonUrl = "#",
    items = [
      { title: "E-Commerce Redesign", description: "Increased conversion rate by 62% for a fashion retailer.", label: "Retail" },
      { title: "SaaS Dashboard", description: "Simplified complex data into an intuitive management interface.", label: "Technology" },
      { title: "Brand Identity", description: "Complete visual overhaul for a fintech startup entering new markets.", label: "Finance" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#fafafa" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-40 mb-12 text-lg">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
              <div className="sm:w-48 h-32 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${primary}15` }}>
                <Eye size={32} style={{ color: primary }} className="opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest opacity-30 mb-1">{item.label}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-50 mb-3">{item.description}</p>
                <a href={buttonUrl} className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: primary }}>
                  {buttonText} <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
