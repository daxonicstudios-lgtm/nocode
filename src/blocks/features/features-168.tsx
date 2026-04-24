import type { BlockProps } from "@/blocks/types";

export default function Features168(props: BlockProps) {
  const {
    theme,
    heading = "Next-Level Features",
    subheading = "Innovation meets simplicity",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Predictive Analytics", description: "AI forecasts trends so you can act before competitors." },
      { title: "Smart Automation", description: "Set rules once and let the platform handle the rest." },
      { title: "Dynamic Personalization", description: "Show different content to different audiences automatically." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";
  const accent = theme?.accent || "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center p-6">
              <h3 className="text-2xl font-black mb-3 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${primary}, ${accent})`, WebkitBackgroundClip: "text" }}>
                {item.title}
              </h3>
              <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundImage: `linear-gradient(135deg, ${primary}, ${accent})` }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
