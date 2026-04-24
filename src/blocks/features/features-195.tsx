import type { BlockProps } from "@/blocks/types";
import { Mic, TrendingUp, DollarSign } from "lucide-react";

const icons = [Mic, TrendingUp, DollarSign];

export default function Features195(props: BlockProps) {
  const {
    theme,
    heading = "Podcast Hosting Reimagined",
    subheading = "Record, publish, and grow your audience",
    bodyText,
    buttonText = "Start Your Show",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Episode Manager", description: "Upload, schedule, and distribute episodes to every major platform automatically." },
      { title: "Listener Analytics", description: "See downloads, retention curves, and geographic data to understand your audience." },
      { title: "Monetization Tools", description: "Dynamic ad insertion, premium subscriptions, and listener support built in." },
    ],
  } = props;

  const primary = theme?.primary || "#ea580c";

  return (
    <section style={{ backgroundColor: theme?.background || "#1c1917", color: theme?.foreground || "#fafaf9" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: `${primary}20` }}>
                  <Icon size={20} style={{ color: primary }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
