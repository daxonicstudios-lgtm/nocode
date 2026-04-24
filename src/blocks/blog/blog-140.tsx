import type { BlockProps } from "@/blocks/types";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Dependency Injection in TypeScript", description: "Inversion of control without heavy frameworks.", label: "Patterns" },
  { title: "CSS Cascade Layers", description: "Managing specificity with @layer and the new cascade.", label: "CSS" },
  { title: "Building Offline-First Apps", description: "Service workers, IndexedDB, and sync strategies.", label: "PWA" },
  { title: "Effective Code Splitting", description: "Dynamic imports and route-based splitting in practice.", label: "Performance" },
];

export default function Blog140(props: BlockProps) {
  const { theme, heading = "Browse Articles", subheading = "48 articles across 12 categories", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#09090b" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <LayoutGrid className="w-5 h-5 opacity-30" />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-10">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group">
              <div className="aspect-[16/9] rounded-xl mb-3" style={{ backgroundColor: theme?.secondary ?? "#f4f4f5" }} />
              <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="mt-1 text-lg font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: `${theme?.foreground ?? "#09090b"}15` }}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center mx-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button key={n} className="w-9 h-9 rounded-full text-sm font-medium" style={n === 1 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : {}}>
                {n}
              </button>
            ))}
          </div>
          <button className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: `${theme?.foreground ?? "#09090b"}15` }}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
