import type { BlockProps } from "@/blocks/types";
import { Play, ArrowRight } from "lucide-react";

export default function Cta072(props: BlockProps) {
  const {
    theme,
    heading = "A better way to manage projects",
    subheading = "Our customers complete projects 3x faster. See why.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden" style={{ backgroundColor: theme?.muted ?? "#111827" }}>
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/60">
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
