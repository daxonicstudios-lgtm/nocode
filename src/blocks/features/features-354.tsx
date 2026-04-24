import type { BlockProps } from "@/blocks/types";
import { Rocket, Heart, Star, Trophy } from "lucide-react";

const icons = [Rocket, Heart, Star, Trophy];

export default function Features354(props: BlockProps) {
  const {
    theme,
    heading = "Features You Will Love",
    subheading = "Thoughtfully crafted for the best experience",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quick Launch", description: "Go live in minutes, not weeks." },
      { title: "Customer First", description: "24/7 support with real humans." },
      { title: "Top Rated", description: "4.9 stars from 10,000+ reviews." },
      { title: "Award Winning", description: "Recognized by industry leaders." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e6e6e6", color: theme?.foreground || "#374151" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="flex flex-col gap-5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-full px-8 py-5 flex items-center gap-5" style={{ background: theme?.background || "#e6e6e6", boxShadow: "8px 8px 16px #c4c4c4, -8px -8px 16px #ffffff" }}>
                <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: theme?.background || "#e6e6e6", boxShadow: "inset 4px 4px 8px #c4c4c4, inset -4px -4px 8px #ffffff" }}>
                  <Icon size={18} style={{ color: theme?.primary || "#ec4899" }} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
