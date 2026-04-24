import type { BlockProps } from "@/blocks/types";
import { ImageIcon, ArrowUpRight } from "lucide-react";

export default function Cta054(props: BlockProps) {
  const {
    theme,
    heading = "Powerful features, simple interface",
    bodyText = "Everything you need to manage your business online — from payments to analytics to customer management.",
    buttonText = "Explore Features",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1 w-full">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full rounded-3xl" />
          ) : (
            <div className="w-full aspect-square rounded-3xl flex items-center justify-center" style={{ backgroundColor: theme?.muted ?? "#fef3c7" }}>
              <ImageIcon className="w-16 h-16 opacity-20" />
            </div>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">{heading}</h2>
          <p className="mt-4 text-base opacity-70 leading-relaxed">{bodyText}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm"
            style={{ backgroundColor: theme?.primary ?? "#d97706" }}
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
