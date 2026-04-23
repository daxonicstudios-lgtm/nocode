import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

const defaultItems = [
  { title: "No coding experience needed" },
  { title: "Launch your site in under 5 minutes" },
  { title: "Mobile-optimized out of the box" },
  { title: "Free custom domain included" },
];

export default function Hero026(props: BlockProps) {
  const {
    theme,
    heading = "Why Thousands Choose Our Platform",
    subheading = "Everything you need to build a professional website, all in one place.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = defaultItems,
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

        <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left">
          {items.slice(0, 6).map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                style={{ color: theme?.primary ?? "#22c55e" }}
              />
              <span className="text-base sm:text-lg">{item.title}</span>
            </li>
          ))}
        </ul>

        <a
          href={buttonUrl}
          className="mt-10 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:text-lg"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
