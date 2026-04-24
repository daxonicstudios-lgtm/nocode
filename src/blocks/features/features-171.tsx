import type { BlockProps } from "@/blocks/types";
import { Wand2, Palette, Layers } from "lucide-react";

const icons = [Wand2, Palette, Layers];

export default function Features171(props: BlockProps) {
  const {
    theme,
    heading = "Modern Experience",
    subheading = "Beautiful interfaces that inspire",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Magic Editor", description: "Transform ideas into polished designs with intelligent tools." },
      { title: "Color Engine", description: "Generate harmonious palettes from any image or brand color." },
      { title: "Smart Layers", description: "Auto-organize your design layers with AI-powered grouping." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#ec4899";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${primary}, ${accent})`, color: "#ffffff" }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-70 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <Icon size={28} className="mb-5 opacity-90" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-bold" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
