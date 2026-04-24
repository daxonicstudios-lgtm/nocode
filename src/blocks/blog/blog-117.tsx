import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Against Best Practices", description: "When following convention becomes a crutch that stifles innovation and creative problem solving.", label: "Contrarian" },
  { title: "The 10x Myth", description: "Deconstructing the toxic idea of the lone genius programmer and why teams win.", label: "Culture" },
];

export default function Blog117(props: BlockProps) {
  const {
    theme,
    heading = "Op-Ed",
    subheading = "Strong opinions, loosely held",
    buttonText = "Read opinion",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#171717" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-4 mb-4">
          <h2 className="text-7xl sm:text-9xl font-black leading-none tracking-tighter">
            {heading}
          </h2>
          <div
            className="h-1 flex-1 mb-4"
            style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
          />
        </div>
        <p className="text-sm opacity-40 mb-16">{subheading}</p>
        {items.slice(0, 2).map((item, i) => (
          <article key={i} className="mb-16 last:mb-0">
            <span className="text-xs font-mono uppercase tracking-[0.3em] opacity-25">
              {String(item.label)}
            </span>
            <a href={buttonUrl} className="block group">
              <h3 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-none group-hover:opacity-70 transition-opacity">
                {item.title}
              </h3>
            </a>
            <p className="mt-4 text-lg opacity-50 max-w-2xl leading-relaxed">
              {item.description}
            </p>
            <a
              href={buttonUrl}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme?.primary ?? "#ef4444" }}
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
            {i < 1 && (
              <hr
                className="mt-16 border-t"
                style={{ borderColor: `${theme?.foreground ?? "#171717"}08` }}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
