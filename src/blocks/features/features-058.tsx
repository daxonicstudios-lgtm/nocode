import type { BlockProps } from "@/blocks/types";
import { Star, Flame, Award, Gem } from "lucide-react";

const icons = [Star, Flame, Award, Gem];

export default function Features058(props: BlockProps) {
  const {
    theme,
    heading = "Platform Highlights",
    subheading = "Feature-packed and ready for production",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/520x360",
    items = [
      { title: "Top Rated Support", description: "Our support team has a 98% satisfaction rating across 50,000+ conversations.", label: "Support" },
      { title: "High Performance", description: "Optimized for speed with server-side rendering and intelligent caching.", label: "Speed" },
      { title: "Award Winning", description: "Recognized by industry leaders as the best tool for small business websites.", label: "Quality" },
      { title: "Premium Features", description: "Advanced tools like A/B testing, heatmaps, and conversion funnels built in.", label: "Pro" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-14">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={imageUrl} alt={item.title || ""} className="w-full rounded-xl object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white" style={{ backgroundColor: theme?.accent || "#8b5cf6" }}>
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                    {item.title}
                  </h3>
                  <p className="opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
