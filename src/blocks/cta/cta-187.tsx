import type { BlockProps } from "@/blocks/types";
import { HelpCircle } from "lucide-react";

export default function Cta187(props: BlockProps) {
  const {
    theme,
    heading = "Frequently asked questions",
    buttonText = "Contact Support",
    buttonUrl = "#",
    items = [
      { title: "How long does setup take?", description: "Most users are up and running in under 5 minutes." },
      { title: "Can I cancel anytime?", description: "Yes, no contracts or cancellation fees." },
      { title: "Is my data secure?", description: "We use bank-level encryption on all data." },
    ],
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-7 h-7 opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <details key={i} className="group bg-white/5 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-medium text-sm flex items-center justify-between">
                {item.title}
                <span className="text-lg opacity-40 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4 text-sm opacity-60">{item.description}</div>
            </details>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-6 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
