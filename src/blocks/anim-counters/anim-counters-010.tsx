import type { BlockProps } from "@/blocks/types";
export default function AnimCounters010(props: BlockProps) {
  const { theme, heading = "Animated counter", subheading = "Animated counter", buttonText = "Get Started", buttonUrl = "#" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 rounded-xl font-semibold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
      </div>
    </section>
  );
}
