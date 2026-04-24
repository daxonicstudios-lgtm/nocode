import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Solo", description: "$5/mo", label: "1 user", value: "1 project,1GB,Email support" },
  { title: "Team", description: "$15/mo", label: "5 users", value: "10 projects,10GB,Chat support" },
  { title: "Business", description: "$45/mo", label: "25 users", value: "Unlimited projects,100GB,Priority support,API" },
  { title: "Enterprise", description: "$120/mo", label: "Unlimited", value: "Everything,1TB,Dedicated manager,SLA,SSO" },
];

export default function Pricing011(props: BlockProps) {
  const {
    theme,
    heading = "Plans for Every Team Size",
    subheading = "From solo founders to large organizations",
    buttonText = "Select",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(0, 4).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="border rounded-lg p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-xs opacity-50 mb-3">{item.label}</p>
              <p className="text-3xl font-black mb-6" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="text-xs opacity-70">• {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-2 rounded font-medium text-sm text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
