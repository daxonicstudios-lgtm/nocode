"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Starter Monthly", description: "$15", label: "Monthly", value: "5 projects,10GB,Email support" },
  { title: "Pro Monthly", description: "$39", label: "Monthly", value: "Unlimited projects,100GB,Priority support,Analytics" },
  { title: "Starter Annual", description: "$10", label: "Annual", value: "5 projects,10GB,Email support,Save 33%" },
  { title: "Pro Annual", description: "$29", label: "Annual", value: "Unlimited projects,100GB,Priority support,Analytics,Save 25%" },
];

export default function Pricing218(props: BlockProps) {
  const { theme, heading = "Simple, Fair Pricing", subheading = "Save up to 33% with annual billing", buttonText = "Subscribe", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#0ea5e9";
  const tabs = Array.from(new Set(items.map((it) => it.label || "Monthly")));
  const [active, setActive] = useState(tabs[0]);
  const filtered = items.filter((it) => (it.label || "Monthly") === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-6">{subheading}</p>
        <div className="inline-flex items-center p-1 rounded-full border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="px-6 py-2 rounded-full text-sm font-medium transition-all" style={{ backgroundColor: active === tab ? primary : "transparent", color: active === tab ? "#fff" : (theme?.foreground || "#333") }}>{tab}</button>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-8 flex flex-col hover:shadow-lg transition-shadow" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title?.replace(` ${active}`, "")}</h3>
              <p className="text-5xl font-black mb-1" style={{ color: primary }}>{item.description}<span className="text-lg font-normal opacity-40">/mo</span></p>
              <ul className="space-y-2 my-6 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4" style={{ color: primary }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
