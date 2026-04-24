import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight } from "lucide-react";

export default function Cta168(props: BlockProps) {
  const {
    theme,
    heading = "See what our users are saying",
    bodyText = "This platform changed the way I build websites. Absolutely game-changing for my business.",
    buttonText = "Read All Reviews",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center rounded-2xl border border-gray-200 p-8" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
        <div className="flex justify-center gap-0.5 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-lg italic opacity-80">&ldquo;{bodyText}&rdquo;</blockquote>
        <p className="mt-3 text-sm font-semibold">— Amara K., Business Owner</p>
        <h3 className="mt-6 text-xl sm:text-2xl font-bold">{heading}</h3>
        <a href={buttonUrl} className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
