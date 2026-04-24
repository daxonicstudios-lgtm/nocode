import type { BlockProps } from "@/blocks/types";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";

export default function Features227(props: BlockProps) {
  const {
    theme,
    heading = "Ship Products Faster",
    subheading = "One powerful workspace with supporting quick actions at your fingertips",
    bodyText = "Our workspace consolidates every tool your team needs into a single, streamlined interface. No more tab-switching, no more context loss — just focused productivity from start to finish.",
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant previews" },
      { title: "One-click deploy" },
      { title: "Auto-scaling" },
      { title: "Version control" },
      { title: "Team sharing" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 rounded-2xl p-8 sm:p-10" style={{ backgroundColor: `${primary}06` }}>
          <Rocket size={32} className="mb-4" style={{ color: primary }} />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
          <p className="opacity-60 leading-relaxed mb-6">{bodyText}</p>
          {buttonText && (
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText} <ArrowRight size={16} />
            </a>
          )}
        </div>
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-40 mb-4">Quick Features</h3>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={16} style={{ color: primary }} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
