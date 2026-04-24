import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Up to 5 projects", value: "pro", description: "essential" },
  { title: "Custom domain", value: "pro", description: "essential" },
  { title: "Advanced analytics", value: "pro", description: "no" },
  { title: "Team collaboration", value: "pro", description: "no" },
  { title: "Priority support", value: "pro", description: "no" },
];

export default function Pricing003(props: BlockProps) {
  const { theme, heading = "Compare plans", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="grid grid-cols-3 p-5 font-semibold text-sm border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.secondary ?? "#f9fafb" }}>
            <span>Feature</span>
            <span className="text-center">Essential · $9</span>
            <span className="text-center">Pro · $29</span>
          </div>
          {items.slice(0, 5).map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-5 text-sm border-b last:border-b-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span>{row.title}</span>
              <span className="text-center">
                {row.description === "essential" ? <Check className="w-4 h-4 mx-auto" style={{ color: theme?.primary }} /> : <X className="w-4 h-4 mx-auto opacity-30" />}
              </span>
              <span className="text-center"><Check className="w-4 h-4 mx-auto" style={{ color: theme?.primary }} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
