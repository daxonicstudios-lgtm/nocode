import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video001(props: BlockProps) {
  const { theme, heading = "See it in action", subheading = "A 90-second tour of how it works.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-3 text-sm opacity-70">{subheading}</p>
        <button className="relative mt-10 w-full aspect-video rounded-2xl overflow-hidden group" style={{ backgroundColor: theme?.secondary ?? "#0f172a" }}>
          {imageUrl ? <img src={imageUrl} alt="" className="w-full h-full object-cover" /> : null}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
