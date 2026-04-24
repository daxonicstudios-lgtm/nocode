import type { BlockProps } from "@/blocks/types";

export default function Content067(props: BlockProps) {
  const { theme, heading = "Our Mission", bodyText = "In a world where digital presence matters more than ever, we are building the tools that make it possible for anyone to create a professional website. Our AI-powered platform handles the complexity so you can focus on what matters." } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{heading}</h2>
        <p className="mt-6 text-lg opacity-60 leading-relaxed">{bodyText}</p>
      </div>
    </section>
  );
}
