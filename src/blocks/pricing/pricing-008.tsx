import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Lite", description: "$7/mo", label: "per month", value: "1 workspace,2GB storage,Email support" },
  { title: "Plus", description: "$25/mo", label: "per month", value: "5 workspaces,25GB storage,Chat support,Automations,Webhooks" },
  { title: "Max", description: "$69/mo", label: "per month", value: "Unlimited workspaces,250GB,Dedicated manager,SSO" },
];

export default function Pricing008(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Perfect Fit",
    subheading = "No contracts. No surprises.",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 text-lg">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.slice(0, 3).map((item, i) => {
          const featured = i === 1;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-3xl p-8 flex flex-col" style={{ backgroundColor: featured ? (theme?.primary || "#6366f1") : (theme?.accent || "#f3f4f6"), color: featured ? "#fff" : undefined }}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">{item.title}</h3>
              <p className="text-5xl font-black mb-1">{item.description}</p>
              <p className="text-sm opacity-60 mb-8">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">→ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold" style={{ backgroundColor: featured ? "#fff" : (theme?.primary || "#6366f1"), color: featured ? (theme?.primary || "#6366f1") : "#fff" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
