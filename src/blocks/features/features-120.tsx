"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Check, X } from "lucide-react";

export default function Features120(props: BlockProps) {
  const {
    theme,
    heading = "Compare Products",
    subheading = "Toggle between our two flagship offerings",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Drag-and-drop editor", value: "yes", label: "yes" },
      { title: "AI writing assistant", value: "yes", label: "no" },
      { title: "E-commerce tools", value: "no", label: "yes" },
      { title: "Custom domain", value: "yes", label: "yes" },
      { title: "Team collaboration", value: "3 seats", label: "unlimited" },
    ],
  } = props;

  const [active, setActive] = useState(0);
  const products = ["Website Builder", "Online Store"];

  const renderVal = (val: string | undefined) => {
    if (val === "yes") return <Check size={16} className="text-green-500" />;
    if (val === "no") return <X size={16} className="text-red-400" />;
    return <span className="text-sm">{val}</span>;
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
            {products.map((p, i) => (
              <button key={i} onClick={() => setActive(i)} className="px-5 py-2 rounded-full text-sm font-medium transition-colors" style={active === i ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : {}}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border divide-y" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4">
              <span className="text-sm font-medium">{item.title}</span>
              <span>{renderVal(active === 0 ? item.value : item.label)}</span>
            </div>
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
