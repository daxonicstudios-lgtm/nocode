import type { BlockProps } from "@/blocks/types";
import { Check, Minus } from "lucide-react";

const defaultItems = [
  { title: "Bandwidth", description: "10GB", label: "100GB", value: "Unlimited" },
  { title: "SSL certificate", description: "yes", label: "yes", value: "yes" },
  { title: "CDN", description: "no", label: "yes", value: "yes" },
  { title: "Backups", description: "Weekly", label: "Daily", value: "Hourly" },
  { title: "Uptime SLA", description: "no", label: "99.9%", value: "99.99%" },
];

function CellValue({ v, color }: { v: string; color: string }) {
  if (v === "yes") return <Check className="w-4 h-4 mx-auto" style={{ color }} />;
  if (v === "no") return <Minus className="w-4 h-4 mx-auto opacity-30" />;
  return <span>{v}</span>;
}

export default function Pricing023(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comparison",
    subheading = "Pick the right hosting plan",
    items = defaultItems,
  } = props;

  const tiers = [
    { name: "Basic", price: "$5/mo" },
    { name: "Standard", price: "$15/mo" },
    { name: "Premium", price: "$45/mo" },
  ];
  const primary = theme?.primary || "#2563eb";
  const border = theme?.accent || "#e5e7eb";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr>
              <th className="text-left p-4" />
              {tiers.map((t, i) => (
                <th key={i} className="p-4 text-center rounded-t-xl" style={{ backgroundColor: i === 2 ? primary : "transparent", color: i === 2 ? "#fff" : undefined }}>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xl font-black">{t.price}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.slice(0, 5).map((item, i) => (
              <tr key={i} className="border-t" style={{ borderColor: border }}>
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4 text-center"><CellValue v={item.description || ""} color={primary} /></td>
                <td className="p-4 text-center"><CellValue v={item.label || ""} color={primary} /></td>
                <td className="p-4 text-center"><CellValue v={item.value || ""} color={primary} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
