import type { BlockProps } from "@/blocks/types";
import { Check, Minus } from "lucide-react";

export default function Pricing127(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comparison",
    subheading = "Find the right plan for your needs",
    bodyText,
    buttonText = "Select",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Free", value: "$0", description: "yes,no,no,no" },
      { title: "Standard", value: "$19/mo", description: "yes,yes,yes,no" },
    ],
  } = props;

  const features = ["Unlimited Pages", "Custom Domain", "Remove Branding", "Team Access"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-10">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="hidden sm:block w-48 shrink-0 pt-28">
            {features.map((f, i) => (
              <p key={i} className="py-3 text-sm font-medium opacity-70">{f}</p>
            ))}
          </div>
          {items.map((item, i) => {
            const vals = (item.description || "").split(",");
            return (
              <div key={i} className="flex-1 rounded-xl border p-6" style={{ borderColor: i === 1 ? theme?.primary : theme?.accent }}>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-3xl font-extrabold mb-6" style={{ color: theme?.primary }}>{item.value}</p>
                {features.map((f, j) => (
                  <div key={j} className="py-3 flex items-center gap-2 text-sm border-t" style={{ borderColor: theme?.accent }}>
                    <span className="sm:hidden opacity-60 flex-1">{f}</span>
                    {vals[j] === "yes" ? <Check className="w-4 h-4" style={{ color: theme?.primary }} /> : <Minus className="w-4 h-4 opacity-30" />}
                  </div>
                ))}
                <a href={buttonUrl} className="mt-4 block text-center rounded-lg py-2.5 font-medium text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
