"use client";
import type { BlockProps } from "@/blocks/types";
import { useState } from "react";

const categories = ["General", "Billing", "Technical"];
const faqData: Record<string, Array<{ q: string; a: string }>> = {
  General: [
    { q: "What is this platform?", a: "An AI-powered website builder for everyone." },
    { q: "Who is it for?", a: "Anyone who wants a website without coding." },
  ],
  Billing: [
    { q: "Is there a free plan?", a: "Yes, with 1 project and core features." },
    { q: "Can I cancel anytime?", a: "Yes, no contracts or fees." },
  ],
  Technical: [
    { q: "Custom domain support?", a: "Yes, on all paid plans with free SSL." },
    { q: "Is it mobile-friendly?", a: "Every template is mobile-first." },
  ],
};

export default function Faq071(props: BlockProps) {
  const { theme, heading = "Tabbed FAQ with category switching" } = props;
  const [tab, setTab] = useState("General");

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">{heading}</h2>
        <div className="flex justify-center gap-2 mb-10">
          {categories.map(c => (
            <button key={c} onClick={() => setTab(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tab === c ? "text-white" : "opacity-60"}`} style={{ backgroundColor: tab === c ? theme?.primary ?? "#6366f1" : "transparent" }}>{c}</button>
          ))}
        </div>
        <div className="space-y-4">
          {(faqData[tab] ?? []).map((faq, i) => (
            <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm opacity-60">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
