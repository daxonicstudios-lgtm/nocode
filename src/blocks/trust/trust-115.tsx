import type { BlockProps } from "@/blocks/types";
import { Shield } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Enterprise Ready" }, { title: "SOC 2 Type II" }, { title: "ISO 27001" }, { title: "HIPAA" },
];
export default function Trust115(props: BlockProps) {
  const { theme, heading = "Dark trust bar with compliance pills", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-16" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center gap-3 shrink-0">
          <Shield className="w-6 h-6 opacity-60" />
          <span className="font-semibold text-white">{heading}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {items.slice(0, 5).map((item, i) => (
            <span key={i} className="px-4 py-2 rounded-full text-xs font-medium bg-white/10">{item.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
