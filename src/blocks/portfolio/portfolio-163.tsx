import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Website Redesign", description: "Modern responsive website for a creative agency.", label: "Web Design" },
  { title: "Product Photography", description: "High-end product shots for an e-commerce brand.", label: "Photography" },
  { title: "Dashboard Design", description: "Analytics dashboard for a SaaS platform.", label: "UI Design" },
  { title: "Social Media Kit", description: "Complete social media template system.", label: "Social" },
  { title: "Logo Collection", description: "Brand marks for various startups.", label: "Branding" },
  { title: "Packaging Design", description: "Premium packaging for a luxury brand.", label: "Print" },
];

export default function Portfolio163(props: BlockProps) {
  const { theme, heading = "Development Showcase", subheading = "Explore our creative portfolio.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {items.slice(0, 6).map((project, i) => (
            <div key={i} className="break-inside-avoid mb-4 rounded-xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div style={{ height: `${150 + (i % 3) * 60}px`, backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="p-4">
                <span className="text-xs font-medium uppercase opacity-50">{String(project.label ?? "")}</span>
                <h3 className="mt-1 font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
