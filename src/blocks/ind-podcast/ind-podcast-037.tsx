import type { BlockProps } from "@/blocks/types";
export default function IndPodcast037(props: BlockProps) {
  const { theme, heading = "Dark podcast section", subheading = "Trusted podcast platform", buttonText = "Get Started" } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <a href="#" className="mt-8 inline-block px-8 py-3 rounded-xl font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</a>
      </div>
    </section>
  );
}
