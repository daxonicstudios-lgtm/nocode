import type { BlockProps } from "@/blocks/types";

export default function Cta017(props: BlockProps) {
  const {
    theme,
    heading = "Ship faster, build better",
    subheading = "Everything you need to go from idea to production in record time.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Talk to Sales",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-28"
      style={{
        background: `linear-gradient(180deg, ${theme?.primary ?? "#0ea5e9"} 0%, ${theme?.accent ?? "#2563eb"} 100%)`,
        color: "#fff",
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-4 opacity-80">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="px-7 py-3.5 rounded-lg bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#0ea5e9" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-7 py-3.5 rounded-lg font-medium text-sm border border-white/30 text-white hover:bg-white/10 transition-colors">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
