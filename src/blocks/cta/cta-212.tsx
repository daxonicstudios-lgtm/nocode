import type { BlockProps } from "@/blocks/types";
import { Mic, PlayCircle } from "lucide-react";

export default function Cta212(props: BlockProps) {
  const {
    theme,
    heading = "Start your podcasting journey",
    subheading = "Record, edit, and publish — all from one platform. Join 50,000+ creators.",
    buttonText = "Start Recording",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: theme?.foreground ?? "#eaeaea" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8" style={{ backgroundColor: "#16213e" }}>
          <div className="shrink-0 w-32 h-32 rounded-2xl overflow-hidden flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#e94560" }}>
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <Mic className="w-12 h-12 text-white" />
            )}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-2 text-sm opacity-60">{subheading}</p>
            <a href={buttonUrl} className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#e94560" }}>
              <PlayCircle className="w-4 h-4" /> {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
