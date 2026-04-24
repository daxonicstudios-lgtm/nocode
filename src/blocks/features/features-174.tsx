import type { BlockProps } from "@/blocks/types";
import { Compass, Map, Navigation } from "lucide-react";

const icons = [Compass, Map, Navigation];

export default function Features174(props: BlockProps) {
  const {
    theme,
    heading = "Navigate Your Growth",
    subheading = "Tools that guide you forward",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Path Finder", description: "AI-suggested next steps based on your business goals." },
      { title: "Journey Mapping", description: "Visualize your customer experience from first touch to conversion." },
      { title: "Direction Engine", description: "Smart routing sends visitors to the most relevant content." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#8b5cf6";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }}>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: primary }} />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-15" style={{ backgroundColor: accent }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Icon size={24} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
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
