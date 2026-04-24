import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Pricing121(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Plan",
    subheading = "All plans include a 7-day free trial",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$12", description: "5 projects, 2GB, email support" },
      { title: "Professional", value: "$32", description: "50 projects, 25GB, priority support" },
      { title: "Enterprise", value: "$72", description: "Unlimited, 500GB, dedicated manager" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer" style={{ borderColor: theme?.accent }}>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm opacity-60 mb-4">{item.description}</p>
              <p className="text-4xl font-extrabold mb-1" style={{ color: theme?.primary }}>{item.value}</p>
              <p className="text-sm opacity-50 mb-6">per month</p>
              <ul className="space-y-2 mb-6">
                {(item.description || "").split(", ").map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f}
                  </li>
                ))}
              </ul>
              <a href={buttonUrl} className="block text-center rounded-lg py-3 font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: theme?.primary }}>
                {buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
