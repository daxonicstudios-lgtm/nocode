"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Check } from "lucide-react";

const defaultItems = [
  { title: "Individual Basic", description: "$9", label: "Individual", value: "1 user,5GB,Email support" },
  { title: "Individual Pro", description: "$19", label: "Individual", value: "1 user,50GB,Priority support,Custom domain" },
  { title: "Team Starter", description: "$29", label: "Team", value: "5 users,50GB,Shared workspace,Chat support" },
  { title: "Team Pro", description: "$59", label: "Team", value: "20 users,200GB,Admin panel,Analytics,Priority support" },
  { title: "Enterprise", description: "$149", label: "Enterprise", value: "Unlimited users,2TB,SSO,SLA,Dedicated manager" },
  { title: "Enterprise Plus", description: "$299", label: "Enterprise", value: "Custom infra,Compliance,Training,Custom contracts" },
];

export default function Pricing216(props: BlockProps) {
  const { theme, heading = "Plans for Every Team Size", subheading = "Switch categories to find your plan", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#2563eb";
  const tabs = Array.from(new Set(items.map((it) => it.label || "General")));
  const [active, setActive] = useState(tabs[0]);
  const filtered = items.filter((it) => (it.label || "General") === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="inline-flex gap-1 p-1 rounded-xl" style={{ backgroundColor: `${primary}10` }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="px-5 py-2 rounded-lg text-sm font-medium transition-colors" style={{ backgroundColor: active === tab ? primary : "transparent", color: active === tab ? "#fff" : (theme?.foreground || "#111") }}>{tab}</button>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-1" style={{ color: primary }}>{item.description}<span className="text-sm font-normal opacity-50">/mo</span></p>
              <ul className="space-y-2 my-6 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4" style={{ color: primary }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-lg font-medium text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
