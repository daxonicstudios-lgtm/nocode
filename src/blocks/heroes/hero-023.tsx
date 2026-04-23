import type { BlockProps } from "@/blocks/types";

export default function Hero023(props: BlockProps) {
  const {
    theme,
    heading = "Build Your Website Without Writing Code",
    subheading = "Describe what you want, and our AI assembles it in seconds. No technical skills required.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
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

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={buttonUrl}
            className="w-full rounded-lg px-8 py-3 text-center text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:text-lg"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="w-full rounded-lg border-2 px-8 py-3 text-center text-base font-semibold transition-opacity hover:opacity-80 sm:w-auto sm:text-lg"
            style={{
              borderColor: theme?.primary ?? "#6366f1",
              color: theme?.primary ?? "#6366f1",
              backgroundColor: "transparent",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
