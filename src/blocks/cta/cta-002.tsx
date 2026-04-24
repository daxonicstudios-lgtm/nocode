import type { BlockProps } from "@/blocks/types";

export default function Cta002(props: BlockProps) {
  const {
    theme,
    heading = "Take your business to the next level",
    subheading = "Join thousands of companies that trust our platform every day.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-5 text-base opacity-60 leading-relaxed">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={buttonUrl}
            className="px-7 py-3.5 rounded-lg text-white font-medium text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="px-7 py-3.5 rounded-lg font-medium text-sm border hover:opacity-80 transition-opacity"
            style={{ borderColor: theme?.secondary ?? "#d1d5db" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
