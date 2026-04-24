import type { BlockProps } from "@/blocks/types";

export default function Features115(props: BlockProps) {
  const {
    theme,
    heading = "Performance Comparison",
    subheading = "See where we outperform the rest",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Page Speed", value: "95", label: "62" },
      { title: "Uptime", value: "99.9", label: "98.5" },
      { title: "Customer Satisfaction", value: "92", label: "74" },
      { title: "Feature Completeness", value: "88", label: "65" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex justify-end gap-6 mb-6 text-sm font-medium">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme?.primary || "#6366f1" }} /> Ours</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: theme?.foreground || "#333" }} /> Others</span>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => {
            const ours = Number(item.value) || 0;
            const theirs = Number(item.label) || 0;
            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{item.title}</span>
                  <span className="font-bold" style={{ color: theme?.primary || "#6366f1" }}>{ours}%</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden mb-1" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
                  <div className="h-full rounded-full" style={{ width: `${ours}%`, backgroundColor: theme?.primary || "#6366f1" }} />
                </div>
                <div className="h-2 rounded-full overflow-hidden opacity-40" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
                  <div className="h-full rounded-full" style={{ width: `${theirs}%`, backgroundColor: theme?.foreground || "#333" }} />
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
