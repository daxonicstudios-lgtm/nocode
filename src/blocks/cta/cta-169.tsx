import type { BlockProps } from "@/blocks/types";
import { Star, ThumbsUp } from "lucide-react";

export default function Cta169(props: BlockProps) {
  const {
    theme,
    heading = "Highly rated across every platform",
    subheading = "Consistent 5-star experiences, backed by real data.",
    buttonText = "Try It Yourself",
    buttonUrl = "#",
  } = props;

  const platforms = [
    { name: "Product Hunt", rating: "4.9", count: "1.2k" },
    { name: "Capterra", rating: "4.8", count: "890" },
    { name: "G2", rating: "4.9", count: "2.1k" },
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <ThumbsUp className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div key={p.name} className="p-4 rounded-xl border border-gray-200">
              <p className="font-semibold text-sm">{p.name}</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs opacity-60 mt-1">{p.rating}/5 ({p.count} reviews)</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
