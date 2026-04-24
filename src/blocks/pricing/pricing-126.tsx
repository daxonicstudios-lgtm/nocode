import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Pricing126(props: BlockProps) {
  const {
    theme,
    heading = "Compare Plans",
    subheading = "See what each plan includes",
    bodyText,
    buttonText = "Choose Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$9/mo", description: "yes,yes,no,no,no" },
      { title: "Pro", value: "$29/mo", description: "yes,yes,yes,yes,no" },
      { title: "Enterprise", value: "$79/mo", description: "yes,yes,yes,yes,yes" },
    ],
  } = props;

  const features = ["Custom Domain", "SSL Certificate", "Analytics", "API Access", "Priority Support"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-10">{subheading}</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border rounded-xl overflow-hidden" style={{ borderColor: theme?.accent }}>
          <div className="p-6 hidden lg:flex flex-col justify-end">
            <p className="text-sm font-medium opacity-60 mb-4">Features</p>
            {features.map((f, i) => (
              <p key={i} className="py-3 text-sm border-t" style={{ borderColor: theme?.accent }}>{f}</p>
            ))}
          </div>
          {items.map((item, i) => {
            const vals = (item.description || "").split(",");
            return (
              <div key={i} className="p-6 border-t lg:border-t-0 lg:border-l" style={{ borderColor: theme?.accent }}>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-2xl font-extrabold mb-4" style={{ color: theme?.primary }}>{item.value}</p>
                {features.map((f, j) => (
                  <div key={j} className="py-3 flex items-center gap-2 text-sm border-t" style={{ borderColor: theme?.accent }}>
                    <span className="lg:hidden opacity-60">{f}:</span>
                    {vals[j] === "yes" ? <Check className="w-4 h-4" style={{ color: theme?.primary }} /> : <X className="w-4 h-4 opacity-30" />}
                  </div>
                ))}
                <a href={buttonUrl} className="mt-4 block text-center rounded-lg py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
