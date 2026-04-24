import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Pricing104(props: BlockProps) {
  const {
    theme,
    heading = "Unbeatable Pricing",
    subheading = "Save big on annual plans",
    bodyText,
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hobby", value: "$0", label: "Free forever", description: "1 site, basic features" },
      { title: "Professional", value: "$16", label: "$20/mo — save 20%", description: "10 sites, analytics, priority support" },
      { title: "Agency", value: "$45", label: "$58/mo — save 22%", description: "Unlimited sites, white-label, API" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl p-6 sm:p-8 flex flex-col" style={{ backgroundColor: i === 2 ? theme?.primary : theme?.accent, color: i === 2 ? "#fff" : theme?.foreground }}>
              {i === 2 && <Sparkles className="w-5 h-5 mb-3 text-yellow-300" />}
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-70 mb-4">{item.description}</p>
              <p className="text-4xl font-extrabold mb-1">{item.value}<span className="text-base font-normal opacity-60">/mo</span></p>
              <p className="text-xs opacity-60 mb-6">{item.label}</p>
              <a href={buttonUrl} className="mt-auto text-center rounded-lg py-3 font-semibold" style={{ backgroundColor: i === 2 ? "#fff" : theme?.primary, color: i === 2 ? theme?.primary : "#fff" }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
