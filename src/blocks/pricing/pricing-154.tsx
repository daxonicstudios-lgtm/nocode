import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Check } from "lucide-react";

const defaultItems = [
  { title: "Free", description: "$0", label: "Forever free", value: "1 project,500MB storage,Community forum" },
  { title: "Plus", description: "$19/mo", label: "Billed annually", value: "10 projects,25GB storage,Priority email,Integrations" },
];

export default function Pricing154(props: BlockProps) {
  const { theme, heading = "Start Free, Upgrade Anytime", subheading = "All paid plans come with a 100% satisfaction guarantee", buttonText = "Select Plan", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-6">{subheading}</p>
        <div className="inline-flex items-center gap-2 border-2 rounded-full px-5 py-2 text-sm font-semibold" style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}>
          <ShieldCheck className="w-5 h-5" /> No-Risk Guarantee
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="md:w-1/4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-2xl font-extrabold" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
                <p className="text-xs opacity-50">{item.label}</p>
              </div>
              <ul className="flex-1 grid grid-cols-2 gap-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-1.5 text-sm"><Check className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="shrink-0 text-center py-2.5 px-6 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
