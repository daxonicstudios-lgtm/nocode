import type { BlockProps } from "@/blocks/types";

const statusColors = ["#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444"];

export default function Features110(props: BlockProps) {
  const {
    theme,
    heading = "Deployment Pipeline",
    subheading = "Track progress across every stage",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Planning Complete", description: "Requirements gathered and roadmap finalized.", label: "done" },
      { title: "Design Approved", description: "UI mockups reviewed and signed off by stakeholders.", label: "done" },
      { title: "Development", description: "Core features are being built by the engineering team.", label: "active" },
      { title: "QA Testing", description: "Automated and manual tests to ensure reliability.", label: "pending" },
      { title: "Production Deploy", description: "Rolling deployment to all regions with zero downtime.", label: "pending" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="relative ml-4">
          <div className="absolute left-3 top-0 bottom-0 w-px opacity-30" style={{ backgroundColor: theme?.foreground || "#333" }} />
          {items.map((item, i) => {
            const dotColor = item.label === "done" ? "#22c55e" : item.label === "active" ? (theme?.primary || "#3b82f6") : statusColors[i % statusColors.length];
            return (
              <div key={i} className="relative pl-10 mb-8">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4" style={{ borderColor: dotColor, backgroundColor: item.label === "done" ? dotColor : "transparent" }} />
                <h3 className="text-lg font-semibold mb-0.5">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                {item.label && (
                  <span className="inline-block mt-1 text-xs font-medium opacity-70 uppercase tracking-wide">{item.label}</span>
                )}
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
