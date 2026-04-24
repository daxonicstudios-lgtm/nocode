import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Brand Identity Redesign", description: "Complete visual overhaul for a tech startup.", label: "Branding" },
  { title: "E-Commerce Platform", description: "Full-stack online store with custom checkout.", label: "Development" },
  { title: "Mobile App UI", description: "iOS and Android app design for a fitness company.", label: "UI/UX" },
  { title: "Marketing Campaign", description: "Multi-channel campaign that drove 300% growth.", label: "Marketing" },
];

export default function Portfolio114(props: BlockProps) {
  const { theme, heading = "Our Best Work", subheading = "Delivering results through design and code.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((project, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium uppercase tracking-wider opacity-50">{String(project.label ?? "")}</span>
                <h3 className="mt-1 font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm opacity-70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
