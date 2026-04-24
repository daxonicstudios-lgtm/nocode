import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta188(props: BlockProps) {
  const {
    theme,
    heading = "Still not sure? Let us help",
    subheading = "Browse common questions or talk to our team directly.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Talk to Us",
    secondaryButtonUrl = "#",
    items = [
      { title: "What makes this different?", description: "Our AI understands context and builds sites that actually convert." },
      { title: "Is there a money-back guarantee?", description: "Yes, 30-day full refund guarantee on all paid plans." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-semibold text-sm border border-current opacity-60 hover:opacity-100 transition">
              {secondaryButtonText}
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {items.map((item, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-4 py-3 font-medium text-sm">{item.title}</summary>
              <div className="px-4 pb-3 text-sm opacity-70">{item.description}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
