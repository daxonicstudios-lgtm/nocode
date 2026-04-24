import type { BlockProps } from "@/blocks/types";

export default function Features216(props: BlockProps) {
  const {
    theme,
    heading = "Performance Metrics",
    subheading = "Measurable results that speak for themselves",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Page Speed", description: "Average load time across all pages.", value: "92" },
      { title: "Uptime", description: "Service availability over the past 12 months.", value: "99" },
      { title: "Customer Satisfaction", description: "Based on post-interaction surveys.", value: "87" },
      { title: "Code Coverage", description: "Automated test coverage across the platform.", value: "95" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-12 max-w-lg">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const pct = parseInt(item.value || "75", 10);
            return (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-xs opacity-50">{item.description}</p>
                  </div>
                  <span className="font-bold text-lg" style={{ color: primary }}>{pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${primary}15` }}>
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: primary }} />
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
