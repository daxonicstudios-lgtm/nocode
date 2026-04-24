import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$9/mo", label: "For individuals", value: "1 workspace,5GB storage,Basic support" },
  { title: "Team", description: "$29/mo", label: "For small teams", value: "5 workspaces,50GB storage,Priority support,Team chat" },
  { title: "Scale", description: "$79/mo", label: "For growing companies", value: "Unlimited workspaces,500GB storage,24/7 support,Advanced security,Custom integrations" },
];

export default function Pricing256(props: BlockProps) {
  const {
    theme,
    heading = "Transparent Pricing for Everyone",
    subheading = "No surprises, no hidden costs",
    buttonText = "Select Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="w-full">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isEven = i % 2 === 0;
          return (
            <div key={i} className="w-full py-12 px-4" style={{ backgroundColor: isEven ? "transparent" : `${theme?.primary || "#2563eb"}10` }}>
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 mb-4">{item.label}</p>
                  <div className="flex flex-wrap gap-4">
                    {features.map((f, j) => (
                      <span key={j} className="flex items-center gap-1 text-sm"><Check className="w-4 h-4" style={{ color: theme?.primary || "#2563eb" }} />{f.trim()}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-4xl font-extrabold" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
                  <a href={buttonUrl} className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white whitespace-nowrap" style={{ backgroundColor: theme?.primary || "#2563eb" }}>{buttonText} <ArrowRight className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
