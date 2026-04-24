import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Product Design", description: "End-to-end product design from research to launch." },
  { title: "Web Applications", description: "Full-stack web applications built to scale." },
  { title: "Mobile Development", description: "Native and cross-platform mobile apps." },
  { title: "Cloud Solutions", description: "Infrastructure setup and DevOps consulting." },
];

export default function Services260(props: BlockProps) {
  const { theme, heading = "Solutions", subheading = "We bring your vision to life.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((svc, i) => (
            <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="text-2xl font-black opacity-20 mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
              <p className="mt-2 text-sm opacity-50">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
