import type { BlockProps } from "@/blocks/types";

export default function Cta123(props: BlockProps) {
  const {
    theme,
    heading = "BUILD.",
    subheading = "LAUNCH. GROW.",
    buttonText = "LET'S GO",
    buttonUrl = "#",
    secondaryButtonText = "READ MORE",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }}>
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">{heading}</h2>
        <p className="text-3xl md:text-5xl font-black uppercase leading-none mb-8 opacity-50">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="px-8 py-4 border-4 border-current font-black uppercase tracking-wider text-sm hover:bg-black hover:text-white transition">
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-4 font-black uppercase tracking-wider text-sm underline underline-offset-4 decoration-4">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
