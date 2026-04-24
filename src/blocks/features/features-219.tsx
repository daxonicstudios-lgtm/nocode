"use client";

import type { BlockProps } from "@/blocks/types";
import { ChevronDown, Database, Workflow, Shield, Cpu } from "lucide-react";
import { useState } from "react";

const icons = [Database, Workflow, Shield, Cpu];

export default function Features219(props: BlockProps) {
  const {
    theme,
    heading = "Explore Our Features",
    subheading = "Click to expand and learn more about each capability",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Data Pipeline", description: "Ingest, transform, and load data from any source with visual pipeline builders and real-time monitoring." },
      { title: "Workflow Engine", description: "Automate multi-step processes with conditional logic, retries, and parallel execution support." },
      { title: "Access Control", description: "Define fine-grained permissions with role hierarchies, SSO integration, and audit logging." },
      { title: "ML Operations", description: "Train, deploy, and monitor machine learning models with built-in experiment tracking." },
    ],
  } = props;

  const [open, setOpen] = useState<number | null>(null);
  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-10 max-w-lg">{subheading}</p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: isOpen ? primary : (theme?.primary ? `${theme.primary}20` : "#e5e7eb") }}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-3 p-4 text-left" style={{ color: theme?.foreground }}>
                  <Icon size={20} style={{ color: primary }} />
                  <span className="font-semibold flex-1">{item.title}</span>
                  <ChevronDown size={18} className="transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: primary }} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm opacity-60 leading-relaxed pl-8">{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
