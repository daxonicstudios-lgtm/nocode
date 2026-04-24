import type { BlockProps } from "@/blocks/types";
import { Users, Building2, Briefcase, Globe } from "lucide-react";

const defaultItems = [
  { title: "Freelancer", description: "$8/mo", label: "per month", value: "2 clients,5GB,Invoicing" },
  { title: "Studio", description: "$22/mo", label: "per month", value: "10 clients,25GB,Invoicing,Proposals" },
  { title: "Agency", description: "$55/mo", label: "per month", value: "50 clients,100GB,White-label,Team seats" },
  { title: "Enterprise", description: "$149/mo", label: "per month", value: "Unlimited,1TB,SSO,Dedicated support,SLA" },
];

const icons = [Users, Briefcase, Building2, Globe];

export default function Pricing012(props: BlockProps) {
  const {
    theme,
    heading = "Built for Creative Professionals",
    subheading = "Choose the plan that matches your workflow",
    buttonText = "Start Free",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.slice(0, 4).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="rounded-xl shadow-md p-6 flex flex-col">
              <Icon className="w-8 h-8 mb-4" style={{ color: theme?.primary || "#8b5cf6" }} />
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#8b5cf6" }}>{item.description}</p>
              <p className="text-xs opacity-50 mb-4">{item.label}</p>
              <ul className="space-y-1.5 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="text-xs opacity-70">✓ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2.5 rounded-lg font-medium text-sm text-white" style={{ backgroundColor: theme?.primary || "#8b5cf6" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
