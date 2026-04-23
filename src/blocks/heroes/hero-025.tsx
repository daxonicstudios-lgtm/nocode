import type { BlockProps } from "@/blocks/types";

export default function Hero025(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Web Design Is Already Here",
    subheading = "By Sarah Okonkwo  |  April 23, 2026",
    bodyText = "A new generation of tools is empowering creators across Africa to build stunning websites without ever touching a line of code. The no-code revolution is not coming \u2014 it has arrived.",
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-6 h-px w-16"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        />

        <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {heading}
        </h1>

        <p className="mt-4 text-sm uppercase tracking-widest opacity-50">
          {subheading}
        </p>

        <div
          className="mx-auto my-6 h-px w-24"
          style={{ backgroundColor: theme?.accent ?? "#d4d4d4" }}
        />

        <p className="mx-auto max-w-xl font-serif text-base leading-relaxed opacity-80 sm:text-lg">
          {bodyText}
        </p>

        <div
          className="mx-auto mt-8 h-px w-16"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        />
      </div>
    </section>
  );
}
