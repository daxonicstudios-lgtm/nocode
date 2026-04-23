import type { BlockProps } from "@/blocks/types";

export default function Content001(props: BlockProps) {
  const { theme, heading = "A short word on our philosophy", bodyText = "We believe the best tools disappear. You shouldn't have to think about fonts, layouts, or hex codes — unless you want to. We've spent seven years teaching our product to make thoughtful decisions on your behalf, and get out of the way." } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">{heading}</h2>
        <p className="mt-6 text-lg opacity-80 leading-relaxed">{bodyText}</p>
      </div>
    </section>
  );
}
