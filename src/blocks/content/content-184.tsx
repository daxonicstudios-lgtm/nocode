import type { BlockProps } from "@/blocks/types";

export default function Content184(props: BlockProps) {
  const { theme, heading = "Our Story", bodyText = "We believe in building tools that empower everyone to create beautiful websites. Our platform combines the power of AI with an intuitive editor, making web design accessible to people who have never written a line of code." } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <div className="mt-6 text-lg leading-relaxed opacity-70 space-y-4">
          <p>{bodyText}</p>
        </div>
      </div>
    </section>
  );
}
