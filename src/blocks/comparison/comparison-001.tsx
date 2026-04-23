import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

const ROWS = [
  { feature: "No-code editor", a: true, b: true },
  { feature: "AI page generation", a: true, b: false },
  { feature: "Mobile-first design", a: true, b: false },
  { feature: "Unlimited projects", a: true, b: true },
  { feature: "Custom domain", a: true, b: true },
  { feature: "24/7 support", a: true, b: false },
];

export default function Comparison001(props: BlockProps) {
  const { theme, heading = "How we compare" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="grid grid-cols-3 p-4 text-sm font-semibold" style={{ backgroundColor: theme?.secondary ?? "#f9fafb" }}>
            <span>Feature</span>
            <span className="text-center">Us</span>
            <span className="text-center opacity-60">Others</span>
          </div>
          {ROWS.map((r, i) => (
            <div key={i} className="grid grid-cols-3 p-4 text-sm border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span>{r.feature}</span>
              <span className="text-center">{r.a ? <Check className="w-4 h-4 mx-auto" style={{ color: theme?.primary ?? "#16a34a" }} /> : <X className="w-4 h-4 mx-auto opacity-30" />}</span>
              <span className="text-center">{r.b ? <Check className="w-4 h-4 mx-auto opacity-60" /> : <X className="w-4 h-4 mx-auto opacity-30" />}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
