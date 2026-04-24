import type { BlockProps } from "@/blocks/types";
import { Feather, Pen, BookOpen, Glasses } from "lucide-react";

const icons = [Feather, Pen, BookOpen, Glasses];

export default function Features382(props: BlockProps) {
  const {
    theme,
    heading = "Refined by Design",
    subheading = "Where precision meets elegance in every detail",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightweight Core", description: "A minimal footprint that never compromises on capability." },
      { title: "Authored With Care", description: "Every line of code reviewed by senior engineers." },
      { title: "Open Documentation", description: "Comprehensive guides written by technical writers." },
      { title: "Clear Vision", description: "A transparent roadmap aligned with customer feedback." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#faf9f6", color: theme?.foreground || "#1a1a1a" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="w-16 h-px mx-auto mb-4" style={{ backgroundColor: theme?.primary || "#999" }} />
          <p className="text-base opacity-50 font-light" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        </div>
        <div className="space-y-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-6 border-b pb-8" style={{ borderColor: `${theme?.foreground || "#1a1a1a"}11` }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center" style={{ borderColor: theme?.primary || "#c9a84c", color: theme?.primary || "#c9a84c" }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
