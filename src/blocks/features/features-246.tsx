import type { BlockProps } from "@/blocks/types";
import { Crosshair, Ruler, PenTool } from "lucide-react";

const icons = [Crosshair, Ruler, PenTool];

export default function Features246(props: BlockProps) {
  const {
    theme,
    heading = "Technical Blueprint",
    subheading = "Precision-engineered features documented with care",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Coordinate System", description: "Pixel-perfect alignment engine with smart guides, snap-to-grid, and responsive breakpoints." },
      { title: "Measurement Tools", description: "Spacing inspector that shows distances, padding, and margin values in real time." },
      { title: "Drawing Canvas", description: "Vector editing tools for creating custom graphics directly in the browser." },
    ],
  } = props;

  const primary = theme?.primary || "#1e40af";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f0f4ff", color: "#1e293b" }}>
      <style>{`
        .feat246-bg {
          background-image:
            linear-gradient(${primary}10 1px, transparent 1px),
            linear-gradient(90deg, ${primary}10 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
      <div className="max-w-5xl mx-auto feat246-bg rounded-2xl p-8 sm:p-12 border-2 border-dashed" style={{ borderColor: `${primary}40` }}>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-mono mb-2 opacity-50">BLUEPRINT REV 3.2</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-mono">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg border-2 border-dashed bg-white/60" style={{ borderColor: `${primary}30` }}>
                <div className="w-10 h-10 rounded border-2 flex items-center justify-center shrink-0" style={{ borderColor: primary, color: primary }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold font-mono text-base">{item.title}</h3>
                    <span className="text-xs font-mono opacity-30">#{String(i + 1).padStart(3, "0")}</span>
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
