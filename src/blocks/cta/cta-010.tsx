import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

export default function Cta010(props: BlockProps) {
  const {
    theme,
    heading = "Your dream site, one click away",
    subheading = "Choose from hundreds of templates and customize every detail to match your brand.",
    buttonText = "Browse Templates",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl aspect-[3/2] overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-20 text-sm">Template Preview</div>
          )}
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60 leading-relaxed">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all" style={{ color: theme?.primary ?? "#2563eb" }}>
            {buttonText} <MoveRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
