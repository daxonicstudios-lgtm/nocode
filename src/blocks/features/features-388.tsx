import type { BlockProps } from "@/blocks/types";
import { Minimize2, AlignCenter, Type, Minus } from "lucide-react";

const icons = [Minimize2, AlignCenter, Type, Minus];

export default function Features388(props: BlockProps) {
  const {
    theme,
    heading = "Refined Simplicity",
    subheading = "Less noise, more clarity in every interaction",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Compact Interface", description: "Essential controls without visual clutter." },
      { title: "Perfect Alignment", description: "Every element precisely positioned on the grid." },
      { title: "Clean Typography", description: "Readable text at every size and resolution." },
      { title: "Minimal Footprint", description: "Lightweight codebase that loads in milliseconds." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fafaf8", color: theme?.foreground || "#1a1a1a" }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-light tracking-[0.15em]" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="w-8 h-px mx-auto my-6" style={{ backgroundColor: theme?.primary || "#999" }} />
          <p className="text-sm opacity-40 font-light tracking-wide">{subheading}</p>
        </div>
        <div className="space-y-12">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-8">
                <Icon size={16} className="flex-shrink-0 mt-1.5 opacity-30" />
                <div>
                  <h3 className="text-base font-medium tracking-wide mb-2" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                  <p className="text-sm opacity-40 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-px mt-16" style={{ backgroundColor: `${theme?.foreground || "#1a1a1a"}11` }} />
      </div>
    </section>
  );
}
