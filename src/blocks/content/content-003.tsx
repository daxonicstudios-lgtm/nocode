import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Content003(props: BlockProps) {
  const { theme, heading = "The quiet power of good defaults", bodyText = "Every great product makes a thousand decisions on your behalf before you even open it — from the typeface to the line height to the default colors. Those choices compound into something that just feels right. Getting them right takes time. Getting them wrong is invisible but corrosive." } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
        <p className="mt-6 text-base opacity-80 leading-relaxed">{bodyText}</p>
        <figure className="mt-10 pl-6 border-l-4" style={{ borderColor: theme?.primary ?? "#000" }}>
          <Quote className="w-6 h-6 mb-2 opacity-40" />
          <blockquote className="text-lg italic leading-relaxed">
            Good design is as little design as possible.
          </blockquote>
          <figcaption className="mt-3 text-sm opacity-60">— Dieter Rams</figcaption>
        </figure>
      </div>
    </section>
  );
}
