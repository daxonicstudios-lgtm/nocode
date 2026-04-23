import type { BlockProps } from "@/blocks/types";
import { Feather, Minus, Square, Circle, Triangle, Hexagon } from "lucide-react";

const icons = [Feather, Minus, Square, Circle, Triangle, Hexagon];

export default function Features047(props: BlockProps) {
  const {
    theme,
    heading = "Refined Simplicity",
    subheading = "Less noise, more clarity",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Clean Writing", description: "A distraction-free editor that puts your words first." },
      { title: "Minimal Layout", description: "Whitespace-driven design that breathes and flows naturally." },
      { title: "Quiet Alerts", description: "Thoughtful notifications that respect your focus time." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#222" }} className="py-20 px-4 sm:px-8 lg:py-28">
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-50">{subheading}</p>
        <h2 className="text-2xl sm:text-3xl font-light leading-snug max-w-md">{heading}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="space-y-4">
              <div className="w-full h-px opacity-20" style={{ backgroundColor: theme?.foreground ?? "#222" }} />
              <Icon className="w-5 h-5 opacity-40" style={{ color: theme?.primary ?? "#222" }} />
              <h3 className="text-sm font-semibold tracking-wide">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-50">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="max-w-4xl mx-auto mt-16">
          <a href={buttonUrl} className="text-sm font-medium border-b pb-1 opacity-70 hover:opacity-100 transition-opacity" style={{ borderColor: theme?.primary ?? "#222", color: theme?.primary ?? "#222" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
