import type { BlockProps } from "@/blocks/types";
import { Compass, Map, Anchor } from "lucide-react";

const icons = [Compass, Map, Anchor];

export default function Features224(props: BlockProps) {
  const {
    theme,
    heading = "Navigate with Confidence",
    subheading = "Features designed to guide you through every decision",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Strategic Planning", description: "Map out quarterly goals with visual roadmaps and dependency tracking." },
      { title: "Market Intelligence", description: "Competitive analysis tools that keep you ahead of industry trends." },
      { title: "Stable Foundation", description: "Battle-tested infrastructure that handles spikes without breaking a sweat." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#f59e0b";

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${primary}08 0%, transparent 50%, ${accent}08 100%)` }} />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            <p className="text-base opacity-70 mb-6">{subheading}</p>
            {buttonText && (
              <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
                {buttonText}
              </a>
            )}
          </div>
          <div className="lg:w-3/5 space-y-4">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="p-6 rounded-xl backdrop-blur-sm" style={{ backgroundColor: theme?.background ? `${theme.background}dd` : "rgba(255,255,255,0.9)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-start gap-4">
                    <Icon size={24} style={{ color: primary }} className="shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
