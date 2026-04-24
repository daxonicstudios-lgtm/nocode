import type { BlockProps } from "@/blocks/types";

export default function Features004(props: BlockProps) {
  const {
    theme,
    heading = "How It Works",
    subheading = "Three simple steps to launch your next project",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Describe Your Vision", description: "Tell us what you want in plain language. No technical jargon required." },
      { title: "AI Builds Your Site", description: "Our engine assembles a polished website from proven, tested components." },
      { title: "Publish Instantly", description: "Go live with one tap. Custom domain, SSL, and analytics included." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="relative">
              <span className="text-5xl font-black opacity-10 absolute -top-2 -left-1" style={{ color: theme?.primary || "#6366f1" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-10">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-sm font-medium border-2 transition-colors" style={{ borderColor: theme?.primary || "#6366f1", color: theme?.primary || "#6366f1" }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
