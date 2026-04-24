import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

export default function Cta042(props: BlockProps) {
  const {
    theme,
    heading = "Start building for free",
    subheading = "No credit card required. Upgrade anytime.",
    buttonText = "Create Free Account",
    buttonUrl = "#",
    items = [
      { title: "Drag-and-drop editor" },
      { title: "Responsive templates" },
      { title: "SEO optimization tools" },
      { title: "Team collaboration" },
      { title: "One-click publishing" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-black">{heading}</h2>
        <p className="mt-2 text-sm opacity-50">{subheading}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {items.slice(0, 5).map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Check className="w-4 h-4" style={{ color: theme?.primary ?? "#10b981" }} />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-xl text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
