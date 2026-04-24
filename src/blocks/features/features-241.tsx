import type { BlockProps } from "@/blocks/types";

export default function Features241(props: BlockProps) {
  const {
    theme,
    heading = "The Feature Times",
    subheading = "All the capabilities fit to print",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Editorial Dashboard", description: "A centralized command center where editors manage content workflows, review drafts, and schedule publications with calendar integration." },
      { title: "Syndication Network", description: "Distribute your content across multiple channels simultaneously with one-click syndication to social media, newsletters, and partner sites." },
      { title: "Archive System", description: "Searchable historical records with full-text indexing, metadata tagging, and instant retrieval of any document ever published." },
      { title: "Revenue Engine", description: "Subscription management, advertising placement, and paywall configuration all unified under a single revenue optimization dashboard." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center border-b-2 pb-4 mb-2" style={{ borderColor: theme?.foreground || "#111" }}>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">{heading}</h2>
        </div>
        <div className="text-center border-b pb-2 mb-8" style={{ borderColor: `${primary}40` }}>
          <p className="text-sm italic opacity-60">{subheading}</p>
        </div>
        <div className="columns-1 sm:columns-2 gap-8 space-y-6">
          {items.map((item, i) => (
            <div key={i} className="break-inside-avoid">
              <h3 className="text-lg font-bold mb-1 uppercase tracking-wide" style={{ color: primary }}>{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70" style={{ textAlign: "justify" }}>{item.description}</p>
              {i < items.length - 1 && <div className="mt-4 border-b" style={{ borderColor: `${primary}20` }} />}
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
