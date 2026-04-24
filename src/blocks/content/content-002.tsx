import type { BlockProps } from "@/blocks/types";

export default function Content002(props: BlockProps) {
  const { theme, heading = "Two columns of thought", bodyText = "The left column establishes the argument. The right column expands on the implications. It's a layout pattern borrowed from newspaper editorials, and it works because it respects how people actually read long-form writing on a screen.", subheading = "It's not just aesthetics. Short line lengths reduce eye fatigue, improve comprehension, and make it easier for readers to come back after a break. This is why print books and well-designed websites both tend to keep columns narrow." } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base opacity-80 leading-relaxed">
          <p>{bodyText}</p>
          <p>{subheading}</p>
        </div>
      </div>
    </section>
  );
}
