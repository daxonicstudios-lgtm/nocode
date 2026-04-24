import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Features118(props: BlockProps) {
  const {
    theme,
    heading = "How We Rate",
    subheading = "Independent review scores compared",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ease of Use", value: "5", label: "3" },
      { title: "Design Quality", value: "5", label: "4" },
      { title: "Customer Support", value: "4", label: "2" },
      { title: "Value for Money", value: "5", label: "3" },
      { title: "Performance", value: "4", label: "3" },
    ],
  } = props;

  const renderStars = (count: number, filled: boolean) => (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < count ? (filled ? theme?.primary || "#6366f1" : "#9ca3af") : "none"} stroke={i < count ? (filled ? theme?.primary || "#6366f1" : "#9ca3af") : "#d1d5db"} />
      ))}
    </div>
  );

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm font-semibold">
          <div>Category</div>
          <div className="text-center" style={{ color: theme?.primary || "#6366f1" }}>Us</div>
          <div className="text-center opacity-50">Avg. Competitor</div>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 items-center py-3 border-t" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <span className="text-sm font-medium">{item.title}</span>
              <div className="flex justify-center">{renderStars(Number(item.value) || 0, true)}</div>
              <div className="flex justify-center">{renderStars(Number(item.label) || 0, false)}</div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
