import type { BlockProps } from "@/blocks/types";
export default function AnimBackgrounds052(props: BlockProps) {
  const { theme, heading = "Dark animated background", subheading = "Animated background" } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
      </div>
    </section>
  );
}
