import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta242(props: BlockProps) {
  const {
    theme,
    heading = "Ready to take the next step?",
    subheading = "Pick the action that fits your needs right now.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Book a Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "Watch a Walkthrough", url: "#" },
      { title: "Download Case Study", url: "#" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}>
            {secondaryButtonText}
          </a>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {items.map((item, i) => (
            <a key={i} href={item.url ?? "#"} className="text-sm underline underline-offset-4 opacity-60 hover:opacity-100">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
