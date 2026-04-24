"use client";
import type { BlockProps } from "@/blocks/types";
import { Search } from "lucide-react";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { title: "How do I reset my password?", description: "Go to Settings > Security > Reset Password." },
  { title: "Can I transfer my project?", description: "Yes, go to Project Settings > Transfer." },
  { title: "What file formats are supported?", description: "JPG, PNG, SVG, GIF for images and PDF for docs." },
  { title: "How do I cancel my subscription?", description: "Go to Billing > Manage Plan > Cancel." },
  { title: "Is there an API?", description: "Yes, Pro and Business plans include REST API access." },
];

export default function Faq076(props: BlockProps) {
  const { theme, heading = "FAQ with search/filter bar", items = DEFAULT_ITEMS } = props;
  const [query, setQuery] = useState("");
  const filtered = items.filter(f => !query || f.title?.toLowerCase().includes(query.toLowerCase()));

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{heading}</h2>
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
          <input type="text" placeholder="Search questions..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
        </div>
        <div className="space-y-3">
          {filtered.slice(0, 8).map((faq, i) => (
            <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <h3 className="font-semibold">{faq.title}</h3>
              <p className="mt-2 text-sm opacity-60">{faq.description}</p>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center opacity-40 py-8">No results found</p>}
        </div>
      </div>
    </section>
  );
}
