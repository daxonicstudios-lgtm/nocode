import type { BlockProps } from "@/blocks/types";

export default function Cta005(props: BlockProps) {
  const {
    theme,
    heading = "Start building today",
    subheading = "Free forever for individuals. Upgrade as you grow.",
    buttonText = "Create Your Account",
    buttonUrl = "#",
    secondaryButtonText = "View Pricing",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-32">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl font-black">{heading}</h2>
        <p className="mt-4 text-sm opacity-50">{subheading}</p>
        <div className="mt-8 space-y-3">
          <a
            href={buttonUrl}
            className="block w-full py-4 rounded-xl text-white font-bold text-sm text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="block w-full py-4 rounded-xl font-medium text-sm text-center border hover:opacity-70 transition-opacity"
            style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
