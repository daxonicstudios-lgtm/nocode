import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video003(props: BlockProps) {
  const { theme, heading = "The story behind the product", bodyText = "Watch the founders tell the 6-year journey from side project to category leader.", buttonText = "Watch the film", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-video rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#111" }}>
          {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : null}
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-white/90" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <p className="mt-4 text-base opacity-75">{bodyText}</p>
          <button className="mt-6 px-6 py-3 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
