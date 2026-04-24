import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta052(props: BlockProps) {
  const {
    theme,
    heading = "Start building today",
    subheading = "Create stunning websites in minutes with our drag-and-drop editor.",
    buttonText = "Try It Now",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full rounded-xl shadow-lg" />
          ) : (
            <div className="w-full aspect-video rounded-xl flex items-center justify-center" style={{ backgroundColor: theme?.muted ?? "#e2e8f0" }}>
              <Sparkles className="w-14 h-14 opacity-20" />
            </div>
          )}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
          <a
            href={buttonUrl}
            className="inline-block mt-6 px-8 py-3 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
