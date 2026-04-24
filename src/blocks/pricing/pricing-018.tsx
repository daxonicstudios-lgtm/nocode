import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Personal", description: "$14/mo", label: "$140/year (save $28)", value: "All core features,5GB storage,Email support" },
  { title: "Team", description: "$39/mo", label: "$390/year (save $78)", value: "Everything in Personal,50GB,5 team members,Shared workspace" },
];

export default function Pricing018(props: BlockProps) {
  const {
    theme,
    heading = "Two Plans. No Surprises.",
    subheading = "Pay monthly or save with annual billing",
    buttonText = "Subscribe",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.slice(0, 2).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="border-2 rounded-2xl p-8 flex flex-col" style={{ borderColor: theme?.primary || "#7c3aed" }}>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <div className="flex flex-col gap-2 mb-6">
                <div>
                  <span className="text-4xl font-black" style={{ color: theme?.primary || "#7c3aed" }}>{item.description}</span>
                  <span className="text-sm opacity-50 ml-2">per month</span>
                </div>
                <div className="text-sm font-medium opacity-70">
                  or {item.label}
                </div>
              </div>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">— {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-bold text-white" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
