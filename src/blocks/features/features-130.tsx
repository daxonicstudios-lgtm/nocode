"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Features130(props: BlockProps) {
  const {
    theme,
    heading = "Simple, Transparent Pricing",
    subheading = "Toggle between monthly and annual to see your savings",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unlimited Pages", description: "Build as many pages as you need." },
      { title: "Custom Domain", description: "Free domain connection and SSL." },
      { title: "AI Content Writer", description: "Generate copy in seconds." },
      { title: "Analytics Dashboard", description: "Real-time visitor insights." },
      { title: "Priority Support", description: "Get help when you need it." },
    ],
  } = props;

  const [annual, setAnnual] = useState(false);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 max-w-2xl mx-auto mb-8">{subheading}</p>
        <div className="inline-flex items-center gap-3 mb-8">
          <span className={`text-sm font-medium ${!annual ? "opacity-100" : "opacity-50"}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className="relative w-12 h-6 rounded-full transition-colors" style={{ backgroundColor: annual ? theme?.primary || "#6366f1" : theme?.accent || "#d1d5db" }}>
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${annual ? "translate-x-6" : "translate-x-0.5"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "opacity-100" : "opacity-50"}`}>Annual <span className="text-xs text-green-500 font-bold">Save 20%</span></span>
        </div>
        <div className="text-4xl font-bold mb-2" style={{ color: theme?.primary || "#6366f1" }}>
          {annual ? "$19" : "$24"}<span className="text-lg opacity-60 font-normal">/month</span>
        </div>
        {annual && <p className="text-sm text-green-600 font-medium mb-6">Billed at $228/year</p>}
        {!annual && <p className="text-sm opacity-50 mb-6">Billed monthly</p>}
        <div className="text-left rounded-xl border p-6 mb-8" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <p className="font-semibold mb-4">Everything included:</p>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                <div>
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="text-sm opacity-60"> — {item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
          {buttonText || "Get Started"}
        </a>
      </div>
    </section>
  );
}
