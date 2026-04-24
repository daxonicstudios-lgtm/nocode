import type { BlockProps } from "@/blocks/types";

export default function Cta289(props: BlockProps) {
  const {
    theme,
    heading = "Less Noise. More Signal.",
    subheading = "Cut through the clutter with tools designed for focus.",
    buttonText = "Start Free",
    buttonUrl = "#",
    secondaryButtonText = "Read the Manifesto",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-24 sm:py-32" style={{ backgroundColor: theme?.background ?? "#f5f0eb", color: theme?.foreground ?? "#292524" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1" style={{ backgroundColor: theme?.foreground ?? "#292524", opacity: 0.15 }} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] opacity-40">Manifesto</span>
          <div className="h-px flex-1" style={{ backgroundColor: theme?.foreground ?? "#292524", opacity: 0.15 }} />
        </div>
        <h2 className="text-4xl sm:text-6xl font-serif font-black text-center leading-tight">{heading}</h2>
        <p className="mt-6 text-center text-lg font-light opacity-60 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="px-8 py-4 rounded-none text-white font-semibold text-sm text-center" style={{ backgroundColor: theme?.primary ?? "#292524" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-4 rounded-none font-semibold text-sm text-center border-2" style={{ borderColor: theme?.foreground ?? "#292524" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
