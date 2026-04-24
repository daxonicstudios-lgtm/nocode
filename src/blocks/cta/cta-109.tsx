import type { BlockProps } from "@/blocks/types";
import { Layers, Palette, Type, Layout, Smartphone, Monitor } from "lucide-react";

export default function Cta109(props: BlockProps) {
  const {
    theme,
    heading = "Design Without Limits",
    subheading = "Every tool a designer needs, built right in.",
    buttonText = "Start Designing",
    buttonUrl = "#",
    items = [
      { title: "Layers" },
      { title: "Colors" },
      { title: "Typography" },
      { title: "Layouts" },
      { title: "Mobile" },
      { title: "Desktop" },
    ],
  } = props;

  const icons = [Layers, Palette, Type, Layout, Smartphone, Monitor];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-6">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {items.slice(0, 6).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-5 h-5" style={{ color: theme?.primary || "#7c3aed" }} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
