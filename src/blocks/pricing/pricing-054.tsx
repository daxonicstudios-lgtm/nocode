import type { BlockProps } from "@/blocks/types";
import { Receipt, ChevronRight } from "lucide-react";

const defaultItems = [
  { title: "Solo", description: "$10/mo", label: "billed annually", value: "1 Website:$4,5GB Storage:$2,Basic SEO:$2,Email Support:$2" },
  { title: "Team", description: "$30/mo", label: "billed annually", value: "5 Websites:$10,25GB Storage:$5,Advanced SEO:$5,Priority Support:$4,Team Access:$3,Analytics:$3" },
  { title: "Enterprise", description: "$75/mo", label: "billed annually", value: "Unlimited Sites:$20,100GB Storage:$10,Full SEO Suite:$10,Dedicated Manager:$12,Unlimited Users:$8,Analytics Pro:$8,SLA:$7" },
];

export default function Pricing054(props: BlockProps) {
  const {
    theme,
    heading = "Itemized Pricing Plans",
    subheading = "Full cost transparency on every feature",
    buttonText = "Subscribe",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-70">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto space-y-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-xl border p-6 md:flex md:items-start md:gap-8" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <div className="md:w-48 mb-4 md:mb-0 flex-shrink-0">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-3xl font-extrabold" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
                <p className="text-xs opacity-50">{item.label}</p>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 md:mb-0">
                {features.map((f, j) => {
                  const [name, price] = f.split(":");
                  return (
                    <div key={j} className="rounded-lg p-2 text-sm" style={{ backgroundColor: (theme?.primary || "#2563eb") + "08" }}>
                      <span className="block font-medium">{name.trim()}</span>
                      <span className="font-bold" style={{ color: theme?.primary || "#2563eb" }}>{price?.trim()}</span>
                    </div>
                  );
                })}
              </div>
              <a href={buttonUrl} className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg font-medium text-white text-sm flex-shrink-0" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText} <ChevronRight size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
