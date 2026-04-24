import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$10/mo", label: "For individuals", value: "1 user,5GB,Email support" },
  { title: "Standard", description: "$25/mo", label: "For small teams", value: "5 users,25GB,Chat support,Integrations" },
  { title: "Premium", description: "$55/mo", label: "For growing businesses", value: "20 users,100GB,Phone support,API access,Analytics" },
];

export default function Pricing156(props: BlockProps) {
  const { theme, heading = "Grow at Your Own Pace", subheading = "Plans that scale with your ambitions", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;
  const heights = ["min-h-[280px]", "min-h-[320px]", "min-h-[360px]"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`flex-1 w-full rounded-xl border p-6 flex flex-col ${heights[i] || "min-h-[280px]"}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm opacity-60 mb-3">{item.label}</p>
              <p className="text-3xl font-extrabold mb-4" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <ul className="space-y-1.5 flex-1 mb-5">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary || "#22c55e" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
