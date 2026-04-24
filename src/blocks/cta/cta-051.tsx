import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Layers } from "lucide-react";

export default function Cta051(props: BlockProps) {
  const {
    theme,
    heading = "Bring your ideas to life",
    subheading = "Our platform gives you the tools to design, build, and launch faster than ever.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-4 text-lg opacity-70 max-w-md">{subheading}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-lg text-white font-medium text-sm"
            style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full rounded-2xl" />
          ) : (
            <div className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.muted ?? "#f1f5f9" }}>
              <Layers className="w-16 h-16 opacity-30" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
