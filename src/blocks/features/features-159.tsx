import type { BlockProps } from "@/blocks/types";

export default function Features159(props: BlockProps) {
  const {
    theme,
    heading = "Features That Matter",
    subheading = "Focused on what drives results",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Forms", description: "Collect leads with customizable forms and instant email notifications." },
      { title: "A/B Testing", description: "Test different versions of your pages to maximize conversions." },
      { title: "Integrations", description: "Connect with Stripe, Mailchimp, Google Analytics, and more." },
      { title: "Multi-Language", description: "Reach a global audience with built-in translation support." },
      { title: "White Label", description: "Remove all branding and make it fully yours." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-16 text-center">{subheading}</p>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className={i % 2 === 0 ? "text-left" : "text-right"}>
              <h3 className="text-base font-medium mb-1">{item.title}</h3>
              <p className="opacity-50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-14">
            <a href={buttonUrl} className="text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
