import type { BlockProps } from "@/blocks/types";
import { GraduationCap, BookOpen, Clock, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Science of Effective Studying", description: "Spaced repetition, active recall, and other evidence-based learning techniques.", label: "Study Skills", value: "8 min" },
  { title: "Online Learning in 2026", description: "How AI tutors and adaptive platforms are reshaping education at every level.", label: "EdTech", value: "6 min" },
  { title: "Teaching Critical Thinking", description: "Practical frameworks for developing analytical skills in students of all ages.", label: "Pedagogy", value: "10 min" },
];

export default function Blog148(props: BlockProps) {
  const {
    theme,
    heading = "Education Hub",
    subheading = "Insights for learners and educators",
    buttonText = "Start reading",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#eff6ff", color: theme?.foreground ?? "#1e3a5f" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <GraduationCap className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#2563eb" }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#2563eb" }} />
                <span className="flex items-center gap-1 text-xs opacity-40">
                  <Clock className="w-3 h-3" />
                  {String(item.value)}
                </span>
              </div>
              <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#2563eb" }}>
                {String(item.label)}
              </span>
              <h3 className="mt-1 text-lg font-bold group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">
                {item.description}
              </p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: theme?.primary ?? "#2563eb" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
