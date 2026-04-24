import type { BlockProps } from "@/blocks/types";
import { Volume2, SkipForward, SkipBack } from "lucide-react";

export default function Cta213(props: BlockProps) {
  const {
    theme,
    heading = "Ep. 42: Scaling Your Startup",
    subheading = "With Sarah Chen, CEO of Growthly",
    buttonText = "Subscribe to Podcast",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
          <div className="p-6 text-center" style={{ backgroundColor: theme?.muted ?? "#f9fafb" }}>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-50">Now Playing</p>
            <h3 className="mt-2 text-lg font-bold">{heading}</h3>
            <p className="text-sm opacity-60">{subheading}</p>
            <div className="mt-4 w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20` }}>
              <div className="h-full w-1/3 rounded-full" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }} />
            </div>
            <div className="flex items-center justify-between text-xs opacity-50 mt-1">
              <span>12:34</span><span>38:20</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6">
              <SkipBack className="w-5 h-5 opacity-60" />
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
                <Volume2 className="w-5 h-5" />
              </button>
              <SkipForward className="w-5 h-5 opacity-60" />
            </div>
          </div>
          <div className="p-4 text-center">
            <a href={buttonUrl} className="inline-block w-full py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
