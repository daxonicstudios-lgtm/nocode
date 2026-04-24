import type { BlockProps } from "@/blocks/types";

export default function Cta099(props: BlockProps) {
  const {
    theme,
    heading = "Simple tools for complex problems.",
    bodyText = "We believe great software should feel invisible. It should just work — quietly, reliably, beautifully.",
    buttonText = "Learn more",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-28 sm:py-40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-thin tracking-tight leading-tight">{heading}</h2>
        <p className="mt-8 text-sm opacity-40 max-w-md mx-auto leading-relaxed">{bodyText}</p>
        <div className="mt-12">
          <a
            href={buttonUrl}
            className="inline-block px-8 py-3 rounded-full text-sm font-medium border"
            style={{ borderColor: theme?.secondary ?? "#d1d5db" }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
