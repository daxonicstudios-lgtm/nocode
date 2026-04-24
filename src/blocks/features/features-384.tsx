import type { BlockProps } from "@/blocks/types";
import { Sparkles, Gem, Wand2, Hexagon } from "lucide-react";

const icons = [Sparkles, Gem, Wand2, Hexagon];

export default function Features384(props: BlockProps) {
  const {
    theme,
    heading = "Sparkling Innovation",
    subheading = "Premium features that shine brighter than the rest",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Radiant Design", description: "Visual polish that sets your brand apart from competitors." },
      { title: "Precious Data", description: "Treat every customer interaction as a valuable insight." },
      { title: "Magic Touch", description: "AI automation that feels effortless and intuitive." },
      { title: "Crystalline Code", description: "Clean, maintainable architecture you can build on." },
    ],
  } = props;

  const accent = theme?.primary || "#c9a84c";

  return (
    <section style={{ backgroundColor: theme?.background || "#0c0c14", color: theme?.foreground || "#f0ece4" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Sparkles size={20} className="mx-auto mb-3" style={{ color: accent }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative p-6 rounded-lg border overflow-hidden" style={{ borderColor: `${accent}22`, backgroundColor: "rgba(255,255,255,0.02)" }}>
                <div className="absolute top-2 right-2 opacity-10">
                  <Sparkles size={40} style={{ color: accent }} />
                </div>
                <Icon size={22} className="mb-4 relative z-10" style={{ color: accent }} />
                <h3 className="font-bold text-lg mb-2 relative z-10" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed relative z-10">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
