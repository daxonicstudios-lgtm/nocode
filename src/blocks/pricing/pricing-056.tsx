import type { BlockProps } from "@/blocks/types";
import { Check, Phone } from "lucide-react";

const defaultItems = [
  { title: "Startup", description: "$29/mo", label: "billed annually", value: "5 Users,10 Projects,5GB Storage,Email Support,Basic Analytics" },
  { title: "Business", description: "$99/mo", label: "billed annually", value: "25 Users,Unlimited Projects,50GB Storage,Priority Support,Advanced Analytics,API Access,SSO" },
  { title: "Enterprise", description: "Custom", label: "tailored to your needs", value: "Unlimited Users,Unlimited Projects,Unlimited Storage,Dedicated Account Manager,Custom Integrations,SLA Guarantee,On-Premise Option,Security Audit" },
];

export default function Pricing056(props: BlockProps) {
  const {
    theme,
    heading = "Plans That Scale With You",
    subheading = "From startups to enterprise — we grow as you grow",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isEnterprise = item.description === "Custom";
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: isEnterprise ? theme?.primary || "#1e293b" : (theme?.accent || "#f8fafc"), color: isEnterprise ? "#fff" : theme?.foreground }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-black mb-1">{item.description}</p>
              <p className="text-sm opacity-60 mb-6">{item.label}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><Check size={16} className={isEnterprise ? "text-green-300" : "text-green-500"} />{f.trim()}</li>
                ))}
              </ul>
              {isEnterprise ? (
                <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors">
                  <Phone size={16} /> Contact Sales
                </a>
              ) : (
                <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary || "#1e293b" }}>{buttonText}</a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
