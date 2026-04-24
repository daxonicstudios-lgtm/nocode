import type { BlockProps } from "@/blocks/types";
import { Crown, Zap, Lock, BarChart3 } from "lucide-react";

const icons = [Zap, Lock, BarChart3];

export default function Features229(props: BlockProps) {
  const {
    theme,
    heading = "Our Star Feature",
    subheading = "One headline capability backed by a suite of essentials",
    bodyText = "The intelligent workspace that learns your patterns, predicts your needs, and automates the tasks you do most. It is like having an extra team member who never sleeps.",
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed Boost", description: "2x faster page loads with smart caching." },
      { title: "Data Vault", description: "Encrypted backup with instant recovery." },
      { title: "Insight Engine", description: "AI-driven analytics delivered daily." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl p-8 sm:p-12 mb-8 text-center border-2" style={{ borderColor: primary, background: `linear-gradient(135deg, ${primary}08, ${primary}03)` }}>
          <Crown size={36} className="mx-auto mb-4" style={{ color: theme?.accent || "#f59e0b" }} />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
          <p className="opacity-60 max-w-lg mx-auto leading-relaxed">{bodyText}</p>
          {buttonText && (
            <a href={buttonUrl} className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: `${primary}05` }}>
                <Icon size={20} className="mb-2" style={{ color: primary }} />
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
