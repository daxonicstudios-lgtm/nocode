import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Starter", description: "$10/mo", label: "per user", value: "Core modules,5GB/user,Standard support" },
  { title: "Professional", description: "$25/mo", label: "per user", value: "All modules,25GB/user,Priority support,Admin tools" },
  { title: "Business", description: "$50/mo", label: "per user", value: "Everything in Pro,100GB/user,SSO,Audit logs,Custom roles" },
  { title: "Enterprise", description: "$90/mo", label: "per user", value: "Unlimited,Dedicated,HIPAA,Custom SLA,On-premise option" },
];

export default function Pricing015(props: BlockProps) {
  const {
    theme,
    heading = "Per-User Pricing",
    subheading = "Only pay for active team members",
    buttonText = "Start Trial",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
          {items.slice(0, 4).map((item, i) => {
            const features = (item.value || "").split(",").filter(Boolean);
            return (
              <div key={i} className="p-6 flex flex-col" style={{ backgroundColor: theme?.background || "#fff" }}>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-60">{item.title}</h3>
                <p className="text-2xl md:text-3xl font-black mb-0.5" style={{ color: theme?.primary || "#dc2626" }}>{item.description}</p>
                <p className="text-xs opacity-50 mb-5">{item.label}</p>
                <ul className="space-y-1.5 flex-1 mb-5">
                  {features.map((f, j) => (
                    <li key={j} className="text-xs opacity-70">• {f.trim()}</li>
                  ))}
                </ul>
                <a href={buttonUrl} className="block text-center py-2 rounded-md text-xs font-bold text-white" style={{ backgroundColor: theme?.primary || "#dc2626" }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
