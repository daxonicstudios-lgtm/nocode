import type { BlockProps } from "@/blocks/types";

export default function Cta028(props: BlockProps) {
  const {
    theme,
    heading = "Free plan available",
    subheading = "No credit card required to start building.",
    buttonText = "Start Building",
    buttonUrl = "#",
    secondaryButtonText = "Compare Plans",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-3 border-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">{heading}</span>
          <span className="text-xs opacity-50 hidden sm:inline">{subheading}</span>
        </div>
        <div className="flex gap-2">
          <a href={buttonUrl} className="px-4 py-1.5 rounded-md text-white font-semibold text-xs" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-4 py-1.5 rounded-md font-medium text-xs border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
