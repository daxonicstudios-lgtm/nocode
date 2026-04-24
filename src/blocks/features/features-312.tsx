"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { ChevronDown, Rocket, Lightbulb, Cog } from "lucide-react";

const icons = [Rocket, Lightbulb, Cog];

export default function Features312(props: BlockProps) {
  const {
    theme,
    heading = "Tap to Expand",
    subheading = "Click any card to see the full story",
    items = [
      { title: "Quick Launch", description: "Go from idea to live site in minutes. Our guided setup walks you through every step, from choosing a template to connecting your domain." },
      { title: "Smart Suggestions", description: "AI analyzes your content and recommends layouts, color schemes, and copy improvements that boost engagement by up to 40%." },
      { title: "Custom Workflows", description: "Automate repetitive tasks with a visual workflow builder. Trigger emails, update records, and notify your team without writing code." },
    ],
  } = props;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} style={{ color: theme?.primary || "#6366f1" }} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                  <p className="text-sm opacity-60 leading-relaxed pl-8">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
