import type { BlockProps } from "@/blocks/types";
import { Camera, Aperture, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Golden Hour Photography Tips", description: "Mastering the warm, soft light that makes every subject look stunning and alive.", label: "Lighting" },
  { title: "Street Photography Ethics", description: "Navigating consent, privacy, and respect in candid photography around the world.", label: "Street" },
  { title: "Post-Processing Workflows", description: "A non-destructive editing pipeline from RAW capture to polished final export.", label: "Editing" },
];

export default function Blog149(props: BlockProps) {
  const {
    theme,
    heading = "Through the Lens",
    subheading = "Photography stories, tips, and inspiration",
    buttonText = "View article",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Camera className="w-6 h-6" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block rounded-xl overflow-hidden">
              <div
                className="aspect-[4/3] relative"
                style={{ backgroundColor: theme?.secondary ?? "#292524" }}
              >
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                  <Aperture className="w-3 h-3" />
                  {String(item.label)}
                </div>
              </div>
              <div className="py-4">
                <h3 className="text-lg font-bold group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-40 line-clamp-2">
                  {item.description}
                </p>
                <span
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: theme?.accent ?? "#f59e0b" }}
                >
                  {buttonText} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
