import type { BlockProps } from "@/blocks/types";

export default function Cta121(props: BlockProps) {
  const {
    theme,
    heading = "STOP WASTING TIME.",
    subheading = "Build faster. Ship sooner. Win more.",
    buttonText = "START NOW",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#000", color: theme?.foreground || "#fff" }}>
      <div className="max-w-2xl mx-auto border-4 border-current p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">{heading}</h2>
        <p className="text-lg md:text-xl font-mono mb-8 opacity-80">{subheading}</p>
        <a href={buttonUrl} className="inline-block px-8 py-4 border-4 font-black uppercase tracking-widest text-sm hover:invert transition" style={{ borderColor: theme?.primary || "#fff", color: theme?.primary || "#fff" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
