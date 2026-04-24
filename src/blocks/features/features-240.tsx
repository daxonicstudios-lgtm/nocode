import type { BlockProps } from "@/blocks/types";
import { Star, Heart, Zap, Shield, Gem, Flame } from "lucide-react";

const icons = [Star, Heart, Zap, Shield, Gem, Flame];

export default function Features240(props: BlockProps) {
  const {
    theme,
    heading = "One by One",
    subheading = "Features that enter the stage with staggered timing",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Five-Star Support", description: "Rated highest in customer satisfaction surveys." },
      { title: "Built with Care", description: "Every pixel considered, every interaction refined." },
      { title: "Lightning Fast", description: "Optimized for speed at every layer of the stack." },
      { title: "Secure by Design", description: "Security baked in from day one, not bolted on." },
      { title: "Premium Quality", description: "Enterprise-grade reliability at startup-friendly prices." },
      { title: "Hot Features", description: "New capabilities shipped every two weeks." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes feat240enter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feat240-item {
          opacity: 0;
          animation: feat240enter 0.5s ease-out forwards;
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat240-item rounded-xl border p-6 text-center" style={{ animationDelay: `${i * 150}ms`, borderColor: `${primary}20` }}>
                <Icon size={24} className="mx-auto mb-3" style={{ color: primary }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
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
