import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Micro", description: "$4/mo", label: "1 seat", value: "Basic features,1GB storage" },
  { title: "Small", description: "$16/mo", label: "5 seats", value: "Core features,10GB storage,Reports" },
  { title: "Medium", description: "$48/mo", label: "20 seats", value: "Advanced features,50GB,Reports,Automations" },
  { title: "Large", description: "$99/mo", label: "Unlimited", value: "All features,Unlimited storage,SLA,SSO" },
];

export default function Pricing013(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-Grade Pricing",
    subheading = "Scalable plans for organizations of any size",
    buttonText = "Contact Sales",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
        {items.slice(0, 4).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-lg p-5 flex flex-col" style={{ backgroundColor: theme?.accent || "#f9fafb" }}>
              <span className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">{item.title}</span>
              <p className="text-2xl md:text-3xl font-black mb-0.5" style={{ color: theme?.primary || "#0ea5e9" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <ul className="space-y-1 flex-1 mb-4">
                {features.map((f, j) => (
                  <li key={j} className="text-xs opacity-70">{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2 rounded text-xs font-semibold" style={{ backgroundColor: theme?.primary || "#0ea5e9", color: "#fff" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
