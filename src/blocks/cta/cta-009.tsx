import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta009(props: BlockProps) {
  const {
    theme,
    heading = "Scale your business confidently",
    bodyText = "Our infrastructure handles millions of requests daily so you never have to worry about downtime or performance bottlenecks.",
    buttonText = "Explore Plans",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-5xl font-black leading-tight">{heading}</h2>
          <p className="mt-5 text-base opacity-50 leading-relaxed max-w-lg">{bodyText}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-bold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#dc2626" }}>
            {buttonText} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="md:col-span-2 rounded-3xl aspect-[4/3] overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#fef2f2" }}>
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center opacity-20 text-sm">Visual</div>
          )}
        </div>
      </div>
    </section>
  );
}
