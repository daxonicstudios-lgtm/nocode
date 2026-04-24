import type { BlockProps } from "@/blocks/types";

export default function Cta119(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "Three steps to your perfect website.",
    buttonText = "Try It Now",
    buttonUrl = "#",
    items = [
      { title: "Describe", description: "Tell us what you need in plain language." },
      { title: "Generate", description: "Our AI builds your site instantly." },
      { title: "Publish", description: "Review, tweak, and go live." },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{heading}</h2>
        <p className="opacity-70 mb-10">{subheading}</p>
        <div className="space-y-6 mb-10">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
