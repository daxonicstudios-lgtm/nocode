import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Pricing122(props: BlockProps) {
  const {
    theme,
    heading = "Flexible Plans",
    subheading = "Hover to explore each plan",
    bodyText,
    buttonText = "Select",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Basic", value: "$10/mo", description: "Great for personal projects" },
      { title: "Pro", value: "$30/mo", description: "Best for growing businesses" },
      { title: "Max", value: "$70/mo", description: "Full power, no limits" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" style={{ borderColor: theme?.accent }}>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 mb-6">{item.description}</p>
              <p className="text-3xl font-black mb-6" style={{ color: theme?.primary }}>{item.value}</p>
              <a href={buttonUrl} className="flex items-center gap-2 font-medium transition-colors" style={{ color: theme?.primary }}>
                {buttonText}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
