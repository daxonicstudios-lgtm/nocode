import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Features119(props: BlockProps) {
  const {
    theme,
    heading = "Pick the Right Fit",
    subheading = "Two powerful options side by side",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual builder", value: "yes", label: "yes" },
      { title: "AI assistant", value: "yes", label: "no" },
      { title: "Custom templates", value: "5", label: "50+" },
      { title: "Integrations", value: "20+", label: "100+" },
      { title: "Support", value: "Email", label: "24/7 live" },
    ],
  } = props;

  const plans = [
    { name: "Starter", price: "$12/mo", desc: "Perfect for personal projects" },
    { name: "Professional", price: "$39/mo", desc: "For serious businesses" },
  ];

  const renderVal = (val: string | undefined) => {
    if (val === "yes") return <Check size={16} className="text-green-500" />;
    if (val === "no") return <X size={16} className="text-red-400" />;
    return <span className="text-sm font-medium">{val}</span>;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, pi) => (
            <div key={pi} className="rounded-xl border p-6" style={{ borderColor: pi === 1 ? theme?.primary || "#6366f1" : theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-2xl font-bold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{plan.price}</p>
              <p className="opacity-60 text-sm mb-6">{plan.desc}</p>
              <div className="space-y-3">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                    <span className="text-sm">{item.title}</span>
                    {renderVal(pi === 0 ? item.value : item.label)}
                  </div>
                ))}
              </div>
              <a href={buttonUrl} className="block mt-6 text-center py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                {buttonText || "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
