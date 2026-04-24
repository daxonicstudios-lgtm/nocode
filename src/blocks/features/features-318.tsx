import type { BlockProps } from "@/blocks/types";
import { MousePointer, Move, RotateCcw } from "lucide-react";

const icons = [MousePointer, Move, RotateCcw];

export default function Features318(props: BlockProps) {
  const {
    theme,
    heading = "Interactive Features",
    subheading = "Hover each card and feel the difference",
    items = [
      { title: "Click & Build", description: "Point, click, and your website takes shape before your eyes." },
      { title: "Drag to Reorder", description: "Rearrange sections by simply dragging them where you want." },
      { title: "Undo Anything", description: "Made a mistake? Roll back any change with unlimited undo history." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="group rounded-xl p-6 border cursor-pointer transition-transform duration-150 hover:animate-[shake_0.4s_ease-in-out]"
                style={{ borderColor: `${primary}20` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200 group-hover:text-white" style={{ backgroundColor: `${primary}12`, color: primary }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px) rotate(-1deg); }
          40% { transform: translateX(4px) rotate(1deg); }
          60% { transform: translateX(-3px) rotate(-0.5deg); }
          80% { transform: translateX(3px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
}
