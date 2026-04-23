import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Hero030(props: BlockProps) {
  const {
    theme,
    heading = "Empowering Creators Across Africa",
    subheading = "See why businesses love building with us.",
    bodyText = "I built my entire e-commerce site in one afternoon using just my phone. This platform completely changed my business.",
    buttonText = "Start Building",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-70 sm:text-lg">
          {subheading}
        </p>

        <div
          className="mx-auto mt-10 max-w-lg rounded-2xl p-6 sm:p-8"
          style={{
            backgroundColor: theme?.primary
              ? `${theme.primary}0d`
              : "#6366f10d",
          }}
        >
          <Quote
            className="mx-auto mb-4 h-8 w-8"
            style={{ color: theme?.primary ?? "#6366f1" }}
          />
          <blockquote className="text-base italic leading-relaxed opacity-90 sm:text-lg">
            &ldquo;{bodyText}&rdquo;
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
            >
              AO
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Amina Osei</p>
              <p className="text-xs opacity-60">Founder, BrightShop Lagos</p>
            </div>
          </div>
        </div>

        <a
          href={buttonUrl}
          className="mt-8 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:text-lg"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
