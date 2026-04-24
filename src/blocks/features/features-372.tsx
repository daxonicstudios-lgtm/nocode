import type { BlockProps } from "@/blocks/types";
import { BookOpen, Pen, Scroll, Landmark } from "lucide-react";

const icons = [BookOpen, Pen, Scroll, Landmark];

export default function Features372(props: BlockProps) {
  const {
    theme,
    heading = "Distinguished Features",
    subheading = "Elegance in every detail",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Rich Editor", description: "A writing experience that feels like using fine stationery." },
      { title: "Handcrafted", description: "Every component hand-tuned for pixel perfection." },
      { title: "Legacy Support", description: "Import data from any format, any era, any platform." },
      { title: "Institutional", description: "Enterprise governance with audit compliance built in." },
    ],
  } = props;

  const corner = "before:absolute before:w-4 before:h-4 before:border-2 after:absolute after:w-4 after:h-4 after:border-2";

  return (
    <section style={{ backgroundColor: theme?.background || "#faf5eb", color: theme?.foreground || "#4a3728" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="block w-16 h-px" style={{ backgroundColor: theme?.primary || "#8b6914" }} />
            <span className="text-lg" style={{ color: theme?.primary || "#8b6914" }}>&#10045;</span>
            <span className="block w-16 h-px" style={{ backgroundColor: theme?.primary || "#8b6914" }} />
          </div>
          <p className="text-base opacity-70" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative p-8 border-2" style={{ borderColor: theme?.primary || "#c9a84c" }}>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 -translate-x-1 -translate-y-1" style={{ borderColor: theme?.primary || "#c9a84c" }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 translate-x-1 -translate-y-1" style={{ borderColor: theme?.primary || "#c9a84c" }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 -translate-x-1 translate-y-1" style={{ borderColor: theme?.primary || "#c9a84c" }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 translate-x-1 translate-y-1" style={{ borderColor: theme?.primary || "#c9a84c" }} />
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#c9a84c" }} />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
