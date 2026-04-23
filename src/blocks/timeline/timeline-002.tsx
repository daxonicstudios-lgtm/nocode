import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Research & interviews", label: "Week 1-2" },
  { title: "Prototyping", label: "Week 3-4" },
  { title: "Design & build", label: "Week 5-8" },
  { title: "Testing & launch", label: "Week 9-10" },
];

export default function Timeline002(props: BlockProps) {
  const { theme, heading = "10-week roadmap", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="relative flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-0">
          {items.slice(0, 4).map((t, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center px-4 relative">
              <div className="w-8 h-8 rounded-full mb-3 flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#000" }}>{i + 1}</div>
              <p className="text-xs font-semibold opacity-60 uppercase">{String(t.label)}</p>
              <p className="mt-1 font-semibold text-sm">{t.title}</p>
              {i < 3 && <div className="hidden md:block absolute top-4 left-1/2 w-full h-0.5" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
