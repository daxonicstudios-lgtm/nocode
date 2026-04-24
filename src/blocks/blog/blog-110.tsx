import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Sustainable Web Design", description: "Reducing carbon footprint through optimized code and green hosting.", label: "Green Tech" },
  { title: "Voice UI Design Patterns", description: "Designing conversational interfaces that feel natural.", label: "VUI" },
];

export default function Blog110(props: BlockProps) {
  const {
    theme,
    heading = "Featured Long Reads",
    subheading = "In-depth explorations worth your time",
    buttonText = "Start Reading",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(to right, #0f0c29, #302b63)",
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Zap className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#facc15" }} />
          <h2 className="text-4xl sm:text-5xl font-black">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 2).map((item, i) => (
            <article
              key={i}
              className="rounded-3xl backdrop-blur-2xl border border-white/10 overflow-hidden hover:scale-[1.01] transition-transform"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="h-52"
                style={{ background: `linear-gradient(${135 + i * 45}deg, ${theme?.primary ?? "#6366f1"}60, ${theme?.accent ?? "#ec4899"}40, transparent)` }}
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.accent ?? "#facc15" }}>
                  {String(item.label)}
                </span>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm opacity-60">{item.description}</p>
                <a
                  href={buttonUrl}
                  className="mt-5 inline-block text-sm font-bold px-5 py-2.5 rounded-full"
                  style={{ background: theme?.primary ?? "#6366f1", color: "#fff" }}
                >
                  {buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
