import type { BlockProps } from "@/blocks/types";
import { Music, Headphones, PlayCircle, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Evolution of Afrobeats", description: "How West African rhythms conquered global charts and streaming platforms worldwide.", label: "Genre Spotlight" },
  { title: "Home Studio Setup Guide", description: "Professional-quality recordings from a bedroom studio under five hundred dollars.", label: "Production" },
  { title: "Music Theory for Producers", description: "Scales, chords, and progressions every beatmaker should know by heart.", label: "Theory" },
];

export default function Blog150(props: BlockProps) {
  const {
    theme,
    heading = "Sound & Story",
    subheading = "Music culture, production, and reviews",
    buttonText = "Listen & Read",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Headphones className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#a855f7" }} />
          <h2 className="text-4xl font-black">{heading}</h2>
          <p className="mt-2 text-sm opacity-40">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group block rounded-2xl border p-5 hover:bg-white/5 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="aspect-square rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, ${theme?.primary ?? "#a855f7"}30, ${theme?.accent ?? "#ec4899"}20)`,
                }}
              >
                <PlayCircle className="w-12 h-12 opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                <Music className="w-3 h-3" />
                {String(item.label)}
              </div>
              <h3 className="text-lg font-bold group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-1 text-sm opacity-40 line-clamp-2">
                {item.description}
              </p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: theme?.accent ?? "#a855f7" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
