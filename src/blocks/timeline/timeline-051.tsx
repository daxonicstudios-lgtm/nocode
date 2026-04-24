import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Phase 1", description: "Research & Discovery" },
  { title: "Phase 2", description: "Design & Prototype" },
  { title: "Phase 3", description: "Development" },
  { title: "Phase 4", description: "Launch & Scale" },
];
export default function Timeline051(props: BlockProps) {
  const { theme, heading = "Horizontal numbered timeline", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="flex flex-col md:flex-row items-start gap-0">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center px-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{i + 1}</div>
              <div className="w-0.5 h-6 md:hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm opacity-60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
