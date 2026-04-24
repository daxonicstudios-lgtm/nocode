import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Art of Slow Design", description: "Why intentional, unhurried design produces lasting work that resonates with audiences.", label: "Perspectives", value: "April 2026" },
  { title: "Crafting Digital Experiences", description: "The intersection of technology and artistry in modern web design.", label: "Craft", value: "March 2026" },
  { title: "On Simplicity and Restraint", description: "The discipline of removing until only the essential remains.", label: "Philosophy", value: "February 2026" },
];

export default function Blog171(props: BlockProps) {
  const { theme, heading = "Journal", subheading = "Thoughts on design, craft, and intentional making", items = DEFAULT_ITEMS, buttonText = "Continue Reading", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#e8e4de" }} className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] mb-4 opacity-50" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-20" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        <div className="space-y-16">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
                <span className="flex-1 h-px opacity-20" style={{ backgroundColor: theme?.foreground ?? "#e8e4de" }} />
                <span className="text-xs opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.value}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light leading-snug" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-3 text-sm opacity-50 max-w-2xl leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              <a href={buttonUrl} className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
                {buttonText} <ArrowRight className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
