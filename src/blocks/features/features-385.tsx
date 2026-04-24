import type { BlockProps } from "@/blocks/types";
import { Layers, LayoutList, SlidersHorizontal, Boxes } from "lucide-react";

const icons = [Layers, LayoutList, SlidersHorizontal, Boxes];

export default function Features385(props: BlockProps) {
  const {
    theme,
    heading = "Elegant Divisions",
    subheading = "Carefully separated features, beautifully connected",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Layer Management", description: "Organize complex projects with visual layer controls." },
      { title: "Smart Lists", description: "Adaptive lists that sort and filter automatically." },
      { title: "Fine Controls", description: "Precision sliders for exact customization." },
      { title: "Module System", description: "Self-contained units that compose into anything." },
    ],
  } = props;

  const accent = theme?.primary || "#b8972e";

  return (
    <section style={{ backgroundColor: theme?.background || "#1a1a1a", color: theme?.foreground || "#e8e0d0" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm opacity-40">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i}>
                <div className="flex items-start gap-6 py-8">
                  <Icon size={22} className="flex-shrink-0 mt-1" style={{ color: accent }} />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                    <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="text-xs font-light opacity-20 flex-shrink-0 mt-1" style={{ fontFamily: "Georgia, serif" }}>0{i + 1}</span>
                </div>
                {i < items.length - 1 && (
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px" style={{ backgroundColor: `${accent}33` }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <div className="flex-1 h-px" style={{ backgroundColor: `${accent}33` }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
