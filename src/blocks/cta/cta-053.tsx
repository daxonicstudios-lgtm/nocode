import type { BlockProps } from "@/blocks/types";
import { Monitor } from "lucide-react";

export default function Cta053(props: BlockProps) {
  const {
    theme,
    heading = "See the difference for yourself",
    subheading = "Watch how teams save 20+ hours per week with our automation tools.",
    buttonText = "Request a Demo",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-8 px-8 py-3.5 rounded-lg text-white font-medium text-sm"
          style={{ backgroundColor: theme?.primary ?? "#059669" }}
        >
          {buttonText}
        </a>
        <div className="mt-12 w-full">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full rounded-2xl shadow-xl" />
          ) : (
            <div className="w-full aspect-[16/9] rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.muted ?? "#f0fdf4" }}>
              <Monitor className="w-20 h-20 opacity-20" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
