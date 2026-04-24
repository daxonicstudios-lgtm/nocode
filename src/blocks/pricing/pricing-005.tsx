import type { BlockProps } from "@/blocks/types";

const defaultItems = [
  { title: "Hobby", description: "$0", label: "Free forever", value: "1 site,500 visits/mo,Basic templates" },
  { title: "Growth", description: "$24/mo", label: "per month", value: "5 sites,50K visits/mo,All templates,Analytics dashboard" },
];

export default function Pricing005(props: BlockProps) {
  const {
    theme,
    heading = "Fair Pricing for Everyone",
    subheading = "Start for free — pay as you scale",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="p-6 rounded-lg flex flex-col" style={{ backgroundColor: i === 1 ? (theme?.primary || "#0f172a") : "transparent", color: i === 1 ? "#fff" : undefined, border: i === 0 ? `1px solid ${theme?.accent || "#e5e7eb"}` : undefined }}>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-4xl font-black mb-1">{item.description}</p>
              <p className="text-xs opacity-60 mb-6">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">✓ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-md font-medium" style={{ backgroundColor: i === 1 ? "#fff" : (theme?.primary || "#0f172a"), color: i === 1 ? (theme?.primary || "#0f172a") : "#fff" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
