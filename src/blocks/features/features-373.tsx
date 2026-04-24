import type { BlockProps } from "@/blocks/types";
import { Gamepad2, Joystick, Trophy, Heart } from "lucide-react";

const icons = [Gamepad2, Joystick, Trophy, Heart];

export default function Features373(props: BlockProps) {
  const {
    theme,
    heading = "PIXEL PERFECT",
    subheading = "Features built one pixel at a time",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "PLAY MODE", description: "Interactive previews let you test before you ship." },
      { title: "CONTROLS", description: "Fine-grained input handling for every interaction." },
      { title: "HIGH SCORE", description: "Performance benchmarks that beat the competition." },
      { title: "EXTRA LIFE", description: "Auto-save and recovery so you never lose progress." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#1a1a2e", color: theme?.foreground || "#eee" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider" style={{ fontFamily: "monospace", textShadow: `2px 2px 0 ${theme?.primary || "#e94560"}` }}>{heading}</h2>
          <p className="text-sm mt-2 opacity-60 font-mono">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-4 text-center border-2" style={{ borderColor: theme?.primary || "#e94560", imageRendering: "pixelated" }}>
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border-2" style={{ borderColor: theme?.primary || "#e94560" }}>
                  <Icon size={20} style={{ color: theme?.primary || "#e94560" }} />
                </div>
                <h3 className="font-bold text-xs uppercase mb-1 font-mono">{item.title}</h3>
                <p className="text-xs opacity-50 font-mono leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
