import type { BlockProps } from "@/blocks/types";
import { Star, Heart, Award } from "lucide-react";

const icons = [Star, Heart, Award];

export default function Features172(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with Care",
    subheading = "Every detail considered",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Premium Quality", description: "Hand-crafted components tested across every device and browser." },
      { title: "Built with Love", description: "Passionate team obsessed with delivering the best experience." },
      { title: "Award Winning", description: "Recognized by industry experts for innovation and design." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="absolute -top-3 -left-3 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ backgroundColor: primary }} />
                <div className="relative z-10">
                  <Icon size={24} className="mb-5" style={{ color: primary }} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
