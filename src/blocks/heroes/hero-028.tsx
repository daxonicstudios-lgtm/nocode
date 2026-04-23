import type { BlockProps } from "@/blocks/types";

export default function Hero028(props: BlockProps) {
  const {
    theme,
    heading = "Launch Your Professional Website Today",
    subheading = "Everything included. No hidden fees. Cancel anytime.",
    buttonText = "Get Started Now",
    buttonUrl = "#",
    bodyText = "$9",
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

        <div className="mt-8 flex items-baseline justify-center gap-1">
          <span
            className="text-5xl font-extrabold sm:text-7xl"
            style={{ color: theme?.primary ?? "#6366f1" }}
          >
            {bodyText}
          </span>
          <span className="text-lg opacity-60">/month</span>
        </div>

        <a
          href={buttonUrl}
          className="mt-8 inline-block rounded-lg px-10 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:text-lg"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        >
          {buttonText}
        </a>

        <p className="mt-3 text-xs opacity-50">
          14-day free trial included. No credit card required.
        </p>
      </div>
    </section>
  );
}
