import type { BlockProps } from "@/blocks/types";
import { Zap, Target, Gauge, Flame, Award, Trophy } from "lucide-react";

const icons = [Zap, Target, Gauge, Flame, Award, Trophy];

export default function Features085(props: BlockProps) {
  const {
    theme,
    heading = "Performance First",
    subheading = "Built from the ground up for speed and reliability",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Load", description: "Pages render in under one second with optimized asset delivery." },
      { title: "Smart Caching", description: "Intelligent cache invalidation ensures fresh content without slowdowns." },
      { title: "Performance Score", description: "Achieve perfect Lighthouse scores with zero configuration." },
      { title: "Hot Reload", description: "See changes instantly in development with sub-second refresh times." },
      { title: "Best Practices", description: "Follows every web performance recommendation by default." },
      { title: "Top Rated", description: "Consistently ranked as the fastest platform by independent reviewers." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes bounce085 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .bounce-card-085 { animation: bounce085 0.6s ease-out both; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="bounce-card-085 text-center" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={24} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="opacity-60 text-xs">{item.description}</p>
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
