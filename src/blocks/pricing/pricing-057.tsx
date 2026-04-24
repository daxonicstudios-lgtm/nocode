import type { BlockProps } from "@/blocks/types";
import { Check, Building2, ArrowRight } from "lucide-react";

const defaultItems = [
  { title: "Team", description: "$49/mo", label: "up to 10 users", value: "Collaboration Tools,Shared Workspace,10GB per User,Standard Support,Basic Permissions" },
  { title: "Company", description: "$149/mo", label: "up to 50 users", value: "Everything in Team,Advanced Roles,50GB per User,Priority Support,Custom Branding,Audit Logs" },
  { title: "Enterprise", description: "Let's Talk", label: "unlimited users", value: "Everything in Company,Unlimited Storage,Dedicated CSM,Custom SLA,SAML SSO,Data Residency,24/7 Phone Support" },
];

export default function Pricing057(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-Ready Pricing",
    subheading = "Trusted by 2,000+ companies worldwide",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Building2 size={28} className="mx-auto mb-3" style={{ color: theme?.primary || "#6366f1" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isCustom = !item?.description?.startsWith("$");
          return (
            <div key={i} className="rounded-xl border p-7 flex flex-col" style={{ borderColor: isCustom ? theme?.primary || "#6366f1" : theme?.accent || "#e5e7eb", borderWidth: isCustom ? 2 : 1 }}>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-3xl font-black mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item?.description}</p>
              <p className="text-sm opacity-50 mb-6">{item.label}</p>
              <ul className="flex-1 space-y-2.5 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm"><Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: theme?.primary || "#6366f1" }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: isCustom ? theme?.primary || "#6366f1" : "transparent", color: isCustom ? "#fff" : theme?.primary || "#6366f1", border: isCustom ? "none" : `2px solid ${theme?.primary || "#6366f1"}` }}>
                {isCustom ? "Contact Sales" : buttonText} <ArrowRight size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
