"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Check, Users, Building2, Globe } from "lucide-react";

const defaultItems = [
  { title: "Personal", description: "$12", label: "Individual", value: "1 seat,10GB,Core features" },
  { title: "Personal Plus", description: "$22", label: "Individual", value: "1 seat,50GB,All features,Priority support" },
  { title: "Team Starter", description: "$45", label: "Team", value: "10 seats,100GB,Collaboration,Analytics" },
  { title: "Team Business", description: "$89", label: "Team", value: "25 seats,500GB,Admin tools,API access,Custom roles" },
  { title: "Enterprise", description: "$199", label: "Enterprise", value: "Unlimited,5TB,SSO,SLA,Dedicated support,Custom contracts" },
];

const tabIcons: Record<string, typeof Users> = { Individual: Users, Team: Building2, Enterprise: Globe };

export default function Pricing217(props: BlockProps) {
  const { theme, heading = "Pricing That Scales", subheading = "Choose your category below", buttonText = "Start Free", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#7c3aed";
  const tabs = Array.from(new Set(items.map((it) => it.label || "General")));
  const [active, setActive] = useState(tabs[0]);
  const filtered = items.filter((it) => (it.label || "General") === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="flex justify-center gap-4">
          {tabs.map((tab) => {
            const Icon = tabIcons[tab] || Users;
            return (
              <button key={tab} onClick={() => setActive(tab)} className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border-2 transition-all" style={{ borderColor: active === tab ? primary : (theme?.accent || "#e5e7eb"), backgroundColor: active === tab ? `${primary}10` : "transparent", color: active === tab ? primary : (theme?.foreground || "#333") }}>
                <Icon className="w-4 h-4" />{tab}
              </button>
            );
          })}
        </div>
      </div>
      <div className={`max-w-5xl mx-auto grid grid-cols-1 ${filtered.length > 1 ? "md:grid-cols-2" : ""} gap-6`}>
        {filtered.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-4xl font-extrabold mb-6" style={{ color: primary }}>{item.description}<span className="text-sm font-normal opacity-50">/mo</span></p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm opacity-80"><Check className="w-4 h-4" style={{ color: primary }} />{f.trim()}</li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center py-3 rounded-xl font-medium text-white" style={{ backgroundColor: primary }}>{buttonText}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
