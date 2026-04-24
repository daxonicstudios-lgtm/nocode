import type { BlockProps } from "@/blocks/types";
import { Layers, Grid3x3, LayoutGrid, Table } from "lucide-react";

const icons = [Layers, Grid3x3, LayoutGrid, Table];

export default function Features369(props: BlockProps) {
  const {
    theme,
    heading = "THE GRID",
    subheading = "Structure over decoration",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "STACKING", description: "Layer components with z-index precision." },
      { title: "ALIGNMENT", description: "Snap-to-grid layout for perfect order." },
      { title: "RESPONSIVE", description: "Fluid grids that adapt to any viewport." },
      { title: "TABULAR", description: "Data-dense views with sortable columns." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" style={{ backgroundImage: `linear-gradient(${theme?.foreground || "#000"}11 1px, transparent 1px), linear-gradient(90deg, ${theme?.foreground || "#000"}11 1px, transparent 1px)`, backgroundSize: "40px 40px" }}>
        <div className="mb-10 p-4" style={{ borderLeft: `4px solid ${theme?.foreground || "#000"}` }}>
          <h2 className="text-4xl sm:text-5xl font-black uppercase">{heading}</h2>
          <p className="text-xs uppercase tracking-[0.3em] mt-1">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: `2px solid ${theme?.foreground || "#000"}` }}>
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6" style={{ outline: `1px solid ${theme?.foreground || "#000"}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-black opacity-20">{String(i + 1).padStart(2, "0")}</span>
                  <Icon size={20} strokeWidth={3} style={{ color: theme?.primary || "#000" }} />
                </div>
                <h3 className="text-lg font-black uppercase mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
