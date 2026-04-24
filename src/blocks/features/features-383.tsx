import type { BlockProps } from "@/blocks/types";
import { Building2, Columns3, PilcrowSquare, Frame } from "lucide-react";

const icons = [Building2, Columns3, PilcrowSquare, Frame];

export default function Features383(props: BlockProps) {
  const {
    theme,
    heading = "Marble Foundations",
    subheading = "Built on enduring principles of quality and strength",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Structural Integrity", description: "Architecture that withstands any scale of traffic." },
      { title: "Classical Design", description: "Time-honored UI patterns that users trust." },
      { title: "Rich Content", description: "Typography and layout that commands attention." },
      { title: "Perfect Frame", description: "Responsive containers that adapt flawlessly." },
    ],
  } = props;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#f5f2ed", color: theme?.foreground || "#2c2c2c", backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 50%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-3" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm opacity-50 uppercase tracking-[0.3em]">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-8 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.7)", borderTop: `2px solid ${theme?.primary || "#c9a84c"}` }}>
                <Icon size={22} className="mb-4" style={{ color: theme?.primary || "#c9a84c" }} />
                <h3 className="font-medium text-lg mb-2 tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
