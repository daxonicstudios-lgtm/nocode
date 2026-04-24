import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Corporate Website", description: "Full redesign for a Fortune 500 company.", label: "Web" },
  { title: "Food Delivery App", description: "End-to-end mobile app design.", label: "Mobile" },
  { title: "Fashion Lookbook", description: "Seasonal collection photography.", label: "Photography" },
  { title: "Tech Blog Platform", description: "Custom CMS with advanced features.", label: "Web" },
  { title: "Fitness Tracker", description: "Wearable companion app design.", label: "Mobile" },
  { title: "Real Estate Portal", description: "Property listing and search platform.", label: "Web" },
];

export default function Portfolio233(props: BlockProps) {
  const { theme, heading = "Project Gallery", subheading = "Explore our creative portfolio.", items = DEFAULT_ITEMS } = props;

  const categories = [...new Set(items.map(p => String(p.label ?? "")))];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>All</button>
          {categories.map((cat, i) => (
            <button key={i} className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((project, i) => (
            <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[4/3]" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="p-4">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>{String(project.label ?? "")}</span>
                <h3 className="mt-2 font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm opacity-60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
