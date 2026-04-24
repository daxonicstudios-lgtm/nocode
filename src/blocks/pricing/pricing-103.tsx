import type { BlockProps } from "@/blocks/types";
import { Percent, ArrowRight } from "lucide-react";

export default function Pricing103(props: BlockProps) {
  const {
    theme,
    heading = "Start Saving Today",
    subheading = "Limited time offer",
    bodyText = "Lock in these rates before they increase. Annual plans include two months free.",
    buttonText = "Claim Discount",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Personal", value: "$8", label: "$10/mo", description: "Save $24/year" },
      { title: "Team", value: "$22", label: "$28/mo", description: "Save $72/year" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: theme?.primary }}>{subheading}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-60 max-w-lg mx-auto">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl p-8 border" style={{ borderColor: theme?.accent }}>
              <div className="flex items-center gap-2 mb-4">
                <Percent className="w-5 h-5" style={{ color: theme?.primary }} />
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent, color: theme?.primary }}>
                  {item.description}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold" style={{ color: theme?.primary }}>{item.value}</span>
                <span className="text-sm opacity-50">/mo</span>
                <span className="text-sm line-through opacity-30">{item.label}</span>
              </div>
              <a href={buttonUrl} className="inline-flex items-center gap-2 font-medium" style={{ color: theme?.primary }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
