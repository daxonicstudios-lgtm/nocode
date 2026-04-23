import type { BlockProps } from "@/blocks/types";

export default function Hero027(props: BlockProps) {
  const {
    theme,
    heading = "Build Websites That Convert",
    subheading = "Our AI-powered builder helps you create high-performing sites in minutes, not months.",
    buttonText = "Start Building",
    buttonUrl = "#",
    bodyText = "NEW",
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
        >
          {bodyText}
        </span>

        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base opacity-70 sm:text-lg">
          {subheading}
        </p>

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
