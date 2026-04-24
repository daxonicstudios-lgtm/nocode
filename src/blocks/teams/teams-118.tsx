import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Emma Watson", description: "VP Engineering" },
  { title: "Kwame Asante", description: "Growth Lead" },
  { title: "Yuki Tanaka", description: "ML Engineer" },
  { title: "Maria Garcia", description: "Head of Sales" },
];

export default function Team118(props: BlockProps) {
  const { theme, heading = "Dark team section", subheading = "World-class talent", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 8).map((m, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <h3 className="font-semibold text-white">{m.title}</h3>
              <p className="text-xs opacity-50 mt-1">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
