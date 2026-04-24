import type { BlockProps } from "@/blocks/types";
import { Music, Rss } from "lucide-react";

export default function Cta215(props: BlockProps) {
  const {
    theme,
    heading = "Available on all platforms",
    subheading = "Listen wherever you get your podcasts. New episodes every Monday.",
    buttonText = "Listen on Apple Podcasts",
    buttonUrl = "#",
    secondaryButtonText = "RSS Feed",
    secondaryButtonUrl = "#",
    items = [
      { title: "142", description: "Episodes" },
      { title: "2.1M", description: "Downloads" },
      { title: "4.9", description: "Rating" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Music className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#a855f7" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 flex justify-center gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#a855f7" }}>{item.title}</p>
              <p className="text-xs opacity-50 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#a855f7" }}>
            <Music className="w-4 h-4" /> {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            <Rss className="w-4 h-4" /> {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
