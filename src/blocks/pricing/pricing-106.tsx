import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Pricing106(props: BlockProps) {
  const {
    theme,
    heading = "Pick a Plan",
    subheading = "All plans include a 14-day free trial",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$9/mo", description: "1 user, 3 projects, community support" },
      { title: "Professional", value: "$29/mo", description: "5 users, unlimited projects, priority support" },
      { title: "Business", value: "$79/mo", description: "25 users, advanced analytics, dedicated manager" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{heading}</h2>
          <p className="text-sm opacity-60">{subheading}</p>
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderColor: theme?.accent }}>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: theme?.primary }} />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:shrink-0">
                <span className="font-bold text-lg" style={{ color: theme?.primary }}>{item.value}</span>
                <a href={buttonUrl} className="rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
