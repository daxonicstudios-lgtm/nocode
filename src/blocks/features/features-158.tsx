import type { BlockProps } from "@/blocks/types";

export default function Features158(props: BlockProps) {
  const {
    theme,
    heading = "Why Us",
    subheading = "Designed with intention",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance", description: "Sub-second load times on any network connection." },
      { title: "Accessibility", description: "WCAG compliant out of the box for every visitor." },
      { title: "Scalability", description: "Handles ten users or ten million without breaking." },
      { title: "Reliability", description: "99.99% uptime backed by our service guarantee." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest opacity-40 mb-2">{subheading}</p>
        <h2 className="text-3xl font-semibold mb-16">{heading}</h2>
        <div className="space-y-10">
          {items.map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme?.primary || "#6366f1" }}>{item.title}</h3>
              <p className="opacity-50 text-xs sm:text-sm max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-14 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
        )}
      </div>
    </section>
  );
}
