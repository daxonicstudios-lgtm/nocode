"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

const defaultItems = [
  { title: "Freelancer", description: "$14", label: "Individual", value: "1 seat,Personal dashboard,10GB,Email support" },
  { title: "Creator", description: "$24", label: "Individual", value: "1 seat,Advanced dashboard,50GB,Priority support,Analytics" },
  { title: "Startup", description: "$49", label: "Team", value: "10 seats,Team dashboard,200GB,Priority support,Collaboration" },
  { title: "Growth", description: "$99", label: "Team", value: "50 seats,Custom dashboard,1TB,Dedicated support,API,SSO" },
  { title: "Custom", description: "Contact us", label: "Enterprise", value: "Unlimited seats,Custom solution,SLA,Compliance,Training" },
];

export default function Pricing219(props: BlockProps) {
  const { theme, heading = "Pick Your Category", subheading = "Each plan is tailored to your workflow", buttonText = "Start Now", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#ec4899";
  const tabs = Array.from(new Set(items.map((it) => it.label || "General")));
  const [active, setActive] = useState(tabs[0]);
  const filtered = items.filter((it) => (it.label || "General") === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="inline-flex gap-2 border-b-2" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="px-6 py-3 text-sm font-semibold transition-all border-b-2 -mb-[2px]" style={{ borderColor: active === tab ? primary : "transparent", color: active === tab ? primary : (theme?.foreground || "#666") }}>{tab}</button>
          ))}
        </div>
      </div>
      <div className={`max-w-5xl mx-auto grid grid-cols-1 ${filtered.length === 1 ? "max-w-md" : "md:grid-cols-2"} gap-6`}>
        {filtered.map((item, i) => {
          const features = (item.value || "").split(",").filter(Boolean);
          const isMain = i === filtered.length - 1;
          return (
            <div key={i} className="rounded-2xl p-8 flex flex-col border-2" style={{ borderColor: isMain ? primary : (theme?.accent || "#e5e7eb") }}>
              <div className="flex items-center gap-2 mb-3">
                {isMain && <Zap className="w-4 h-4" style={{ color: primary }} />}
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-4xl font-extrabold mb-6" style={{ color: primary }}>{item?.description}{item?.description?.startsWith("$") && <span className="text-sm font-normal opacity-40">/mo</span>}</p>
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
