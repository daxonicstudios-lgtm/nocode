import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "On Taste in Software", description: "What separates competent engineering from elegant engineering. A reflection on craft.", label: "Vol. 1" },
  { title: "The Second System Effect", description: "Why rewrites fail and how to avoid the trap that claims so many teams.", label: "Vol. 2" },
];

export default function Blog113(props: BlockProps) {
  const {
    theme,
    heading = "Journal",
    subheading = "Collected essays on building software",
    bodyText = "Long-form writing on engineering, design, and the space between.",
    buttonText = "Read",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#f5f5f0", color: theme?.foreground ?? "#1a1a1a" }}>
      <div className="max-w-5xl mx-auto">
        <div className="border-b-2 pb-6 mb-6" style={{ borderColor: theme?.foreground ?? "#1a1a1a" }}>
          <h2 className="text-5xl sm:text-6xl font-black italic tracking-tight">{heading}</h2>
          <p className="mt-2 text-sm opacity-40">{subheading}</p>
        </div>
        <p className="text-base opacity-40 mb-16 max-w-lg">{bodyText}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.slice(0, 2).map((item, i) => (
            <article key={i} className="group">
              <div
                className="h-64 mb-6 border"
                style={{
                  borderColor: `${theme?.foreground ?? "#1a1a1a"}15`,
                  backgroundColor: theme?.secondary ?? "#e5e5e0",
                }}
              />
              <p className="text-xs font-mono uppercase tracking-[0.2em] opacity-30 mb-2">
                {String(item.label)}
              </p>
              <a href={buttonUrl}>
                <h3 className="text-3xl font-black tracking-tight group-hover:underline decoration-2">
                  {item.title}
                </h3>
              </a>
              <p className="mt-3 text-base opacity-50 leading-relaxed">{item.description}</p>
              <a
                href={buttonUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: theme?.primary ?? "#b91c1c" }}
              >
                {buttonText} <MoveRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
