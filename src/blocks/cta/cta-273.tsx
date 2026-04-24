import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta273(props: BlockProps) {
  const {
    theme,
    heading = "All-in-One Solution",
    buttonText = "Explore Features",
    buttonUrl = "#",
    items = [
      { title: "Drag & Drop" }, { title: "AI Assistant" }, { title: "Version Control" },
      { title: "Team Chat" }, { title: "File Storage" }, { title: "Custom Branding" },
      { title: "Export" }, { title: "Scheduling" }, { title: "Payments" }, { title: "Reports" },
    ],
  } = props;

  return (
    <section className="py-16" style={{ backgroundColor: theme?.background ?? "#f9fafb", color: theme?.foreground ?? "#111827" }}>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4 w-max">
          {items.map((item, i) => (
            <span key={i} className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1", opacity: 0.7 + (i % 3) * 0.1 }}>
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-10 max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
