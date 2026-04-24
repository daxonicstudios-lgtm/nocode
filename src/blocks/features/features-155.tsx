import type { BlockProps } from "@/blocks/types";

export default function Features155(props: BlockProps) {
  const {
    theme,
    heading = "Everything Included",
    subheading = "No hidden costs, no surprise limitations",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unlimited Projects", description: "Create as many websites as you need." },
      { title: "Free SSL Certificates", description: "Every site gets HTTPS automatically." },
      { title: "Custom Domains", description: "Connect your own domain in minutes." },
      { title: "Priority Support", description: "Get help when you need it, fast." },
      { title: "Daily Backups", description: "Your data is always safe and recoverable." },
      { title: "API Access", description: "Integrate with your existing tools seamlessly." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center">{subheading}</p>
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: theme?.primary || "#6366f1" }} />
              <div>
                <span className="font-medium text-sm">{item.title}</span>
                <span className="opacity-40 text-sm"> — {item.description}</span>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
