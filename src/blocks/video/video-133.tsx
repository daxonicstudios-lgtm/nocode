import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video133(props: BlockProps) {
  const { theme, heading = "Demo Video", subheading = "See our platform in action.", bodyText = "Watch our quick overview to see how easy it is to build your website.", buttonText = "Watch Now", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60">{bodyText}</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-sm" style={{ color: theme?.primary ?? "#6366f1" }}>
            <Play className="w-4 h-4" /> {buttonText}
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
            {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover" />}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/90 shadow-lg">
                <Play className="w-5 h-5 ml-0.5" style={{ color: theme?.primary ?? "#6366f1" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
