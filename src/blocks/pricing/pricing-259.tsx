import type { BlockProps } from "@/blocks/types";
import { Check, ArrowUpRight } from "lucide-react";

const defaultItems = [
  { title: "Lite", description: "$5/mo", label: "For hobbyists", value: "1 project,1GB storage,Community access" },
  { title: "Standard", description: "$22/mo", label: "For creators", value: "10 projects,25GB storage,Priority support,SEO tools" },
  { title: "Advanced", description: "$55/mo", label: "For businesses", value: "50 projects,250GB storage,Dedicated rep,SEO tools,A/B testing" },
  { title: "Custom", description: "Contact us", label: "For enterprise", value: "Custom limits,Unlimited storage,Enterprise SLA,On-premise option,Custom dev" },
];

export default function Pricing259(props: BlockProps) {
  const {
    theme,
    heading = "Pricing That Scales With You",
    subheading = "From solo creators to enterprise teams",
    buttonText = "Choose",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  const stripes = ["transparent", `${theme?.accent || "#f0f9ff"}`, "transparent", `${theme?.accent || "#f0f9ff"}`];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20">
      <div className="max-w-5xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      {items.map((item, i) => {
        const features = (item.value || "").split(",").filter(Boolean);
        return (
          <div key={i} className="w-full py-8 px-4 border-b" style={{ backgroundColor: stripes[i % 4], borderColor: `${theme?.foreground || "#000"}10` }}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-48">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-xs opacity-50">{item.label}</p>
              </div>
              <p className="text-3xl font-extrabold md:w-40" style={{ color: theme?.primary || "#0ea5e9" }}>{item.description}</p>
              <div className="flex-1 flex flex-wrap gap-3">
                {features.map((f, j) => (
                  <span key={j} className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `${theme?.primary || "#0ea5e9"}15` }}><Check className="w-3 h-3" style={{ color: theme?.primary || "#0ea5e9" }} />{f.trim()}</span>
                ))}
              </div>
              <a href={buttonUrl} className="inline-flex items-center gap-1 px-5 py-2 rounded-md font-medium text-white shrink-0" style={{ backgroundColor: theme?.primary || "#0ea5e9" }}>{buttonText} <ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
