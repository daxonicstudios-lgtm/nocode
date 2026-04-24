import type { BlockProps } from "@/blocks/types";

export default function Features157(props: BlockProps) {
  const {
    theme,
    heading = "Built for Builders",
    subheading = "Tools that make creating effortless",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Drag-and-Drop Editor", description: "Build layouts visually without writing code." },
      { title: "Component Library", description: "Hundreds of pre-built blocks ready to use." },
      { title: "One-Click Publish", description: "Go live instantly with automatic deployment." },
      { title: "SEO Optimization", description: "Built-in tools to rank higher in search results." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">{heading}</h2>
        <p className="opacity-50 mb-14">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="group cursor-default">
              <h3 className="text-base font-medium mb-1 inline-block border-b-2 border-transparent transition-colors duration-200" style={{ borderColor: "transparent" }}>
                <span className="group-hover:border-b-2 pb-0.5" style={{ borderColor: theme?.primary || "#6366f1" }}>
                  {item.title}
                </span>
              </h3>
              <p className="opacity-50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
        )}
      </div>
    </section>
  );
}
