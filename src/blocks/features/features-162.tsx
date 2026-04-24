import type { BlockProps } from "@/blocks/types";

export default function Features162(props: BlockProps) {
  const {
    theme,
    heading = "What Sets Us Apart",
    subheading = "Numbers speak louder than words",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Blazing Speed", description: "Optimized infrastructure delivers pages in milliseconds." },
      { title: "Zero Downtime", description: "Rolling deployments ensure your site never goes offline." },
      { title: "Full Ownership", description: "Export your code and data anytime, no lock-in." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="relative rounded-xl p-8 overflow-hidden">
              <span className="absolute top-2 right-4 text-8xl font-black opacity-[0.06] leading-none select-none" style={{ color: theme?.primary || "#6366f1" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold mb-2 relative z-10">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed relative z-10">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
