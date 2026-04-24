"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { Calculator, Check } from "lucide-react";

const defaultItems = [
  { title: "Basic", description: "$5", label: "per user/month", value: "Core features,Email support,5GB per user" },
  { title: "Pro", description: "$12", label: "per user/month", value: "All features,Priority support,50GB per user,Analytics" },
];

export default function Pricing221(props: BlockProps) {
  const { theme, heading = "Calculate Your Price", subheading = "Adjust the slider to see your monthly cost", buttonText = "Start Free Trial", buttonUrl = "#", items = defaultItems } = props;
  const primary = theme?.primary || "#2563eb";
  const [users, setUsers] = useState(5);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60">{subheading}</p>
      </div>
      <div className="max-w-md mx-auto mb-12 text-center">
        <div className="flex items-center gap-3 justify-center mb-4">
          <Calculator className="w-5 h-5" style={{ color: primary }} />
          <span className="text-lg font-semibold">{users} users</span>
        </div>
        <input type="range" min={1} max={100} value={users} onChange={(e) => setUsers(Number(e.target.value))} className="w-full accent-blue-600 h-2 rounded-full cursor-pointer" style={{ accentColor: primary }} />
        <div className="flex justify-between text-xs opacity-40 mt-1"><span>1</span><span>100</span></div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const perUser = parseInt(item.description?.replace("$", "") || "5");
          const total = perUser * users;
          const features = (item.value || "").split(",").filter(Boolean);
          return (
            <div key={i} className="rounded-2xl border p-8 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-50 mb-4">{item.description} {item.label}</p>
              <p className="text-5xl font-black mb-1" style={{ color: primary }}>${total}<span className="text-lg font-normal opacity-40">/mo</span></p>
              <p className="text-sm opacity-50 mb-6">for {users} users</p>
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
