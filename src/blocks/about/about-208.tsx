import type { BlockProps } from "@/blocks/types";

export default function About208(props: BlockProps) {
  const { theme, heading = "Why Us", bodyText = "We are passionate about making technology work for people, not the other way around. Our team of creators and engineers is dedicated to building tools that simplify the complex world of web development." } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{heading}</h2>
        <p className="mt-6 text-lg opacity-60 leading-relaxed">{bodyText}</p>
        <div className="mt-8 h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: theme?.accent ?? "#6366f1" }} />
      </div>
    </section>
  );
}
