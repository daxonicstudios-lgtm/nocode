import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Hero022(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by Over 10,000 Businesses",
    subheading = "Join thousands of companies that rely on our platform to grow their online presence.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    bodyText = "4.9 out of 5 based on 2,847 reviews",
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

        <div className="mt-8 flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill={theme?.accent ?? "#facc15"}
              style={{ color: theme?.accent ?? "#facc15" }}
            />
          ))}
        </div>
        <p className="mt-2 text-sm opacity-60">{bodyText}</p>

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
