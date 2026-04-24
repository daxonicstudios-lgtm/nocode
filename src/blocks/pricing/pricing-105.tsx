import type { BlockProps } from "@/blocks/types";
import { TrendingDown } from "lucide-react";

export default function Pricing105(props: BlockProps) {
  const {
    theme,
    heading = "Pricing That Makes Sense",
    subheading = "Switch to annual and save up to 30%",
    bodyText,
    buttonText = "Choose Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lite", value: "$7", label: "$10", description: "3 pages, 500MB, email support" },
      { title: "Standard", value: "$21", label: "$30", description: "Unlimited pages, 5GB, chat support" },
      { title: "Premium", value: "$42", label: "$60", description: "Everything plus custom domain & SSL" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border-2 p-6 relative overflow-hidden" style={{ borderColor: theme?.accent }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div className="flex items-center gap-1 text-xs font-bold rounded-full px-2 py-1" style={{ backgroundColor: theme?.accent, color: theme?.primary }}>
                  <TrendingDown className="w-3 h-3" /> Save
                </div>
              </div>
              <p className="text-sm opacity-60 mb-4">{item.description}</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-black" style={{ color: theme?.primary }}>{item.value}</span>
                <span className="text-sm opacity-50 mb-1">/mo</span>
                <span className="text-sm line-through opacity-30 mb-1">{item.label}/mo</span>
              </div>
              <a href={buttonUrl} className="block text-center rounded-lg py-2.5 font-semibold text-white" style={{ backgroundColor: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
