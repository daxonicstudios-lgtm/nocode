import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "10K+", description: "Active Users" },{ title: "50+", description: "Countries" },
  { title: "15K+", description: "Sites Built" },{ title: "99.9%", description: "Uptime" },
];
export default function Stats048(props: BlockProps) {
  const { theme, heading = "Simple stat counter row", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.slice(0, 4).map((s, i) => (
            <div key={i}><div className="text-4xl font-black" style={{ color: theme?.primary }}>{s.title}</div><div className="text-sm opacity-50 mt-1">{s.description}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
