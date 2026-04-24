import type { BlockProps } from "@/blocks/types";
import { Check, ArrowRight } from "lucide-react";

export default function Cta041(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need to succeed",
    subheading = "One platform, zero compromises.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    items = [
      { title: "Unlimited projects" },
      { title: "Custom domains" },
      { title: "24/7 priority support" },
      { title: "Advanced analytics" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <ul className="space-y-4">
          {items.slice(0, 4).map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: (theme?.primary ?? "#2563eb") + "15", color: theme?.primary ?? "#2563eb" }}>
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-medium">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
