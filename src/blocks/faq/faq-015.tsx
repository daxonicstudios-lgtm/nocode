import type { BlockProps } from "@/blocks/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { title: "How do I get started?", description: "Sign up for free, describe your website, and our AI builds it for you in minutes." },
  { title: "Can I customize the design?", description: "Yes, use our drag-and-drop editor to change colors, text, images, and layout." },
  { title: "Is there a free plan?", description: "Yes, the free plan includes 1 project with all core features." },
  { title: "How do I publish my site?", description: "Click Publish in the editor. Your site goes live on a custom subdomain instantly." },
  { title: "Can I use my own domain?", description: "Yes, all paid plans support custom domains with automatic SSL." },
];

export default function Faq015(props: BlockProps) {
  const { theme, heading = "Accordion FAQ with expand/collapse", subheading = "Everything you need to know", items = DEFAULT_ITEMS } = props;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-2">
          {items.slice(0, 6).map((faq, i) => (
            <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium">{faq.title}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} style={{ color: theme?.primary }} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm opacity-70 leading-relaxed">{faq.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
