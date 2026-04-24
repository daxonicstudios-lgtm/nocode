import type { BlockProps } from "@/blocks/types";

export default function Cta097(props: BlockProps) {
  const {
    theme,
    heading = "Less noise. More results.",
    subheading = "We built the tool we always wanted — focused, fast, and free of clutter.",
    buttonText = "Try it today",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-28 sm:py-36">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extralight leading-snug">{heading}</h2>
        <p className="mt-6 text-sm opacity-50 leading-relaxed">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-10 px-6 py-2.5 text-sm font-medium border-b-2"
          style={{ borderColor: theme?.primary ?? "#000" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
