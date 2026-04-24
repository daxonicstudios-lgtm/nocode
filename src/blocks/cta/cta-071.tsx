import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Cta071(props: BlockProps) {
  const {
    theme,
    heading = "See how it works",
    subheading = "Watch our 90-second product tour to see the platform in action.",
    buttonText = "Watch Video",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 relative w-full aspect-video rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.muted ?? "#1e293b" }}>
          <a href={buttonUrl} className="absolute inset-0 flex items-center justify-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-white/90 shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 ml-1" style={{ color: theme?.primary ?? "#2563eb" }} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
