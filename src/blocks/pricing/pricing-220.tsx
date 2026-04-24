"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Check, Star } from "lucide-react";

const defaultItems = [
  { title: "Starter", description: "$11", label: "Creators", value: "1 seat,5GB,Basic tools" },
  { title: "Pro", description: "$29", label: "Creators", value: "1 seat,100GB,All tools,Analytics,Priority support" },
  { title: "Team", description: "$59", label: "Businesses", value: "10 seats,500GB,Collaboration,Admin panel,API" },
  { title: "Enterprise", description: "$149", label: "Businesses", value: "Unlimited,2TB,SSO,SLA,Dedicated manager,Custom integrations" },
  { title: "Education", description: "$5", label: "Non-profit", value: "10 seats,50GB,Core features,Discounted rate" },
  { title: "NGO", description: "$15", label: "Non-profit", value: "50 seats,200GB,All features,Dedicated support" },
];

export default function Pricing220(props: BlockProps) {
  const { theme, heading = "Plans for Everyone", subheading = "Special rates for non-profits and education", buttonText = "Get Started", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#f59e0b";
  const tabs = Array.from(new Set(items.map((it) => it.label || "General")));
  const [active, setActive] = useState(tabs[0]);
  const filtered = items.filter((it) => (it.label || "General") === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="inline-flex gap-1 rounded-2xl p-1.5" style={{ backgroundColor: `${primary}15` }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ backgroundColor: active === tab ? primary : "transparent", color: active === tab ? "#fff" : (theme?.foreground || "#333") }}>{tab}</button>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const best = i === filtered.length - 1;
          return (
            <div key={i} className="rounded-2xl border-2 p-8 flex flex-col relative" style={{ borderColor: best ? primary : (theme?.accent || "#e5e7eb") }}>
              {best && <Star className="absolute top-4 right-4 w-5 h-5" style={{ color: primary }} />}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-6" style={{ color: primary }}>{item.description}<span className="text-sm font-normal opacity-40">/mo</span></p>
              <ul className="space-y-2 mb-8 flex-1">
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
