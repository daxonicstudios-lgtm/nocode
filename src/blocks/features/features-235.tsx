import type { BlockProps } from "@/blocks/types";
import { Rocket, Target, Sparkles } from "lucide-react";

const icons = [Rocket, Target, Sparkles];

export default function Features235(props: BlockProps) {
  const {
    theme,
    heading = "Lift Off",
    subheading = "Cards that rise to meet you on hover",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quick Launch", description: "Go from idea to live product in under five minutes with guided setup." },
      { title: "Precision Targeting", description: "Reach exactly the right audience with smart segmentation tools." },
      { title: "Magic Touch", description: "AI enhancements that polish your content automatically before publishing." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat235-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feat235-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat235-card rounded-2xl border p-8 text-center cursor-pointer" style={{ borderColor: `${primary}20` }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${primary}10`, color: primary }}>
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
