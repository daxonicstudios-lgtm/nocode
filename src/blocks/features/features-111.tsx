import React from "react";
import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Features111(props: BlockProps) {
  const {
    theme,
    heading = "Why We're Different",
    subheading = "See how we compare to the competition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "No-code builder", value: "yes", label: "no" },
      { title: "AI-powered design", value: "yes", label: "no" },
      { title: "Mobile-first editor", value: "yes", label: "no" },
      { title: "Free custom domain", value: "yes", label: "limited" },
      { title: "24/7 live support", value: "yes", label: "email only" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-3 gap-0 rounded-xl overflow-hidden border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          <div className="p-4 font-semibold text-sm border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>Feature</div>
          <div className="p-4 font-semibold text-sm text-center border-b text-white" style={{ backgroundColor: theme?.primary || "#6366f1", borderColor: theme?.accent || "#e5e7eb" }}>Us</div>
          <div className="p-4 font-semibold text-sm text-center border-b opacity-60" style={{ borderColor: theme?.accent || "#e5e7eb" }}>Others</div>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div className="p-4 text-sm border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>{item.title}</div>
              <div className="p-4 text-center border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                {item.value === "yes" ? <Check size={18} className="mx-auto text-green-500" /> : <span className="text-sm">{item.value}</span>}
              </div>
              <div className="p-4 text-center border-b" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                {item.label === "no" ? <X size={18} className="mx-auto text-red-400" /> : <span className="text-sm opacity-60">{item.label}</span>}
              </div>
            </React.Fragment>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
