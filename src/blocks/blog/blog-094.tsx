import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Blog094(props: BlockProps) {
  const {
    theme,
    heading = "Scaling Your Product Team Without Losing Speed",
    subheading = "Lessons from growing from 5 to 50 engineers while maintaining deployment velocity.",
    bodyText = "Every growing company hits the same inflection point: the processes that worked at five people break down at fifteen, and what works at fifteen fails at fifty. This article shares our experience restructuring teams around domains, adopting an internal platform model, and investing in developer experience tooling. We cover squad topology, communication patterns, and the metrics we track to ensure that adding people actually increases — rather than decreases — our shipping speed.",
    items = [
      { title: "Table of Contents", description: "Introduction" },
      { title: "", description: "The early stage: move fast" },
      { title: "", description: "Growing pains at 15 engineers" },
      { title: "", description: "The platform team approach" },
      { title: "", description: "Measuring output, not activity" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{heading}</h1>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <div className="mt-8 p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <p className="text-sm font-bold mb-3">{items[0]?.title || "Table of Contents"}</p>
          {items.slice(1).map((item, i) => (
            <a key={i} href="#" className="flex items-center gap-2 py-2 text-sm border-t hover:opacity-100 opacity-60" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary ?? "#6366f1" }} />
              {item.description}
            </a>
          ))}
        </div>
        <div className="aspect-[2/1] rounded-xl my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{bodyText}</div>
      </article>
    </section>
  );
}
