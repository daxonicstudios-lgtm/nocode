import type { BlockProps } from "@/blocks/types";
import { Check, Sparkles } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$12/mo", label: "per month", value: "5 projects,10GB storage,Email support" },
  { title: "Pro", description: "$36/mo", label: "per month", value: "25 projects,100GB storage,Priority support,Analytics" },
  { title: "Elite", description: "$72/mo", label: "per month", value: "Unlimited projects,1TB storage,24/7 support,Analytics,API,Custom domain" },
];

export default function Pricing171(props: BlockProps) {
  const { theme, heading = "Premium Plans", subheading = "Designed for ambitious teams", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;

  return (
    <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${theme?.background || "#0f172a"}, ${theme?.accent || "#1e293b"})`, color: theme?.foreground || "#f8fafc" }}>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Sparkles className="w-6 h-6 mx-auto mb-3" style={{ color: theme?.primary || "#a78bfa" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl p-6 flex flex-col backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-3xl font-black my-2" style={{ color: theme?.primary || "#a78bfa" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#a78bfa" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
