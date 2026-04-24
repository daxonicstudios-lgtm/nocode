import type { BlockProps } from "@/blocks/types";

export default function Features154(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "A streamlined process from start to finish",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Create Your Account", description: "Sign up in under a minute with just your email." },
      { title: "Choose a Template", description: "Pick from hundreds of professionally designed layouts." },
      { title: "Customize Everything", description: "Drag, drop, and tweak until it feels right." },
      { title: "Go Live Instantly", description: "Publish with a single click and share your link." },
      { title: "Track Your Growth", description: "Monitor performance with built-in analytics." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">{heading}</h2>
        <p className="opacity-50 mb-14">{subheading}</p>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="pl-10 relative">
              <span className="absolute left-0 top-0 text-xs font-mono opacity-30" style={{ color: theme?.primary || "#6366f1" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-medium mb-1">{item.title}</h3>
              <p className="opacity-50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 pl-10 text-sm font-medium" style={{ color: theme?.primary || "#6366f1" }}>{buttonText}</a>
        )}
      </div>
    </section>
  );
}
