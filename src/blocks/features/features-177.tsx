import type { BlockProps } from "@/blocks/types";
import { Flame, Droplets, Wind } from "lucide-react";

const icons = [Flame, Droplets, Wind];

export default function Features177(props: BlockProps) {
  const {
    theme,
    heading = "Dynamic Platform",
    subheading = "Experience the future of web building",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hot Reload", description: "See changes instantly as you edit, no refresh needed." },
      { title: "Fluid Layouts", description: "Designs that flow naturally between screen sizes." },
      { title: "Swift Deploy", description: "Push updates to production in under three seconds." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }}>
      <style>{`
        @keyframes features177shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative rounded-2xl p-8 overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, transparent, ${primary}, transparent)`, animation: "features177shimmer 3s infinite", animationDelay: `${i * 0.5}s` }} />
                </div>
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
