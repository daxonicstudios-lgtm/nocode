import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta186(props: BlockProps) {
  const {
    theme,
    heading = "Got questions? We have answers",
    subheading = "Everything you need to know before getting started.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "Is there a free plan?", description: "Yes! Our free plan includes 3 projects and basic features." },
      { title: "Can I use my own domain?", description: "Absolutely. Connect any custom domain with one click." },
      { title: "Do I need coding skills?", description: "Not at all. Our AI handles everything technical for you." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-70">{subheading}</p>
        <div className="mt-8 space-y-3">
          {items.map((item, i) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-sm flex items-center justify-between hover:bg-gray-50 transition">
                {item.title}
                <span className="text-lg opacity-40 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4 text-sm opacity-70">{item.description}</div>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
