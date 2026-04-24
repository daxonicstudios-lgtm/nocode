import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Craft of Naming Things", description: "Variables, products, companies — why naming is the hardest problem in computer science and business.", label: "Essay", value: "2,400 words" },
  { title: "Invisible Design", description: "The best interfaces are the ones users never notice. A study in restraint and intentional simplicity.", label: "Design", value: "1,800 words" },
  { title: "On Technical Debt", description: "Reframing debt as investment: when shortcuts are actually the right call for your team.", label: "Engineering", value: "3,100 words" },
];

export default function Blog118(props: BlockProps) {
  const {
    theme,
    heading = "Long Form",
    subheading = "In-depth essays for thoughtful readers",
    buttonText = "Read essay",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#f8f8f6", color: theme?.foreground ?? "#262626" }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="border-t-4 border-b pt-4 pb-3 mb-6"
          style={{ borderTopColor: theme?.primary ?? "#000", borderBottomColor: `${theme?.foreground ?? "#262626"}15` }}
        >
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.2em]">{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-20">{subheading}</p>
        {items.slice(0, 3).map((item, i) => (
          <article
            key={i}
            className="py-10 border-b"
            style={{ borderColor: `${theme?.foreground ?? "#262626"}10` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="text-6xl font-black opacity-10 leading-none sm:w-24 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest opacity-30">
                    {String(item.label)}
                  </span>
                  <span className="text-xs opacity-20">{String(item.value)}</span>
                </div>
                <a href={buttonUrl}>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight hover:underline">
                    {item.title}
                  </h3>
                </a>
                <p className="mt-2 text-base opacity-50 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={buttonUrl}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: theme?.primary ?? "#b91c1c" }}
                >
                  {buttonText} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
