import type { BlockProps } from "@/blocks/types";

export default function Features237(props: BlockProps) {
  const {
    theme,
    heading = "Loading Something Great",
    subheading = "A shimmer effect that hints at the powerful features beneath",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Data Pipeline", description: "Ingest, transform, and deliver data at scale." },
      { title: "Visual Reports", description: "Beautiful charts that update in real time." },
      { title: "Task Automation", description: "Set triggers and let the system handle the rest." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes feat237shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .feat237-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, transparent 30%, ${primary}10 50%, transparent 70%);
          background-size: 200% 100%;
          animation: feat237shimmer 3s infinite;
          pointer-events: none;
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="feat237-card relative rounded-2xl border p-8 text-center overflow-hidden" style={{ borderColor: `${primary}20` }}>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4" style={{ backgroundColor: `${primary}15` }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
