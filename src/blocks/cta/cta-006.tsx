import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta006(props: BlockProps) {
  const {
    theme,
    heading = "Build websites without code",
    subheading = "Drag, drop, and publish. Your site goes live in minutes, not months.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-4 text-base opacity-60 leading-relaxed">{subheading}</p>
          <a
            href={buttonUrl}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-video" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-30 text-sm">Image Preview</div>
          )}
        </div>
      </div>
    </section>
  );
}
