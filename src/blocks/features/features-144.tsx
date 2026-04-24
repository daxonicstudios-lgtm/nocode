import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe];

export default function Features144(props: BlockProps) {
  const {
    theme,
    heading = "Everything in One Place",
    subheading = "A powerful platform backed by thoughtful features",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Blazing Performance", description: "Optimized delivery with edge caching and smart compression." },
      { title: "Airtight Security", description: "SSL, firewalls, and real-time threat monitoring." },
      { title: "Actionable Analytics", description: "Dashboards that surface the insights you actually need." },
      { title: "Worldwide Reach", description: "Multi-language support and global CDN infrastructure." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="rounded-xl overflow-hidden mb-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center" style={{ backgroundColor: theme?.accent || "#f3f4f6" }}>
          {imageUrl ? (
            <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm opacity-40 font-medium">Hero image area</span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-5 rounded-xl border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
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
