import type { BlockProps } from "@/blocks/types";

const defaults = [
  { title: "API First", description: "Every feature is accessible via a well-documented REST API." },
  { title: "Webhooks", description: "Get notified instantly when events happen in your workspace." },
  { title: "SSO & SAML", description: "Enterprise-grade single sign-on for your entire organization." },
  { title: "Audit Logs", description: "Full visibility into who did what, when, and where." },
];

export default function Features026(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise Ready",
    subheading = "The features your security and IT teams have been asking for.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">{heading}</h2>
          <p className="text-base opacity-60 max-w-md mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="text-center">
              <span
                className="block text-5xl font-black mb-4"
                style={{ color: theme?.primary ?? "#0ea5e9" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{item.title ?? defaults[i]?.title}</h3>
              <p className="text-sm opacity-50 leading-relaxed font-light">{item.description ?? defaults[i]?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
