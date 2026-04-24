import type { BlockProps } from "@/blocks/types";
import { Percent } from "lucide-react";

const defaultItems = [
  { title: "Hobby", description: "$0/mo", label: "$0/year", value: "1 project,500MB,Community" },
  { title: "Maker", description: "$19/mo", label: "$180/year (save $48)", value: "10 projects,20GB,Email support,Analytics" },
  { title: "Pro", description: "$49/mo", label: "$470/year (save $118)", value: "Unlimited projects,200GB,Priority support,API,Custom domain" },
];

export default function Pricing020(props: BlockProps) {
  const {
    theme,
    heading = "Start Free, Scale Affordably",
    subheading = "Annual plans save you up to 20%",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 flex items-center justify-center gap-1">
          <Percent className="w-4 h-4" style={{ color: theme?.primary || "#f97316" }} />
          {subheading}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isFeatured = i === 2;
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: isFeatured ? (theme?.primary || "#f97316") : (theme?.accent || "#fff7ed"), color: isFeatured ? "#fff" : undefined }}>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-4xl font-black mb-1">{item.description}</p>
              <p className="text-sm opacity-70 mb-6">{item.label}</p>
              <ul className="space-y-2 flex-1 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="text-sm opacity-80">✓ {f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-bold" style={{ backgroundColor: isFeatured ? "#fff" : (theme?.primary || "#f97316"), color: isFeatured ? (theme?.primary || "#f97316") : "#fff" }}>
                {buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
