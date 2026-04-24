import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

const defaultItems = [
  { title: "Essentials", description: "$14/mo", label: "billed monthly", value: "Core features,5 team members,10GB storage" },
  { title: "Professional", description: "$34/mo", label: "billed monthly", value: "All Essentials features,25 team members,100GB storage,Advanced reporting,Priority email" },
  { title: "Organization", description: "$84/mo", label: "billed monthly", value: "All Pro features,Unlimited members,Unlimited storage,Dedicated support" },
];

export default function Pricing010(props: BlockProps) {
  const {
    theme,
    heading = "Transparent Pricing",
    subheading = "Every plan includes core features",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:border md:rounded-2xl overflow-hidden" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
        {items.slice(0, 3).map((item, i) => {
          const featured = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className={`p-8 flex flex-col border md:border-0 md:border-r last:border-r-0 ${featured ? "md:bg-opacity-5" : ""}`} style={{ borderColor: theme?.accent || "#e5e7eb", backgroundColor: featured ? (theme?.primary || "#2563eb") + "08" : undefined }}>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {featured && <Sparkles className="w-4 h-4" style={{ color: theme?.primary || "#2563eb" }} />}
              </div>
              <p className="text-3xl font-extrabold mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-6">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">— {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold" style={{ backgroundColor: featured ? (theme?.primary || "#2563eb") : "transparent", color: featured ? "#fff" : (theme?.primary || "#2563eb"), border: featured ? "none" : `1px solid ${theme?.primary || "#2563eb"}` }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
