import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Project Alpha", description: "Web application design and development", label: "2026" },
  { title: "Project Beta", description: "Brand identity and marketing materials", label: "2025" },
  { title: "Project Gamma", description: "Mobile app UX research and design", label: "2025" },
  { title: "Project Delta", description: "E-commerce platform overhaul", label: "2024" },
];

export default function Portfolio118(props: BlockProps) {
  const { theme, heading = "Development Showcase", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-0 divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 6).map((project, i) => (
            <div key={i} className="flex items-center justify-between py-5 group cursor-pointer">
              <div>
                <h3 className="font-semibold text-lg group-hover:underline">{project.title}</h3>
                <p className="text-sm opacity-60 mt-0.5">{project.description}</p>
              </div>
              <span className="text-sm opacity-40 shrink-0 ml-4">{String(project.label ?? "")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
