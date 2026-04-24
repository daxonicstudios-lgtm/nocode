import type { BlockProps } from "@/blocks/types";

export default function Cta125(props: BlockProps) {
  const {
    theme,
    heading = "RAW POWER",
    subheading = "FOR REAL BUILDERS",
    bodyText = "No fluff. No gimmicks. Just tools that work.",
    buttonText = "GET ACCESS",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#18181b", color: theme?.foreground || "#fafafa" }}>
      <div className="max-w-2xl mx-auto">
        <div className="border-l-8 pl-6 mb-8" style={{ borderColor: theme?.primary || "#facc15" }}>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">{heading}</h2>
          <p className="text-xl md:text-2xl font-black uppercase opacity-50">{subheading}</p>
        </div>
        <p className="font-mono text-sm md:text-base opacity-70 mb-8 max-w-md">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-4 font-black uppercase tracking-widest text-sm border-4 hover:opacity-80 transition" style={{ borderColor: theme?.primary || "#facc15", color: theme?.primary || "#facc15" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
