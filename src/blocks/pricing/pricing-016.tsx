import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Basic", description: "$9/mo", label: "$7/mo billed annually", value: "5 projects,10GB storage,Email support" },
  { title: "Pro", description: "$29/mo", label: "$23/mo billed annually", value: "Unlimited projects,100GB,Priority support,Custom domain" },
  { title: "Team", description: "$59/mo", label: "$47/mo billed annually", value: "Everything in Pro,10 seats,Admin dashboard,API access" },
];

export default function Pricing016(props: BlockProps) {
  const {
    theme,
    heading = "Save 20% With Annual Billing",
    subheading = "Monthly prices shown — switch to annual and save",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="border rounded-xl p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-4xl font-black mb-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</p>
              <p className="text-sm mb-6">
                <span className="opacity-50">or </span>
                <span className="font-semibold" style={{ color: theme?.primary || "#2563eb" }}>{item.label}</span>
              </p>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-70">• {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
