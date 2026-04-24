import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Pricing107(props: BlockProps) {
  const {
    theme,
    heading = "Straightforward Plans",
    subheading = "No hidden fees, cancel anytime",
    bodyText,
    buttonText = "Select",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Free", value: "$0", description: "Basic features for personal use" },
      { title: "Plus", value: "$12/mo", description: "More storage and team collaboration" },
      { title: "Pro", value: "$36/mo", description: "Advanced tools and integrations" },
      { title: "Enterprise", value: "Custom", description: "Tailored solutions for your org" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">{heading}</h2>
        <p className="text-center text-sm opacity-60 mb-10">{subheading}</p>
        <div className="divide-y" style={{ borderColor: theme?.accent }}>
          {items.map((item, i) => (
            <div key={i} className="py-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-bold" style={{ color: theme?.primary }}>{item.value}</span>
                <a href={buttonUrl} className="rounded-full p-2" style={{ backgroundColor: theme?.accent }}>
                  <ArrowRight className="w-4 h-4" style={{ color: theme?.primary }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
