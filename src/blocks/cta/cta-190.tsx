import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta190(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need to know",
    buttonText = "Get Started Now",
    buttonUrl = "#",
    items = [
      { title: "Is there a free trial?", description: "Yes, 14 days free on all plans with full access." },
      { title: "Can I switch plans later?", description: "Upgrade or downgrade at any time from your dashboard." },
      { title: "What payment methods do you accept?", description: "We accept all major cards, mobile money, and bank transfers." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8 text-center" style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#fff" }}>
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {items.map((item, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer px-6 py-4 font-medium text-sm flex justify-between items-center hover:bg-gray-50 transition">
                  {item.title}
                  <span className="opacity-40 group-open:rotate-45 transition-transform text-lg">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm opacity-70">{item.description}</div>
              </details>
            ))}
          </div>
          <div className="p-6 text-center border-t border-gray-200">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
