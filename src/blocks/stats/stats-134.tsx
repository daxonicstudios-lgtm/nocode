import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "1M+", description: "API Requests/Day" },{ title: "200ms", description: "Avg Response" },
  { title: "99.99%", description: "Uptime SLA" },{ title: "50+", description: "Data Centers" },
];
export default function Stats134(props: BlockProps) {
  const { theme, heading = "Dark stat counters", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.slice(0, 4).map((s, i) => (
          <div key={i}><div className="text-4xl sm:text-5xl font-black text-white">{s.title}</div><div className="text-sm opacity-50 mt-2">{s.description}</div></div>
        ))}
      </div>
    </section>
  );
}
