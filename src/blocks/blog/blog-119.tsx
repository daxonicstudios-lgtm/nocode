import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Attention is Currency", description: "In the attention economy, every pixel you place is a transaction with your users.", label: "Featured" },
  { title: "The Unbundling of SaaS", description: "Vertical tools are winning against horizontal platforms across every industry.", label: "Analysis" },
  { title: "Building in Public", description: "Transparency as a growth strategy for indie makers and small teams.", label: "Playbook" },
  { title: "Platform Risk", description: "When your entire business depends on someone else's API and terms of service.", label: "Warning" },
];

export default function Blog119(props: BlockProps) {
  const {
    theme,
    heading = "The Broadsheet",
    subheading = "All the news that matters in tech",
    buttonText = "Read full story",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#fefce8", color: theme?.foreground ?? "#1c1917" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-6xl sm:text-8xl font-serif font-bold mb-2">
          {heading}
        </h2>
        <p className="text-center text-sm opacity-40 mb-4">{subheading}</p>
        <hr className="border-t-2 mb-2" style={{ borderColor: theme?.foreground ?? "#1c1917" }} />
        <hr className="border-t mb-12" style={{ borderColor: `${theme?.foreground ?? "#1c1917"}30` }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {items.slice(0, 4).map((item, i) => (
            <article key={i} className={i === 0 ? "md:col-span-2" : ""}>
              <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-30">
                {String(item.label)}
              </span>
              <a href={buttonUrl}>
                <h3 className={`mt-1 font-serif font-bold hover:underline ${i === 0 ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"}`}>
                  {item.title}
                </h3>
              </a>
              <p className={`mt-2 opacity-50 leading-relaxed ${i === 0 ? "text-lg max-w-3xl" : "text-sm"}`}>
                {item.description}
              </p>
              {i === 0 && (
                <a
                  href={buttonUrl}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: theme?.primary ?? "#b91c1c" }}
                >
                  {buttonText} <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {i === 0 && <hr className="mt-10 border-t" style={{ borderColor: `${theme?.foreground ?? "#1c1917"}15` }} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
