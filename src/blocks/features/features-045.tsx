import type { BlockProps } from "@/blocks/types";
import { Atom, Satellite, Binary, Radar, ScanLine, Orbit } from "lucide-react";

const icons = [Atom, Satellite, Binary, Radar, ScanLine, Orbit];

export default function Features045(props: BlockProps) {
  const {
    theme,
    heading = "Next-Gen Infrastructure",
    subheading = "Engineered for tomorrow",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Quantum Ready", description: "Architecture prepared for next-generation computing paradigms." },
      { title: "Orbital Sync", description: "Satellite-grade reliability with 99.999% uptime guarantee." },
      { title: "Neural Engine", description: "AI-powered optimization that learns your usage patterns." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a1a", color: theme?.foreground ?? "#e0e0ff" }} className="py-16 px-4 sm:px-8 lg:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: theme?.primary ?? "#00e5ff" }}>{subheading}</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold">{heading}</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          const accent = theme?.primary ?? "#00e5ff";
          return (
            <div
              key={i}
              className="relative p-6"
              style={{ clipPath: "polygon(0 8%, 8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%)", backgroundColor: `${accent}12`, border: `1px solid ${accent}40` }}
            >
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
              <Icon className="w-8 h-8 mb-4" style={{ color: accent }} />
              <h3 className="text-lg font-bold mb-2 tracking-wide">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-8 py-3 font-semibold text-sm tracking-wider border" style={{ borderColor: theme?.primary ?? "#00e5ff", color: theme?.primary ?? "#00e5ff" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
