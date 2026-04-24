import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Creative Direction", description: "Visual storytelling for global brands.", label: "Creative" },
  { title: "Digital Experience", description: "Immersive web experiences with cutting-edge tech.", label: "Digital" },
  { title: "Motion Design", description: "Animated content for social and web.", label: "Motion" },
  { title: "Brand Strategy", description: "Strategic brand positioning and identity.", label: "Strategy" },
];

export default function Portfolio129(props: BlockProps) {
  const { theme, heading = "Our Best Work", subheading = "Delivering results through design and code.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 4).map((project, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="aspect-[3/2]" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider opacity-40">{String(project.label ?? "")}</span>
                <h3 className="mt-1 text-lg font-semibold text-white group-hover:underline">{project.title}</h3>
                <p className="mt-1 text-sm opacity-50">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
