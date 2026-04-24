import type { BlockProps } from "@/blocks/types";
import { Check, ChevronRight } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$8", label: "Ideal for freelancers", value: "1 workspace,5GB,3 integrations" },
  { title: "Growth", description: "$24", label: "For small businesses", value: "5 workspaces,50GB,Unlimited integrations,Custom domain" },
  { title: "Scale", description: "$64", label: "For scaling companies", value: "Unlimited workspaces,500GB,White-label,API,Dedicated manager" },
  { title: "Enterprise", description: "Custom", label: "Tailored solutions", value: "Custom infrastructure,SLA,Compliance,Training" },
];

export default function Pricing214(props: BlockProps) {
  const { theme, heading = "Transparent Pricing", subheading = "No setup fees, no contracts", buttonText = "Select", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#059669";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`flex flex-col md:flex-row md:items-center gap-3 p-5 ${i < items.length - 1 ? "border-b" : ""}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="md:w-36 shrink-0">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-xs opacity-50">{item.label}</p>
              </div>
              <p className="md:w-24 shrink-0 text-2xl font-black" style={{ color: primary }}>{item.description}</p>
              <div className="flex gap-3 flex-1 flex-wrap">
                {features.map((f, j) => (
                  <span key={j} className="flex items-center gap-1 text-xs opacity-70"><Check className="w-3 h-3" style={{ color: primary }} />{f.trim()}</span>
                ))}
              </div>
              <a href={buttonUrl} className="shrink-0 flex items-center gap-1 text-sm font-semibold" style={{ color: primary }}>{buttonText} <ChevronRight className="w-4 h-4" /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
